var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'})

   // Send the response body as "Hello World"
   response.end('Hello World Application - Deployed with AWS CodeDeploy/CodePipeline\n')
}).listen(3000)

// Console will print the message
console.log('Server running')
