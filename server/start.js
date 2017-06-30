'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')

const pkg = require('../package.json')

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}
const clients=[]
let x = 0;
let y = 0;
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

if (module === require.main) {

  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)      
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )

  const io = require('socket.io')(server);
  io.on('connection', function (socket) {
    clients.push(socket)
   
    socket.on('disconnect', function() {
      console.log('Got disconnect!');
      var i = clients.indexOf(socket);
      clients.splice(i, 1);
   });

   socket.on('player', function (data) {
    var i = clients.indexOf(socket);

    //console.log(`heyhey ${i}`,data);
    socket.broadcast.emit(data.emitName, {id: socket.id, payload: data.payload});
    console.log(data.payload, socket.id) //for updating player positionsssss
    clients[i].x=data.payload.x;
    clients[i].y=data.payload.y;
    clients[i].turns=data.payload.turns;
  });
    socket.on('load', function(data){
      socket.emit('location',{x,y});
      var i = clients.indexOf(socket);
      const clientClone = [...clients]
      clientClone.splice(i,1);
      const opponents = clientClone.map((opponent)=>{return {id: opponent.id,
        x: opponent.x,
        y: opponent.y,}})
      socket.broadcast.emit('new',{id: socket.id,x,
        y})
      console.log(opponents)
      console.log('clients',clients.length)
      socket.emit('loaded',{opponents})
    })
    x +=10;
    y+= 10; //eventually for indivitual room
});
}
