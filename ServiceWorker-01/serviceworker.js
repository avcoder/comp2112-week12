console.log('We are a service worker');

importScripts('events.js');

// above importScripts method is synchronouc
console.log('if you see this, then events.js above was loaded since importScripts is synchronous');
