    import React ,{Component} from 'react';   
    import { connect } from "react-redux";
    import {KiteTicker} from 'kiteconnect';
    import {getAcessToken ,addTickData ,pivotData,addTickDataNifty,pivotDataNifty ,addTickDataNickle,pivotDataNickle} from '../action/action.js';
    import { withRouter } from "react-router-dom"; 
    import KitePlot from './plot.js'; 
    import LineApp from './lineplot.js';
    import * as KiteConnect  from './connect.js';
    import Nifty from './NiftyTest.js';
    import Crude from './CrudeTest.js';
    import _ from "lodash";

    var crudearr = [];
    


     let count = 1;
     let countnifty = 1;
     let countnickle = 1;
     let access_token_const =0;
     let crudelongtrade = false;
     let crudeshorttrade = false;
     let startTime = 0;
     let startingTime = 0;



    export  class LoginNav extends Component{
     

       constructor(props){
              super(props);
              this.state ={
               token : '',  
               timecount : 0  ,
               tickdata : '', 
               pivotpoint : 0, 
               minPivot : 0,
               maxPivot : 0,  
               sidewaysCount: 0,
               minblackpivot : 0,
               maxblackpivot : 0,
               tradeTime :0,  
               pivotpointNifty:0, 
               crudeshorttrade : false,
               crudelongtrade : false,
               niftylongtrade : false,  
               niftyshorttrade : false,   
               nicklelongtrade : false,  
               nickleshorttrade : false,
               pivotpointnickle:0,

              }
            }

            startGeneratingServerSession(){ 
           
//debugger;
           Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad2(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +'-'+
               pad2(this.getMonth() + 1) + '-'+
               pad2(this.getDate()) + ' '+
               pad2(this.getHours()) + ':' +
               pad2(this.getMinutes()) +':' +
               pad2(this.getSeconds());
    }
});


startTime = new Date().YYYYMMDDHHMMSS();

               Object.defineProperty(Date.prototype, 'starting', {
    value: function() {
        function pad2(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +'-'+
               pad2(this.getMonth() + 1) + '-'+
               pad2(this.getDate()) + ' '+
               '10' + ':' +
               '30' +':' +
               '00';
    }
});


           startingTime = new Date().starting();

           

            var ashutosh = this;
            var api_key = "3iciz5hhzaiitjkj",
             secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
             request_token = this.state.token;
             let access_token = ''; 

             var options = {
               "api_key": api_key,
               "debug": false
             };   

            let kc = new KiteConnect(options);   

              if(!access_token) {
                  kc.generateSession(request_token, secret)
                    .then(function(response) {
                      access_token_const = response.access_token;
                     // alert(access_token_const);
                  //    debugger;     
                     init();                

                     kc.setAccessToken(access_token_const);
                   //  debugger;
                      //alert(access_token_const);                    
                    
                    })
                 .catch(function(err) {
                    alert('error here');
                     console.log(err);
                  })
              } 
              else {
               alert('else');
               kc.setAccessToken(access_token);

              }



              function init(){
                // debugger;
                     getHistoricalData(53835015, "5minute", startingTime, startTime);
                
                  // getHistoricalData(53835015, "5minute", new Date("2018-09-19 11:00:00"), new Date("2018-09-20 10:00:00"));

              }

              function getHistoricalData(instrument_token, interval, from_date, to_date, continuous) {

              

  kc.getHistoricalData(instrument_token, interval, from_date, to_date, continuous)
    .then(function(response) {
     // debugger;
      populatingTickdata(response);
      console.log(response);
    }).catch(function(err) {
      console.log(err);
    });
}


function populatingTickdata(response){

var d = ashutosh;


response.map((v,i)=> {
//debugger;

   var crudetickType;
   if(v.open < v.close){
         crudetickType ="green";
     }
    else if(v.open > v.close){
          crudetickType ="red";
    }
    else if(v.open = v.close){
          crudetickType ="doji";
    }

    var crudetickLength = Math.abs(v.high-v.low);

    var crudetickarray = {"open" : v.open ,"low" :v.low ,"high" :v.high , "close" : v.close ,"tickType" :crudetickType ,'tickLength' : crudetickLength , 'date' : v.date};
    
    d.props.addTickData(crudetickarray);


})

}
              
            }           


      componentDidMount(){
                 let base_url = window.location.host ;
                 localStorage.setItem('token', this.getUrlParameter('request_token'));
                 this.setState({token : this.getUrlParameter('request_token')});                 
            }

            onTick(ticks) {
                       console.log("Ticks", ticks);
               }

            onConnect(d) {
                d.subscribe([53718791]);
                d.setMode(d.modeFull, [53718791]);
              }

            getUrlParameter = (name) => {
                   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                   let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                   let results = regex.exec(window.location.search);
                   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            };

           

componentWillReceiveProps(nextProps) {

// testing/////
   

          


  //new code for placing order ends here

  
  let len = nextProps.tickCombo.length-1;

  
  if((this.props.tickCombo)!=undefined){

     if((nextProps.tickCombo).length >= 1){ 
      
      if(nextProps.tickCombo[len].pivot != undefined ){

       //crude oil
        if(this.state.pivotpoint != nextProps.tickCombo[len].pivot){ 
                      
                this.setState({pivotpoint: nextProps.tickCombo[len].pivot});
                let datainput = {x : count , y :  nextProps.tickCombo[len].pivot ,dir : nextProps.tickCombo[len].dir , date: nextProps.tickCombo[len].date };
               
                  //debugger;  
                this.props.pivotData(datainput);
                count = count +1;
        }      
      }         
     }
  }  


  
  if((this.props.trendData)!=undefined && this.props.trendData.length > 1){

    //debugger;
    var trenlen = this.props.trendData.length-1;
   // debugger;

     if(trenlen > 1){ 

      if(this.props.trendData[trenlen].TradeStarted == "upsell" && crudeshorttrade == false){
      //debugger;
      alert('up sell crude');
      this.startTrade('CRUDEOIL18AUGFUT', 'MCX','SELL' );

      crudeshorttrade = true;

      }


      if(this.props.trendData[trenlen].TradeStarted == "downbuy"  && crudelongtrade == false ){
     // debugger;
        alert('down buy crude');
        this.startTrade('CRUDEOIL18AUGFUT', 'MCX','BUY' );
         crudelongtrade = true;


      }
      
     // if(this.props.trendData[trenlen].TimeToEnter  != undefined && this.props.trendData[trenlen].TradeStarted != undefined){
        if( this.props.trendData[trenlen].TradeStarted == "upsell" && crudeshorttrade == false){
          this.setState({crudeshorttrade : true});
          this.startTrade('CRUDEOIL18AUGFUT', 'MCX','SELL' );
        }

       if( this.props.trendData[trenlen].TradeStarted == "downbuy" && crudelongtrade == false){
          this.setState({crudelongtrade : true});
          this.startTrade('CRUDEOIL18AUGFUT' , 'MCX' ,'BUY');
        }   
           
     }
  }  

 //write condition to enter the trade  
      

//nifty end

//niftyyyyyy
 let niftylen = nextProps.tickComboNifty.length-1;
  
  if((this.props.tickComboNifty)!=undefined){

     if((nextProps.tickComboNifty).length >= 1){ 
      
      if(nextProps.tickComboNifty[niftylen].pivot != undefined ){
         //nifty
        if(this.state.pivotpointNifty != nextProps.tickComboNifty[niftylen].pivot){                     
               this.setState({pivotpointNifty: nextProps.tickComboNifty[niftylen].pivot});
               let datainputnifty = {x : countnifty , y :  nextProps.tickComboNifty[niftylen].pivot ,dir : nextProps.tickComboNifty[niftylen].dir};
               this.props.pivotDataNifty(datainputnifty);
               countnifty = countnifty +1;
        }    
      }    
     }
  } 


  if((this.props.trendDataNifty)!=undefined  &&  this.props.trendDataNifty.length > 0){

     var trenlen = this.props.trendDataNifty.length-1;

     if(trenlen > 1){ 
     
     //if(this.props.trendDataNifty[trenlen].TimeToEnter  != undefined && this.props.trendDataNifty[trenlen].TradeStarted != undefined){

        if(this.props.trendDataNifty[trenlen].TradeStarted == "upsell"  && this.state.niftyshorttrade == false){
              alert('down sell start karo');
              this.setState({niftyshorttrade : true});
              this.startTrade('NIFTY18AUGFUT','MCX','SELL');
        }

         //write condition to enter the trade
       if(this.props.trendDataNifty[trenlen].TradeStarted == "downbuy"  && this.state.niftylongtrade == false){
              alert('down buy start karo');
              this.setState({niftylongtrade : true});
              this.startTrade('NIFTY18AUGFUT' ,'MCX' ,'BUY');
        }
       
       

     }

   }




    
      
    
//////////

  let nicklelen = nextProps.tickCombonickle.length-1;
  
  if((this.props.tickCombonickle)!=undefined){

     if((nextProps.tickCombonickle).length >= 1){ 
      
      if(nextProps.tickCombonickle[nicklelen].pivot != undefined ){
       
        if(this.state.pivotpointnickle != nextProps.tickCombonickle[nicklelen].pivot){                     
               this.setState({pivotpointnickle: nextProps.tickCombonickle[nicklelen].pivot});
               let datainputnickle = {x : countnickle , y :  nextProps.tickCombonickle[nicklelen].pivot ,dir : nextProps.tickCombonickle[nicklelen].dir};
               this.props.pivotDataNickle(datainputnickle);
               countnickle = countnickle +1;
        }    
      }  
     }
  } 

  if((this.props.trendDataNickle)!=undefined &&  this.props.trendDataNickle.length > 0){

     var trenlen = this.props.trendDataNickle.length-1;
     //debugger;

     if(trenlen > 1){
           //write condition to enter the trade

      if(this.props.trendDataNickle[trenlen].TradeStarted == "upsell" ){
      //debugger;
      alert('up sell nickle');
      this.startTrade('NICKLE18AUGFUT', 'MCX','SELL' );

      }


      if(this.props.trendDataNickle[trenlen].TradeStarted == "downbuy" ){
     // debugger;
        alert('down buy NICKLE');
        this.startTrade('NICKLE18AUGFUT', 'MCX','BUY' );

      }
          

     // if(this.props.trendDataNickle[trenlen].TimeToEnter != undefined && this.props.trendDataNickle[trenlen].TradeStarted != undefined ){
         if(this.props.trendDataNickle[trenlen].TradeStarted == "upsell"  && this.state.nickleshorttrade == false){
              alert('down sell start karo');
              this.setState({nickleshorttrade : true});
              this.startTrade('NICKLE18AUGFUT','MCX-FUT' ,"SELL");
        }

         //write condition to enter the trade
       if(this.props.trendDataNickle[trenlen].TradeStarted == "downbuy"  && this.state.nicklelongtrade == false){
              alert('down buy start karo');
              this.setState({nicklelongtrade : true});
              this.startTrade('NICKLE18AUGFUT' ,'MCX-FUT' , 'BUY');
        }

     
      
      }

   }
}

startTrade(data, exchange , type){

//alert('trade');

          //code to set and get the data
            var api_key = "3iciz5hhzaiitjkj",
             secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
             request_token = this.state.token;
             let access_token = ''; 

             var options = {
               "api_key": api_key,
               "debug": false,
               "access_token" : access_token_const,
             };   

             let kc = new KiteConnect(options);

             kc.placeOrder("regular", {
               "exchange": exchange,
               "tradingsymbol": data,
               "transaction_type": type,
               "quantity": 100,
               "product": "MIS",
               "order_type": "MARKET"
             }).then(function(resp) { 
              alert('success order placed');
                console.log(resp);
              }).catch(function(err) {
                alert('error is palcing order');
                console.log(err);
             }); 
    //code to set and get the data   */ 



}


   newWebsocketMETHOD(){
              var self  = this;
              //debugger;
             // alert(this.state.tickdata);
            var root = "wss://ws.kite.trade/";
    //var self = this.state;
    var read_timeout = 5, // seconds
    reconnect_max_delay = 0,
    reconnect_max_tries = 0,

    // message flags (outgoing)
    mSubscribe = "subscribe",
    mUnSubscribe = "unsubscribe",
    mSetMode = "mode",

    // incoming
    mAlert = 10,
    mMessage = 11,
    mLogout = 12,
    mReload = 13,
    mClearCache = 14,

    // public constants
    modeFull  = "full", // Full quote including market depth. 164 bytes.
    modeQuote = "quote", // Quote excluding market depth. 52 bytes.
    modeLTP   = "ltp";

  // public constants
  /**
   * @memberOf KiteTicker
   * @desc Set mode full
   */
  this.modeFull = modeFull;

  /**
   * @memberOf KiteTicker
   * @desc Set mode quote
   */
  this.modeQuote = modeQuote;

  /**
   * @memberOf KiteTicker
   * @desc Set mode LTP
   */
  this.modeLTP = modeLTP;

  var ws = null,
    triggers = {"connect": [],
          "ticks": [],
          "disconnect": [],
          "error": [],
          "close": [],
          "reconnect": [],
          "noreconnect": [],
          "message": [],
          "order_update": []},
    read_timer = null,
    last_read = 0,
    reconnect_timer = null,
    auto_reconnect = false,
    current_reconnection_count = 0,
    last_reconnect_interval = 0;
    var current_ws_url = null,
    token_modes = {},
    defaultReconnectMaxDelay = 60,
    defaultReconnectMaxRetries = 50,
    maximumReconnectMaxRetries = 300,
    minimumReconnectMaxDelay = 5;

  // segment constants
  var NseCM = 1,
    NseFO = 2,
    NseCD = 3,
    BseCM = 4,
    BseFO = 5,
    BseCD = 6,
    McxFO = 7,
    McxSX = 8,
    Indices = 9;

    var tickcount = 0,
    ticklow = 0,
    tickhigh = 0,
    tickopen = 0,
    tickarray =[],
    tickType =0,
    tickLength = 0,
    tickclose = 0;


     var niftytickcount = 0,
    niftyticklow = 0,
    niftytickhigh = 0,
    niftytickopen = 0,
    niftytickarray =[],
    niftytickType =0,
    niftytickLength = 0,
    niftytickclose = 0;


     var crudetickcount = 0,
    crudeticklow = 0,
    crudetickhigh = 0,
    crudetickopen = 0,
    crudetickarray =[],
    crudetickType =0,
    crudetickLength = 0,
    crudetickclose = 0;

    var coppertickcount = 0,
    copperticklow = 0,
    coppertickhigh = 0,
    coppertickopen = 0,
    coppertickarray =[],
    coppertickType =0,
    coppertickLength = 0,
    coppertickclose = 0;

     var nickletickcount = 0,
    nickleticklow = 0,
    nickletickhigh = 0,
    nickletickopen = 0,
    nickletickarray =[],
    nickletickType =0,
    nickletickLength = 0,
    nickletickclose = 0;


 var silvertickcount = 0,
    silverticklow = 0,
    silvertickhigh = 0,
    silvertickopen = 0,
    silvertickarray =[],
    silvertickType =0,
    silvertickLength = 0,
    silvertickclose = 0;

 var first = 0;






  

    this.connect = function() {

       alert(access_token_const);
       

    // debugger;
      
      var self  = this;

        setInterval(function(){
            getCrudeOHLC(self);
       }, 300000);



    //  debugger;
              let  WSS_ROOT_URL = 'wss://ws.kite.trade?api_key=3iciz5hhzaiitjkj&access_token=';
             // let accessdata = this.props.access.access_token.access_token;
              var ws = new WebSocket(`${WSS_ROOT_URL}${access_token_const}`);
              //alert(accessdata);

              ws.onclose = function(){

              }

               ws.onopen = function (event) {
                   var message = {"a": "subscribe", "v": [53835015,12111106,53801479]};
                   ws.send(JSON.stringify(message));
              };

               ws.binaryType = "arraybuffer";

               ws.onmessage = function(e) {
      // Binary tick data.
              if(e.data instanceof ArrayBuffer) {
                 if(e.data.byteLength > 2) {
                  
          var d = parseBinary(e.data);
             // debugger;

              for (var i = 0 ; i< d.length ; i++){

               //debugger;
                  if(d[i].instrument_token == "53835015"){
                      
                       get5minDataCrudeTimestamp(d[i].last_price, self);
                  }
                 if(d[i].instrument_token == "12111106"){
                     //nifty function
                          //get5minDataNifty(d[i].last_price, self);

                  }  
                  if(d[i].instrument_token == "53801479"){
                     //nifty function
                          //get5minDataNickle(d[i].last_price, self);

                  } 

                  
              }

            // get5minData(d[0].last_price, self);
         // if(d) trigger("ticks", [d]);
        }
      } else {
        parseTextMessage(e.data)
      }

      // Set last read time to check for connection timeout
      last_read = new Date();
    };


    }

//debugger;
    this.connect();

    function get5minDataCrudeTimestamp(d,scope){
      
        crudearr.push(d);

        console.log('crudearr is' + crudearr);

    }

    function getCrudeOHLC(d){
     

    // d.startTrade('CRUDEOIL18SEPFUT', 'MCX','SELL' );

       crudetickopen = crudearr[0];
       crudetickhigh = _.maxBy(crudearr);
       crudeticklow = _.minBy(crudearr);
       crudetickclose= crudearr[crudearr.length-1];

       if(crudetickopen < crudetickclose){
         crudetickType ="green";
     }
    else if(crudetickopen > crudetickclose){
          crudetickType ="red";
    }
    else if(crudetickopen = crudetickclose){
          crudetickType ="doji";
    }

    crudetickLength = Math.abs(crudetickhigh-crudeticklow);

    crudetickarray = {"open" : crudetickopen ,"low" :crudeticklow ,"high" :crudetickhigh , "close" : crudetickclose ,"tickType" :crudetickType ,'tickLength' : crudetickLength};
    //debugger;
    d.props.addTickData(crudetickarray);


    first = 0;
    crudearr = [];


    };





   

    function get5minDataNickle(d ,scope){
     
     console.log('data' + d);

            if(nickletickcount == 0){
      nickletickopen = d;
      nickletickhigh =d;
      nickleticklow =d;
      nickletickcount = nickletickcount +1;
      //alert('next should be 1');
      //alert(tickcount);   94
     }
     else if(nickletickcount == 94){
      //alert('called');
     nickletickclose = d;
     //alert('ohlc formed');
     
     if(nickletickopen < nickletickclose){
         nickletickType ="green";
     }
    else if(nickletickopen > nickletickclose){
          nickletickType ="red";
    }
    else if(nickletickopen = nickletickclose){
          nickletickType ="doji";
    }

     nickletickLength = Math.abs(nickletickhigh-nickleticklow);
    
     nickletickarray = {"open" : nickletickopen ,"low" :nickleticklow ,"high" :nickletickhigh , "close" : nickletickclose ,"tickType" :nickletickType ,'tickLength' : nickletickLength};
    
     scope.props.addTickDataNickle(nickletickarray);
     nickletickcount = 0;
     }
     else{
         if(nickletickhigh <d){
            nickletickhigh = d;
         }
         if(nickleticklow>d){
             nickleticklow = d;
         }

          nickletickcount = nickletickcount +1;

     }


    }

    function get5minDataNifty(d ,scope){
     
    


           if(niftytickcount == 0){
      niftytickopen = d;
      niftytickhigh =d;
      niftyticklow =d;
      niftytickcount = niftytickcount +1;
      //alert('next should be 1');
      //alert(tickcount);
     }
     else if(niftytickcount == 2){
     niftytickclose = d;
     //alert('ohlc formed');
     
     if(niftytickopen < niftytickclose){
         niftytickType ="green";
     }
    else if(tickopen > tickclose){
          niftytickType ="red";
    }
    else if(tickopen = tickclose){
          niftytickType ="doji";
    }

     niftytickLength = Math.abs(niftytickhigh-niftyticklow);
    
     niftytickarray = {"open" : niftytickopen ,"low" :niftyticklow ,"high" :niftytickhigh , "close" : niftytickclose ,"tickType" :niftytickType ,'tickLength' : niftytickLength};
    
     scope.props.addTickDataNifty(niftytickarray);
     niftytickcount = 0;
     }
     else{
         if(niftytickhigh <d){
            niftytickhigh = d;
         }
         if(niftyticklow>d){
             niftyticklow = d;
         }

          niftytickcount =niftytickcount +1;

     }


    }




    function get5minData(d ,scope){
     
     if(tickcount == 0){
      tickopen = d;
      tickhigh =d;
      ticklow =d;
      tickcount =tickcount +1;
      //alert('next should be 1');
      //alert(tickcount);
     }
     else if(tickcount == 94){
     tickclose = d;
     //alert('ohlc formed');
     
     if(tickopen < tickclose){
         tickType ="green";
     }
    else if(tickopen > tickclose){
          tickType ="red";
    }
    else if(tickopen = tickclose){
          tickType ="doji";
    }

     tickLength = Math.abs(tickhigh-ticklow);
    
     tickarray = {"open" : tickopen ,"low" :ticklow ,"high" :tickhigh , "close" : tickclose ,"tickType" :tickType ,'tickLength' : tickLength};
    
     scope.props.addTickData(tickarray);
     tickcount = 0;
     }
     else{
         if(tickhigh <d){
            tickhigh = d;
         }
         if(ticklow>d){
             ticklow = d;
         }

          tickcount =tickcount +1;

     }

    }


    // trigger event callbacks
  function trigger(e, args) {
    if (!triggers[e]) return
    for(var n=0; n<triggers[e].length; n++) {
      triggers[e][n].apply(triggers[e][n], args ? args : []);
    }
  }

  function parseTextMessage(data) {
        try {
            data = JSON.parse(data)
    } catch (e) {
      return
    }

    if (data.type === "order") {
      trigger("order_update", [data.data]);
    }
  }

  // parse received binary message. each message is a combination of multiple tick packets
  // [2-bytes num packets][size1][tick1][size2][tick2] ...
  function parseBinary(binpacks) {
   
    var packets = splitPackets(binpacks),
      ticks = [];

    for(var n=0; n<packets.length; n++) {
      var bin = packets[n],
        instrument_token = buf2long(bin.slice(0, 4)),
        segment = instrument_token & 0xff;

      var tradable = true;
      if (segment === Indices) tradable = false;

      var divisor = 100.0;
      if (segment === NseCD) divisor = 10000000.0;

      // Parse LTP
      if (bin.byteLength === 8) {
        ticks.push({
          tradable: tradable,
          mode: modeLTP,
          instrument_token: instrument_token,
          last_price: buf2long(bin.slice(4,8)) / divisor
        });
      // Parse indices quote and full mode
      } else if (bin.byteLength === 28 || bin.byteLength === 32) {
        var mode = modeQuote;
        if (bin.byteLength === 32) mode = modeFull;
      
                var tick = {
                    tradable: tradable,
                    mode: mode,
                    instrument_token: instrument_token,
                    last_price: buf2long(bin.slice(4,8)) / divisor,
                    ohlc: {
                        high: buf2long(bin.slice(8, 12)) / divisor,
                        low: buf2long(bin.slice(12, 16)) / divisor,
                        open: buf2long(bin.slice(16, 20)) / divisor,
                        close: buf2long(bin.slice(20, 24)) / divisor,
          },
          change: buf2long(bin.slice(24, 28))
        };

                // Compute the change price using close price and last price
                if(tick.ohlc.close != 0) {
                    tick.change = (tick.last_price - tick.ohlc.close) * 100 / tick.ohlc.close;
        }

                // Full mode with timestamp in seconds
                if (bin.byteLength === 32) {
          tick.timestamp = null;
          var timestamp = buf2long(bin.slice(28, 32));
          if (timestamp) tick.timestamp = new Date(timestamp);
        }

        ticks.push(tick);
      } else if (bin.byteLength === 44 || bin.byteLength === 184) {
        var mode = modeQuote;
        if (bin.byteLength === 184) mode = modeFull;

          var ticktype ='';

        if((buf2long(bin.slice(28, 32)) / divisor)>(buf2long(bin.slice(40, 44)) / divisor)){
            ticktype ="green";
        }
        else if((buf2long(bin.slice(40, 44)) / divisor)> (buf2long(bin.slice(28, 32)) / divisor)){
             ticktype ="red";
        }
        else if ((buf2long(bin.slice(28, 32)) / divisor) == (buf2long(bin.slice(40, 44)) / divisor)){
             ticktype ="doji";
        }


                   // alert(ticktype);


        var tick = {
                    tradable: tradable,
                    mode: mode,
                    instrument_token: instrument_token,
                    last_price: buf2long(bin.slice(4, 8)) / divisor,
                    last_quantity: buf2long(bin.slice(8, 12)),
                    average_price: buf2long(bin.slice(12, 16)) / divisor,
                    volume: buf2long(bin.slice(16, 20)),
                    buy_quantity: buf2long(bin.slice(20, 24)),
                    sell_quantity: buf2long(bin.slice(24, 28)),
                    ohlc: {
                        open: buf2long(bin.slice(28, 32)) / divisor,
                        high: buf2long(bin.slice(32, 36)) / divisor,
                        low: buf2long(bin.slice(36, 40)) / divisor,
                        close: buf2long(bin.slice(40, 44)) / divisor,                        
                        ticktype : ticktype,
                    }
        };

                // Compute the change price using close price and last price
                if (tick.ohlc.close != 0) {
                    tick.change = (tick.last_price - tick.ohlc.close) * 100 / tick.ohlc.close;
        }

        // Parse full mode
        if (bin.byteLength === 184) {
          // Parse last trade time
          tick.last_trade_time = null;
          var last_trade_time = buf2long(bin.slice(44, 48));
          if (last_trade_time) tick.last_trade_time = new Date(last_trade_time * 1000);

          // Parse timestamp
          tick.timestamp = null;
          var timestamp = buf2long(bin.slice(60, 64));
          if (timestamp) tick.timestamp = new Date(timestamp * 1000);

          // Parse OI
          tick.oi = buf2long(bin.slice(48, 52));
                    tick.oi_day_high = buf2long(bin.slice(52, 56));
          tick.oi_day_low = buf2long(bin.slice(56, 60));
          tick.depth = {
            buy: [],
            sell: []
          };

          var s = 0, depth = bin.slice(64, 184);
          for (var i=0; i<10; i++) {
            s = i * 12;
            tick.depth[i < 5 ? "buy" : "sell"].push({
              quantity: buf2long(depth.slice(s, s + 4)),
              price:    buf2long(depth.slice(s + 4, s + 8)) / divisor,
              orders:   buf2long(depth.slice(s + 8, s + 10))
            });
          }
        }

        ticks.push(tick);
      }
    }

    return ticks;
  }

  // split one long binary message into individual tick packets
  function splitPackets(bin) {
    // number of packets
    var num = buf2long(bin.slice(0, 2)),
      j = 2,
      packets = [];

    for(var i=0; i<num; i++) {
      // first two bytes is the packet length
      var size = buf2long(bin.slice(j, j+2)),
        packet = bin.slice(j+2, j+2+size);

      packets.push(packet);

      j += 2 + size;
    }

    return packets;
  }

 
  // Big endian byte array to long.
  function buf2long(buf) {
    var b = new Uint8Array(buf),
      val = 0,
      len = b.length;

    for(var i=0, j=len-1; i<len; i++, j--) {
      val += b[j] << (i*8);
    }

    return val;
  }





            }

              


 

            startCountingTick(){
              alert('called');
            }

            startWebsocketClient(){

             //  alert('called');
              //alert(this.props.access);KiteTicker("your_api_key", "your_access_token")
              let  SIGNIN_ROOT_URL = 'token ypmxayteat7agml9:';
                let accessdata = this.props.access;

              var headers = {
                        'X-Kite-Version': '3',
                        'Authorization': `${SIGNIN_ROOT_URL}${accessdata}`,
                };

     

          var data = {
                        'api_key': '3iciz5hhzaiitjkj',
                        'access_token': this.props.access,
                };



              var ticker = new KiteTicker(data ,headers);  

                  ticker.connect();
                  ticker.on("tick", this.onTick(ticker));
                  ticker.on("connect", this.onConnect(ticker));
            }

      render(){

        return(
           <div>        
                

             <p>Congratulation we got the session key as {this.state.token}</p>

             <p>Congrats first job done. Now we have to call websocket client</p>

             <p>Call websocket client with sesion key</p>

             <button onClick = {() => this.startGeneratingServerSession()} >Call Websocket client</button>
            

                    {
                      (this.props.access != '' &&  this.props.access != undefined )
                        ?  <button onClick = {() => this.newWebsocketMETHOD()} >Start websocket client</button>
                        : ''
                    } 

<div class="container">
    
 

              <div class="row">
                  1 {
                      (  this.props.tickCombo != undefined  &&  this.props.tickCombo.length >=1)
                        ?  <div class="col-md-3"> <KitePlot title="Crude" plotdata ={this.props.tickCombo}/> </div>
                        : ''
                    } 

                    {
                      (  this.props.trendData != undefined  &&  this.props.trendData.length >=1)
                        ?  <div class="col-md-8"> <LineApp  title = "Crude1" plotdata ={this.props.trendData}/></div>
                        : ''
                    } 
              </div>

               <div class="row">
                   {
                      (  this.props.tickComboNifty != undefined  &&  this.props.tickComboNifty.length >=1)
                        ?   <div class="col-md-3">  <KitePlot title="Nifty" plotdata ={this.props.tickComboNifty}/> </div>
                        : ''
                    } 

                    {
                       (  this.props.trendDataNifty != undefined  &&  this.props.trendDataNifty.length >=1)
                        ?    <div class="col-md-8"> <LineApp  title = "Nifty1" plotdata ={this.props.trendDataNifty}/></div>
                        : ''
                    } 
              </div>

               <div class="row">
                   {
                      (  this.props.tickCombonickle != undefined  &&  this.props.tickCombonickle.length >=1)
                        ?   <div class="col-md-3">  <KitePlot title="Nickle" plotdata ={this.props.tickCombonickle}/> </div>
                        : ''
                    } 

                    {
                       (  this.props.trendDataNickle != undefined  &&  this.props.trendDataNickle.length >=1)
                        ?    <div class="col-md-8"> <LineApp  title = "Nickle1" plotdata ={this.props.trendDataNickle}/></div>
                        : ''
                    } 
              </div>



 </div>
              

            </div>)
        }
    }


  function mapStateToProps(state){
      return  {
         access : state.access ,  
         tickCombo : state.tickData, 
         trendData : state.plData,
         tickComboNifty : state.tickDataNifty, 
         trendDataNifty : state.plDataNifty,
         trendDataNickle : state.plDataNickle,
         tickCombonickle : state.tickDataNickle,
       }
    };

    export default withRouter(connect(mapStateToProps,{getAcessToken,addTickData,pivotData,addTickDataNifty,pivotDataNifty ,addTickDataNickle ,pivotDataNickle})(LoginNav));

