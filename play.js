const net = require("net");
const connect = require('./client.js');


// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.setEncoding("utf8");
  //const handleUserInput = function () {
  //   // your code here
  //   let key = "";
  //   if ( key === '\u0003' ) {
  //     process.exit();
  //   }
  // };

  stdin.on("data", (data) => {
     // your code here
       
       if ( data === '\u0003' ) {
         process.exit();
       }
     });
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();