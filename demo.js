
const http = require('http')

const server = http.createServer((request, response) => {
console.log('Requested');

})

server.listen(3000)