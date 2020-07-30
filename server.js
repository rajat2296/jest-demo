const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var createError = require('http-errors')
const MAX = 10;

function lengthCheck (req, res, next) {
  console.log("length check");	
  if(req.headers['content-length'] > MAX) {
      res.status(413).send('payload too large');
      //res.destroy();
      return;
  } else {
  	return next();
  }
}

app.use(lengthCheck);
app.use(bodyParser.json({limit: MAX}));

app.get('/ping', function(req, res) {
	return res.status(200).send({message: 'ok'});
})

app.post('/test', function(req, res) {
	return res.status(200).send({message: 'ok'});
})


const port = process.env.PORT || 8080;

module.exports = app.listen(port, function() {
	console.log("app listening on 8080")
});
