const staticCacheName = "PWA";

self.addEventListener("install", e => {
  console.log("Installerar");
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "https://jsonplaceholder.typicode.com/posts"
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
    caches.match(e.request).then(cacheResponse => {
      const networkFetch = fetch(e.request)
        .then(fetchResponse => {

        })
        .catch()

      return cacheResponse || fetch(e.request);
    })
  );
})
