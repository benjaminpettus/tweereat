
const express = require('express')
const OAuth2 = require('oauth').OAuth2
const https = require('https')
const bodyParser = require('body-parser')
const Twitter = require('twitter-node-client').Twitter;
const app = express()

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded ({ extended: true}));
app.use(express.static(__dirname + '/public'));



var error = function (err, response, body) {
  console.log('error', JSON.stringify(err));
};

var success = function (data) {
  console.log('data', data);
};

app.get('/', function (request, response) {
  res.render('index');
})
//Connecting to Twitter
var config = {
  "consumerKey": 	"QwpdsreJIUYghOqK77hZ7O2xd",
  "consumerSecret": "JdZlnGuHJyE9llqj1PNthP6zW5OzuxeVmIFvSdxiItf6eeFsfN",
  "accessToken": 	'30808913-8BbjFkhav7iSq40RhIcemstnMuzdnVWxGRSlAIsHC',
  "accessTokenSecret":	"UGz3Ynu9nqQKA8pHtMwbyZSmlVvwyNXyVkgONh4e5LuKW",
}


var token = null
var oauth2 = new OAuth2(config.consumerKey, config.consumerSecret, 'https://api.twitter.com/', null, 'oauth2/token', null);
oauth2.getOAuthAccessToken('', {
  'grant_type': 'client_credentials'}, function (e, access_token) {
    token = access_token;
});


var twitter = new Twitter(config);

twitter.getUserTimeline({ screen_name: 'alvinatl', count: '10'}, error, success);



const server = app.listen( 3000, function() {
  console.log('Listening to port', server.address().port)
})
