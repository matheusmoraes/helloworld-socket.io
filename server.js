'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));

var server = app.listen(4000, function(){ 
	console.log('Server up on *:4000')
}); 

var io = require('socket.io')(server);

// Socket.io listeners 😎
io.on('connection', function(socket) {
	console.log('user connected :D');

	socket.on('disconnect', function() {
		console.log('user disconnected :(');
	});
});

// Routes!
app.get('/', function(req, res) {
	res.sendFile(__dirname + 'index.html');
});

app.post('*', function(req, res) {
	// When receive any POST request, send a message for the listener
	io.emit('url posted', req.body);
	res.end();
});
