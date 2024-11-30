import WebSocket, { WebSocketServer } from 'ws';
//natively https server without dependening express
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});/////create https server

const wss = new WebSocketServer({ server }); //create a websoket server instance

wss.on('connection', function connection(soket) { //soket here connection(soket) can be name any //after https server first time connection . after that it will come here on the websoket
    soket.on('error', console.error); //if any thing error in websoket then this error will be console log

    soket.on('message', function message(data, isBinary) { //any time there is messege from the browser or from other server or from the client then in this section will come
    wss.clients.forEach(function each(client) { //there can many client can be connected to this websoket server // for each connection who is conncetd
      if (client.readyState === WebSocket.OPEN) {//to make sure connection is open
        client.send(data, { binary: isBinary });// send to clinet whatever you want //it can logic or can be any data//same data is send whatever client send that send to client also 
        //in this example in this scenerio
        //if many client connected to this websoket and any one of the client send the message to sever.websoket will send  same message will send to every client is connected
      }
    });
  });

  soket.send('Hello! Message From Server!!');//as soon as  if some client the connection the websoket it will return server is connected//
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});  //here https server  listen on this port 