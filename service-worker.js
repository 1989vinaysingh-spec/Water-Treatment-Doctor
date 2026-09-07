const CACHE='wtd-v18.5.5-build22-9-water-journey-final';
const CORE=[
  './styles.css','./complete-bilingual.js','./bilingual.js','./build22-fix.js','./build22-final-authoritative.css','./build22-final-authoritative.js',
  './manifest.webmanifest','./water-journey.svg','./logo.jpg','./icon-192.png','./icon-512.png','./privacy-policy.html',
  './drawings/stp.png','./drawings/etp.png','./drawings/cetp.png','./drawings/ctp.png','./drawings/ro.png','./drawings/wtp.png','./drawings/wsp.png','./drawings/zld.png',
  './drawings/uf.png','./drawings/nf.png','./drawings/soft.png','./drawings/dm.png','./drawings/edi.png','./drawings/mbbr.png','./drawings/sbr.png','./drawings/mbr.png',
  './drawings/asp.png','./drawings/mee.png','./drawings/atfd.png','./drawings/cooling.png','./drawings/boiler.png','./drawings/desal.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  // HTML and final control JS/CSS are network-first so an older cached UI cannot override a fresh build.
  if(e.request.mode==='navigate'||/index\.html$/.test(url.pathname)||/build22-final-authoritative\.(js|css)$/.test(url.pathname)){
    e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request).then(x=>x||caches.match('./index.html'))));return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;})));
});
