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
});