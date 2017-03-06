const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function (request, response) {
  res.render('index');
})



const server = app.listen( 3000, function() {
  console.log('Listening to port', server.address().port)
})
