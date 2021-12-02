const net = require("net");
let delay = 0;
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
    
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
//   conn.on('connect', () => {
//     conn.write("Successfully connected to game server")            
// });

  conn.on('connect', () => {
    
        conn.write("Name: Dan")
        // conn.write("Move: up")
        // setTimeout(() => {conn.write("Move: left")}, 100);
        // setTimeout(() => {conn.write("Move: left")}, 200);
        // setTimeout(() => {conn.write("Move: left")}, 300);
        // setTimeout(() => {conn.write("Move: up")}, 400);
        // setTimeout(() => {conn.write("Move: right")}, 500);
        // setTimeout(() => {conn.write("Move: right")}, 600);
        // setTimeout(() => {conn.write("Move: down")}, 700);
        // setTimeout(() => {conn.write("Move: right")}, 800);
                    

  });

  conn.on("Move: up", () => {
    // data = "Move: up";
});
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};
module.exports = connect;