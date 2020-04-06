var express = require('express');
var router = express.Router();

// 
const multer  = require('multer');
// 


// 
var storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 

      // Uploads is the Upload_folder_name 
      cb(null, __dirname + "/../uploads") 
  }, 
  filename: function (req, file, cb) { 
    cb(null, file.originalname) 
  } 
});

const limits = {fileSize: 1 * 1000 * 1000}

var upload = multer({ storage: storage,
                      limits: limits 
                    }).single('avatar');
// 



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Got a get request");
});

/*
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
*/

router.post('/upload', function(req, res, next){
  upload(req, res, function(err){
    if(err instanceof multer.MulterError){
      res.send({errorType: "MulterError", err: err})
    } else if(err){
      res.send({errorType: "Unknown"})
    } else{
      res.send(req.file)
    }

  });

});

module.exports = router;
