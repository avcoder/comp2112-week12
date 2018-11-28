try {
  importScripts('events.js');
} catch (e) {
  console.log(e);
}

self.addEventListener('fetch', (event) => {
  const body = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>First Service Worker</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
    <h1>URL is ${event.request.url}</h1>
    <ul>
        <li>cache: ${event.request.cache}</li>
        <li>credential: ${event.request.credential}</li>
        <li>destination: ${event.request.destination}</li>
        <li>method: ${event.request.method}</li>
        <li>referrer: ${event.request.referrer}</li>
    </ul>
    </body></html>
    `;
  const response = new Response(body, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-type': 'text/html'
    }
  });
  event.respondWith(response);
});
