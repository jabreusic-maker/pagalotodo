const CACHE_NAME = "pagalo-cache-v1";
const ASSETS = [
  "/", "/index.html", "/manifest.webmanifest",
  "/icons/icon-192.png","/icons/icon-512.png",
  "/src/main.jsx","/src/App.jsx"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
      return resp;
    }))
  );
});
