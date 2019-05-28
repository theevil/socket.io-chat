var express = require('express')
var socket = require('socket.io')
var app = express();
var server = app.listen(3000, () => {
    console.log('run in 3000...')
})

app.use(express.static('public'))

var io = socket(server)

io.on('connection', socket => {
    console.log('made socket connection', socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    })
})