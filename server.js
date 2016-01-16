var express = require('express');
	api		= require('./api'),
	app		= express();


app
	.use(express.static('./public'))
	.user('/api', api)
	.get('*', function (req, res) {
		res.sendFile(__dirname + '/public/main.html');
	})
	.listen(3000);