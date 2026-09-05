import http from 'node:http';

const PORT = Number(process.env.PORT || 3000);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-luna';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const MAX_BODY = 16 * 1024 * 1024;

const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['summary','confidence','observations','possible_causes','check_next','corrective_actions','stop_and_escalate_if','disclaimer'],
  properties: {
    summary: {type:'string'},
    confidence: {type:'string', enum:['low','medium','high']},
    observations: {type:'array', items:{type:'string'}, maxItems:8},
    possible_causes: {type:'array', items:{type:'string'}, maxItems:8},
    check_next: {type:'array', items:{type:'string'}, maxItems:10},
    corrective_actions: {type:'array', items:{type:'string'}, maxItems:10},
    stop_and_escalate_if: {type:'array', items:{type:'string'}, maxItems:8},
    disclaimer: {type:'string'}
  }
};

const instructions = `You are the visual troubleshooting assistant inside Water Treatment Doctor, a field support app for water and wastewater treatment plants. Analyze only what is supported by the supplied images plus the operator's plant type, selected symptom, and note. Do not invent measurements. Distinguish observations from hypotheses. Give practical checks before corrective action. For chemical dosing, electrical work, pressure equipment, rotating equipment, confined spaces, chlorine/ozone, acids/alkalis, hot surfaces, steam, high pressure, or hazardous exposure, emphasize site SOP, SDS, PPE, LOTO, permits, OEM limits, and competent personnel. Never advise bypassing interlocks or safety devices. If the visual evidence is insufficient, say so and lower confidence. Keep responses concise, bilingual where useful (English / Hindi), and suitable for a plant operator or engineer.`;

function cors(res){
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}
function send(res,status,obj){
  cors(res);
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8'});
  res.end(JSON.stringify(obj));
}
function readBody(req){
  return new Promise((resolve,reject)=>{
    let size=0, chunks=[];
    req.on('data',c=>{size+=c.length;if(size>MAX_BODY){reject(new Error('Request too large'));req.destroy();return;}chunks.push(c)});
    req.on('end',()=>resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error',reject);
  });
}
function outputText(data){
  if(typeof data?.output_text==='string' && data.output_text.trim()) return data.output_text.trim();
  const parts=[];
  for(const item of data?.output||[]){
    if(item?.type!=='message') continue;
    for(const c of item?.content||[]){
      if(c?.type==='output_text' && typeof c.text==='string') parts.push(c.text);
    }
  }
  return parts.join('\n').trim();
}
function parseJsonText(text){
  const cleaned=String(text||'').trim().replace(/^```json\s*/i,'').replace(/^```\s*/,'').replace(/```$/,'').trim();
  return JSON.parse(cleaned);
}
function normalize(d){
  const arr=k=>Array.isArray(d?.[k])?d[k].map(x=>String(x)).filter(Boolean).slice(0,10):[];
  return {
    summary:String(d?.summary||'AI response received; verify with site readings.'),
    confidence:['low','medium','high'].includes(d?.confidence)?d.confidence:'low',
    observations:arr('observations'),
    possible_causes:arr('possible_causes'),
    check_next:arr('check_next'),
    corrective_actions:arr('corrective_actions'),
    stop_and_escalate_if:arr('stop_and_escalate_if'),
    disclaimer:String(d?.disclaimer||'Verify with plant readings, site SOP, SDS, LOTO, permits and OEM limits before action.')
  };
}

const server=http.createServer(async(req,res)=>{
  if(req.method==='OPTIONS'){cors(res);res.writeHead(204);return res.end();}
  if(req.method==='GET' && req.url==='/api/health'){
    return send(res,200,{ok:true,service:'Water Treatment Doctor AI Backend',model:OPENAI_MODEL,key_configured:Boolean(OPENAI_API_KEY)});
  }
  if(req.method!=='POST' || req.url!=='/api/analyze') return send(res,404,{error:'Not found'});
  if(!OPENAI_API_KEY) return send(res,503,{error:'OPENAI_API_KEY is not configured on the server.'});

  try{
    const raw=await readBody(req);
    const body=JSON.parse(raw||'{}');
    const plant=String(body.plant||'Unknown plant').slice(0,80);
    const symptom=String(body.symptom||'Not specified').slice(0,160);
    const note=String(body.operator_note||'').slice(0,2000);
    const images=Array.isArray(body.images)?body.images.filter(x=>typeof x==='string' && x.startsWith('data:image/')).slice(0,4):[];
    if(!images.length) return send(res,400,{error:'No valid image/frame supplied.'});

    const content=[{
      type:'input_text',
      text:`Plant: ${plant}\nSelected symptom: ${symptom}\nOperator note: ${note||'None'}\nMedia mode: ${String(body.media_type||'image')}\nAnalyze the supplied visual evidence and return the required structured assessment.`
    }, ...images.map(image_url=>({type:'input_image',image_url,detail:'high'}))];

    const apiResp=await fetch('https://api.openai.com/v1/responses',{
      method:'POST',
      headers:{'Authorization':`Bearer ${OPENAI_API_KEY}`,'Content-Type':'application/json'},
      body:JSON.stringify({
        model:OPENAI_MODEL,
        instructions,
        input:[{role:'user',content}],
        text:{format:{type:'json_schema',name:'water_treatment_visual_assessment',strict:true,schema}},
        max_output_tokens:1800
      })
    });
    const data=await apiResp.json().catch(()=>({}));
    if(!apiResp.ok){
      const msg=data?.error?.message || `OpenAI API error ${apiResp.status}`;
      return send(res,502,{error:msg});
    }
    const text=outputText(data);
    let parsed;
    try{ parsed=parseJsonText(text); }
    catch{ parsed={summary:text||'No textual analysis returned.',confidence:'low',observations:[],possible_causes:[],check_next:[],corrective_actions:[],stop_and_escalate_if:[],disclaimer:'Verify with plant readings and site procedures before action.'}; }
    return send(res,200,normalize(parsed));
  }catch(err){
    return send(res,500,{error:err?.message||String(err)});
  }
});

server.listen(PORT,()=>console.log(`Water Treatment Doctor AI backend listening on ${PORT}, model=${OPENAI_MODEL}`));
