/*jshint esversion:6*/
const net = require('net');
const options = {
  host: 'localhost',
  port: 6969
};

const client = net.createConnection(options, () => {
  console.log('CONNECTED');

  process.stdin.on('data', data => {
    client.write(data);
  });

client.on('data', data => {
  console.log(data.toString());
});

  //Whenever the connected socket (client) emits a 'data' event, then data is being broadcasted from the server, pipe that data out to your terminal's standard output stream.

  //   process.stdin.pipe(process.stdout);

  // client.on('end', () => {
  //   console.log('client disconnected');
  // });
});