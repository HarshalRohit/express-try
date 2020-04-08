var express = require('express');
var router = express.Router();

/* MY CODE STARTS */
const multer  = require('multer');
/*  MY CODE ENDS  */


/* MY CODE STARTS */
var storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 

      // Uploads is the Upload_folder_name 
      cb(null, __dirname + "/../uploads") 
  }, 
  filename: function (req, file, cb) { 
    const date = new Date()
    const fileName = req.hostname + ' - ' + date.toGMTString() + '.wav'
    // file.originalname)
    cb(null, fileName) 
  } 
});

const limits = {fileSize: 1 * 1000 * 1000}

var upload = multer({ storage: storage,
                      limits: limits 
                    }).single('avatar');
/*  MY CODE ENDS  */



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


/* MY CODE STARTS */
router.post('/upload', function(req, res, next){
  upload(req, res, function(err){

    /*let i=0;
    for(i=0; i<10000000000; i++){

    }
    console.log(i);*/
    
    if(err instanceof multer.MulterError){

      res./*status(404).*/send({errorType: "MulterError", err: err})
    } else if(err){
      res./*status(404).*/send({errorType: "Unknown", err: err})
    } else{
      res.send({status: "File received."})
    }

  });

});
/*  MY CODE ENDS  */


module.exports = router;
