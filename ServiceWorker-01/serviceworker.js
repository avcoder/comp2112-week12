console.log('We are a service worker');

// listen to events via self
self.addEventListener('install', (event) => {
  console.log('Install event just happened');
});

self.addEventListener('activate', (event) => {
  console.log('Activate event just happened');
});
