
const express = require('express')
const OAuth2 = require('oauth').OAuth2
const https = require('https')
const bodyParser = require('body-parser')
const logger = require('morgan')
const Twitter = require('twitter-node-client').Twitter;
const pug = require('pug')
const pg = require('pg')
const path = require('path')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tweereat'


const app = express()


app.use( express.static(path.join(__dirname, 'public')) );
app.use( bodyParser.urlencoded ( { extended: true } ) );
app.use( bodyParser.json() );
app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views') )
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

//     client.query('INSERT into posts(text, twitter_id, rt_from) VALUES($1, $2, $3', [ data[0].text,, data[0].id, data[0].entities.user_mentions[0].screen_name])
// let twitterData = twitter.getUserTimeline( { screen_name: 'alvinatl', count: '10' }, error, success )
///////////==========================================================
app.get('/', function( request, response ) {
  twitter.getUserTimeline({ screen_name: 'alvinatl', count: '10'},
    function ( err, response, body ) {
      console.log( 'error', JSON.stringify( err ) );
    },
    function (data) {
      var json = (JSON.parse(data))
      console.log('first post text: ', json[0].text)
      console.log('profile image:', json[0].retweeted_status.user.profile_image_url )
      console.log('first post id: ', json[0].id)
      console.log('first post date: ', json[0].created_at)
      console.log('first post rt from: ', json[0].entities.user_mentions[0].screen_name)
      response.render('index', {tweets: json})
      //  response.json(json)
    }
  )
})




const server = app.listen( 3000, function() {
  console.log('Listening to port', server.address().port)
})
