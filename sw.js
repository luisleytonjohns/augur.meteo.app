/* AUGUR · sw.js · guarda la interfaz para que abra rápido; los datos siempre se piden al servidor */
const CACHE = 'augur-v7';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest', './icono-192.png', './icono-512.png', './favicon-32.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return; // datos, mapas y fuentes van directo a la red
  // Primero la red, para tener siempre la última versión; si no hay conexión, la copia guardada
  e.respondWith(fetch(e.request).then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
