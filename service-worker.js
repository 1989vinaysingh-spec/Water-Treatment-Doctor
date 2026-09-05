const CACHE='wtd-v18-4-4-r2';
const ASSETS=[
  './','./index.html','./styles.css','./complete-bilingual.js','./bilingual.js',
  './manifest.webmanifest','./logo.jpg','./catalogue-v18-4-4.jpg','./icon-192.png','./icon-512.png',
  './privacy-policy.html',
  './drawings/stp.png','./drawings/etp.png','./drawings/cetp.png','./drawings/ctp.png',
  './drawings/ro.png','./drawings/wtp.png','./drawings/wsp.png','./drawings/zld.png',
  './drawings/uf.png','./drawings/nf.png','./drawings/soft.png','./drawings/dm.png',
  './drawings/edi.png','./drawings/mbbr.png','./drawings/sbr.png','./drawings/mbr.png',
  './drawings/asp.png','./drawings/mee.png','./drawings/atfd.png','./drawings/cooling.png',
  './drawings/boiler.png','./drawings/desal.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));
});
