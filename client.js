var socket = io();

socket.on('url posted', function(call) {
	alert('Socket noticed that someone posted it!');
	alert('This is awesome, dont you think?');
	console.log('Call: ', call);
});


$(document).ready(function() {
	$('#requestBtn').click(function() {
		$.ajax({
			type: "POST",
			data: { name: "Fulano", location: "localhost!" }
		})
		.done(function( msg ) {
			console.log('Posted!', msg);
		});
	});
});
