// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?",function(req,res){
  let dateParam = req.params.date;
  console.log(dateParam)
  //if String empty
  if(!dateParam){
    const now = new Date();
    res.send({'unix':now.valueOf(),'utc': now.toUTCString()})
  }
  //2015-12-25 
  if(Date.parse(dateParam)){
    res.send({'unix':Date.parse(dateParam),'utc': new Date(dateParam).toUTCString()});
  }
  dateParam = parseInt(dateParam);
  if(!isNaN(new Date(dateParam).valueOf())){
    res.send({'unix':new Date(dateParam).valueOf(),'utc': new Date(dateParam).toUTCString()});
  }
  res.send({'error':"Invalid Date"});
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
