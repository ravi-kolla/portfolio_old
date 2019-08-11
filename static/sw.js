importScripts('/static/sw-toolbox.js');

const spCaches = {
	'static':'static-v2',
	'dynamic':'dynamic-v2',
	'fonts':'google-fonts-v2'
};
self.addEventListener("install", function(event) {
	self.skipWaiting()
	event.waitUntil(
		caches.open(spCaches.static)
		.then(function(cache){
			return cache.addAll(['/']);
		}));
});

self.addEventListener("activate", function(event){
	event.waitUntil(
		caches.keys()
		.then(function (keys) {
			return Promise.all(keys.filter(function(key){
				return !Object.values(spCaches).includes(key);
			}).map(function (key) {
				return caches.delete(key);
			}));
		}));
});
toolbox.router.get('/static/*',toolbox.cacheFirst, {
	cache: {
		name: spCaches.static,
		maxAgeSeconds : 60*60*24*365
	}
});
toolbox.router.get('/*',toolbox.networkFirst, {
	cache: {
		name: spCaches.dynamic,
		maxEntries : 100
	}
});
toolbox.router.get('/*', toolbox.fastest, {
    origin: /https:\/\/fonts.(googleapis|gstatic).com/,
    cache: {
        name:spCaches.fonts,
        maxEntries: 30
    }
});