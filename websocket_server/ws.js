var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  ws.on('close', function() {
    console.log('Connection closed');
  });

  setInterval(
    function() {
        var minFrequency = 900;
        var maxFrequency = 2301;
        var step = 50;
        var data = '';

        for ( var f = minFrequency; f < maxFrequency; f = f + step ) {
            var power = getPower(f);
            var record = f + ':' + power;
            data += '|' + record;
        }

        // this is not the most elegant way of handling a disconnect, but beats the server crashing
        try {
          ws.send(data);
        } catch (err) {
          console.log('Client not connected');
        }
    },
    100
  )

  
  function getPower(f) {
    var multiplier = 15;
    return (Math.floor(Math.random() * multiplier) * -1);
  }
});


