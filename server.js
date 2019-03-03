var express = require('express');
var app = express();
var csv= require('csvtojson');
var csvFilePath='./crude999.csv';
//var KiteConnect = require("./connect.js");

var KiteConnect = require("kiteconnect").KiteConnect;
var jsonArray;
var api_key = "vlu1o53tt1makdu3",
    secret = "t45f9mr9r3jvbkgyg423hf5il90399el";
var access_token = '';
var bodyParser = require('body-parser');
var _ = require('lodash');
var jStat = require('jStat').jStat;
var jsonArray;
var stats = require("stats-lite");
var ticker = '';
var KiteTicker = require("kiteconnect").KiteTicker;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
      

var options = {
            "api_key": api_key,
            "debug": false
        };

var expressWs = require('express-ws')(app);

//var port  = process.env.PORT || 3000;


app.post('/bonu' , function(req,res){


 var kc = new KiteConnect(options);
   var access_token_const = '';

    if (!access_token) {
            kc.generateSession(req.body.token, secret)
                .then(function(response) {

                   
                    access_token_const = response.access_token;

                    console.log('acess token const' + access_token_const);
                   
                   
                    kc.setAccessToken(access_token_const);

                   // res.send(access_token_const);


                    ticker = new KiteTicker({
                             api_key: "vlu1o53tt1makdu3",
                             access_token: access_token_const
                   });


                     callWebsocket();
                                   

                })
                .catch(function(err) {
                   
                    console.log(err);

                })
        } else {
            alert('else');
            kc.setAccessToken(access_token);

    }











let comboarr = [];
let detectionStatus = false;

var meanBuy = 1;
var meanSell = 1;
var sdBuy = 1;
var sdSell = 1;


        setInterval(function(){ 
            calculateComboArray();
       }, 1000);

/*let param = req.query.foo;

var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
  api_key: "vlu1o53tt1makdu3",
  access_token: req.body.token
});

callWebsocket();*/

function callWebsocket(){
ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);
ticker.on("disconnect", unsubscribe);

}


function unsubscribe(){

  console.log('websocket is closed now');
}
 



function onTicks(ticks) {

  //ticker.disconnect();

   if(detectionStatus === false){
         ticks.map((v,i) => {
               comboarr.push(v);
          })
    }
   
}

function subscribe() {
  //var items = [259849,1850625,15571970,2747905,408065,3465729,969473,738561,22837250,4267265,519937,4343041];
  var items = [54334983];
  ticker.subscribe(items);
  ticker.setMode(ticker.modeFull, items);
}

function calculateComboArray(){

    detectionStatus = true;
  //console.log(comboarr);
  calculateParam(comboarr);
  comboarr = [];
}

function calculateParam(arr){

  let finalArr = [];

   arr.map((v ,i) => {
     // console.log('param is' + JSON.stringify(v));

     var minask =0;
     var maxbid = 0;
     var spread = 0;
     var depth = 0;
     var CER = 0;
     var TD  = 0;
     var MinDepth = 3;
     var MinSpread = 0.001;
     var MinCER = 0;


if(v.depth !== undefined){

     var askArray = v.depth.sell;
     var bidsArray = v.depth.buy;
}
     
     

      //function to add cm in bid and ask side .....

   if (askArray != undefined) {
      askArray.map((v,i)=> {
          if(i === 0 ){
             v.cm = 0;
          }
          else{
            v.cm = askArray[i-1].quantity + askArray[i-1].cm;
          }
      });
  }


    if (bidsArray != undefined) {

      bidsArray.map((v,i)=> {
          if(i === 0 ){
             v.cm = 0;
          }
          else{
            v.cm = bidsArray[i-1].quantity + bidsArray[i-1].cm;
          }
      });
  }

     



    if (askArray != undefined) {
    //ashutosh
          minask = _.minBy(_.map(askArray, 'price'));
          depth = askArray.length;
          CER = (minask + 0.08) / minask;
         // console.log('minask is' + minask);
          //console.log('depth is' + depth);
         // console.log('CER is' + CER);
     }

    if (bidsArray != undefined) {
          maxbid = _.maxBy(_.map(bidsArray, 'price'));
    }


    if (minask !== 0 && maxbid !== 0) {
          spread = (minask - maxbid) / (minask + maxbid) / 2;
          spread = Math.abs(spread);
    }




   /*  r  = (x-y)/(x+y)/2;

    2x-2y =0.001(x+y);
    (2-0.001)x = (2+0.001)y
    1.999x =2.001 y
    1999x = 2001y*/
          //console.log('maxbid is' + maxbid);
          //console.log('spread is' + spread);
         
          //console.log('CER is' + CER);

//if (depth >= MinDepth && spread >= MinSpread && CER >= MinCER) {
    //depth condition
if (depth >= MinDepth && spread >= 0 && CER >= MinCER) {
    
    v.Depth = depth;
    v.Spread = spread;
    v.CER = CER;
    v.Orderbook = v.depth;
    v.TD = TD;
    if (askArray !== undefined) {
        if (askArray.length > 0) {
            v.asksArray = _.map(askArray, 'price');
            v.asksQuantity = _.map(askArray, 'quantity');
            v.asksCM = _.map(askArray, 'cm');
        } else {
            v.asksArray = [];
            v.asksQuantity = [];
            v.asksCM = [];
        }

    }

    if (bidsArray !== undefined) {
        if (bidsArray.length > 0) {
            v.bidsArray = _.map(bidsArray, 'price');
            v.bidsQuantity = _.map(bidsArray, 'quantity');
            v.bidsCM = _.map(bidsArray, 'cm');
        } else {
            v.bidsArray = [];
            v.bidsQuantity = [];
            v.bidsCM = [];
        }

    }

    v.boolSendTrade = false;
    v.SendTrade = [];

    finalArr.push(v);
}

   })

///time to call next function.......

    processCallData(finalArr);



}


function processCallData(arr){



  //console.log('final array is' + JSON.stringify(arr));

    arr = _.sortBy(arr, 'volume').reverse();
   
    arr.map((value, index) => {
        arr[index].rank = index;
    });

    
    arr = _.sortBy(arr, 'LastTradeQuantity').reverse();
    

    arr.map((value, index) => {
        arr[index].churnrank = index;
    });

    arr.map((value, index) => {
        arr[index].LiquidityRank = (value.churnrank + value.rank) / 2;;
    });

        arr = _.sortBy(arr, 'Spread').reverse();
        arr.map((value, index) => {
            arr[index].IntSpreadRank = index;
        });

        arr = _.sortBy(arr, 'CER').reverse();
        arr.map((value, index) => {
            arr[index].IntCERRank = index;
        });

        arr.map((value, index) => {
          //  collatedData[index].IntThetaRank = index;
            arr[index].floatAttractiveness_Index = (value.LiquidityRank + value.IntSpreadRank + value.IntCERRank) / 4;

        });

          arr = _.sortBy(arr, 'rank').slice(0, 4);

    var  filteredInstruments = {
        'TUCalls': arr
    };
     generateRepitiveOrders(filteredInstruments)


}




function generateRepitiveOrders(data){  

      generateOrderBook(data);
};



function generateOrderBook(data){



var  optiondata = data.TUCalls;

optiondata.map((value, index) => {
     
     // var spread = value.Spread;console.log

      
      let asksArray = value.asksArray;
      let asksQuantity = value.asksQuantity;
      let bidsArray =  value.bidsArray;
      let bidsQuantity = value.bidsQuantity;
      let instrumentName = value.instrumentName;

       value.meanBuy = stats.mean(value.bidsCM);
       value.meanSell = stats.mean(value.asksCM);
       value.sdBuy = parseFloat(stats.stdev(value.bidsCM).toFixed(4));
       value.sdSell = parseFloat(stats.stdev(value.asksCM).toFixed(4));




      /*console.log("sum: %s", stats.sum(rolls))
console.log("mean: %s", stats.mean(rolls))
console.log("median: %s", stats.median(rolls))
console.log("mode: %s", stats.mode(rolls))
console.log("variance: %s", stats.variance(rolls))*/





      let spreadValue = 0;
      if(value.asksArray.length >0 &&  value.bidsArray.length >0){
              spreadValue =  Number((value.asksArray[0]-value.bidsArray[0]).toFixed(4)); 
      }

      if(value.asksArray.length >0 &&  value.bidsArray.length == 0){
              spreadValue =  Number(value.asksArray[0].toFixed(4)); 
      }

      if(value.asksArray.length === 0 &&  value.bidsArray.length > 0){
              spreadValue =  Number(value.bidsArray[0].toFixed(4)); 
      }

      let tickSize = 0;

      if(value.last_price > 500 && value.last_price < 1000){
            tickSize = 0.1;

      }
      if(value.last_price < 500){

         tickSize = 0.05;
      }

      if(value.last_price > 1000){

         tickSize = 1;
      }
      
      
      let asksCM =  value.asksCM;
      let bidsCM = value.bidsCM;

      let globalindex = index;
      optiondata[globalindex].CleanedSellOrderBook = [];
      optiondata[globalindex].CleanedBuyOrderBook = [];


       if(spreadValue > 2*tickSize) {

            console.log('inside 111111');
     
        
             //adding two ticks to the bids side and substracting two ticks to asks side
      
             //removing tick from asks side and calculatig cm
          
          if(asksArray.length >1 && asksQuantity.length >1){

             for(var i=0;i<asksArray.length;i++){
               var cm = 0;
              
                asksArray[i]= asksArray[i]-tickSize;
                let pricedata = parseFloat(asksArray[i].toFixed(4));
                let quantdata = parseFloat(asksQuantity[i].toFixed(4));
                
              //logic to write cm for each clean sell order book
               if(i === 0){
                 cm = 0;
               }
               else{
                //dding cumulative cm
                cm = optiondata[globalindex].CleanedSellOrderBook[i-1].cm + asksQuantity[i-1];
               }

               let cmdata = parseFloat(cm.toFixed(4));
             // debugger;

               var data  = {'quantity' : value.Quantity ,'cm' : cmdata, 'price': pricedata, 'instrument' : instrumentName };
               optiondata[globalindex].CleanedSellOrderBook.push(data);
             
            }

          }
         
          if(asksArray.length === 1 && asksQuantity.length  === 1){
              
                //debugger;
               var data  = {'quantity' : value.Quantity ,'cm' : asksCM[0], 'price': asksArray[0], 'instrument' : instrumentName };
             
               optiondata[globalindex].CleanedSellOrderBook.push(data);
          }
          

 
        //adding ticks to bids side and calculatig cm  //parseInt(asksArray[i].toPrecision(4)) 

       if(bidsArray.length >1 && bidsQuantity.length >1){
           
           for(var i=0;i<bidsArray.length;i++){
              var cm = 0;
              bidsArray[i]= tickSize+bidsArray[i];

              let pricedata = parseFloat(bidsArray[i].toFixed(4));
              let quantdata = parseFloat(bidsQuantity[i].toFixed(4));

             
              
             
              //logic to write cm for each clean sell order book
              if(i === 0){
                 cm = 0;
              }
              else{
                //adding cumulative cm
                cm = optiondata[globalindex].CleanedBuyOrderBook[i-1].cm + bidsQuantity[i-1];
              }

              let cmdata = parseFloat(cm.toFixed(4));
              var data  ={'quantity' : value.Quantity , 'cm' : cmdata, 'price': pricedata, 'instrument' : instrumentName , 'cm' : cm};
              optiondata[globalindex].CleanedBuyOrderBook.push(data);
          }
         
        }

         if(bidsArray.length === 1 && bidsQuantity.length  === 1){
           // debugger;
              
               var data  = {'quantity' : value.Quantity ,'cm' : bidsCM[0], 'price': bidsArray[0], 'instrument' : instrumentName };
              
               optiondata[globalindex].CleanedBuyOrderBook.push(data);
          }
          
          
  
        
         
           //got the index of same values now
        }
      else if(spreadValue <= 2*tickSize){
        
          console.log('inside 222222');
          if(asksArray.length === 1 && asksQuantity.length  === 1){
              //debugger;
              
               var data  = {'quantity' : value.Quantity ,'cm' : asksCM[0], 'price': asksArray[0], 'instrument' : instrumentName };
              
               optiondata[globalindex].CleanedSellOrderBook.push(data);
          }


         if(bidsArray.length === 1 && bidsQuantity.length  === 1){
              
               var data  = {'quantity' : value.Quantity ,'cm' : bidsCM[0], 'price': bidsArray[0], 'instrument' : instrumentName };
             
               optiondata[globalindex].CleanedBuyOrderBook.push(data);
          }



         if(asksArray.length >1 && asksQuantity.length >1){
          for(var i=1;i<value.asksArray.length;i++){
             if(i>0){   
                var  data =  parseFloat(asksArray[i].toFixed(4))-tickSize;
                asksArray[i] = parseFloat(data.toFixed(4)) ;
             }
          }
        }

      
        //adding ticks to bids side
        if(bidsArray.length >1 && bidsQuantity.length >1){
          for(var i=1;i<value.bidsArray.length;i++){
              if(i>0){
                 var data  = tickSize + parseFloat(bidsArray[i].toFixed(4));
                 bidsArray[i]= parseFloat(data.toFixed(4)) ;
              }
          }
        }


           //check if ask first and second value is same
            


         if(asksArray.length >1 && asksQuantity.length >1){
            if(asksArray[1] === asksArray[0]){
               asksQuantity[0] = parseFloat(asksQuantity[0].toFixed(4)) + parseFloat(asksQuantity[1].toFixed(4));
               //we hv to remove asksArray,askquantity
                //asksArray.splice(1,1);
               // asksQuantity.splice(1,1);
               
                var l = 2;

                //items.slice(0, i-1).concat(items.slice(i, items.length));
                if(asksQuantity.length ==2 ){
                     asksQuantity.slice(0, l-1);
                     asksArray.slice(0, l-1)
                }
                if(asksQuantity.length > 2 ){
                   asksQuantity = asksQuantity.slice(0, l-1).concat(asksQuantity.slice(l, asksQuantity.length));
                   asksArray = asksArray.slice(0, l-1).concat(asksArray.slice(l, asksArray.length));
                }
                


            }
          }



          if(bidsArray.length >1 && bidsQuantity.length >1){
            if(bidsArray[1] === bidsArray[0]){
               bidsQuantity[0] = parseFloat(bidsQuantity[0].toFixed(4)) + parseFloat(bidsQuantity[1].toFixed(4));

                var l = 2;

                //items.slice(0, i-1).concat(items.slice(i, items.length));
                if(bidsQuantity.length ==2 ){
                     bidsQuantity.slice(0, l-1);
                     bidsArray.slice(0, l-1)
                }
                if(bidsQuantity.length > 2 ){
                  
                    bidsQuantity = bidsQuantity.slice(0, l-1).concat(bidsQuantity.slice(l, bidsQuantity.length));
                    
                    bidsArray = bidsArray.slice(0, l-1).concat(bidsArray.slice(l, bidsArray.length));
                    console.log('after' + bidsArray);
                }
               
            }
          }


              //removing tick from asks side and calculatig cm

        if(asksArray.length >1 && asksQuantity.length >1){
          for(var i=0;i<asksArray.length;i++){

                let pricedata = parseFloat(asksArray[i].toFixed(4));
                let quantdata = parseFloat(asksQuantity[i].toFixed(4));

               var cm = 0;
              //logic to write cm for each clean sell order book
               if(i == 0){
                 cm = 0;
               }
               else{
                //dding cumulative cm
                cm = optiondata[globalindex].CleanedSellOrderBook[i-1].cm + asksQuantity[i-1];
               }
                // debugger;

              let cmdata = parseFloat(cm.toFixed(4));
               var data  = {'quantity' : value.Quantity ,'cm' : cmdata, 'price': pricedata, 'instrument' : instrumentName };
               optiondata[globalindex].CleanedSellOrderBook.push(data);
          }
        }
        
       

        //adding ticks to bids side and calculatig cm

         if(bidsArray.length >1 && bidsQuantity.length >1){

          for(var i=0;i<bidsArray.length;i++){
              var cm = 0;
              //logic to write cm for each clean sell order book
              if(i === 0){
                 cm = 0;
              }
              else{
                //adding cumulative cm
                cm = optiondata[globalindex].CleanedBuyOrderBook[i-1].cm + bidsQuantity[i-1];
              }

              let pricedata = parseFloat(bidsArray[i].toFixed(4));
              let quantdata = parseFloat(bidsQuantity[i].toFixed(4));
              let cmdata = parseFloat(cm.toFixed(4));

              var data  ={'quantity' : value.Quantity , 'cm' : cmdata, 'price': pricedata, 'instrument' : instrumentName , 'cm' : cm};
              optiondata[globalindex].CleanedBuyOrderBook.push(data);
          }
     }

          
       }
       else{
                console.log('33');
       }



});


generateOptimalPrice(optiondata);






};


function generateOptimalPrice(optiondata){

  //debugger;

  
optiondata.map((value,index) => {


  var meanBuy = value.meanBuy;
  var sdBuy = value.sdBuy;
  var meanSell = value.meanSell;
  var sdSell = value.sdSell;

 let mid = (Number(value.asksArray[0])+Number(value.bidsArray[0]))/2;

 value.CleanedBuyOrderBook.map((v,i) => {

  //console.log('umaaaaaa is' + JSON.stringify(v));
  
        var subsValue= parseFloat(mid.toFixed(4))-parseFloat(v.price.toFixed(4));
        subsValue =    parseFloat(subsValue.toFixed(4));
       // console.log('subsValue is' + subsValue);
        var logVar=    parseFloat(jStat.lognormal.cdf(Math.max(1,v.cm),meanBuy,sdBuy).toFixed(4));
       // console.log('logvar is' + logVar);
        var powerVal=  parseFloat(Math.pow(parseFloat(1)-parseFloat(logVar),parseFloat(1)).toFixed(4));
       // console.log('powerVal is' + powerVal);
        var data = subsValue*powerVal;
       // console.log('data is' + data);
        v.optimalValue= parseFloat(data.toFixed(4));
       // console.log('optimalValue is' + v.optimalValue);



        v.direction = "buy" ;
        v.post_only = true;
        v.type = 'limit';
 });

 //sort the cleanbuyorderbook and keep the maximu spread value. _.sortBy(optiondata[0].CleanedBuyOrderBook, 'optimalValue').reverse(); 
   if(optiondata[index].CleanedBuyOrderBook.length >0){
        
        

         var foundIndex =  _.findIndex(value.SendTrade, function(valueD) { return valueD.direction === "buy"});
         if(foundIndex !== -1){
             value.SendTrade.splice(foundIndex, 1);
         }

         
//lavalooooo
      value.callOptPrice =_.sortBy(optiondata[index].CleanedBuyOrderBook, 'optimalValue').reverse()[0]; 

      if(_.isEmpty(value.callOptPrice) === false){
        value.boolSendTrade = true;
        value.SendTrade.push(value.callOptPrice);
      }

   }

   
    
 value.CleanedSellOrderBook.map((v,i) => {

  

        var subsValue  =  v.price- mid;
        subsValue    =   parseFloat(subsValue.toFixed(4)) ;      
        var logVar     =  parseFloat(jStat.lognormal.cdf(Math.max(1,v.cm),meanSell,sdSell).toFixed(4));
        var powerVal   =  parseFloat(Math.pow(parseFloat(1)-parseFloat(logVar),parseFloat(1)).toFixed(4));
        var data       =  subsValue*powerVal;
        v.optimalValue= parseFloat(data.toFixed(4));

        v.direction = "sell" ;
        v.post_only = true;
        v.type = 'limit';
 });


 if(optiondata[index].CleanedSellOrderBook.length > 0){
       
        var foundIndex =  _.findIndex(value.SendTrade, function(valueD) { return valueD.direction === "sell"});
         if(foundIndex !== -1){
             value.SendTrade.splice(foundIndex, 1);
         }
         
         //umaaaa
   // }

     value.sellOptPrice =_.sortBy(optiondata[index].CleanedSellOrderBook, 'optimalValue').reverse()[0]; 

     if(_.isEmpty(value.sellOptPrice) === false){
       value.boolSendTrade = true;
       value.SendTrade.push(value.sellOptPrice);
     }

 }

 console.log('optimal price data is ' + JSON.stringify(optiondata[0].SendTrade));
});
    
    callWSAgain();
}

function callWSAgain(){

   detectionStatus = false;
   // console.log('it is going to closeeee');
  

}

function ashu(){

  console.log('disconnected');
}






});


        






app.post('/ashu', function (req, res) {

   console.log(req.body);

   var kc = new KiteConnect(options);
   var access_token_const = '';

    if (!access_token) {
            kc.generateSession(req.body.token, secret)
                .then(function(response) {

                   
                    access_token_const = response.access_token;

                    console.log('acess token const' + access_token_const);
                   
                   
                    kc.setAccessToken(access_token_const);

                    res.send(access_token_const);
                                   

                })
                .catch(function(err) {
                   
                    console.log(err);

                })
        } else {
            alert('else');
            kc.setAccessToken(access_token);

    }
 //res.status(400).send("unable to save to database");

   /*res.status(200).send({
            access_token: access_token_const
          });*/

     
  
})



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