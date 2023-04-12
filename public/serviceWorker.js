const cacheName = "contest-logger-store";

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll([
				//fixme: This should not have to be hard coded and will break as soon as we add new files
				"/",
				"/index.html",
				"/manifest.json",
				"/js/commons.min.js",
				"/js/theme.switch.js",
				"/js/modal.js",
				"/js/main.js",
				"/css/pico.min.css",
				"/css/horizontal.css",
				"/css/pico.min.css.map",
				"/css/style.css",
				"/css/pico.css",
				"/css/pico.css.map",
				"/css/pico.docs.min.css",
				"/icons/favicon.ico",
				"/icons/favicon-16x16.png",
				"/icons/favicon-32x32.png",
				"/icons/android-chrome-512x512.png",
				"/icons/android-chrome-192x192.png",
				"/icons/apple-touch-icon.png"
			]);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.open(cacheName)
			.then((cache) => cache.match(event.request, { ignoreSearch: true }))
			.then((response) => {
				return response || fetch(event.request);
			})
	);
});
