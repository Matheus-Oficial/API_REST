import http from "http";

const PORT = 3000;

// Create a local server to receive data from
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/plan'});
    res.end('Hello World!');
});

// Listen a local server
  server.listen(PORT,() => {
    console.log('Servidor escultando!');
  });  
