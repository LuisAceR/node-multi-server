const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  // Servidor simple 
  if (url === '/simple') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo desde el servidor simple\n');
  
  // Servidor síncrono 
  } else if (url === '/sincrono') {
    try {
      const data = fs.readFileSync('holamundo.txt', 'utf8'); 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data); 
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error de la lectura síncrona');
    }
  
  // Servidor asíncrono 
  } else if (url === '/asincrono') {
    fs.readFile('holamundo.txt', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error de la lectura asíncrona');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data); 
    });
  
  // Ruta no encontrada
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ruta no encontrada\n');
  }
});

server.listen(3000, () => {
  console.log('Corriendo en http://localhost:3000/');
  console.log('Accede a las siguientes rutas:');
  console.log('Servidor simple: http://localhost:3000/simple');
  console.log('Servidor síncrono: http://localhost:3000/sincrono');
  console.log('Servidor asíncrono: http://localhost:3000/asincrono');
});
