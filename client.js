

const net = require("net");
const {IP, PORT} = require("./constants.js");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT    
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
   conn.on('connect', () => {
    
        conn.write("Name: Dan")
        // conn.write("Move: up")
   });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};
module.exports = connect;