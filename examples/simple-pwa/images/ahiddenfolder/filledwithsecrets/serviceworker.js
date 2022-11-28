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

self.addEventListener("fetch", e => {
  console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
})

// Lägg till följande i index.html
/*

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    registerServiceWorker();
  }
});

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/serviceworker.js');
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.');
    }
  }
}

*/