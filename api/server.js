const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Cấu hình rewriter nếu cần thiết
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

// Sử dụng router cho server
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server
