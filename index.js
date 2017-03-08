
const express = require('express')
const OAuth2 = require('oauth').OAuth2
const https = require('https')
const bodyParser = require('body-parser')
const logger = require('morgan')
const Twitter = require('twitter-node-client').Twitter;
const pug = require('pug')


const app = express()


app.use(logger('dev'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded ( { extended: true } ) );
app.use( express.static(__dirname + '../public/') );

app.set('view engine', 'pug')
//var error = ;

// var success =

//Connecting to Twitter
const config = {
  "consumerKey": 	"QwpdsreJIUYghOqK77hZ7O2xd",
  "consumerSecret": "JdZlnGuHJyE9llqj1PNthP6zW5OzuxeVmIFvSdxiItf6eeFsfN",
  "accessToken": 	'30808913-8BbjFkhav7iSq40RhIcemstnMuzdnVWxGRSlAIsHC',
  "accessTokenSecret":	"UGz3Ynu9nqQKA8pHtMwbyZSmlVvwyNXyVkgONh4e5LuKW",
}

var twitter = new Twitter( config );

var token = null
var oauth2 = new OAuth2( config.consumerKey, config.consumerSecret, 'https://api.twitter.com/', null, 'oauth2/token', null );
oauth2.getOAuthAccessToken( '', {
  'grant_type': 'client_credentials' }, function ( e, access_token ) {
    token = access_token;
});

// let posts = twitter.getUserTimeline( { screen_name: 'alvinatl', count: '10' }, error, success )
// console.log('posts', posts);




///////////==========================================================
app.get('/', function( request, response ) {
 twitter.getUserTimeline({ screen_name: 'alvinatl', count: '2'},
      function ( err, response, body ) {
        console.log( 'error', JSON.stringify( err ) );
      },
      function (data) {
        var json = (JSON.parse(data))

        // console.log('first post text: ', json[0].text)
        // console.log('first post id: ', json[0].id)
        // console.log('first post date: ', json[0].created_at)
        // console.log('first post rt from: ', json[0].entities.user_mentions[0].screen_name)
        response.json(json)
      })
})

// app.post('/', function(request, response))




const server = app.listen( 3000, function() {
  console.log('Listening to port', server.address().port)
})
