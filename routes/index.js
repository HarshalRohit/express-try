var express = require('express');
var router = express.Router();

// 
const fs = require('fs');
// 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Got a post request");
});


router.post('/', function(req, res, next) {
  // res.render('index', { title: 'express-try' });
  
  // console.log(req.body);
  var wstream = fs.createWriteStream('myOutput.txt');
  let body = req.body
  console.log(body)
  // body = JSON.stringify(body)
  // // console.log(body)
  // wstream.write(body);
  // wstream.end();
  res.send("Got a post request");
});

module.exports = router;
