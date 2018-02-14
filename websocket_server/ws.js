var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })


  setInterval(
    function() {
        var minFrequency = 900;
        var maxFrequency = 2301;
        var step = 50;
        var data = '';

        for ( var f = minFrequency; f < maxFrequency; f = f + step ) {
            var power = getPower();
            var record = f + ':' + power;
            data += '|' + record;
        }
        ws.send(data);
    },
    100
  )
    function getPower() {
        return (Math.floor(Math.random() * 15) * -1);
    }
})
