const jsonServer = require('json-server')
const path = require('path')

const STORAGE_PATH = path.join(__dirname, 'storage.json')
const PORT = 3001

const server = jsonServer.create()
server.use(jsonServer.defaults())
server.use(jsonServer.rewriter({
    "/api/*": "/$1"
  }
))
server.use(jsonServer.router(STORAGE_PATH))
server.listen(PORT, () => {
  console.log('JSON Server is running')
})
