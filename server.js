const http = require('http')
const app = require('./app')
const server = http.createServer(app)
require('dotenv').config();

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`)
})
