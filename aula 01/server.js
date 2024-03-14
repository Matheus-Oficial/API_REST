import http from "http";

const PORT = 3000;

// http://localhost:3000/

const rotas = {
  "/":"Rota Home!",
  "/livros":"Rota livros!",
  "/autores":"Rota autores"
}

// Create a local server to receive data from
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/plan'});
    res.end(rotas[req.url]);
});

// Listen a local server
  server.listen(PORT,() => {
    console.log('Servidor escultando!');
  });  
