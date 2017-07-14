/*jshint esversion:6*/
const net = require('net');
const port = 6969;

let clients = [];

const server = net.createServer( connection => {
  connection.name = connection.remoteAddress + ':' + connection.remotePort;
  clients.push(connection);
  console.log('CONNECTED: ' + connection.name);
  console.log('clients connected: ' + clients.length);

  connection.on('data', data => {
    clients.filter( c => {
      return c !== connection;
    })
    .map( c => {
      c.write(connection.name+ ' > ' + data);
    });
  });

  connection.on('close', () => {
    clients.splice(clients.indexOf(connection), 1);
    console.log(connection.name + ' disconnected');
    console.log('clients connected: ' + clients.length);
  });

});

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
