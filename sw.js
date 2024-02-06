self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Add conditions to identify old caches to be deleted
                    // For example, you might prefix your cache names with a version number
                    // and delete caches that don't match the current version
                    return cacheName.startsWith('propart') && cacheName !== 'propart-v1';
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
