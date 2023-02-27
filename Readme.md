# Source code for Montetalks

Minimal setup for Bullmq with Bull arena and Bull-board.

Watch here: https://www.youtube.com/watch?v=wAEMXVcRbgU

[![Thumbnail](https://i3.ytimg.com/vi/wAEMXVcRbgU/hqdefault.jpg "Montetalks")](https://www.youtube.com/watch?v=wAEMXVcRbgU)

## Requirements to run

Node.js v14+

```
npm install
```

Docker (for redis instance)

```
docker-compose up
```

## How to run

```
npm run server
npm run workers
```

## Dashboards

With default config:

Bull arena is available at: http://localhost:3000/arena

Bull-board is available at: http://localhost:3000/bull-board

## Triggering events

```
POST http://localhost:3010/hello-world
POST http://localhost:3010/heavy-computing?number=2
POST http://localhost:3010/retryable
```

Recommended [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VSC so you can use `.http` files.

