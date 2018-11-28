# Service workers

## listening for fetch events

```js
try {
  importScripts("events.js");
} catch (e) {
  console.log(e);
}

self.addEventListener("fetch", event => {
  console.log(`Trying to GET somewhere? ${event.request.url}`);
});
```

## responding with text

```js
self.addEventListener("fetch", event => {
  const response = new Response(
    `Trying to GET somewhere? ${event.request.url}`
  );
  event.respondWith(response);
});
```

## responding with HTML

```js
self.addEventListener("fetch", event => {
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
        <h1>Hello world</h1>
        </body>
    </html>
    `;
  const response = new Response(body, {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-type": "text/html"
    }
  });
  event.respondWith(response);
});
```
