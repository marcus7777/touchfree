const Raspi = require('raspi-io').RaspiIO;
const five = require('johnny-five');
const board = new five.Board({
  io: new Rawspi()
})

board.on('ready', () => {

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var relay = new five.Relay(26)
  
  relay.on()
  setTimeout(() => {
    relay.off()
  }, 500)
})
