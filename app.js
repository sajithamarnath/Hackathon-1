// Sample node.js web app for Hackathon-1 (Docker CI)

'use strict';
var express = require('express'),
app = express();

app.set('views', 'views');			//setting the views to views directory
app.set('view engine', 'jade');		//setting view engine to use jade

// wait for a request .get ... moving to root ... defining a function
// function is looking for file 'home' in views folder and pass all json objects

app.get('/', function(req, res) {
	res.render('home', {  });
});

app.listen(8080);
module.exports.getApp = app;