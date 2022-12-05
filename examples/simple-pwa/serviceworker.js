const staticCacheName = "PWA";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
      ]);
    })
  );
})

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.open("PWA")
    .then(cache => {
      return cache.add("/important.json")
    })
  )
})

self.addEventListener("fetch", e => {
  console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
})
