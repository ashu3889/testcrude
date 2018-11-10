var express = require('express');
var app = express();
var csv= require('csvtojson');
var csvFilePath='./data.csv';
var jsonArray;

var expressWs = require('express-ws')(app);

//var port  = process.env.PORT || 3000;

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
      let data  = JSON.stringify(jsonArray);
      ws.send(data);
  });
});


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  //  console.log(jsonObj);
    jsonArray = jsonObj;
    
})

//const jsonArray=await csv().fromFile(csvFilePath);

app.get('/' , function(req,res){
res.send(jsonArray);
});

var router = express.Router();
app.use('/api' , router);

router.get('/:date' , function(req, res){
  var empName = req.params.date;

});


app.listen(4000, function(){
  console.log('express app setup complete');
});