const cacheName = 'cache'
self.addEventListener('fetch', e => {
  console.log('event', e)
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        if (response) {
          return response
        }
        return fetch(e.request).then(response => {
          caches.open(cacheName).then(cache => {
            cache.put(e.request, response)
          })
          return response
        })
      })
  )

})
