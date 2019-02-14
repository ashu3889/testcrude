import React, {
    Component
} from 'react';
import {
    connect
} from "react-redux";
import {
    KiteTicker
} from 'kiteconnect';
import {
        addTickData,
        pivotData,
        pivotDatacopper,
        addTickDatacopper,
        pivotDatabanknifty,
        addTickDatabanknifty,
        pivotDatabosch,
        addTickDatabosch,
        addTickDatacadila,
        pivotDatacadila,
        addTickDatacipla,
        pivotDatacipla,
        addTickDatacoal,
        pivotDatacoal,
        addTickDataconcor,
        pivotDataconcor,
        addTickDatacummsind,
        pivotDatacummsind,
        addTickDatadabur,
        pivotDatadabur,
        addTickDatadhfl,
        pivotDatadhfl,
        addTickDataemami,
        pivotDataemami,
        addTickDatagail,
        pivotDatagail,
        addTickDatahavells,
        pivotDatahavells,
        addTickDatahdfc,
        pivotDatahdfc,
        addTickDatahindzinc,
        pivotDatahindzinc,
        addTickDatainfratel,
        pivotDatainfratel,
        addTickDatareddy,
        pivotDatareddy,
        addTickDatareliance,
        pivotDatareliance,
        addTickDatasbin,
        pivotDatasbin,
        addTickDataseimens,
        pivotDataseimens,
        addTickDatatcs,
        pivotDatatcs,
        addTickDataunilever,
        pivotDataunilever,
    
} from '../action/action.js';
import {
    withRouter
} from "react-router-dom";
import KitePlot from './plot.js';
import LineApp from './lineplot.js';
import * as KiteConnect from './connect.js';
import _ from "lodash";
import axios from 'axios';
import {ducasoft} from './ducasoft.js';
import {crudedata} from './data.js';


//main changes
//safeTrailMimimumTarget


String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};


var traderJiCrude =  [];


var dataSet;
var val = 1;


//ALL NEW SARTS HERE

var crude_currentSwingDirection = '' ;
var crude_prevCandleMarumbo = '';
var crude_marumboThresholdHigh = 0;
var crude_marumboThresholdLow = 0;
var crude_prevCandleHeight = [];
var crude_count = 0;
var crudearr = [];
var crudetickcount = 0,
    crudeticklow = 0,
    crudetickhigh = 0,
    crudetickopen = 0,
    crudetickarray = [],
    crudetickType = 0,
    crudetickLength = 0,
    crudetickclose = 0;


    var copper_currentSwingDirection = '' ;
var copper_prevCandleMarumbo = '';
var copper_marumboThresholdHigh = 0;
var copper_marumboThresholdLow = 0;
var copper_prevCandleHeight = [];
var copper_count = 0;
var copperarr = [];
var coppertickcount = 0,
    copperticklow = 0,
    coppertickhigh = 0,
    coppertickopen = 0,
    coppertickarray = [],
    coppertickType = 0,
    coppertickLength = 0,
    coppertickclose = 0;


  var banknifty_currentSwingDirection = '' ;
var banknifty_prevCandleMarumbo = '';
var banknifty_marumboThresholdHigh = 0;
var banknifty_marumboThresholdLow = 0;
var banknifty_prevCandleHeight = [];
var banknifty_count = 0;
var bankniftyarr = [];
var bankniftytickcount = 0,
    bankniftyticklow = 0,
    bankniftytickhigh = 0,
    bankniftytickopen = 0,
    bankniftytickarray = [],
    bankniftytickType = 0,
    bankniftytickLength = 0,
    bankniftytickclose = 0;

      var bosch_currentSwingDirection = '' ;
var bosch_prevCandleMarumbo = '';
var bosch_marumboThresholdHigh = 0;
var bosch_marumboThresholdLow = 0;
var bosch_prevCandleHeight = [];
var bosch_count = 0;
var boscharr = [];
var boschtickcount = 0,
    boschticklow = 0,
    boschtickhigh = 0,
    boschtickopen = 0,
    boschtickarray = [],
    boschtickType = 0,
    boschtickLength = 0,
    boschtickclose = 0;

      var cadila_currentSwingDirection = '' ;
var cadila_prevCandleMarumbo = '';
var cadila_marumboThresholdHigh = 0;
var cadila_marumboThresholdLow = 0;
var cadila_prevCandleHeight = [];
var cadila_count = 0;
var cadilaarr = [];
var cadilatickcount = 0,
    cadilaticklow = 0,
    cadilatickhigh = 0,
    cadilatickopen = 0,
    cadilatickarray = [],
    cadilatickType = 0,
    cadilatickLength = 0,
    cadilatickclose = 0;

      var cipla_currentSwingDirection = '' ;
var cipla_prevCandleMarumbo = '';
var cipla_marumboThresholdHigh = 0;
var cipla_marumboThresholdLow = 0;
var cipla_prevCandleHeight = [];
var cipla_count = 0;
var ciplaarr = [];
var ciplatickcount = 0,
    ciplaticklow = 0,
    ciplatickhigh = 0,
    ciplatickopen = 0,
    ciplatickarray = [],
    ciplatickType = 0,
    ciplatickLength = 0,
    ciplatickclose = 0;

      var coal_currentSwingDirection = '' ;
var coal_prevCandleMarumbo = '';
var coal_marumboThresholdHigh = 0;
var coal_marumboThresholdLow = 0;
var coal_prevCandleHeight = [];
var coal_count = 0;
var coalarr = [];
var coaltickcount = 0,
    coalticklow = 0,
    coaltickhigh = 0,
    coaltickopen = 0,
    coaltickarray = [],
    coaltickType = 0,
    coaltickLength = 0,
    coaltickclose = 0;

      var concor_currentSwingDirection = '' ;
var concor_prevCandleMarumbo = '';
var concor_marumboThresholdHigh = 0;
var concor_marumboThresholdLow = 0;
var concor_prevCandleHeight = [];
var concor_count = 0;
var concorarr = [];
var concortickcount = 0,
    concorticklow = 0,
    concortickhigh = 0,
    concortickopen = 0,
    concortickarray = [],
    concortickType = 0,
    concortickLength = 0,
    concortickclose = 0;


      var cummsind_currentSwingDirection = '' ;
var cummsind_prevCandleMarumbo = '';
var cummsind_marumboThresholdHigh = 0;
var cummsind_marumboThresholdLow = 0;
var cummsind_prevCandleHeight = [];
var cummsind_count = 0;
var cummsindarr = [];
var cummsindtickcount = 0,
    cummsindticklow = 0,
    cummsindtickhigh = 0,
    cummsindtickopen = 0,
    cummsindtickarray = [],
    cummsindtickType = 0,
    cummsindtickLength = 0,
    cummsindtickclose = 0;

      var dabur_currentSwingDirection = '' ;
var dabur_prevCandleMarumbo = '';
var dabur_marumboThresholdHigh = 0;
var dabur_marumboThresholdLow = 0;
var dabur_prevCandleHeight = [];
var dabur_count = 0;
var daburarr = [];
var daburtickcount = 0,
    daburticklow = 0,
    daburtickhigh = 0,
    daburtickopen = 0,
    daburtickarray = [],
    daburtickType = 0,
    daburtickLength = 0,
    daburtickclose = 0;

      var dhfl_currentSwingDirection = '' ;
var dhfl_prevCandleMarumbo = '';
var dhfl_marumboThresholdHigh = 0;
var dhfl_marumboThresholdLow = 0;
var dhfl_prevCandleHeight = [];
var dhfl_count = 0;
var dhflarr = [];
var dhfltickcount = 0,
    dhflticklow = 0,
    dhfltickhigh = 0,
    dhfltickopen = 0,
    dhfltickarray = [],
    dhfltickType = 0,
    dhfltickLength = 0,
    dhfltickclose = 0;

      var emami_currentSwingDirection = '' ;
var emami_prevCandleMarumbo = '';
var emami_marumboThresholdHigh = 0;
var emami_marumboThresholdLow = 0;
var emami_prevCandleHeight = [];
var emami_count = 0;
var emamiarr = [];
var emamitickcount = 0,
    emamiticklow = 0,
    emamitickhigh = 0,
    emamitickopen = 0,
    emamitickarray = [],
    emamitickType = 0,
    emamitickLength = 0,
    emamitickclose = 0;

      var gail_currentSwingDirection = '' ;
var gail_prevCandleMarumbo = '';
var gail_marumboThresholdHigh = 0;
var gail_marumboThresholdLow = 0;
var gail_prevCandleHeight = [];
var gail_count = 0;
var gailarr = [];
var gailtickcount = 0,
    gailticklow = 0,
    gailtickhigh = 0,
    gailtickopen = 0,
    gailtickarray = [],
    gailtickType = 0,
    gailtickLength = 0,
    gailtickclose = 0;


      var havells_currentSwingDirection = '' ;
var havells_prevCandleMarumbo = '';
var havells_marumboThresholdHigh = 0;
var havells_marumboThresholdLow = 0;
var havells_prevCandleHeight = [];
var havells_count = 0;
var havellsarr = [];
var havellstickcount = 0,
    havellsticklow = 0,
    havellstickhigh = 0,
    havellstickopen = 0,
    havellstickarray = [],
    havellstickType = 0,
    havellstickLength = 0,
    havellstickclose = 0;


      var hdfc_currentSwingDirection = '' ;
var hdfc_prevCandleMarumbo = '';
var hdfc_marumboThresholdHigh = 0;
var hdfc_marumboThresholdLow = 0;
var hdfc_prevCandleHeight = [];
var hdfc_count = 0;
var hdfcarr = [];
var hdfctickcount = 0,
    hdfcticklow = 0,
    hdfctickhigh = 0,
    hdfctickopen = 0,
    hdfctickarray = [],
    hdfctickType = 0,
    hdfctickLength = 0,
    hdfctickclose = 0;

var hindzinc_currentSwingDirection = '' ;
var hindzinc_prevCandleMarumbo = '';
var hindzinc_marumboThresholdHigh = 0;
var hindzinc_marumboThresholdLow = 0;
var hindzinc_prevCandleHeight = [];
var hindzinc_count = 0;
var hindzincarr = [];
var hindzinctickcount = 0,
    hindzincticklow = 0,
    hindzinctickhigh = 0,
    hindzinctickopen = 0,
    hindzinctickarray = [],
    hindzinctickType = 0,
    hindzinctickLength = 0,
    hindzinctickclose = 0;

      var infratel_currentSwingDirection = '' ;
var infratel_prevCandleMarumbo = '';
var infratel_marumboThresholdHigh = 0;
var infratel_marumboThresholdLow = 0;
var infratel_prevCandleHeight = [];
var infratel_count = 0;
var infratelarr = [];
var infrateltickcount = 0,
    infratelticklow = 0,
    infrateltickhigh = 0,
    infrateltickopen = 0,
    infrateltickarray = [],
    infrateltickType = 0,
    infrateltickLength = 0,
    infrateltickclose = 0;

      var reddy_currentSwingDirection = '' ;
var reddy_prevCandleMarumbo = '';
var reddy_marumboThresholdHigh = 0;
var reddy_marumboThresholdLow = 0;
var reddy_prevCandleHeight = [];
var reddy_count = 0;
var reddyarr = [];
var reddytickcount = 0,
    reddyticklow = 0,
    reddytickhigh = 0,
    reddytickopen = 0,
    reddytickarray = [],
    reddytickType = 0,
    reddytickLength = 0,
    reddytickclose = 0;

      var reliance_currentSwingDirection = '' ;
var reliance_prevCandleMarumbo = '';
var reliance_marumboThresholdHigh = 0;
var reliance_marumboThresholdLow = 0;
var reliance_prevCandleHeight = [];
var reliance_count = 0;
var reliancearr = [];
var reliancetickcount = 0,
    relianceticklow = 0,
    reliancetickhigh = 0,
    reliancetickopen = 0,
    reliancetickarray = [],
    reliancetickType = 0,
    reliancetickLength = 0,
    reliancetickclose = 0;

      var sbin_currentSwingDirection = '' ;
var sbin_prevCandleMarumbo = '';
var sbin_marumboThresholdHigh = 0;
var sbin_marumboThresholdLow = 0;
var sbin_prevCandleHeight = [];
var sbin_count = 0;
var sbinarr = [];
var sbintickcount = 0,
    sbinticklow = 0,
    sbintickhigh = 0,
    sbintickopen = 0,
    sbintickarray = [],
    sbintickType = 0,
    sbintickLength = 0,
    sbintickclose = 0;


      var seimens_currentSwingDirection = '' ;
var seimens_prevCandleMarumbo = '';
var seimens_marumboThresholdHigh = 0;
var seimens_marumboThresholdLow = 0;
var seimens_prevCandleHeight = [];
var seimens_count = 0;
var seimensarr = [];
var seimenstickcount = 0,
    seimensticklow = 0,
    seimenstickhigh = 0,
    seimenstickopen = 0,
    seimenstickarray = [],
    seimenstickType = 0,
    seimenstickLength = 0,
    seimenstickclose = 0;


      var tcs_currentSwingDirection = '' ;
var tcs_prevCandleMarumbo = '';
var tcs_marumboThresholdHigh = 0;
var tcs_marumboThresholdLow = 0;
var tcs_prevCandleHeight = [];
var tcs_count = 0;
var tcsarr = [];
var tcstickcount = 0,
    tcsticklow = 0,
    tcstickhigh = 0,
    tcstickopen = 0,
    tcstickarray = [],
    tcstickType = 0,
    tcstickLength = 0,
    tcstickclose = 0;


  var unilever_currentSwingDirection = '' ;
var unilever_prevCandleMarumbo = '';
var unilever_marumboThresholdHigh = 0;
var unilever_marumboThresholdLow = 0;
var unilever_prevCandleHeight = [];
var unilever_count = 0;
var unileverarr = [];
var unilevertickcount = 0,
    unileverticklow = 0,
    unilevertickhigh = 0,
    unilevertickopen = 0,
    unilevertickarray = [],
    unilevertickType = 0,
    unilevertickLength = 0,
    unilevertickclose = 0;
//ALL NEW ENDS HERE



let access_token_const = 0;






let webSocketClicked = true;



export class TestLoginNav extends Component {


    constructor(props) {
        super(props);
        this.state = {
            token: '',
            timecount: 0,
            tickdata: '',
            crude_pivotpoint: 0,
            copper_pivotpoint: 0,
            minPivot: 0,
            maxPivot: 0,
            sidewaysCount: 0,
            minblackpivot: 0,
            maxblackpivot: 0,
            tradeTime: 0,
            pivotpointNifty: 0,
            crudeshorttrade: false,
            crudelongtrade: false,
            niftylongtrade: false,
            niftyshorttrade: false,
            nicklelongtrade: false,
            nickleshorttrade: false,
            pivotpointnickle: 0,
            inputValue: '', 

        }
    }

     updateInputValue(evt) {
               this.setState({
                 inputValue: evt.target.value
                });


    }

    startGeneratingServerSession() {

        //
        Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
            value: function() {
                function pad2(n) { // always returns a string
                    return (n < 10 ? '0' : '') + n;
                }

                return this.getFullYear() + '-' +
                    pad2(this.getMonth() + 1) + '-' +
                    pad2(this.getDate()) + ' ' +
                    pad2(this.getHours()) + ':' +
                    pad2(this.getMinutes()) + ':' +
                    pad2(this.getSeconds());
            }
        });


//        startTime = new Date().YYYYMMDDHHMMSS();

        Object.defineProperty(Date.prototype, 'starting', {
            value: function() {
                function pad2(n) { // always returns a string
                    return (n < 10 ? '0' : '') + n;
                }

                return this.getFullYear() + '-' +
                    pad2(this.getMonth() + 1) + '-' +
                    pad2(this.getDate()) + ' ' +
                    '10' + ':' +
                    '30' + ':' +
                    '00';
            }
        });


       // startingTime = new Date().starting();



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

        axios({
       method: 'post',
       url: 'http://localhost:4000/ashu',
       data: {
                 token: request_token
        },
       config: { headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}    
      })
  .then(function (response) {
     

      alert(response.data);

  access_token_const = response.data;


   kc.setAccessToken(response.data);

   
  })
  .catch(function (error) {
    debugger;
    console.log(error);
  });

        function initDeribitLogic(access_token_const) {

            // 

            axios.get('http://localhost:4000/ashu', {
                params: {
                    foo: access_token_const
                }
            });

        }


//v.date.substring(11,13)

        
 function init(ref) {

    var a = ref;

    dataSet.map((v, i) => {
     



   // if(i>300){

           v.open = v.open;
           v.low = v.low;
           v.close = v.close;
           v.high = v.high;
           v.tradedate = v.Local;
           traderJiCrude.push(v);
  //  }

        })


    function checkArg(...arg){
           // alert(arg.indexOf(2));

    };


checkArg(0);


            // var kitedate = '30.10.2018';
             //var kitedate = '2018-09-06';

             var kitedate= '20/09/2010';
             var kiteArray = [];

             var zerokiteArray = [];



            traderJiCrude.map((v, i) => {
                       if(v.Local.toString().beginsWith(kitedate)) {
                            kiteArray.push(v);
                        }
            });

           

            //CODE FOR HANDLING NEW DATA
            var finalArr = [];
            var start = 0;
            var end = 0;
            var detectStart = 0;
            var temparr = [];
            var oldDate = 0;
            var newDate = 0;
            var newDateStart = 0;
 

            //kiteArray.splice(0, 150);
            var newarr = kiteArray;


         
             

        }


         function getFinalMarumboData(data){

            var accounting = [];



            Object.values(data["Time Series (5min)"]).map((v ,i ) => {

                    accounting.push({ 
                         "open" : v["1. open"],
                         "high" :  v["2. high"],
                         "low"  :  v["3. low"] ,
                         "close" :  v["4. close"]
                    });
             });
            return accounting;
        }


        function getFinalData(data){

            var accounting = [];

            data.map((v ,i ) => {
                     
                    
                 
                   //var date = v.splice(0,1)[0];
                   var date = v.splice(0,1)[0];

                  // debugger;
                   var crudehigh = _.maxBy(v);
                   var crudelow = _.minBy(v);
                   var crudeopen = v[0];
                   var crudeclose = v[v.length-1];
                   

                    accounting.push({ 
                         "open" : crudeopen,
                         "high" : crudehigh,
                         "low"  : crudelow ,
                         "close" : crudeclose,
                         "date" : date,
                    });


             });
            return accounting;
        }

 



         }


    componentDidMount() {

        //alert('11');
        let base_url = window.location.host;
        localStorage.setItem('token', this.getUrlParameter('request_token'));
        this.setState({
            token: this.getUrlParameter('request_token')
        });
    }

    onTick(ticks) {
      //  alert("Ticks", ticks);
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

        let crude_len = nextProps.tickCombocrude.length - 1;

        if ((this.props.tickCombocrude) != undefined) {

            if ((nextProps.tickCombocrude).length >= 1) {


            if (crude_len > 2) {
                crude_prevCandleHeight = [];
                crude_prevCandleHeight.push(nextProps.tickCombocrude[crude_len-1].high);
                crude_prevCandleHeight.push(nextProps.tickCombocrude[crude_len-1].low);
            }


                  


            if (crude_len > 1) {

                if (nextProps.tickCombocrude[crude_len].marumbo == true){
                     crude_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocrude[crude_len].marumbo == false){
                     crude_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocrude[crude_len].pivot != undefined) {

                    //crude oil
                    if (this.state.crude_pivotpoint != nextProps.tickCombocrude[crude_len].pivot) {

                        crude_count = crude_count + 1;

                        this.setState({
                            crude_pivotpoint: nextProps.tickCombocrude[crude_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocrude[crude_len].pivot;

                        let datainput = {
                            x: crude_count,
                            y: nextProps.tickCombocrude[crude_len].pivot,
                            dir: nextProps.tickCombocrude[crude_len].dir,
                            date: nextProps.tickCombocrude[crude_len].date,
                            currentPrice: nextProps.tickCombocrude[crude_len].currentPrice,
                            tradeStatus : nextProps.tickCombocrude[crude_len].tradeStatus
                        };

                        this.props.pivotData(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacrude) != undefined && this.props.trendDatacrude.length > 1 && (nextProps.trendDatacrude) != undefined && nextProps.trendDatacrude.length >1) {
            var crude_nextPropslen = nextProps.trendDatacrude.length-1;

            if (crude_nextPropslen > 1) {
                if (nextProps.trendDatacrude[crude_nextPropslen].dir == "up"){
                     crude_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacrude[crude_nextPropslen].dir == "low"){
                     crude_currentSwingDirection = 'upSwing';
                }

            }


        }


        let copper_len = nextProps.tickCombocopper.length - 1;

        if ((this.props.tickCombocopper) != undefined) {

            if ((nextProps.tickCombocopper).length >= 1) {


            if (copper_len > 2) {
                copper_prevCandleHeight = [];
                copper_prevCandleHeight.push(nextProps.tickCombocopper[copper_len-1].high);
                copper_prevCandleHeight.push(nextProps.tickCombocopper[copper_len-1].low);
            }


                  


            if (copper_len > 1) {

                if (nextProps.tickCombocopper[copper_len].marumbo == true){
                     copper_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocopper[copper_len].marumbo == false){
                     copper_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocopper[copper_len].pivot != undefined) {

                    //copper oil
                    if (this.state.copper_pivotpoint != nextProps.tickCombocopper[copper_len].pivot) {

                        copper_count = copper_count + 1;

                        this.setState({
                            copper_pivotpoint: nextProps.tickCombocopper[copper_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocopper[copper_len].pivot;

                        let datainput = {
                            x: copper_count,
                            y: nextProps.tickCombocopper[copper_len].pivot,
                            dir: nextProps.tickCombocopper[copper_len].dir,
                            date: nextProps.tickCombocopper[copper_len].date,
                            currentPrice: nextProps.tickCombocopper[copper_len].currentPrice,
                            tradeStatus : nextProps.tickCombocopper[copper_len].tradeStatus
                        };

                        this.props.pivotDatacopper(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacopper) != undefined && this.props.trendDatacopper.length > 1 && (nextProps.trendDatacopper) != undefined && nextProps.trendDatacopper.length >1) {
            var copper_nextPropslen = nextProps.trendDatacopper.length-1;

            if (copper_nextPropslen > 1) {
                if (nextProps.trendDatacopper[copper_nextPropslen].dir == "up"){
                     copper_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacopper[copper_nextPropslen].dir == "low"){
                     copper_currentSwingDirection = 'upSwing';
                }

            }


        }

         let banknifty_len = nextProps.tickCombobanknifty.length - 1;

        if ((this.props.tickCombobanknifty) != undefined) {

            if ((nextProps.tickCombobanknifty).length >= 1) {


            if (banknifty_len > 2) {
                banknifty_prevCandleHeight = [];
                banknifty_prevCandleHeight.push(nextProps.tickCombobanknifty[banknifty_len-1].high);
                banknifty_prevCandleHeight.push(nextProps.tickCombobanknifty[banknifty_len-1].low);
            }


                  


            if (banknifty_len > 1) {

                if (nextProps.tickCombobanknifty[banknifty_len].marumbo == true){
                     banknifty_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombobanknifty[banknifty_len].marumbo == false){
                     banknifty_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombobanknifty[banknifty_len].pivot != undefined) {

                    //banknifty oil
                    if (this.state.banknifty_pivotpoint != nextProps.tickCombobanknifty[banknifty_len].pivot) {

                        banknifty_count = banknifty_count + 1;

                        this.setState({
                            banknifty_pivotpoint: nextProps.tickCombobanknifty[banknifty_len].pivot
                        });

                        var pivotValue = nextProps.tickCombobanknifty[banknifty_len].pivot;

                        let datainput = {
                            x: banknifty_count,
                            y: nextProps.tickCombobanknifty[banknifty_len].pivot,
                            dir: nextProps.tickCombobanknifty[banknifty_len].dir,
                            date: nextProps.tickCombobanknifty[banknifty_len].date,
                            currentPrice: nextProps.tickCombobanknifty[banknifty_len].currentPrice,
                            tradeStatus : nextProps.tickCombobanknifty[banknifty_len].tradeStatus
                        };

                        this.props.pivotDatabanknifty(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatabanknifty) != undefined && this.props.trendDatabanknifty.length > 1 && (nextProps.trendDatabanknifty) != undefined && nextProps.trendDatabanknifty.length >1) {
            var banknifty_nextPropslen = nextProps.trendDatabanknifty.length-1;

            if (banknifty_nextPropslen > 1) {
                if (nextProps.trendDatabanknifty[banknifty_nextPropslen].dir == "up"){
                     banknifty_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatabanknifty[banknifty_nextPropslen].dir == "low"){
                     banknifty_currentSwingDirection = 'upSwing';
                }

            }


        }
 
  //bosch

     let bosch_len = nextProps.tickCombobosch.length - 1;

        if ((this.props.tickCombobosch) != undefined) {

            if ((nextProps.tickCombobosch).length >= 1) {


            if (bosch_len > 2) {
                bosch_prevCandleHeight = [];
                bosch_prevCandleHeight.push(nextProps.tickCombobosch[bosch_len-1].high);
                bosch_prevCandleHeight.push(nextProps.tickCombobosch[bosch_len-1].low);
            }


                  


            if (bosch_len > 1) {

                if (nextProps.tickCombobosch[bosch_len].marumbo == true){
                     bosch_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombobosch[bosch_len].marumbo == false){
                     bosch_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombobosch[bosch_len].pivot != undefined) {

                    //bosch oil
                    if (this.state.bosch_pivotpoint != nextProps.tickCombobosch[bosch_len].pivot) {

                        bosch_count = bosch_count + 1;

                        this.setState({
                            bosch_pivotpoint: nextProps.tickCombobosch[bosch_len].pivot
                        });

                        var pivotValue = nextProps.tickCombobosch[bosch_len].pivot;

                        let datainput = {
                            x: bosch_count,
                            y: nextProps.tickCombobosch[bosch_len].pivot,
                            dir: nextProps.tickCombobosch[bosch_len].dir,
                            date: nextProps.tickCombobosch[bosch_len].date,
                            currentPrice: nextProps.tickCombobosch[bosch_len].currentPrice,
                            tradeStatus : nextProps.tickCombobosch[bosch_len].tradeStatus
                        };

                        this.props.pivotDatabosch(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatabosch) != undefined && this.props.trendDatabosch.length > 1 && (nextProps.trendDatabosch) != undefined && nextProps.trendDatabosch.length >1) {
            var bosch_nextPropslen = nextProps.trendDatabosch.length-1;

            if (bosch_nextPropslen > 1) {
                if (nextProps.trendDatabosch[bosch_nextPropslen].dir == "up"){
                     bosch_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatabosch[bosch_nextPropslen].dir == "low"){
                     bosch_currentSwingDirection = 'upSwing';
                }

            }


        }


        //cadilla

         let cadila_len = nextProps.tickCombocadila.length - 1;

        if ((this.props.tickCombocadila) != undefined) {

            if ((nextProps.tickCombocadila).length >= 1) {


            if (cadila_len > 2) {
                cadila_prevCandleHeight = [];
                cadila_prevCandleHeight.push(nextProps.tickCombocadila[cadila_len-1].high);
                cadila_prevCandleHeight.push(nextProps.tickCombocadila[cadila_len-1].low);
            }


                  


            if (cadila_len > 1) {

                if (nextProps.tickCombocadila[cadila_len].marumbo == true){
                     cadila_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocadila[cadila_len].marumbo == false){
                     cadila_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocadila[cadila_len].pivot != undefined) {

                    //cadila oil
                    if (this.state.cadila_pivotpoint != nextProps.tickCombocadila[cadila_len].pivot) {

                        cadila_count = cadila_count + 1;

                        this.setState({
                            cadila_pivotpoint: nextProps.tickCombocadila[cadila_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocadila[cadila_len].pivot;

                        let datainput = {
                            x: cadila_count,
                            y: nextProps.tickCombocadila[cadila_len].pivot,
                            dir: nextProps.tickCombocadila[cadila_len].dir,
                            date: nextProps.tickCombocadila[cadila_len].date,
                            currentPrice: nextProps.tickCombocadila[cadila_len].currentPrice,
                            tradeStatus : nextProps.tickCombocadila[cadila_len].tradeStatus
                        };

                        this.props.pivotDatacadila(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacadila) != undefined && this.props.trendDatacadila.length > 1 && (nextProps.trendDatacadila) != undefined && nextProps.trendDatacadila.length >1) {
            var cadila_nextPropslen = nextProps.trendDatacadila.length-1;

            if (cadila_nextPropslen > 1) {
                if (nextProps.trendDatacadila[cadila_nextPropslen].dir == "up"){
                     cadila_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacadila[cadila_nextPropslen].dir == "low"){
                     cadila_currentSwingDirection = 'upSwing';
                }

            }


        }

        //cipla
         let cipla_len = nextProps.tickCombocipla.length - 1;

        if ((this.props.tickCombocipla) != undefined) {

            if ((nextProps.tickCombocipla).length >= 1) {


            if (cipla_len > 2) {
                cipla_prevCandleHeight = [];
                cipla_prevCandleHeight.push(nextProps.tickCombocipla[cipla_len-1].high);
                cipla_prevCandleHeight.push(nextProps.tickCombocipla[cipla_len-1].low);
            }


                  


            if (cipla_len > 1) {

                if (nextProps.tickCombocipla[cipla_len].marumbo == true){
                     cipla_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocipla[cipla_len].marumbo == false){
                     cipla_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocipla[cipla_len].pivot != undefined) {

                    //cipla oil
                    if (this.state.cipla_pivotpoint != nextProps.tickCombocipla[cipla_len].pivot) {

                        cipla_count = cipla_count + 1;

                        this.setState({
                            cipla_pivotpoint: nextProps.tickCombocipla[cipla_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocipla[cipla_len].pivot;

                        let datainput = {
                            x: cipla_count,
                            y: nextProps.tickCombocipla[cipla_len].pivot,
                            dir: nextProps.tickCombocipla[cipla_len].dir,
                            date: nextProps.tickCombocipla[cipla_len].date,
                            currentPrice: nextProps.tickCombocipla[cipla_len].currentPrice,
                            tradeStatus : nextProps.tickCombocipla[cipla_len].tradeStatus
                        };

                        this.props.pivotDatacipla(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacipla) != undefined && this.props.trendDatacipla.length > 1 && (nextProps.trendDatacipla) != undefined && nextProps.trendDatacipla.length >1) {
            var cipla_nextPropslen = nextProps.trendDatacipla.length-1;

            if (cipla_nextPropslen > 1) {
                if (nextProps.trendDatacipla[cipla_nextPropslen].dir == "up"){
                     cipla_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacipla[cipla_nextPropslen].dir == "low"){
                     cipla_currentSwingDirection = 'upSwing';
                }

            }


        }

        //coal

         let coal_len = nextProps.tickCombocoal.length - 1;

        if ((this.props.tickCombocoal) != undefined) {

            if ((nextProps.tickCombocoal).length >= 1) {


            if (coal_len > 2) {
                coal_prevCandleHeight = [];
                coal_prevCandleHeight.push(nextProps.tickCombocoal[coal_len-1].high);
                coal_prevCandleHeight.push(nextProps.tickCombocoal[coal_len-1].low);
            }


                  


            if (coal_len > 1) {

                if (nextProps.tickCombocoal[coal_len].marumbo == true){
                     coal_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocoal[coal_len].marumbo == false){
                     coal_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocoal[coal_len].pivot != undefined) {

                    //coal oil
                    if (this.state.coal_pivotpoint != nextProps.tickCombocoal[coal_len].pivot) {

                        coal_count = coal_count + 1;

                        this.setState({
                            coal_pivotpoint: nextProps.tickCombocoal[coal_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocoal[coal_len].pivot;

                        let datainput = {
                            x: coal_count,
                            y: nextProps.tickCombocoal[coal_len].pivot,
                            dir: nextProps.tickCombocoal[coal_len].dir,
                            date: nextProps.tickCombocoal[coal_len].date,
                            currentPrice: nextProps.tickCombocoal[coal_len].currentPrice,
                            tradeStatus : nextProps.tickCombocoal[coal_len].tradeStatus
                        };

                        this.props.pivotDatacoal(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacoal) != undefined && this.props.trendDatacoal.length > 1 && (nextProps.trendDatacoal) != undefined && nextProps.trendDatacoal.length >1) {
            var coal_nextPropslen = nextProps.trendDatacoal.length-1;

            if (coal_nextPropslen > 1) {
                if (nextProps.trendDatacoal[coal_nextPropslen].dir == "up"){
                     coal_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacoal[coal_nextPropslen].dir == "low"){
                     coal_currentSwingDirection = 'upSwing';
                }

            }


        }

        //concor
         let concor_len = nextProps.tickComboconcor.length - 1;

        if ((this.props.tickComboconcor) != undefined) {

            if ((nextProps.tickComboconcor).length >= 1) {


            if (concor_len > 2) {
                concor_prevCandleHeight = [];
                concor_prevCandleHeight.push(nextProps.tickComboconcor[concor_len-1].high);
                concor_prevCandleHeight.push(nextProps.tickComboconcor[concor_len-1].low);
            }


                  


            if (concor_len > 1) {

                if (nextProps.tickComboconcor[concor_len].marumbo == true){
                     concor_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboconcor[concor_len].marumbo == false){
                     concor_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboconcor[concor_len].pivot != undefined) {

                    //concor oil
                    if (this.state.concor_pivotpoint != nextProps.tickComboconcor[concor_len].pivot) {

                        concor_count = concor_count + 1;

                        this.setState({
                            concor_pivotpoint: nextProps.tickComboconcor[concor_len].pivot
                        });

                        var pivotValue = nextProps.tickComboconcor[concor_len].pivot;

                        let datainput = {
                            x: concor_count,
                            y: nextProps.tickComboconcor[concor_len].pivot,
                            dir: nextProps.tickComboconcor[concor_len].dir,
                            date: nextProps.tickComboconcor[concor_len].date,
                            currentPrice: nextProps.tickComboconcor[concor_len].currentPrice,
                            tradeStatus : nextProps.tickComboconcor[concor_len].tradeStatus
                        };

                        this.props.pivotDataconcor(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataconcor) != undefined && this.props.trendDataconcor.length > 1 && (nextProps.trendDataconcor) != undefined && nextProps.trendDataconcor.length >1) {
            var concor_nextPropslen = nextProps.trendDataconcor.length-1;

            if (concor_nextPropslen > 1) {
                if (nextProps.trendDataconcor[concor_nextPropslen].dir == "up"){
                     concor_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataconcor[concor_nextPropslen].dir == "low"){
                     concor_currentSwingDirection = 'upSwing';
                }

            }


        }

        //cummsind
         let cummsind_len = nextProps.tickCombocummsind.length - 1;

        if ((this.props.tickCombocummsind) != undefined) {

            if ((nextProps.tickCombocummsind).length >= 1) {


            if (cummsind_len > 2) {
                cummsind_prevCandleHeight = [];
                cummsind_prevCandleHeight.push(nextProps.tickCombocummsind[cummsind_len-1].high);
                cummsind_prevCandleHeight.push(nextProps.tickCombocummsind[cummsind_len-1].low);
            }


                  


            if (cummsind_len > 1) {

                if (nextProps.tickCombocummsind[cummsind_len].marumbo == true){
                     cummsind_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombocummsind[cummsind_len].marumbo == false){
                     cummsind_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombocummsind[cummsind_len].pivot != undefined) {

                    //cummsind oil
                    if (this.state.cummsind_pivotpoint != nextProps.tickCombocummsind[cummsind_len].pivot) {

                        cummsind_count = cummsind_count + 1;

                        this.setState({
                            cummsind_pivotpoint: nextProps.tickCombocummsind[cummsind_len].pivot
                        });

                        var pivotValue = nextProps.tickCombocummsind[cummsind_len].pivot;

                        let datainput = {
                            x: cummsind_count,
                            y: nextProps.tickCombocummsind[cummsind_len].pivot,
                            dir: nextProps.tickCombocummsind[cummsind_len].dir,
                            date: nextProps.tickCombocummsind[cummsind_len].date,
                            currentPrice: nextProps.tickCombocummsind[cummsind_len].currentPrice,
                            tradeStatus : nextProps.tickCombocummsind[cummsind_len].tradeStatus
                        };

                        this.props.pivotDatacummsind(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatacummsind) != undefined && this.props.trendDatacummsind.length > 1 && (nextProps.trendDatacummsind) != undefined && nextProps.trendDatacummsind.length >1) {
            var cummsind_nextPropslen = nextProps.trendDatacummsind.length-1;

            if (cummsind_nextPropslen > 1) {
                if (nextProps.trendDatacummsind[cummsind_nextPropslen].dir == "up"){
                     cummsind_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatacummsind[cummsind_nextPropslen].dir == "low"){
                     cummsind_currentSwingDirection = 'upSwing';
                }

            }


        }

        //dabur
         let dabur_len = nextProps.tickCombodabur.length - 1;

        if ((this.props.tickCombodabur) != undefined) {

            if ((nextProps.tickCombodabur).length >= 1) {


            if (dabur_len > 2) {
                dabur_prevCandleHeight = [];
                dabur_prevCandleHeight.push(nextProps.tickCombodabur[dabur_len-1].high);
                dabur_prevCandleHeight.push(nextProps.tickCombodabur[dabur_len-1].low);
            }


                  


            if (dabur_len > 1) {

                if (nextProps.tickCombodabur[dabur_len].marumbo == true){
                     dabur_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombodabur[dabur_len].marumbo == false){
                     dabur_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombodabur[dabur_len].pivot != undefined) {

                    //dabur oil
                    if (this.state.dabur_pivotpoint != nextProps.tickCombodabur[dabur_len].pivot) {

                        dabur_count = dabur_count + 1;

                        this.setState({
                            dabur_pivotpoint: nextProps.tickCombodabur[dabur_len].pivot
                        });

                        var pivotValue = nextProps.tickCombodabur[dabur_len].pivot;

                        let datainput = {
                            x: dabur_count,
                            y: nextProps.tickCombodabur[dabur_len].pivot,
                            dir: nextProps.tickCombodabur[dabur_len].dir,
                            date: nextProps.tickCombodabur[dabur_len].date,
                            currentPrice: nextProps.tickCombodabur[dabur_len].currentPrice,
                            tradeStatus : nextProps.tickCombodabur[dabur_len].tradeStatus
                        };

                        this.props.pivotDatadabur(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatadabur) != undefined && this.props.trendDatadabur.length > 1 && (nextProps.trendDatadabur) != undefined && nextProps.trendDatadabur.length >1) {
            var dabur_nextPropslen = nextProps.trendDatadabur.length-1;

            if (dabur_nextPropslen > 1) {
                if (nextProps.trendDatadabur[dabur_nextPropslen].dir == "up"){
                     dabur_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatadabur[dabur_nextPropslen].dir == "low"){
                     dabur_currentSwingDirection = 'upSwing';
                }

            }


        }

        //dhfl
         let dhfl_len = nextProps.tickCombodhfl.length - 1;

        if ((this.props.tickCombodhfl) != undefined) {

            if ((nextProps.tickCombodhfl).length >= 1) {


            if (dhfl_len > 2) {
                dhfl_prevCandleHeight = [];
                dhfl_prevCandleHeight.push(nextProps.tickCombodhfl[dhfl_len-1].high);
                dhfl_prevCandleHeight.push(nextProps.tickCombodhfl[dhfl_len-1].low);
            }


                  


            if (dhfl_len > 1) {

                if (nextProps.tickCombodhfl[dhfl_len].marumbo == true){
                     dhfl_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombodhfl[dhfl_len].marumbo == false){
                     dhfl_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombodhfl[dhfl_len].pivot != undefined) {

                    //dhfl oil
                    if (this.state.dhfl_pivotpoint != nextProps.tickCombodhfl[dhfl_len].pivot) {

                        dhfl_count = dhfl_count + 1;

                        this.setState({
                            dhfl_pivotpoint: nextProps.tickCombodhfl[dhfl_len].pivot
                        });

                        var pivotValue = nextProps.tickCombodhfl[dhfl_len].pivot;

                        let datainput = {
                            x: dhfl_count,
                            y: nextProps.tickCombodhfl[dhfl_len].pivot,
                            dir: nextProps.tickCombodhfl[dhfl_len].dir,
                            date: nextProps.tickCombodhfl[dhfl_len].date,
                            currentPrice: nextProps.tickCombodhfl[dhfl_len].currentPrice,
                            tradeStatus : nextProps.tickCombodhfl[dhfl_len].tradeStatus
                        };

                        this.props.pivotDatadhfl(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatadhfl) != undefined && this.props.trendDatadhfl.length > 1 && (nextProps.trendDatadhfl) != undefined && nextProps.trendDatadhfl.length >1) {
            var dhfl_nextPropslen = nextProps.trendDatadhfl.length-1;

            if (dhfl_nextPropslen > 1) {
                if (nextProps.trendDatadhfl[dhfl_nextPropslen].dir == "up"){
                     dhfl_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatadhfl[dhfl_nextPropslen].dir == "low"){
                     dhfl_currentSwingDirection = 'upSwing';
                }

            }


        }

        //emami
         let emami_len = nextProps.tickComboemami.length - 1;

        if ((this.props.tickComboemami) != undefined) {

            if ((nextProps.tickComboemami).length >= 1) {


            if (emami_len > 2) {
                emami_prevCandleHeight = [];
                emami_prevCandleHeight.push(nextProps.tickComboemami[emami_len-1].high);
                emami_prevCandleHeight.push(nextProps.tickComboemami[emami_len-1].low);
            }


                  


            if (emami_len > 1) {

                if (nextProps.tickComboemami[emami_len].marumbo == true){
                     emami_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboemami[emami_len].marumbo == false){
                     emami_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboemami[emami_len].pivot != undefined) {

                    //emami oil
                    if (this.state.emami_pivotpoint != nextProps.tickComboemami[emami_len].pivot) {

                        emami_count = emami_count + 1;

                        this.setState({
                            emami_pivotpoint: nextProps.tickComboemami[emami_len].pivot
                        });

                        var pivotValue = nextProps.tickComboemami[emami_len].pivot;

                        let datainput = {
                            x: emami_count,
                            y: nextProps.tickComboemami[emami_len].pivot,
                            dir: nextProps.tickComboemami[emami_len].dir,
                            date: nextProps.tickComboemami[emami_len].date,
                            currentPrice: nextProps.tickComboemami[emami_len].currentPrice,
                            tradeStatus : nextProps.tickComboemami[emami_len].tradeStatus
                        };

                        this.props.pivotDataemami(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataemami) != undefined && this.props.trendDataemami.length > 1 && (nextProps.trendDataemami) != undefined && nextProps.trendDataemami.length >1) {
            var emami_nextPropslen = nextProps.trendDataemami.length-1;

            if (emami_nextPropslen > 1) {
                if (nextProps.trendDataemami[emami_nextPropslen].dir == "up"){
                     emami_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataemami[emami_nextPropslen].dir == "low"){
                     emami_currentSwingDirection = 'upSwing';
                }

            }


        }

        //gail
         let gail_len = nextProps.tickCombogail.length - 1;

        if ((this.props.tickCombogail) != undefined) {

            if ((nextProps.tickCombogail).length >= 1) {


            if (gail_len > 2) {
                gail_prevCandleHeight = [];
                gail_prevCandleHeight.push(nextProps.tickCombogail[gail_len-1].high);
                gail_prevCandleHeight.push(nextProps.tickCombogail[gail_len-1].low);
            }


                  


            if (gail_len > 1) {

                if (nextProps.tickCombogail[gail_len].marumbo == true){
                     gail_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombogail[gail_len].marumbo == false){
                     gail_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombogail[gail_len].pivot != undefined) {

                    //gail oil
                    if (this.state.gail_pivotpoint != nextProps.tickCombogail[gail_len].pivot) {

                        gail_count = gail_count + 1;

                        this.setState({
                            gail_pivotpoint: nextProps.tickCombogail[gail_len].pivot
                        });

                        var pivotValue = nextProps.tickCombogail[gail_len].pivot;

                        let datainput = {
                            x: gail_count,
                            y: nextProps.tickCombogail[gail_len].pivot,
                            dir: nextProps.tickCombogail[gail_len].dir,
                            date: nextProps.tickCombogail[gail_len].date,
                            currentPrice: nextProps.tickCombogail[gail_len].currentPrice,
                            tradeStatus : nextProps.tickCombogail[gail_len].tradeStatus
                        };

                        this.props.pivotDatagail(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatagail) != undefined && this.props.trendDatagail.length > 1 && (nextProps.trendDatagail) != undefined && nextProps.trendDatagail.length >1) {
            var gail_nextPropslen = nextProps.trendDatagail.length-1;

            if (gail_nextPropslen > 1) {
                if (nextProps.trendDatagail[gail_nextPropslen].dir == "up"){
                     gail_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatagail[gail_nextPropslen].dir == "low"){
                     gail_currentSwingDirection = 'upSwing';
                }

            }


        }

        //havells
         let havells_len = nextProps.tickCombohavells.length - 1;

        if ((this.props.tickCombohavells) != undefined) {

            if ((nextProps.tickCombohavells).length >= 1) {


            if (havells_len > 2) {
                havells_prevCandleHeight = [];
                havells_prevCandleHeight.push(nextProps.tickCombohavells[havells_len-1].high);
                havells_prevCandleHeight.push(nextProps.tickCombohavells[havells_len-1].low);
            }


                  


            if (havells_len > 1) {

                if (nextProps.tickCombohavells[havells_len].marumbo == true){
                     havells_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombohavells[havells_len].marumbo == false){
                     havells_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombohavells[havells_len].pivot != undefined) {

                    //havells oil
                    if (this.state.havells_pivotpoint != nextProps.tickCombohavells[havells_len].pivot) {

                        havells_count = havells_count + 1;

                        this.setState({
                            havells_pivotpoint: nextProps.tickCombohavells[havells_len].pivot
                        });

                        var pivotValue = nextProps.tickCombohavells[havells_len].pivot;

                        let datainput = {
                            x: havells_count,
                            y: nextProps.tickCombohavells[havells_len].pivot,
                            dir: nextProps.tickCombohavells[havells_len].dir,
                            date: nextProps.tickCombohavells[havells_len].date,
                            currentPrice: nextProps.tickCombohavells[havells_len].currentPrice,
                            tradeStatus : nextProps.tickCombohavells[havells_len].tradeStatus
                        };

                        this.props.pivotDatahavells(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatahavells) != undefined && this.props.trendDatahavells.length > 1 && (nextProps.trendDatahavells) != undefined && nextProps.trendDatahavells.length >1) {
            var havells_nextPropslen = nextProps.trendDatahavells.length-1;

            if (havells_nextPropslen > 1) {
                if (nextProps.trendDatahavells[havells_nextPropslen].dir == "up"){
                     havells_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatahavells[havells_nextPropslen].dir == "low"){
                     havells_currentSwingDirection = 'upSwing';
                }

            }


        }

        //hdfc
         let hdfc_len = nextProps.tickCombohdfc.length - 1;

        if ((this.props.tickCombohdfc) != undefined) {

            if ((nextProps.tickCombohdfc).length >= 1) {


            if (hdfc_len > 2) {
                hdfc_prevCandleHeight = [];
                hdfc_prevCandleHeight.push(nextProps.tickCombohdfc[hdfc_len-1].high);
                hdfc_prevCandleHeight.push(nextProps.tickCombohdfc[hdfc_len-1].low);
            }


                  


            if (hdfc_len > 1) {

                if (nextProps.tickCombohdfc[hdfc_len].marumbo == true){
                     hdfc_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombohdfc[hdfc_len].marumbo == false){
                     hdfc_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombohdfc[hdfc_len].pivot != undefined) {

                    //hdfc oil
                    if (this.state.hdfc_pivotpoint != nextProps.tickCombohdfc[hdfc_len].pivot) {

                        hdfc_count = hdfc_count + 1;

                        this.setState({
                            hdfc_pivotpoint: nextProps.tickCombohdfc[hdfc_len].pivot
                        });

                        var pivotValue = nextProps.tickCombohdfc[hdfc_len].pivot;

                        let datainput = {
                            x: hdfc_count,
                            y: nextProps.tickCombohdfc[hdfc_len].pivot,
                            dir: nextProps.tickCombohdfc[hdfc_len].dir,
                            date: nextProps.tickCombohdfc[hdfc_len].date,
                            currentPrice: nextProps.tickCombohdfc[hdfc_len].currentPrice,
                            tradeStatus : nextProps.tickCombohdfc[hdfc_len].tradeStatus
                        };

                        this.props.pivotDatahdfc(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatahdfc) != undefined && this.props.trendDatahdfc.length > 1 && (nextProps.trendDatahdfc) != undefined && nextProps.trendDatahdfc.length >1) {
            var hdfc_nextPropslen = nextProps.trendDatahdfc.length-1;

            if (hdfc_nextPropslen > 1) {
                if (nextProps.trendDatahdfc[hdfc_nextPropslen].dir == "up"){
                     hdfc_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatahdfc[hdfc_nextPropslen].dir == "low"){
                     hdfc_currentSwingDirection = 'upSwing';
                }

            }


        }

        //hindzinc
         let hindzinc_len = nextProps.tickCombohindzinc.length - 1;

        if ((this.props.tickCombohindzinc) != undefined) {

            if ((nextProps.tickCombohindzinc).length >= 1) {


            if (hindzinc_len > 2) {
                hindzinc_prevCandleHeight = [];
                hindzinc_prevCandleHeight.push(nextProps.tickCombohindzinc[hindzinc_len-1].high);
                hindzinc_prevCandleHeight.push(nextProps.tickCombohindzinc[hindzinc_len-1].low);
            }


                  


            if (hindzinc_len > 1) {

                if (nextProps.tickCombohindzinc[hindzinc_len].marumbo == true){
                     hindzinc_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombohindzinc[hindzinc_len].marumbo == false){
                     hindzinc_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombohindzinc[hindzinc_len].pivot != undefined) {

                    //hindzinc oil
                    if (this.state.hindzinc_pivotpoint != nextProps.tickCombohindzinc[hindzinc_len].pivot) {

                        hindzinc_count = hindzinc_count + 1;

                        this.setState({
                            hindzinc_pivotpoint: nextProps.tickCombohindzinc[hindzinc_len].pivot
                        });

                        var pivotValue = nextProps.tickCombohindzinc[hindzinc_len].pivot;

                        let datainput = {
                            x: hindzinc_count,
                            y: nextProps.tickCombohindzinc[hindzinc_len].pivot,
                            dir: nextProps.tickCombohindzinc[hindzinc_len].dir,
                            date: nextProps.tickCombohindzinc[hindzinc_len].date,
                            currentPrice: nextProps.tickCombohindzinc[hindzinc_len].currentPrice,
                            tradeStatus : nextProps.tickCombohindzinc[hindzinc_len].tradeStatus
                        };

                        this.props.pivotDatahindzinc(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatahindzinc) != undefined && this.props.trendDatahindzinc.length > 1 && (nextProps.trendDatahindzinc) != undefined && nextProps.trendDatahindzinc.length >1) {
            var hindzinc_nextPropslen = nextProps.trendDatahindzinc.length-1;

            if (hindzinc_nextPropslen > 1) {
                if (nextProps.trendDatahindzinc[hindzinc_nextPropslen].dir == "up"){
                     hindzinc_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatahindzinc[hindzinc_nextPropslen].dir == "low"){
                     hindzinc_currentSwingDirection = 'upSwing';
                }

            }


        }

        //infratel
         let infratel_len = nextProps.tickComboinfratel.length - 1;

        if ((this.props.tickComboinfratel) != undefined) {

            if ((nextProps.tickComboinfratel).length >= 1) {


            if (infratel_len > 2) {
                infratel_prevCandleHeight = [];
                infratel_prevCandleHeight.push(nextProps.tickComboinfratel[infratel_len-1].high);
                infratel_prevCandleHeight.push(nextProps.tickComboinfratel[infratel_len-1].low);
            }


                  


            if (infratel_len > 1) {

                if (nextProps.tickComboinfratel[infratel_len].marumbo == true){
                     infratel_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboinfratel[infratel_len].marumbo == false){
                     infratel_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboinfratel[infratel_len].pivot != undefined) {

                    //infratel oil
                    if (this.state.infratel_pivotpoint != nextProps.tickComboinfratel[infratel_len].pivot) {

                        infratel_count = infratel_count + 1;

                        this.setState({
                            infratel_pivotpoint: nextProps.tickComboinfratel[infratel_len].pivot
                        });

                        var pivotValue = nextProps.tickComboinfratel[infratel_len].pivot;

                        let datainput = {
                            x: infratel_count,
                            y: nextProps.tickComboinfratel[infratel_len].pivot,
                            dir: nextProps.tickComboinfratel[infratel_len].dir,
                            date: nextProps.tickComboinfratel[infratel_len].date,
                            currentPrice: nextProps.tickComboinfratel[infratel_len].currentPrice,
                            tradeStatus : nextProps.tickComboinfratel[infratel_len].tradeStatus
                        };

                        this.props.pivotDatainfratel(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatainfratel) != undefined && this.props.trendDatainfratel.length > 1 && (nextProps.trendDatainfratel) != undefined && nextProps.trendDatainfratel.length >1) {
            var infratel_nextPropslen = nextProps.trendDatainfratel.length-1;

            if (infratel_nextPropslen > 1) {
                if (nextProps.trendDatainfratel[infratel_nextPropslen].dir == "up"){
                     infratel_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatainfratel[infratel_nextPropslen].dir == "low"){
                     infratel_currentSwingDirection = 'upSwing';
                }

            }


        }

        //reddy
         let reddy_len = nextProps.tickComboreddy.length - 1;

        if ((this.props.tickComboreddy) != undefined) {

            if ((nextProps.tickComboreddy).length >= 1) {


            if (reddy_len > 2) {
                reddy_prevCandleHeight = [];
                reddy_prevCandleHeight.push(nextProps.tickComboreddy[reddy_len-1].high);
                reddy_prevCandleHeight.push(nextProps.tickComboreddy[reddy_len-1].low);
            }


                  


            if (reddy_len > 1) {

                if (nextProps.tickComboreddy[reddy_len].marumbo == true){
                     reddy_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboreddy[reddy_len].marumbo == false){
                     reddy_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboreddy[reddy_len].pivot != undefined) {

                    //reddy oil
                    if (this.state.reddy_pivotpoint != nextProps.tickComboreddy[reddy_len].pivot) {

                        reddy_count = reddy_count + 1;

                        this.setState({
                            reddy_pivotpoint: nextProps.tickComboreddy[reddy_len].pivot
                        });

                        var pivotValue = nextProps.tickComboreddy[reddy_len].pivot;

                        let datainput = {
                            x: reddy_count,
                            y: nextProps.tickComboreddy[reddy_len].pivot,
                            dir: nextProps.tickComboreddy[reddy_len].dir,
                            date: nextProps.tickComboreddy[reddy_len].date,
                            currentPrice: nextProps.tickComboreddy[reddy_len].currentPrice,
                            tradeStatus : nextProps.tickComboreddy[reddy_len].tradeStatus
                        };

                        this.props.pivotDatareddy(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatareddy) != undefined && this.props.trendDatareddy.length > 1 && (nextProps.trendDatareddy) != undefined && nextProps.trendDatareddy.length >1) {
            var reddy_nextPropslen = nextProps.trendDatareddy.length-1;

            if (reddy_nextPropslen > 1) {
                if (nextProps.trendDatareddy[reddy_nextPropslen].dir == "up"){
                     reddy_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatareddy[reddy_nextPropslen].dir == "low"){
                     reddy_currentSwingDirection = 'upSwing';
                }

            }


        }

        //reliance
         let reliance_len = nextProps.tickComboreliance.length - 1;

        if ((this.props.tickComboreliance) != undefined) {

            if ((nextProps.tickComboreliance).length >= 1) {


            if (reliance_len > 2) {
                reliance_prevCandleHeight = [];
                reliance_prevCandleHeight.push(nextProps.tickComboreliance[reliance_len-1].high);
                reliance_prevCandleHeight.push(nextProps.tickComboreliance[reliance_len-1].low);
            }


                  


            if (reliance_len > 1) {

                if (nextProps.tickComboreliance[reliance_len].marumbo == true){
                     reliance_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboreliance[reliance_len].marumbo == false){
                     reliance_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboreliance[reliance_len].pivot != undefined) {

                    //reliance oil
                    if (this.state.reliance_pivotpoint != nextProps.tickComboreliance[reliance_len].pivot) {

                        reliance_count = reliance_count + 1;

                        this.setState({
                            reliance_pivotpoint: nextProps.tickComboreliance[reliance_len].pivot
                        });

                        var pivotValue = nextProps.tickComboreliance[reliance_len].pivot;

                        let datainput = {
                            x: reliance_count,
                            y: nextProps.tickComboreliance[reliance_len].pivot,
                            dir: nextProps.tickComboreliance[reliance_len].dir,
                            date: nextProps.tickComboreliance[reliance_len].date,
                            currentPrice: nextProps.tickComboreliance[reliance_len].currentPrice,
                            tradeStatus : nextProps.tickComboreliance[reliance_len].tradeStatus
                        };

                        this.props.pivotDatareliance(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatareliance) != undefined && this.props.trendDatareliance.length > 1 && (nextProps.trendDatareliance) != undefined && nextProps.trendDatareliance.length >1) {
            var reliance_nextPropslen = nextProps.trendDatareliance.length-1;

            if (reliance_nextPropslen > 1) {
                if (nextProps.trendDatareliance[reliance_nextPropslen].dir == "up"){
                     reliance_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatareliance[reliance_nextPropslen].dir == "low"){
                     reliance_currentSwingDirection = 'upSwing';
                }

            }


        }

        //sbin
         let sbin_len = nextProps.tickCombosbin.length - 1;

        if ((this.props.tickCombosbin) != undefined) {

            if ((nextProps.tickCombosbin).length >= 1) {


            if (sbin_len > 2) {
                sbin_prevCandleHeight = [];
                sbin_prevCandleHeight.push(nextProps.tickCombosbin[sbin_len-1].high);
                sbin_prevCandleHeight.push(nextProps.tickCombosbin[sbin_len-1].low);
            }


                  


            if (sbin_len > 1) {

                if (nextProps.tickCombosbin[sbin_len].marumbo == true){
                     sbin_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombosbin[sbin_len].marumbo == false){
                     sbin_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombosbin[sbin_len].pivot != undefined) {

                    //sbin oil
                    if (this.state.sbin_pivotpoint != nextProps.tickCombosbin[sbin_len].pivot) {

                        sbin_count = sbin_count + 1;

                        this.setState({
                            sbin_pivotpoint: nextProps.tickCombosbin[sbin_len].pivot
                        });

                        var pivotValue = nextProps.tickCombosbin[sbin_len].pivot;

                        let datainput = {
                            x: sbin_count,
                            y: nextProps.tickCombosbin[sbin_len].pivot,
                            dir: nextProps.tickCombosbin[sbin_len].dir,
                            date: nextProps.tickCombosbin[sbin_len].date,
                            currentPrice: nextProps.tickCombosbin[sbin_len].currentPrice,
                            tradeStatus : nextProps.tickCombosbin[sbin_len].tradeStatus
                        };

                        this.props.pivotDatasbin(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatasbin) != undefined && this.props.trendDatasbin.length > 1 && (nextProps.trendDatasbin) != undefined && nextProps.trendDatasbin.length >1) {
            var sbin_nextPropslen = nextProps.trendDatasbin.length-1;

            if (sbin_nextPropslen > 1) {
                if (nextProps.trendDatasbin[sbin_nextPropslen].dir == "up"){
                     sbin_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatasbin[sbin_nextPropslen].dir == "low"){
                     sbin_currentSwingDirection = 'upSwing';
                }

            }


        }

        //seimens
         let seimens_len = nextProps.tickComboseimens.length - 1;

        if ((this.props.tickComboseimens) != undefined) {

            if ((nextProps.tickComboseimens).length >= 1) {


            if (seimens_len > 2) {
                seimens_prevCandleHeight = [];
                seimens_prevCandleHeight.push(nextProps.tickComboseimens[seimens_len-1].high);
                seimens_prevCandleHeight.push(nextProps.tickComboseimens[seimens_len-1].low);
            }


                  


            if (seimens_len > 1) {

                if (nextProps.tickComboseimens[seimens_len].marumbo == true){
                     seimens_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboseimens[seimens_len].marumbo == false){
                     seimens_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboseimens[seimens_len].pivot != undefined) {

                    //seimens oil
                    if (this.state.seimens_pivotpoint != nextProps.tickComboseimens[seimens_len].pivot) {

                        seimens_count = seimens_count + 1;

                        this.setState({
                            seimens_pivotpoint: nextProps.tickComboseimens[seimens_len].pivot
                        });

                        var pivotValue = nextProps.tickComboseimens[seimens_len].pivot;

                        let datainput = {
                            x: seimens_count,
                            y: nextProps.tickComboseimens[seimens_len].pivot,
                            dir: nextProps.tickComboseimens[seimens_len].dir,
                            date: nextProps.tickComboseimens[seimens_len].date,
                            currentPrice: nextProps.tickComboseimens[seimens_len].currentPrice,
                            tradeStatus : nextProps.tickComboseimens[seimens_len].tradeStatus
                        };

                        this.props.pivotDataseimens(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataseimens) != undefined && this.props.trendDataseimens.length > 1 && (nextProps.trendDataseimens) != undefined && nextProps.trendDataseimens.length >1) {
            var seimens_nextPropslen = nextProps.trendDataseimens.length-1;

            if (seimens_nextPropslen > 1) {
                if (nextProps.trendDataseimens[seimens_nextPropslen].dir == "up"){
                     seimens_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataseimens[seimens_nextPropslen].dir == "low"){
                     seimens_currentSwingDirection = 'upSwing';
                }

            }


        }

        //tcs
         let tcs_len = nextProps.tickCombotcs.length - 1;

        if ((this.props.tickCombotcs) != undefined) {

            if ((nextProps.tickCombotcs).length >= 1) {


            if (tcs_len > 2) {
                tcs_prevCandleHeight = [];
                tcs_prevCandleHeight.push(nextProps.tickCombotcs[tcs_len-1].high);
                tcs_prevCandleHeight.push(nextProps.tickCombotcs[tcs_len-1].low);
            }


                  


            if (tcs_len > 1) {

                if (nextProps.tickCombotcs[tcs_len].marumbo == true){
                     tcs_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombotcs[tcs_len].marumbo == false){
                     tcs_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombotcs[tcs_len].pivot != undefined) {

                    //tcs oil
                    if (this.state.tcs_pivotpoint != nextProps.tickCombotcs[tcs_len].pivot) {

                        tcs_count = tcs_count + 1;

                        this.setState({
                            tcs_pivotpoint: nextProps.tickCombotcs[tcs_len].pivot
                        });

                        var pivotValue = nextProps.tickCombotcs[tcs_len].pivot;

                        let datainput = {
                            x: tcs_count,
                            y: nextProps.tickCombotcs[tcs_len].pivot,
                            dir: nextProps.tickCombotcs[tcs_len].dir,
                            date: nextProps.tickCombotcs[tcs_len].date,
                            currentPrice: nextProps.tickCombotcs[tcs_len].currentPrice,
                            tradeStatus : nextProps.tickCombotcs[tcs_len].tradeStatus
                        };

                        this.props.pivotDatatcs(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatatcs) != undefined && this.props.trendDatatcs.length > 1 && (nextProps.trendDatatcs) != undefined && nextProps.trendDatatcs.length >1) {
            var tcs_nextPropslen = nextProps.trendDatatcs.length-1;

            if (tcs_nextPropslen > 1) {
                if (nextProps.trendDatatcs[tcs_nextPropslen].dir == "up"){
                     tcs_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatatcs[tcs_nextPropslen].dir == "low"){
                     tcs_currentSwingDirection = 'upSwing';
                }

            }


        }

        //unilever

         let unilever_len = nextProps.tickCombounilever.length - 1;

        if ((this.props.tickCombounilever) != undefined) {

            if ((nextProps.tickCombounilever).length >= 1) {


            if (unilever_len > 2) {
                unilever_prevCandleHeight = [];
                unilever_prevCandleHeight.push(nextProps.tickCombounilever[unilever_len-1].high);
                unilever_prevCandleHeight.push(nextProps.tickCombounilever[unilever_len-1].low);
            }


                  


            if (unilever_len > 1) {

                if (nextProps.tickCombounilever[unilever_len].marumbo == true){
                     unilever_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombounilever[unilever_len].marumbo == false){
                     unilever_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombounilever[unilever_len].pivot != undefined) {

                    //unilever oil
                    if (this.state.unilever_pivotpoint != nextProps.tickCombounilever[unilever_len].pivot) {

                        unilever_count = unilever_count + 1;

                        this.setState({
                            unilever_pivotpoint: nextProps.tickCombounilever[unilever_len].pivot
                        });

                        var pivotValue = nextProps.tickCombounilever[unilever_len].pivot;

                        let datainput = {
                            x: unilever_count,
                            y: nextProps.tickCombounilever[unilever_len].pivot,
                            dir: nextProps.tickCombounilever[unilever_len].dir,
                            date: nextProps.tickCombounilever[unilever_len].date,
                            currentPrice: nextProps.tickCombounilever[unilever_len].currentPrice,
                            tradeStatus : nextProps.tickCombounilever[unilever_len].tradeStatus
                        };

                        this.props.pivotDataunilever(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataunilever) != undefined && this.props.trendDataunilever.length > 1 && (nextProps.trendDataunilever) != undefined && nextProps.trendDataunilever.length >1) {
            var unilever_nextPropslen = nextProps.trendDataunilever.length-1;

            if (unilever_nextPropslen > 1) {
                if (nextProps.trendDataunilever[unilever_nextPropslen].dir == "up"){
                     unilever_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataunilever[unilever_nextPropslen].dir == "low"){
                     unilever_currentSwingDirection = 'upSwing';
                }

            }


        }

        //





       
    }

    startTrade(data, exchange, type, price, stop, target) {


        //  parseFloat(v.price.toFixed(4))

        var squareoff = Math.abs(price - target);
        var stoploss = Math.abs(stop - price);

        squareoff = parseFloat(squareoff.toFixed(2));
        stoploss = parseFloat(stoploss.toFixed(2));


       // 
        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        /*kc.placeOrder("regular", {
          "exchange": exchange,
          "tradingsymbol": data,
          "transaction_type": type,
          "quantity": 1000,
          "product": "MIS",
          "order_type": "MARKET"
        }).then(function(resp) { 
         alert('success order placed');
           alert(resp);
         }).catch(function(err) {
           alert('error is palcing order');
           alert(err);
        }); */


        kc.placeOrder(kc.VARIETY_BO, {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "order_type": "LIMIT",
            "quantity": 10000,
            "price": price,
            "squareoff": squareoff,
            "stoploss": stoploss,
            "validity": "DAY"
        }, ).then(function(resp) {
           // alert('success order placed');
           // alert(resp);
        }).catch(function(err) {
           // alert('error in order placed');
           // alert(JSON.stringify(err));
        });



    }

    stopTrade(data, exchange, type, price) {

        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        kc.placeOrder("regular", {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "quantity": 1000,
            "product": "MIS",
            "order_type": "LIMIT",
            "price": price
        }).then(function(resp) {
          //  alert('success order placed');
            //alert(resp);
        }).catch(function(err) {
          //  alert('error is palcing order');
           // alert(err);
        });
    }


    targetTrade(data, exchange, type, price) {

        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        kc.placeOrder("regular", {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "quantity": 1000,
            "product": "MIS",
            "order_type": "LIMIT",
            "price": price,
        }).then(function(resp) {
          //  alert('success order placed');
          //  alert(resp);
        }).catch(function(err) {
           // alert('error is palcing order');
          //  alert(err);
        });
    }


    newWebsocketMETHOD() {


        webSocketClicked = true;


        var self = this;
        //
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
            modeFull = "full", // Full quote including market depth. 164 bytes.
            modeQuote = "quote", // Quote excluding market depth. 52 bytes.
            modeLTP = "ltp";

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
            triggers = {
                "connect": [],
                "ticks": [],
                "disconnect": [],
                "error": [],
                "close": [],
                "reconnect": [],
                "noreconnect": [],
                "message": [],
                "order_update": []
            },
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

       


       

        var first = 0;




        this.connect = function() {

           // alert(access_token_const);


            // 

            var self = this;

          


            //  
            let WSS_ROOT_URL = 'wss://ws.kite.trade?api_key=vlu1o53tt1makdu3&access_token=';
            // let accessdata = this.props.access.access_token.access_token;
            var ws = new WebSocket(`${WSS_ROOT_URL}${access_token_const}`);
            //alert(accessdata);

            ws.onclose = function() {

            }

            ws.onopen = function(event) {
                var message = {
                    "a": "subscribe",
                    "v": [54362375, 54087431 ,54363399]
                };
                ws.send(JSON.stringify(message));
            };

            ws.binaryType = "arraybuffer";

            ws.onmessage = function(e) {
                // Binary tick data.
                if (e.data instanceof ArrayBuffer) {
                    if (e.data.byteLength > 2) {

                        var d = parseBinary(e.data);
                        // 

                        for (var i = 0; i < d.length; i++) {

                            //
                          
                            if (d[i].instrument_token == "54087431") {

                                get5minDataCopperTimestamp(d[i].last_price, self);
                            }

                            if (d[i].instrument_token == "54362375") {
                                get5minDatahindzincTimestamp(d[i].last_price, self);
                            }
                           


                        }

                    }
                } else {
                    parseTextMessage(e.data)
                }

                // Set last read time to check for connection timeout
                last_read = new Date();
            };


        }

        //
        this.connect();


        setInterval(function() {
                getCrudeOHLC(self);
                getCopperOHLC(self);


                getbankniftyOHLC(self);
                getboschOHLC(self);


                getcadilaOHLC(self);
                getciplaOHLC(self);

                getcoalOHLC(self);
                getconcorOHLC(self);

                // getcopperOHLC(self);
                getcummsindOHLC(self);


                 getdaburOHLC(self);
                getdhflOHLC(self);


                 getemamiOHLC(self);
                 getgailOHLC(self);


                 gethavellsOHLC(self);
                gethdfcOHLC(self);


                gethdfcOHLC(self);
                gethindzincOHLC(self);


                getinfratelOHLC(self);
                getreddyOHLC(self);


                 getrelianceOHLC(self);
                getsbinOHLC(self);


                getseimensOHLC(self);
                gettcsOHLC(self);

                getunileverOHLC(self);
                
        }, 25000);


        function get5minDataCrudeTimestamp(d, scope) {

               if(crude_prevCandleMarumbo == true && crudearr.length == 1){
                    debugger;
                    
                    if(crude_currentSwingDirection == "upSwing"){
                        if(crudearr[0] >=  crude_marumboThresholdHigh){
                            console.log('buy long here at' + crude_marumboThresholdHigh);
                        }

                        if(crudearr[0] <= crude_marumboThresholdHigh){

                        }
                         crude_prevCandleMarumbo = false;
                         crude_marumboThresholdHigh = 0;
                         crude_marumboThresholdLow = 0;
                    }


                    if(crude_currentSwingDirection == "downSwing"){
                        if(crudearr[0] > crude_marumboThresholdLow){
                            console.log('sell short here at' + crude_marumboThresholdLow );
                        }

                        if(crudearr[0] <= crude_marumboThresholdLow){
                    
                        }

                            crude_prevCandleMarumbo = false;
                            crude_marumboThresholdHigh = 0;
                            crude_marumboThresholdLow = 0;
                    }
                       
                }

            crudearr.push(d);
        }

        function get5minDataCopperTimestamp(d, scope) {

               if(copper_prevCandleMarumbo == true && copperarr.length == 1){
                    debugger;
                    
                    if(copper_currentSwingDirection == "upSwing"){
                        if(copperarr[0] >=  copper_marumboThresholdHigh){
                            console.log('buy long here at' + copper_marumboThresholdHigh);
                        }

                        if(copperarr[0] <= copper_marumboThresholdHigh){

                        }
                         copper_prevCandleMarumbo = false;
                         copper_marumboThresholdHigh = 0;
                         copper_marumboThresholdLow = 0;
                    }


                    if(copper_currentSwingDirection == "downSwing"){
                        if(copperarr[0] > copper_marumboThresholdLow){
                            console.log('sell short here at' + copper_marumboThresholdLow );
                        }

                        if(copperarr[0] <= copper_marumboThresholdLow){
                    
                        }

                            copper_prevCandleMarumbo = false;
                            copper_marumboThresholdHigh = 0;
                            copper_marumboThresholdLow = 0;
                    }
                       
                }

            copperarr.push(d);
        }

        function getCrudeOHLC(d) {

            crudetickopen = crudearr[0];
            crudetickhigh = _.maxBy(crudearr);
            crudeticklow = _.minBy(crudearr);
            crudetickclose = crudearr[crudearr.length - 1];

            if (crudetickopen < crudetickclose) {
                crudetickType = "green";
            } else if (crudetickopen > crudetickclose) {
                crudetickType = "red";
            } else if (crudetickopen = crudetickclose) {
                crudetickType = "doji";
            }

            crudetickLength = Math.abs(crudetickhigh - crudeticklow);


                var marumbo = false;
                if(crudetickType == "red" && crude_currentSwingDirection == 'downSwing'){
                        if(crudetickopen == crudetickhigh && crudetickclose == crudeticklow && crudeticklow < crude_prevCandleHeight[1]){
                            marumbo = true;
                            crude_marumboThresholdHigh = crudetickhigh;
                            crude_marumboThresholdLow = crudeticklow;
                        }
                }

                if(crudetickType == "green" && crude_currentSwingDirection == "upSwing"){
                        if(crudetickopen == crudeticklow && crudetickclose == crudetickhigh && crudetickhigh > crude_prevCandleHeight[0]){
                            marumbo = true;
                            crude_marumboThresholdHigh = crudetickhigh;
                            crude_marumboThresholdLow = crudeticklow;
                        }
                }

                if(crudetickType == "doji"){
                         marumbo = false;
                         crude_marumboThresholdHigh = 0;
                         crude_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + crudetickType);
                   console.log('v swing direction  is ' + crude_currentSwingDirection );
                }

                console.log('current swing crude direction is ' + crude_currentSwingDirection);


            crudetickarray = {
                "open": crudetickopen,
                "low": crudeticklow,
                "high": crudetickhigh,
                "close": crudetickclose,
                "tickType": crudetickType,
                'tickLength': crudetickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickData(crudetickarray);
            first = 0;
            crudearr = [];
        };

        function getCopperOHLC(d) {

            coppertickopen = copperarr[0];
            coppertickhigh = _.maxBy(copperarr);
            copperticklow = _.minBy(copperarr);
            coppertickclose = copperarr[copperarr.length - 1];

            if (coppertickopen < coppertickclose) {
                coppertickType = "green";
            } else if (coppertickopen > coppertickclose) {
                coppertickType = "red";
            } else if (coppertickopen = coppertickclose) {
                coppertickType = "doji";
            }

            coppertickLength = Math.abs(coppertickhigh - copperticklow);


                var marumbo = false;
                if(coppertickType == "red" && copper_currentSwingDirection == 'downSwing'){
                        if(coppertickopen == coppertickhigh && coppertickclose == copperticklow && copperticklow < copper_prevCandleHeight[1]){
                            marumbo = true;
                            copper_marumboThresholdHigh = coppertickhigh;
                            copper_marumboThresholdLow = copperticklow;
                        }
                }

                if(coppertickType == "green" && copper_currentSwingDirection == "upSwing"){
                        if(coppertickopen == copperticklow && coppertickclose == coppertickhigh && coppertickhigh > copper_prevCandleHeight[0]){
                            marumbo = true;
                            copper_marumboThresholdHigh = coppertickhigh;
                            copper_marumboThresholdLow = copperticklow;
                        }
                }

                if(coppertickType == "doji"){
                         marumbo = false;
                         copper_marumboThresholdHigh = 0;
                         copper_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + coppertickType);
                   console.log('v swing direction  is ' + copper_currentSwingDirection );
                }

                console.log('current swing copper direction is ' + copper_currentSwingDirection);


            coppertickarray = {
                "open": coppertickopen,
                "low": copperticklow,
                "high": coppertickhigh,
                "close": coppertickclose,
                "tickType": coppertickType,
                'tickLength': coppertickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatacopper(coppertickarray);
            first = 0;
            copperarr = [];
        };

        //banknifty
        function get5minDatabankniftyTimestamp(d, scope) {

               if(banknifty_prevCandleMarumbo == true && bankniftyarr.length == 1){
                    debugger;
                    
                    if(banknifty_currentSwingDirection == "upSwing"){
                        if(bankniftyarr[0] >=  banknifty_marumboThresholdHigh){
                            console.log('buy long here at' + banknifty_marumboThresholdHigh);
                        }

                        if(bankniftyarr[0] <= banknifty_marumboThresholdHigh){

                        }
                         banknifty_prevCandleMarumbo = false;
                         banknifty_marumboThresholdHigh = 0;
                         banknifty_marumboThresholdLow = 0;
                    }


                    if(banknifty_currentSwingDirection == "downSwing"){
                        if(bankniftyarr[0] > banknifty_marumboThresholdLow){
                            console.log('sell short here at' + banknifty_marumboThresholdLow );
                        }

                        if(bankniftyarr[0] <= banknifty_marumboThresholdLow){
                    
                        }

                            banknifty_prevCandleMarumbo = false;
                            banknifty_marumboThresholdHigh = 0;
                            banknifty_marumboThresholdLow = 0;
                    }
                       
                }

            bankniftyarr.push(d);
        }

 function getbankniftyOHLC(d) {

            bankniftytickopen = bankniftyarr[0];
            bankniftytickhigh = _.maxBy(bankniftyarr);
            bankniftyticklow = _.minBy(bankniftyarr);
            bankniftytickclose = bankniftyarr[bankniftyarr.length - 1];

            if (bankniftytickopen < bankniftytickclose) {
                bankniftytickType = "green";
            } else if (bankniftytickopen > bankniftytickclose) {
                bankniftytickType = "red";
            } else if (bankniftytickopen = bankniftytickclose) {
                bankniftytickType = "doji";
            }

            bankniftytickLength = Math.abs(bankniftytickhigh - bankniftyticklow);


                var marumbo = false;
                if(bankniftytickType == "red" && banknifty_currentSwingDirection == 'downSwing'){
                        if(bankniftytickopen == bankniftytickhigh && bankniftytickclose == bankniftyticklow && bankniftyticklow < banknifty_prevCandleHeight[1]){
                            marumbo = true;
                            banknifty_marumboThresholdHigh = bankniftytickhigh;
                            banknifty_marumboThresholdLow = bankniftyticklow;
                        }
                }

                if(bankniftytickType == "green" && banknifty_currentSwingDirection == "upSwing"){
                        if(bankniftytickopen == bankniftyticklow && bankniftytickclose == bankniftytickhigh && bankniftytickhigh > banknifty_prevCandleHeight[0]){
                            marumbo = true;
                            banknifty_marumboThresholdHigh = bankniftytickhigh;
                            banknifty_marumboThresholdLow = bankniftyticklow;
                        }
                }

                if(bankniftytickType == "doji"){
                         marumbo = false;
                         banknifty_marumboThresholdHigh = 0;
                         banknifty_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + bankniftytickType);
                   console.log('v swing direction  is ' + banknifty_currentSwingDirection );
                }

                console.log('current swing banknifty direction is ' + banknifty_currentSwingDirection);


            bankniftytickarray = {
                "open": bankniftytickopen,
                "low": bankniftyticklow,
                "high": bankniftytickhigh,
                "close": bankniftytickclose,
                "tickType": bankniftytickType,
                'tickLength': bankniftytickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatabanknifty(bankniftytickarray);
            first = 0;
            bankniftyarr = [];
        };



        //bosch
        function get5minDataboschTimestamp(d, scope) {

               if(bosch_prevCandleMarumbo == true && boscharr.length == 1){
                    debugger;
                    
                    if(bosch_currentSwingDirection == "upSwing"){
                        if(boscharr[0] >=  bosch_marumboThresholdHigh){
                            console.log('buy long here at' + bosch_marumboThresholdHigh);
                        }

                        if(boscharr[0] <= bosch_marumboThresholdHigh){

                        }
                         bosch_prevCandleMarumbo = false;
                         bosch_marumboThresholdHigh = 0;
                         bosch_marumboThresholdLow = 0;
                    }


                    if(bosch_currentSwingDirection == "downSwing"){
                        if(boscharr[0] > bosch_marumboThresholdLow){
                            console.log('sell short here at' + bosch_marumboThresholdLow );
                        }

                        if(boscharr[0] <= bosch_marumboThresholdLow){
                    
                        }

                            bosch_prevCandleMarumbo = false;
                            bosch_marumboThresholdHigh = 0;
                            bosch_marumboThresholdLow = 0;
                    }
                       
                }

            boscharr.push(d);
        }

 function getboschOHLC(d) {

            boschtickopen = boscharr[0];
            boschtickhigh = _.maxBy(boscharr);
            boschticklow = _.minBy(boscharr);
            boschtickclose = boscharr[boscharr.length - 1];

            if (boschtickopen < boschtickclose) {
                boschtickType = "green";
            } else if (boschtickopen > boschtickclose) {
                boschtickType = "red";
            } else if (boschtickopen = boschtickclose) {
                boschtickType = "doji";
            }

            boschtickLength = Math.abs(boschtickhigh - boschticklow);


                var marumbo = false;
                if(boschtickType == "red" && bosch_currentSwingDirection == 'downSwing'){
                        if(boschtickopen == boschtickhigh && boschtickclose == boschticklow && boschticklow < bosch_prevCandleHeight[1]){
                            marumbo = true;
                            bosch_marumboThresholdHigh = boschtickhigh;
                            bosch_marumboThresholdLow = boschticklow;
                        }
                }

                if(boschtickType == "green" && bosch_currentSwingDirection == "upSwing"){
                        if(boschtickopen == boschticklow && boschtickclose == boschtickhigh && boschtickhigh > bosch_prevCandleHeight[0]){
                            marumbo = true;
                            bosch_marumboThresholdHigh = boschtickhigh;
                            bosch_marumboThresholdLow = boschticklow;
                        }
                }

                if(boschtickType == "doji"){
                         marumbo = false;
                         bosch_marumboThresholdHigh = 0;
                         bosch_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + boschtickType);
                   console.log('v swing direction  is ' + bosch_currentSwingDirection );
                }

                console.log('current swing bosch direction is ' + bosch_currentSwingDirection);


            boschtickarray = {
                "open": boschtickopen,
                "low": boschticklow,
                "high": boschtickhigh,
                "close": boschtickclose,
                "tickType": boschtickType,
                'tickLength': boschtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatabosch(boschtickarray);
            first = 0;
            boscharr = [];
        };

        //cadilla
          function get5minDatacadilaTimestamp(d, scope) {

               if(cadila_prevCandleMarumbo == true && cadilaarr.length == 1){
                    debugger;
                    
                    if(cadila_currentSwingDirection == "upSwing"){
                        if(cadilaarr[0] >=  cadila_marumboThresholdHigh){
                            console.log('buy long here at' + cadila_marumboThresholdHigh);
                        }

                        if(cadilaarr[0] <= cadila_marumboThresholdHigh){

                        }
                         cadila_prevCandleMarumbo = false;
                         cadila_marumboThresholdHigh = 0;
                         cadila_marumboThresholdLow = 0;
                    }


                    if(cadila_currentSwingDirection == "downSwing"){
                        if(cadilaarr[0] > cadila_marumboThresholdLow){
                            console.log('sell short here at' + cadila_marumboThresholdLow );
                        }

                        if(cadilaarr[0] <= cadila_marumboThresholdLow){
                    
                        }

                            cadila_prevCandleMarumbo = false;
                            cadila_marumboThresholdHigh = 0;
                            cadila_marumboThresholdLow = 0;
                    }
                       
                }

            cadilaarr.push(d);
        }

 function getcadilaOHLC(d) {

            cadilatickopen = cadilaarr[0];
            cadilatickhigh = _.maxBy(cadilaarr);
            cadilaticklow = _.minBy(cadilaarr);
            cadilatickclose = cadilaarr[cadilaarr.length - 1];

            if (cadilatickopen < cadilatickclose) {
                cadilatickType = "green";
            } else if (cadilatickopen > cadilatickclose) {
                cadilatickType = "red";
            } else if (cadilatickopen = cadilatickclose) {
                cadilatickType = "doji";
            }

            cadilatickLength = Math.abs(cadilatickhigh - cadilaticklow);


                var marumbo = false;
                if(cadilatickType == "red" && cadila_currentSwingDirection == 'downSwing'){
                        if(cadilatickopen == cadilatickhigh && cadilatickclose == cadilaticklow && cadilaticklow < cadila_prevCandleHeight[1]){
                            marumbo = true;
                            cadila_marumboThresholdHigh = cadilatickhigh;
                            cadila_marumboThresholdLow = cadilaticklow;
                        }
                }

                if(cadilatickType == "green" && cadila_currentSwingDirection == "upSwing"){
                        if(cadilatickopen == cadilaticklow && cadilatickclose == cadilatickhigh && cadilatickhigh > cadila_prevCandleHeight[0]){
                            marumbo = true;
                            cadila_marumboThresholdHigh = cadilatickhigh;
                            cadila_marumboThresholdLow = cadilaticklow;
                        }
                }

                if(cadilatickType == "doji"){
                         marumbo = false;
                         cadila_marumboThresholdHigh = 0;
                         cadila_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + cadilatickType);
                   console.log('v swing direction  is ' + cadila_currentSwingDirection );
                }

                console.log('current swing cadila direction is ' + cadila_currentSwingDirection);


            cadilatickarray = {
                "open": cadilatickopen,
                "low": cadilaticklow,
                "high": cadilatickhigh,
                "close": cadilatickclose,
                "tickType": cadilatickType,
                'tickLength': cadilatickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatacadila(cadilatickarray);
            first = 0;
            cadilaarr = [];
        };

      
        //cipla
        function get5minDataciplaTimestamp(d, scope) {

               if(cipla_prevCandleMarumbo == true && ciplaarr.length == 1){
                    debugger;
                    
                    if(cipla_currentSwingDirection == "upSwing"){
                        if(ciplaarr[0] >=  cipla_marumboThresholdHigh){
                            console.log('buy long here at' + cipla_marumboThresholdHigh);
                        }

                        if(ciplaarr[0] <= cipla_marumboThresholdHigh){

                        }
                         cipla_prevCandleMarumbo = false;
                         cipla_marumboThresholdHigh = 0;
                         cipla_marumboThresholdLow = 0;
                    }


                    if(cipla_currentSwingDirection == "downSwing"){
                        if(ciplaarr[0] > cipla_marumboThresholdLow){
                            console.log('sell short here at' + cipla_marumboThresholdLow );
                        }

                        if(ciplaarr[0] <= cipla_marumboThresholdLow){
                    
                        }

                            cipla_prevCandleMarumbo = false;
                            cipla_marumboThresholdHigh = 0;
                            cipla_marumboThresholdLow = 0;
                    }
                       
                }

            ciplaarr.push(d);
        }

 function getciplaOHLC(d) {

            ciplatickopen = ciplaarr[0];
            ciplatickhigh = _.maxBy(ciplaarr);
            ciplaticklow = _.minBy(ciplaarr);
            ciplatickclose = ciplaarr[ciplaarr.length - 1];

            if (ciplatickopen < ciplatickclose) {
                ciplatickType = "green";
            } else if (ciplatickopen > ciplatickclose) {
                ciplatickType = "red";
            } else if (ciplatickopen = ciplatickclose) {
                ciplatickType = "doji";
            }

            ciplatickLength = Math.abs(ciplatickhigh - ciplaticklow);


                var marumbo = false;
                if(ciplatickType == "red" && cipla_currentSwingDirection == 'downSwing'){
                        if(ciplatickopen == ciplatickhigh && ciplatickclose == ciplaticklow && ciplaticklow < cipla_prevCandleHeight[1]){
                            marumbo = true;
                            cipla_marumboThresholdHigh = ciplatickhigh;
                            cipla_marumboThresholdLow = ciplaticklow;
                        }
                }

                if(ciplatickType == "green" && cipla_currentSwingDirection == "upSwing"){
                        if(ciplatickopen == ciplaticklow && ciplatickclose == ciplatickhigh && ciplatickhigh > cipla_prevCandleHeight[0]){
                            marumbo = true;
                            cipla_marumboThresholdHigh = ciplatickhigh;
                            cipla_marumboThresholdLow = ciplaticklow;
                        }
                }

                if(ciplatickType == "doji"){
                         marumbo = false;
                         cipla_marumboThresholdHigh = 0;
                         cipla_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + ciplatickType);
                   console.log('v swing direction  is ' + cipla_currentSwingDirection );
                }

                console.log('current swing cipla direction is ' + cipla_currentSwingDirection);


            ciplatickarray = {
                "open": ciplatickopen,
                "low": ciplaticklow,
                "high": ciplatickhigh,
                "close": ciplatickclose,
                "tickType": ciplatickType,
                'tickLength': ciplatickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatacipla(ciplatickarray);
            first = 0;
            ciplaarr = [];
        };

        //coal
        function get5minDatacoalTimestamp(d, scope) {

               if(coal_prevCandleMarumbo == true && coalarr.length == 1){
                    debugger;
                    
                    if(coal_currentSwingDirection == "upSwing"){
                        if(coalarr[0] >=  coal_marumboThresholdHigh){
                            console.log('buy long here at' + coal_marumboThresholdHigh);
                        }

                        if(coalarr[0] <= coal_marumboThresholdHigh){

                        }
                         coal_prevCandleMarumbo = false;
                         coal_marumboThresholdHigh = 0;
                         coal_marumboThresholdLow = 0;
                    }


                    if(coal_currentSwingDirection == "downSwing"){
                        if(coalarr[0] > coal_marumboThresholdLow){
                            console.log('sell short here at' + coal_marumboThresholdLow );
                        }

                        if(coalarr[0] <= coal_marumboThresholdLow){
                    
                        }

                            coal_prevCandleMarumbo = false;
                            coal_marumboThresholdHigh = 0;
                            coal_marumboThresholdLow = 0;
                    }
                       
                }

            coalarr.push(d);
        }

 function getcoalOHLC(d) {

            coaltickopen = coalarr[0];
            coaltickhigh = _.maxBy(coalarr);
            coalticklow = _.minBy(coalarr);
            coaltickclose = coalarr[coalarr.length - 1];

            if (coaltickopen < coaltickclose) {
                coaltickType = "green";
            } else if (coaltickopen > coaltickclose) {
                coaltickType = "red";
            } else if (coaltickopen = coaltickclose) {
                coaltickType = "doji";
            }

            coaltickLength = Math.abs(coaltickhigh - coalticklow);


                var marumbo = false;
                if(coaltickType == "red" && coal_currentSwingDirection == 'downSwing'){
                        if(coaltickopen == coaltickhigh && coaltickclose == coalticklow && coalticklow < coal_prevCandleHeight[1]){
                            marumbo = true;
                            coal_marumboThresholdHigh = coaltickhigh;
                            coal_marumboThresholdLow = coalticklow;
                        }
                }

                if(coaltickType == "green" && coal_currentSwingDirection == "upSwing"){
                        if(coaltickopen == coalticklow && coaltickclose == coaltickhigh && coaltickhigh > coal_prevCandleHeight[0]){
                            marumbo = true;
                            coal_marumboThresholdHigh = coaltickhigh;
                            coal_marumboThresholdLow = coalticklow;
                        }
                }

                if(coaltickType == "doji"){
                         marumbo = false;
                         coal_marumboThresholdHigh = 0;
                         coal_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + coaltickType);
                   console.log('v swing direction  is ' + coal_currentSwingDirection );
                }

                console.log('current swing coal direction is ' + coal_currentSwingDirection);


            coaltickarray = {
                "open": coaltickopen,
                "low": coalticklow,
                "high": coaltickhigh,
                "close": coaltickclose,
                "tickType": coaltickType,
                'tickLength': coaltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatacoal(coaltickarray);
            first = 0;
            coalarr = [];
        };

        //concor
        function get5minDataconcorTimestamp(d, scope) {

               if(concor_prevCandleMarumbo == true && concorarr.length == 1){
                    debugger;
                    
                    if(concor_currentSwingDirection == "upSwing"){
                        if(concorarr[0] >=  concor_marumboThresholdHigh){
                            console.log('buy long here at' + concor_marumboThresholdHigh);
                        }

                        if(concorarr[0] <= concor_marumboThresholdHigh){

                        }
                         concor_prevCandleMarumbo = false;
                         concor_marumboThresholdHigh = 0;
                         concor_marumboThresholdLow = 0;
                    }


                    if(concor_currentSwingDirection == "downSwing"){
                        if(concorarr[0] > concor_marumboThresholdLow){
                            console.log('sell short here at' + concor_marumboThresholdLow );
                        }

                        if(concorarr[0] <= concor_marumboThresholdLow){
                    
                        }

                            concor_prevCandleMarumbo = false;
                            concor_marumboThresholdHigh = 0;
                            concor_marumboThresholdLow = 0;
                    }
                       
                }

            concorarr.push(d);
        }

 function getconcorOHLC(d) {

            concortickopen = concorarr[0];
            concortickhigh = _.maxBy(concorarr);
            concorticklow = _.minBy(concorarr);
            concortickclose = concorarr[concorarr.length - 1];

            if (concortickopen < concortickclose) {
                concortickType = "green";
            } else if (concortickopen > concortickclose) {
                concortickType = "red";
            } else if (concortickopen = concortickclose) {
                concortickType = "doji";
            }

            concortickLength = Math.abs(concortickhigh - concorticklow);


                var marumbo = false;
                if(concortickType == "red" && concor_currentSwingDirection == 'downSwing'){
                        if(concortickopen == concortickhigh && concortickclose == concorticklow && concorticklow < concor_prevCandleHeight[1]){
                            marumbo = true;
                            concor_marumboThresholdHigh = concortickhigh;
                            concor_marumboThresholdLow = concorticklow;
                        }
                }

                if(concortickType == "green" && concor_currentSwingDirection == "upSwing"){
                        if(concortickopen == concorticklow && concortickclose == concortickhigh && concortickhigh > concor_prevCandleHeight[0]){
                            marumbo = true;
                            concor_marumboThresholdHigh = concortickhigh;
                            concor_marumboThresholdLow = concorticklow;
                        }
                }

                if(concortickType == "doji"){
                         marumbo = false;
                         concor_marumboThresholdHigh = 0;
                         concor_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + concortickType);
                   console.log('v swing direction  is ' + concor_currentSwingDirection );
                }

                console.log('current swing concor direction is ' + concor_currentSwingDirection);


            concortickarray = {
                "open": concortickopen,
                "low": concorticklow,
                "high": concortickhigh,
                "close": concortickclose,
                "tickType": concortickType,
                'tickLength': concortickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataconcor(concortickarray);
            first = 0;
            concorarr = [];
        };

        //cummsind
        function get5minDatacummsindTimestamp(d, scope) {

               if(cummsind_prevCandleMarumbo == true && cummsindarr.length == 1){
                    debugger;
                    
                    if(cummsind_currentSwingDirection == "upSwing"){
                        if(cummsindarr[0] >=  cummsind_marumboThresholdHigh){
                            console.log('buy long here at' + cummsind_marumboThresholdHigh);
                        }

                        if(cummsindarr[0] <= cummsind_marumboThresholdHigh){

                        }
                         cummsind_prevCandleMarumbo = false;
                         cummsind_marumboThresholdHigh = 0;
                         cummsind_marumboThresholdLow = 0;
                    }


                    if(cummsind_currentSwingDirection == "downSwing"){
                        if(cummsindarr[0] > cummsind_marumboThresholdLow){
                            console.log('sell short here at' + cummsind_marumboThresholdLow );
                        }

                        if(cummsindarr[0] <= cummsind_marumboThresholdLow){
                    
                        }

                            cummsind_prevCandleMarumbo = false;
                            cummsind_marumboThresholdHigh = 0;
                            cummsind_marumboThresholdLow = 0;
                    }
                       
                }

            cummsindarr.push(d);
        }

 function getcummsindOHLC(d) {

            cummsindtickopen = cummsindarr[0];
            cummsindtickhigh = _.maxBy(cummsindarr);
            cummsindticklow = _.minBy(cummsindarr);
            cummsindtickclose = cummsindarr[cummsindarr.length - 1];

            if (cummsindtickopen < cummsindtickclose) {
                cummsindtickType = "green";
            } else if (cummsindtickopen > cummsindtickclose) {
                cummsindtickType = "red";
            } else if (cummsindtickopen = cummsindtickclose) {
                cummsindtickType = "doji";
            }

            cummsindtickLength = Math.abs(cummsindtickhigh - cummsindticklow);


                var marumbo = false;
                if(cummsindtickType == "red" && cummsind_currentSwingDirection == 'downSwing'){
                        if(cummsindtickopen == cummsindtickhigh && cummsindtickclose == cummsindticklow && cummsindticklow < cummsind_prevCandleHeight[1]){
                            marumbo = true;
                            cummsind_marumboThresholdHigh = cummsindtickhigh;
                            cummsind_marumboThresholdLow = cummsindticklow;
                        }
                }

                if(cummsindtickType == "green" && cummsind_currentSwingDirection == "upSwing"){
                        if(cummsindtickopen == cummsindticklow && cummsindtickclose == cummsindtickhigh && cummsindtickhigh > cummsind_prevCandleHeight[0]){
                            marumbo = true;
                            cummsind_marumboThresholdHigh = cummsindtickhigh;
                            cummsind_marumboThresholdLow = cummsindticklow;
                        }
                }

                if(cummsindtickType == "doji"){
                         marumbo = false;
                         cummsind_marumboThresholdHigh = 0;
                         cummsind_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + cummsindtickType);
                   console.log('v swing direction  is ' + cummsind_currentSwingDirection );
                }

                console.log('current swing cummsind direction is ' + cummsind_currentSwingDirection);


            cummsindtickarray = {
                "open": cummsindtickopen,
                "low": cummsindticklow,
                "high": cummsindtickhigh,
                "close": cummsindtickclose,
                "tickType": cummsindtickType,
                'tickLength': cummsindtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatacummsind(cummsindtickarray);
            first = 0;
            cummsindarr = [];
        };

        //dabur
        function get5minDatadaburTimestamp(d, scope) {

               if(dabur_prevCandleMarumbo == true && daburarr.length == 1){
                    debugger;
                    
                    if(dabur_currentSwingDirection == "upSwing"){
                        if(daburarr[0] >=  dabur_marumboThresholdHigh){
                            console.log('buy long here at' + dabur_marumboThresholdHigh);
                        }

                        if(daburarr[0] <= dabur_marumboThresholdHigh){

                        }
                         dabur_prevCandleMarumbo = false;
                         dabur_marumboThresholdHigh = 0;
                         dabur_marumboThresholdLow = 0;
                    }


                    if(dabur_currentSwingDirection == "downSwing"){
                        if(daburarr[0] > dabur_marumboThresholdLow){
                            console.log('sell short here at' + dabur_marumboThresholdLow );
                        }

                        if(daburarr[0] <= dabur_marumboThresholdLow){
                    
                        }

                            dabur_prevCandleMarumbo = false;
                            dabur_marumboThresholdHigh = 0;
                            dabur_marumboThresholdLow = 0;
                    }
                       
                }

            daburarr.push(d);
        }

 function getdaburOHLC(d) {

            daburtickopen = daburarr[0];
            daburtickhigh = _.maxBy(daburarr);
            daburticklow = _.minBy(daburarr);
            daburtickclose = daburarr[daburarr.length - 1];

            if (daburtickopen < daburtickclose) {
                daburtickType = "green";
            } else if (daburtickopen > daburtickclose) {
                daburtickType = "red";
            } else if (daburtickopen = daburtickclose) {
                daburtickType = "doji";
            }

            daburtickLength = Math.abs(daburtickhigh - daburticklow);


                var marumbo = false;
                if(daburtickType == "red" && dabur_currentSwingDirection == 'downSwing'){
                        if(daburtickopen == daburtickhigh && daburtickclose == daburticklow && daburticklow < dabur_prevCandleHeight[1]){
                            marumbo = true;
                            dabur_marumboThresholdHigh = daburtickhigh;
                            dabur_marumboThresholdLow = daburticklow;
                        }
                }

                if(daburtickType == "green" && dabur_currentSwingDirection == "upSwing"){
                        if(daburtickopen == daburticklow && daburtickclose == daburtickhigh && daburtickhigh > dabur_prevCandleHeight[0]){
                            marumbo = true;
                            dabur_marumboThresholdHigh = daburtickhigh;
                            dabur_marumboThresholdLow = daburticklow;
                        }
                }

                if(daburtickType == "doji"){
                         marumbo = false;
                         dabur_marumboThresholdHigh = 0;
                         dabur_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + daburtickType);
                   console.log('v swing direction  is ' + dabur_currentSwingDirection );
                }

                console.log('current swing dabur direction is ' + dabur_currentSwingDirection);


            daburtickarray = {
                "open": daburtickopen,
                "low": daburticklow,
                "high": daburtickhigh,
                "close": daburtickclose,
                "tickType": daburtickType,
                'tickLength': daburtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatadabur(daburtickarray);
            first = 0;
            daburarr = [];
        };

        //dhfl
        function get5minDatadhflTimestamp(d, scope) {

               if(dhfl_prevCandleMarumbo == true && dhflarr.length == 1){
                    debugger;
                    
                    if(dhfl_currentSwingDirection == "upSwing"){
                        if(dhflarr[0] >=  dhfl_marumboThresholdHigh){
                            console.log('buy long here at' + dhfl_marumboThresholdHigh);
                        }

                        if(dhflarr[0] <= dhfl_marumboThresholdHigh){

                        }
                         dhfl_prevCandleMarumbo = false;
                         dhfl_marumboThresholdHigh = 0;
                         dhfl_marumboThresholdLow = 0;
                    }


                    if(dhfl_currentSwingDirection == "downSwing"){
                        if(dhflarr[0] > dhfl_marumboThresholdLow){
                            console.log('sell short here at' + dhfl_marumboThresholdLow );
                        }

                        if(dhflarr[0] <= dhfl_marumboThresholdLow){
                    
                        }

                            dhfl_prevCandleMarumbo = false;
                            dhfl_marumboThresholdHigh = 0;
                            dhfl_marumboThresholdLow = 0;
                    }
                       
                }

            dhflarr.push(d);
        }

 function getdhflOHLC(d) {

            dhfltickopen = dhflarr[0];
            dhfltickhigh = _.maxBy(dhflarr);
            dhflticklow = _.minBy(dhflarr);
            dhfltickclose = dhflarr[dhflarr.length - 1];

            if (dhfltickopen < dhfltickclose) {
                dhfltickType = "green";
            } else if (dhfltickopen > dhfltickclose) {
                dhfltickType = "red";
            } else if (dhfltickopen = dhfltickclose) {
                dhfltickType = "doji";
            }

            dhfltickLength = Math.abs(dhfltickhigh - dhflticklow);


                var marumbo = false;
                if(dhfltickType == "red" && dhfl_currentSwingDirection == 'downSwing'){
                        if(dhfltickopen == dhfltickhigh && dhfltickclose == dhflticklow && dhflticklow < dhfl_prevCandleHeight[1]){
                            marumbo = true;
                            dhfl_marumboThresholdHigh = dhfltickhigh;
                            dhfl_marumboThresholdLow = dhflticklow;
                        }
                }

                if(dhfltickType == "green" && dhfl_currentSwingDirection == "upSwing"){
                        if(dhfltickopen == dhflticklow && dhfltickclose == dhfltickhigh && dhfltickhigh > dhfl_prevCandleHeight[0]){
                            marumbo = true;
                            dhfl_marumboThresholdHigh = dhfltickhigh;
                            dhfl_marumboThresholdLow = dhflticklow;
                        }
                }

                if(dhfltickType == "doji"){
                         marumbo = false;
                         dhfl_marumboThresholdHigh = 0;
                         dhfl_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + dhfltickType);
                   console.log('v swing direction  is ' + dhfl_currentSwingDirection );
                }

                console.log('current swing dhfl direction is ' + dhfl_currentSwingDirection);


            dhfltickarray = {
                "open": dhfltickopen,
                "low": dhflticklow,
                "high": dhfltickhigh,
                "close": dhfltickclose,
                "tickType": dhfltickType,
                'tickLength': dhfltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatadhfl(dhfltickarray);
            first = 0;
            dhflarr = [];
        };

        //emami
        function get5minDataemamiTimestamp(d, scope) {

               if(emami_prevCandleMarumbo == true && emamiarr.length == 1){
                    debugger;
                    
                    if(emami_currentSwingDirection == "upSwing"){
                        if(emamiarr[0] >=  emami_marumboThresholdHigh){
                            console.log('buy long here at' + emami_marumboThresholdHigh);
                        }

                        if(emamiarr[0] <= emami_marumboThresholdHigh){

                        }
                         emami_prevCandleMarumbo = false;
                         emami_marumboThresholdHigh = 0;
                         emami_marumboThresholdLow = 0;
                    }


                    if(emami_currentSwingDirection == "downSwing"){
                        if(emamiarr[0] > emami_marumboThresholdLow){
                            console.log('sell short here at' + emami_marumboThresholdLow );
                        }

                        if(emamiarr[0] <= emami_marumboThresholdLow){
                    
                        }

                            emami_prevCandleMarumbo = false;
                            emami_marumboThresholdHigh = 0;
                            emami_marumboThresholdLow = 0;
                    }
                       
                }

            emamiarr.push(d);
        }

 function getemamiOHLC(d) {

            emamitickopen = emamiarr[0];
            emamitickhigh = _.maxBy(emamiarr);
            emamiticklow = _.minBy(emamiarr);
            emamitickclose = emamiarr[emamiarr.length - 1];

            if (emamitickopen < emamitickclose) {
                emamitickType = "green";
            } else if (emamitickopen > emamitickclose) {
                emamitickType = "red";
            } else if (emamitickopen = emamitickclose) {
                emamitickType = "doji";
            }

            emamitickLength = Math.abs(emamitickhigh - emamiticklow);


                var marumbo = false;
                if(emamitickType == "red" && emami_currentSwingDirection == 'downSwing'){
                        if(emamitickopen == emamitickhigh && emamitickclose == emamiticklow && emamiticklow < emami_prevCandleHeight[1]){
                            marumbo = true;
                            emami_marumboThresholdHigh = emamitickhigh;
                            emami_marumboThresholdLow = emamiticklow;
                        }
                }

                if(emamitickType == "green" && emami_currentSwingDirection == "upSwing"){
                        if(emamitickopen == emamiticklow && emamitickclose == emamitickhigh && emamitickhigh > emami_prevCandleHeight[0]){
                            marumbo = true;
                            emami_marumboThresholdHigh = emamitickhigh;
                            emami_marumboThresholdLow = emamiticklow;
                        }
                }

                if(emamitickType == "doji"){
                         marumbo = false;
                         emami_marumboThresholdHigh = 0;
                         emami_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + emamitickType);
                   console.log('v swing direction  is ' + emami_currentSwingDirection );
                }

                console.log('current swing emami direction is ' + emami_currentSwingDirection);


            emamitickarray = {
                "open": emamitickopen,
                "low": emamiticklow,
                "high": emamitickhigh,
                "close": emamitickclose,
                "tickType": emamitickType,
                'tickLength': emamitickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataemami(emamitickarray);
            first = 0;
            emamiarr = [];
        };

        //gail
        function get5minDatagailTimestamp(d, scope) {

               if(gail_prevCandleMarumbo == true && gailarr.length == 1){
                    debugger;
                    
                    if(gail_currentSwingDirection == "upSwing"){
                        if(gailarr[0] >=  gail_marumboThresholdHigh){
                            console.log('buy long here at' + gail_marumboThresholdHigh);
                        }

                        if(gailarr[0] <= gail_marumboThresholdHigh){

                        }
                         gail_prevCandleMarumbo = false;
                         gail_marumboThresholdHigh = 0;
                         gail_marumboThresholdLow = 0;
                    }


                    if(gail_currentSwingDirection == "downSwing"){
                        if(gailarr[0] > gail_marumboThresholdLow){
                            console.log('sell short here at' + gail_marumboThresholdLow );
                        }

                        if(gailarr[0] <= gail_marumboThresholdLow){
                    
                        }

                            gail_prevCandleMarumbo = false;
                            gail_marumboThresholdHigh = 0;
                            gail_marumboThresholdLow = 0;
                    }
                       
                }

            gailarr.push(d);
        }

 function getgailOHLC(d) {

            gailtickopen = gailarr[0];
            gailtickhigh = _.maxBy(gailarr);
            gailticklow = _.minBy(gailarr);
            gailtickclose = gailarr[gailarr.length - 1];

            if (gailtickopen < gailtickclose) {
                gailtickType = "green";
            } else if (gailtickopen > gailtickclose) {
                gailtickType = "red";
            } else if (gailtickopen = gailtickclose) {
                gailtickType = "doji";
            }

            gailtickLength = Math.abs(gailtickhigh - gailticklow);


                var marumbo = false;
                if(gailtickType == "red" && gail_currentSwingDirection == 'downSwing'){
                        if(gailtickopen == gailtickhigh && gailtickclose == gailticklow && gailticklow < gail_prevCandleHeight[1]){
                            marumbo = true;
                            gail_marumboThresholdHigh = gailtickhigh;
                            gail_marumboThresholdLow = gailticklow;
                        }
                }

                if(gailtickType == "green" && gail_currentSwingDirection == "upSwing"){
                        if(gailtickopen == gailticklow && gailtickclose == gailtickhigh && gailtickhigh > gail_prevCandleHeight[0]){
                            marumbo = true;
                            gail_marumboThresholdHigh = gailtickhigh;
                            gail_marumboThresholdLow = gailticklow;
                        }
                }

                if(gailtickType == "doji"){
                         marumbo = false;
                         gail_marumboThresholdHigh = 0;
                         gail_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + gailtickType);
                   console.log('v swing direction  is ' + gail_currentSwingDirection );
                }

                console.log('current swing gail direction is ' + gail_currentSwingDirection);


            gailtickarray = {
                "open": gailtickopen,
                "low": gailticklow,
                "high": gailtickhigh,
                "close": gailtickclose,
                "tickType": gailtickType,
                'tickLength': gailtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatagail(gailtickarray);
            first = 0;
            gailarr = [];
        };

        //havells
        function get5minDatahavellsTimestamp(d, scope) {

               if(havells_prevCandleMarumbo == true && havellsarr.length == 1){
                    debugger;
                    
                    if(havells_currentSwingDirection == "upSwing"){
                        if(havellsarr[0] >=  havells_marumboThresholdHigh){
                            console.log('buy long here at' + havells_marumboThresholdHigh);
                        }

                        if(havellsarr[0] <= havells_marumboThresholdHigh){

                        }
                         havells_prevCandleMarumbo = false;
                         havells_marumboThresholdHigh = 0;
                         havells_marumboThresholdLow = 0;
                    }


                    if(havells_currentSwingDirection == "downSwing"){
                        if(havellsarr[0] > havells_marumboThresholdLow){
                            console.log('sell short here at' + havells_marumboThresholdLow );
                        }

                        if(havellsarr[0] <= havells_marumboThresholdLow){
                    
                        }

                            havells_prevCandleMarumbo = false;
                            havells_marumboThresholdHigh = 0;
                            havells_marumboThresholdLow = 0;
                    }
                       
                }

            havellsarr.push(d);
        }

 function gethavellsOHLC(d) {

            havellstickopen = havellsarr[0];
            havellstickhigh = _.maxBy(havellsarr);
            havellsticklow = _.minBy(havellsarr);
            havellstickclose = havellsarr[havellsarr.length - 1];

            if (havellstickopen < havellstickclose) {
                havellstickType = "green";
            } else if (havellstickopen > havellstickclose) {
                havellstickType = "red";
            } else if (havellstickopen = havellstickclose) {
                havellstickType = "doji";
            }

            havellstickLength = Math.abs(havellstickhigh - havellsticklow);


                var marumbo = false;
                if(havellstickType == "red" && havells_currentSwingDirection == 'downSwing'){
                        if(havellstickopen == havellstickhigh && havellstickclose == havellsticklow && havellsticklow < havells_prevCandleHeight[1]){
                            marumbo = true;
                            havells_marumboThresholdHigh = havellstickhigh;
                            havells_marumboThresholdLow = havellsticklow;
                        }
                }

                if(havellstickType == "green" && havells_currentSwingDirection == "upSwing"){
                        if(havellstickopen == havellsticklow && havellstickclose == havellstickhigh && havellstickhigh > havells_prevCandleHeight[0]){
                            marumbo = true;
                            havells_marumboThresholdHigh = havellstickhigh;
                            havells_marumboThresholdLow = havellsticklow;
                        }
                }

                if(havellstickType == "doji"){
                         marumbo = false;
                         havells_marumboThresholdHigh = 0;
                         havells_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + havellstickType);
                   console.log('v swing direction  is ' + havells_currentSwingDirection );
                }

                console.log('current swing havells direction is ' + havells_currentSwingDirection);


            havellstickarray = {
                "open": havellstickopen,
                "low": havellsticklow,
                "high": havellstickhigh,
                "close": havellstickclose,
                "tickType": havellstickType,
                'tickLength': havellstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatahavells(havellstickarray);
            first = 0;
            havellsarr = [];
        };

        //hdfc
        function get5minDatahdfcTimestamp(d, scope) {

               if(hdfc_prevCandleMarumbo == true && hdfcarr.length == 1){
                    debugger;
                    
                    if(hdfc_currentSwingDirection == "upSwing"){
                        if(hdfcarr[0] >=  hdfc_marumboThresholdHigh){
                            console.log('buy long here at' + hdfc_marumboThresholdHigh);
                        }

                        if(hdfcarr[0] <= hdfc_marumboThresholdHigh){

                        }
                         hdfc_prevCandleMarumbo = false;
                         hdfc_marumboThresholdHigh = 0;
                         hdfc_marumboThresholdLow = 0;
                    }


                    if(hdfc_currentSwingDirection == "downSwing"){
                        if(hdfcarr[0] > hdfc_marumboThresholdLow){
                            console.log('sell short here at' + hdfc_marumboThresholdLow );
                        }

                        if(hdfcarr[0] <= hdfc_marumboThresholdLow){
                    
                        }

                            hdfc_prevCandleMarumbo = false;
                            hdfc_marumboThresholdHigh = 0;
                            hdfc_marumboThresholdLow = 0;
                    }
                       
                }

            hdfcarr.push(d);
        }

 function gethdfcOHLC(d) {

            hdfctickopen = hdfcarr[0];
            hdfctickhigh = _.maxBy(hdfcarr);
            hdfcticklow = _.minBy(hdfcarr);
            hdfctickclose = hdfcarr[hdfcarr.length - 1];

            if (hdfctickopen < hdfctickclose) {
                hdfctickType = "green";
            } else if (hdfctickopen > hdfctickclose) {
                hdfctickType = "red";
            } else if (hdfctickopen = hdfctickclose) {
                hdfctickType = "doji";
            }

            hdfctickLength = Math.abs(hdfctickhigh - hdfcticklow);


                var marumbo = false;
                if(hdfctickType == "red" && hdfc_currentSwingDirection == 'downSwing'){
                        if(hdfctickopen == hdfctickhigh && hdfctickclose == hdfcticklow && hdfcticklow < hdfc_prevCandleHeight[1]){
                            marumbo = true;
                            hdfc_marumboThresholdHigh = hdfctickhigh;
                            hdfc_marumboThresholdLow = hdfcticklow;
                        }
                }

                if(hdfctickType == "green" && hdfc_currentSwingDirection == "upSwing"){
                        if(hdfctickopen == hdfcticklow && hdfctickclose == hdfctickhigh && hdfctickhigh > hdfc_prevCandleHeight[0]){
                            marumbo = true;
                            hdfc_marumboThresholdHigh = hdfctickhigh;
                            hdfc_marumboThresholdLow = hdfcticklow;
                        }
                }

                if(hdfctickType == "doji"){
                         marumbo = false;
                         hdfc_marumboThresholdHigh = 0;
                         hdfc_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + hdfctickType);
                   console.log('v swing direction  is ' + hdfc_currentSwingDirection );
                }

                console.log('current swing hdfc direction is ' + hdfc_currentSwingDirection);


            hdfctickarray = {
                "open": hdfctickopen,
                "low": hdfcticklow,
                "high": hdfctickhigh,
                "close": hdfctickclose,
                "tickType": hdfctickType,
                'tickLength': hdfctickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatahdfc(hdfctickarray);
            first = 0;
            hdfcarr = [];
        };

        //hindzinc
        function get5minDatahindzincTimestamp(d, scope) {

               if(hindzinc_prevCandleMarumbo == true && hindzincarr.length == 1){
                   
                    
                    if(hindzinc_currentSwingDirection == "upSwing"){
                        if(hindzincarr[0] >=  hindzinc_marumboThresholdHigh){
                            console.log('buy long here at' + hindzinc_marumboThresholdHigh);
                        }

                        if(hindzincarr[0] <= hindzinc_marumboThresholdHigh){

                        }
                         hindzinc_prevCandleMarumbo = false;
                         hindzinc_marumboThresholdHigh = 0;
                         hindzinc_marumboThresholdLow = 0;
                    }


                    if(hindzinc_currentSwingDirection == "downSwing"){
                        if(hindzincarr[0] > hindzinc_marumboThresholdLow){
                            console.log('sell short here at' + hindzinc_marumboThresholdLow );
                        }

                        if(hindzincarr[0] <= hindzinc_marumboThresholdLow){
                    
                        }

                            hindzinc_prevCandleMarumbo = false;
                            hindzinc_marumboThresholdHigh = 0;
                            hindzinc_marumboThresholdLow = 0;
                    }
                       
                }

            hindzincarr.push(d);
        }

 function gethindzincOHLC(d) {

            hindzinctickopen = hindzincarr[0];
            hindzinctickhigh = _.maxBy(hindzincarr);
            hindzincticklow = _.minBy(hindzincarr);
            hindzinctickclose = hindzincarr[hindzincarr.length - 1];

            if (hindzinctickopen < hindzinctickclose) {
                hindzinctickType = "green";
            } else if (hindzinctickopen > hindzinctickclose) {
                hindzinctickType = "red";
            } else if (hindzinctickopen = hindzinctickclose) {
                hindzinctickType = "doji";
            }

            hindzinctickLength = Math.abs(hindzinctickhigh - hindzincticklow);


                var marumbo = false;
                if(hindzinctickType == "red" && hindzinc_currentSwingDirection == 'downSwing'){
                        if(hindzinctickopen == hindzinctickhigh && hindzinctickclose == hindzincticklow && hindzincticklow < hindzinc_prevCandleHeight[1]){
                            marumbo = true;
                            hindzinc_marumboThresholdHigh = hindzinctickhigh;
                            hindzinc_marumboThresholdLow = hindzincticklow;
                        }
                }

                if(hindzinctickType == "green" && hindzinc_currentSwingDirection == "upSwing"){
                        if(hindzinctickopen == hindzincticklow && hindzinctickclose == hindzinctickhigh && hindzinctickhigh > hindzinc_prevCandleHeight[0]){
                            marumbo = true;
                            hindzinc_marumboThresholdHigh = hindzinctickhigh;
                            hindzinc_marumboThresholdLow = hindzincticklow;
                        }
                }

                if(hindzinctickType == "doji"){
                         marumbo = false;
                         hindzinc_marumboThresholdHigh = 0;
                         hindzinc_marumboThresholdLow = 0;


                }

                if(marumbo == true){
                   console.log('v type is ' + hindzinctickType);
                   console.log('v swing direction  is ' + hindzinc_currentSwingDirection );
                }

                console.log('current swing hindzinc direction is ' + hindzinc_currentSwingDirection);

           
            hindzinctickarray = {
                "open": hindzinctickopen,
                "low": hindzincticklow,
                "high": hindzinctickhigh,
                "close": hindzinctickclose,
                "tickType": hindzinctickType,
                'tickLength': hindzinctickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatahindzinc(hindzinctickarray);
            first = 0;
            hindzincarr = [];
        };

        //infratel
        function get5minDatainfratelTimestamp(d, scope) {

               if(infratel_prevCandleMarumbo == true && infratelarr.length == 1){
                    debugger;
                    
                    if(infratel_currentSwingDirection == "upSwing"){
                        if(infratelarr[0] >=  infratel_marumboThresholdHigh){
                            console.log('buy long here at' + infratel_marumboThresholdHigh);
                        }

                        if(infratelarr[0] <= infratel_marumboThresholdHigh){

                        }
                         infratel_prevCandleMarumbo = false;
                         infratel_marumboThresholdHigh = 0;
                         infratel_marumboThresholdLow = 0;
                    }


                    if(infratel_currentSwingDirection == "downSwing"){
                        if(infratelarr[0] > infratel_marumboThresholdLow){
                            console.log('sell short here at' + infratel_marumboThresholdLow );
                        }

                        if(infratelarr[0] <= infratel_marumboThresholdLow){
                    
                        }

                            infratel_prevCandleMarumbo = false;
                            infratel_marumboThresholdHigh = 0;
                            infratel_marumboThresholdLow = 0;
                    }
                       
                }

            infratelarr.push(d);
        }

 function getinfratelOHLC(d) {

            infrateltickopen = infratelarr[0];
            infrateltickhigh = _.maxBy(infratelarr);
            infratelticklow = _.minBy(infratelarr);
            infrateltickclose = infratelarr[infratelarr.length - 1];

            if (infrateltickopen < infrateltickclose) {
                infrateltickType = "green";
            } else if (infrateltickopen > infrateltickclose) {
                infrateltickType = "red";
            } else if (infrateltickopen = infrateltickclose) {
                infrateltickType = "doji";
            }

            infrateltickLength = Math.abs(infrateltickhigh - infratelticklow);


                var marumbo = false;
                if(infrateltickType == "red" && infratel_currentSwingDirection == 'downSwing'){
                        if(infrateltickopen == infrateltickhigh && infrateltickclose == infratelticklow && infratelticklow < infratel_prevCandleHeight[1]){
                            marumbo = true;
                            infratel_marumboThresholdHigh = infrateltickhigh;
                            infratel_marumboThresholdLow = infratelticklow;
                        }
                }

                if(infrateltickType == "green" && infratel_currentSwingDirection == "upSwing"){
                        if(infrateltickopen == infratelticklow && infrateltickclose == infrateltickhigh && infrateltickhigh > infratel_prevCandleHeight[0]){
                            marumbo = true;
                            infratel_marumboThresholdHigh = infrateltickhigh;
                            infratel_marumboThresholdLow = infratelticklow;
                        }
                }

                if(infrateltickType == "doji"){
                         marumbo = false;
                         infratel_marumboThresholdHigh = 0;
                         infratel_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + infrateltickType);
                   console.log('v swing direction  is ' + infratel_currentSwingDirection );
                }

                console.log('current swing infratel direction is ' + infratel_currentSwingDirection);


            infrateltickarray = {
                "open": infrateltickopen,
                "low": infratelticklow,
                "high": infrateltickhigh,
                "close": infrateltickclose,
                "tickType": infrateltickType,
                'tickLength': infrateltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatainfratel(infrateltickarray);
            first = 0;
            infratelarr = [];
        };

        //reddy
        function get5minDatareddyTimestamp(d, scope) {

               if(reddy_prevCandleMarumbo == true && reddyarr.length == 1){
                    debugger;
                    
                    if(reddy_currentSwingDirection == "upSwing"){
                        if(reddyarr[0] >=  reddy_marumboThresholdHigh){
                            console.log('buy long here at' + reddy_marumboThresholdHigh);
                        }

                        if(reddyarr[0] <= reddy_marumboThresholdHigh){

                        }
                         reddy_prevCandleMarumbo = false;
                         reddy_marumboThresholdHigh = 0;
                         reddy_marumboThresholdLow = 0;
                    }


                    if(reddy_currentSwingDirection == "downSwing"){
                        if(reddyarr[0] > reddy_marumboThresholdLow){
                            console.log('sell short here at' + reddy_marumboThresholdLow );
                        }

                        if(reddyarr[0] <= reddy_marumboThresholdLow){
                    
                        }

                            reddy_prevCandleMarumbo = false;
                            reddy_marumboThresholdHigh = 0;
                            reddy_marumboThresholdLow = 0;
                    }
                       
                }

            reddyarr.push(d);
        }

 function getreddyOHLC(d) {

            reddytickopen = reddyarr[0];
            reddytickhigh = _.maxBy(reddyarr);
            reddyticklow = _.minBy(reddyarr);
            reddytickclose = reddyarr[reddyarr.length - 1];

            if (reddytickopen < reddytickclose) {
                reddytickType = "green";
            } else if (reddytickopen > reddytickclose) {
                reddytickType = "red";
            } else if (reddytickopen = reddytickclose) {
                reddytickType = "doji";
            }

            reddytickLength = Math.abs(reddytickhigh - reddyticklow);


                var marumbo = false;
                if(reddytickType == "red" && reddy_currentSwingDirection == 'downSwing'){
                        if(reddytickopen == reddytickhigh && reddytickclose == reddyticklow && reddyticklow < reddy_prevCandleHeight[1]){
                            marumbo = true;
                            reddy_marumboThresholdHigh = reddytickhigh;
                            reddy_marumboThresholdLow = reddyticklow;
                        }
                }

                if(reddytickType == "green" && reddy_currentSwingDirection == "upSwing"){
                        if(reddytickopen == reddyticklow && reddytickclose == reddytickhigh && reddytickhigh > reddy_prevCandleHeight[0]){
                            marumbo = true;
                            reddy_marumboThresholdHigh = reddytickhigh;
                            reddy_marumboThresholdLow = reddyticklow;
                        }
                }

                if(reddytickType == "doji"){
                         marumbo = false;
                         reddy_marumboThresholdHigh = 0;
                         reddy_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + reddytickType);
                   console.log('v swing direction  is ' + reddy_currentSwingDirection );
                }

                console.log('current swing reddy direction is ' + reddy_currentSwingDirection);


            reddytickarray = {
                "open": reddytickopen,
                "low": reddyticklow,
                "high": reddytickhigh,
                "close": reddytickclose,
                "tickType": reddytickType,
                'tickLength': reddytickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatareddy(reddytickarray);
            first = 0;
            reddyarr = [];
        };

        //reliance

        function get5minDatarelianceTimestamp(d, scope) {

               if(reliance_prevCandleMarumbo == true && reliancearr.length == 1){
                    debugger;
                    
                    if(reliance_currentSwingDirection == "upSwing"){
                        if(reliancearr[0] >=  reliance_marumboThresholdHigh){
                            console.log('buy long here at' + reliance_marumboThresholdHigh);
                        }

                        if(reliancearr[0] <= reliance_marumboThresholdHigh){

                        }
                         reliance_prevCandleMarumbo = false;
                         reliance_marumboThresholdHigh = 0;
                         reliance_marumboThresholdLow = 0;
                    }


                    if(reliance_currentSwingDirection == "downSwing"){
                        if(reliancearr[0] > reliance_marumboThresholdLow){
                            console.log('sell short here at' + reliance_marumboThresholdLow );
                        }

                        if(reliancearr[0] <= reliance_marumboThresholdLow){
                    
                        }

                            reliance_prevCandleMarumbo = false;
                            reliance_marumboThresholdHigh = 0;
                            reliance_marumboThresholdLow = 0;
                    }
                       
                }

            reliancearr.push(d);
        }

 function getrelianceOHLC(d) {

            reliancetickopen = reliancearr[0];
            reliancetickhigh = _.maxBy(reliancearr);
            relianceticklow = _.minBy(reliancearr);
            reliancetickclose = reliancearr[reliancearr.length - 1];

            if (reliancetickopen < reliancetickclose) {
                reliancetickType = "green";
            } else if (reliancetickopen > reliancetickclose) {
                reliancetickType = "red";
            } else if (reliancetickopen = reliancetickclose) {
                reliancetickType = "doji";
            }

            reliancetickLength = Math.abs(reliancetickhigh - relianceticklow);


                var marumbo = false;
                if(reliancetickType == "red" && reliance_currentSwingDirection == 'downSwing'){
                        if(reliancetickopen == reliancetickhigh && reliancetickclose == relianceticklow && relianceticklow < reliance_prevCandleHeight[1]){
                            marumbo = true;
                            reliance_marumboThresholdHigh = reliancetickhigh;
                            reliance_marumboThresholdLow = relianceticklow;
                        }
                }

                if(reliancetickType == "green" && reliance_currentSwingDirection == "upSwing"){
                        if(reliancetickopen == relianceticklow && reliancetickclose == reliancetickhigh && reliancetickhigh > reliance_prevCandleHeight[0]){
                            marumbo = true;
                            reliance_marumboThresholdHigh = reliancetickhigh;
                            reliance_marumboThresholdLow = relianceticklow;
                        }
                }

                if(reliancetickType == "doji"){
                         marumbo = false;
                         reliance_marumboThresholdHigh = 0;
                         reliance_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + reliancetickType);
                   console.log('v swing direction  is ' + reliance_currentSwingDirection );
                }

                console.log('current swing reliance direction is ' + reliance_currentSwingDirection);


            reliancetickarray = {
                "open": reliancetickopen,
                "low": relianceticklow,
                "high": reliancetickhigh,
                "close": reliancetickclose,
                "tickType": reliancetickType,
                'tickLength': reliancetickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatareliance(reliancetickarray);
            first = 0;
            reliancearr = [];
        };

        //sbin
        function get5minDatasbinTimestamp(d, scope) {

               if(sbin_prevCandleMarumbo == true && sbinarr.length == 1){
                    debugger;
                    
                    if(sbin_currentSwingDirection == "upSwing"){
                        if(sbinarr[0] >=  sbin_marumboThresholdHigh){
                            console.log('buy long here at' + sbin_marumboThresholdHigh);
                        }

                        if(sbinarr[0] <= sbin_marumboThresholdHigh){

                        }
                         sbin_prevCandleMarumbo = false;
                         sbin_marumboThresholdHigh = 0;
                         sbin_marumboThresholdLow = 0;
                    }


                    if(sbin_currentSwingDirection == "downSwing"){
                        if(sbinarr[0] > sbin_marumboThresholdLow){
                            console.log('sell short here at' + sbin_marumboThresholdLow );
                        }

                        if(sbinarr[0] <= sbin_marumboThresholdLow){
                    
                        }

                            sbin_prevCandleMarumbo = false;
                            sbin_marumboThresholdHigh = 0;
                            sbin_marumboThresholdLow = 0;
                    }
                       
                }

            sbinarr.push(d);
        }

 function getsbinOHLC(d) {

            sbintickopen = sbinarr[0];
            sbintickhigh = _.maxBy(sbinarr);
            sbinticklow = _.minBy(sbinarr);
            sbintickclose = sbinarr[sbinarr.length - 1];

            if (sbintickopen < sbintickclose) {
                sbintickType = "green";
            } else if (sbintickopen > sbintickclose) {
                sbintickType = "red";
            } else if (sbintickopen = sbintickclose) {
                sbintickType = "doji";
            }

            sbintickLength = Math.abs(sbintickhigh - sbinticklow);


                var marumbo = false;
                if(sbintickType == "red" && sbin_currentSwingDirection == 'downSwing'){
                        if(sbintickopen == sbintickhigh && sbintickclose == sbinticklow && sbinticklow < sbin_prevCandleHeight[1]){
                            marumbo = true;
                            sbin_marumboThresholdHigh = sbintickhigh;
                            sbin_marumboThresholdLow = sbinticklow;
                        }
                }

                if(sbintickType == "green" && sbin_currentSwingDirection == "upSwing"){
                        if(sbintickopen == sbinticklow && sbintickclose == sbintickhigh && sbintickhigh > sbin_prevCandleHeight[0]){
                            marumbo = true;
                            sbin_marumboThresholdHigh = sbintickhigh;
                            sbin_marumboThresholdLow = sbinticklow;
                        }
                }

                if(sbintickType == "doji"){
                         marumbo = false;
                         sbin_marumboThresholdHigh = 0;
                         sbin_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + sbintickType);
                   console.log('v swing direction  is ' + sbin_currentSwingDirection );
                }

                console.log('current swing sbin direction is ' + sbin_currentSwingDirection);


            sbintickarray = {
                "open": sbintickopen,
                "low": sbinticklow,
                "high": sbintickhigh,
                "close": sbintickclose,
                "tickType": sbintickType,
                'tickLength': sbintickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatasbin(sbintickarray);
            first = 0;
            sbinarr = [];
        };

        //seimens
        function get5minDataseimensTimestamp(d, scope) {

               if(seimens_prevCandleMarumbo == true && seimensarr.length == 1){
                    debugger;
                    
                    if(seimens_currentSwingDirection == "upSwing"){
                        if(seimensarr[0] >=  seimens_marumboThresholdHigh){
                            console.log('buy long here at' + seimens_marumboThresholdHigh);
                        }

                        if(seimensarr[0] <= seimens_marumboThresholdHigh){

                        }
                         seimens_prevCandleMarumbo = false;
                         seimens_marumboThresholdHigh = 0;
                         seimens_marumboThresholdLow = 0;
                    }


                    if(seimens_currentSwingDirection == "downSwing"){
                        if(seimensarr[0] > seimens_marumboThresholdLow){
                            console.log('sell short here at' + seimens_marumboThresholdLow );
                        }

                        if(seimensarr[0] <= seimens_marumboThresholdLow){
                    
                        }

                            seimens_prevCandleMarumbo = false;
                            seimens_marumboThresholdHigh = 0;
                            seimens_marumboThresholdLow = 0;
                    }
                       
                }

            seimensarr.push(d);
        }

 function getseimensOHLC(d) {

            seimenstickopen = seimensarr[0];
            seimenstickhigh = _.maxBy(seimensarr);
            seimensticklow = _.minBy(seimensarr);
            seimenstickclose = seimensarr[seimensarr.length - 1];

            if (seimenstickopen < seimenstickclose) {
                seimenstickType = "green";
            } else if (seimenstickopen > seimenstickclose) {
                seimenstickType = "red";
            } else if (seimenstickopen = seimenstickclose) {
                seimenstickType = "doji";
            }

            seimenstickLength = Math.abs(seimenstickhigh - seimensticklow);


                var marumbo = false;
                if(seimenstickType == "red" && seimens_currentSwingDirection == 'downSwing'){
                        if(seimenstickopen == seimenstickhigh && seimenstickclose == seimensticklow && seimensticklow < seimens_prevCandleHeight[1]){
                            marumbo = true;
                            seimens_marumboThresholdHigh = seimenstickhigh;
                            seimens_marumboThresholdLow = seimensticklow;
                        }
                }

                if(seimenstickType == "green" && seimens_currentSwingDirection == "upSwing"){
                        if(seimenstickopen == seimensticklow && seimenstickclose == seimenstickhigh && seimenstickhigh > seimens_prevCandleHeight[0]){
                            marumbo = true;
                            seimens_marumboThresholdHigh = seimenstickhigh;
                            seimens_marumboThresholdLow = seimensticklow;
                        }
                }

                if(seimenstickType == "doji"){
                         marumbo = false;
                         seimens_marumboThresholdHigh = 0;
                         seimens_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + seimenstickType);
                   console.log('v swing direction  is ' + seimens_currentSwingDirection );
                }

                console.log('current swing seimens direction is ' + seimens_currentSwingDirection);


            seimenstickarray = {
                "open": seimenstickopen,
                "low": seimensticklow,
                "high": seimenstickhigh,
                "close": seimenstickclose,
                "tickType": seimenstickType,
                'tickLength': seimenstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataseimens(seimenstickarray);
            first = 0;
            seimensarr = [];
        };

        //tcs
        function get5minDatatcsTimestamp(d, scope) {

               if(tcs_prevCandleMarumbo == true && tcsarr.length == 1){
                    debugger;
                    
                    if(tcs_currentSwingDirection == "upSwing"){
                        if(tcsarr[0] >=  tcs_marumboThresholdHigh){
                            console.log('buy long here at' + tcs_marumboThresholdHigh);
                        }

                        if(tcsarr[0] <= tcs_marumboThresholdHigh){

                        }
                         tcs_prevCandleMarumbo = false;
                         tcs_marumboThresholdHigh = 0;
                         tcs_marumboThresholdLow = 0;
                    }


                    if(tcs_currentSwingDirection == "downSwing"){
                        if(tcsarr[0] > tcs_marumboThresholdLow){
                            console.log('sell short here at' + tcs_marumboThresholdLow );
                        }

                        if(tcsarr[0] <= tcs_marumboThresholdLow){
                    
                        }

                            tcs_prevCandleMarumbo = false;
                            tcs_marumboThresholdHigh = 0;
                            tcs_marumboThresholdLow = 0;
                    }
                       
                }

            tcsarr.push(d);
        }

 function gettcsOHLC(d) {

            tcstickopen = tcsarr[0];
            tcstickhigh = _.maxBy(tcsarr);
            tcsticklow = _.minBy(tcsarr);
            tcstickclose = tcsarr[tcsarr.length - 1];

            if (tcstickopen < tcstickclose) {
                tcstickType = "green";
            } else if (tcstickopen > tcstickclose) {
                tcstickType = "red";
            } else if (tcstickopen = tcstickclose) {
                tcstickType = "doji";
            }

            tcstickLength = Math.abs(tcstickhigh - tcsticklow);


                var marumbo = false;
                if(tcstickType == "red" && tcs_currentSwingDirection == 'downSwing'){
                        if(tcstickopen == tcstickhigh && tcstickclose == tcsticklow && tcsticklow < tcs_prevCandleHeight[1]){
                            marumbo = true;
                            tcs_marumboThresholdHigh = tcstickhigh;
                            tcs_marumboThresholdLow = tcsticklow;
                        }
                }

                if(tcstickType == "green" && tcs_currentSwingDirection == "upSwing"){
                        if(tcstickopen == tcsticklow && tcstickclose == tcstickhigh && tcstickhigh > tcs_prevCandleHeight[0]){
                            marumbo = true;
                            tcs_marumboThresholdHigh = tcstickhigh;
                            tcs_marumboThresholdLow = tcsticklow;
                        }
                }

                if(tcstickType == "doji"){
                         marumbo = false;
                         tcs_marumboThresholdHigh = 0;
                         tcs_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + tcstickType);
                   console.log('v swing direction  is ' + tcs_currentSwingDirection );
                }

                console.log('current swing tcs direction is ' + tcs_currentSwingDirection);


            tcstickarray = {
                "open": tcstickopen,
                "low": tcsticklow,
                "high": tcstickhigh,
                "close": tcstickclose,
                "tickType": tcstickType,
                'tickLength': tcstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataohlc(tcstickarray);
            first = 0;
            tcsarr = [];
        };

        //unilever
        function get5minDataunileverTimestamp(d, scope) {

               if(unilever_prevCandleMarumbo == true && unileverarr.length == 1){
                    debugger;
                    
                    if(unilever_currentSwingDirection == "upSwing"){
                        if(unileverarr[0] >=  unilever_marumboThresholdHigh){
                            console.log('buy long here at' + unilever_marumboThresholdHigh);
                        }

                        if(unileverarr[0] <= unilever_marumboThresholdHigh){

                        }
                         unilever_prevCandleMarumbo = false;
                         unilever_marumboThresholdHigh = 0;
                         unilever_marumboThresholdLow = 0;
                    }


                    if(unilever_currentSwingDirection == "downSwing"){
                        if(unileverarr[0] > unilever_marumboThresholdLow){
                            console.log('sell short here at' + unilever_marumboThresholdLow );
                        }

                        if(unileverarr[0] <= unilever_marumboThresholdLow){
                    
                        }

                            unilever_prevCandleMarumbo = false;
                            unilever_marumboThresholdHigh = 0;
                            unilever_marumboThresholdLow = 0;
                    }
                       
                }

            unileverarr.push(d);
        }

 function getunileverOHLC(d) {

            unilevertickopen = unileverarr[0];
            unilevertickhigh = _.maxBy(unileverarr);
            unileverticklow = _.minBy(unileverarr);
            unilevertickclose = unileverarr[unileverarr.length - 1];

            if (unilevertickopen < unilevertickclose) {
                unilevertickType = "green";
            } else if (unilevertickopen > unilevertickclose) {
                unilevertickType = "red";
            } else if (unilevertickopen = unilevertickclose) {
                unilevertickType = "doji";
            }

            unilevertickLength = Math.abs(unilevertickhigh - unileverticklow);


                var marumbo = false;
                if(unilevertickType == "red" && unilever_currentSwingDirection == 'downSwing'){
                        if(unilevertickopen == unilevertickhigh && unilevertickclose == unileverticklow && unileverticklow < unilever_prevCandleHeight[1]){
                            marumbo = true;
                            unilever_marumboThresholdHigh = unilevertickhigh;
                            unilever_marumboThresholdLow = unileverticklow;
                        }
                }

                if(unilevertickType == "green" && unilever_currentSwingDirection == "upSwing"){
                        if(unilevertickopen == unileverticklow && unilevertickclose == unilevertickhigh && unilevertickhigh > unilever_prevCandleHeight[0]){
                            marumbo = true;
                            unilever_marumboThresholdHigh = unilevertickhigh;
                            unilever_marumboThresholdLow = unileverticklow;
                        }
                }

                if(unilevertickType == "doji"){
                         marumbo = false;
                         unilever_marumboThresholdHigh = 0;
                         unilever_marumboThresholdLow = 0;
                }

                if(marumbo == true){
                   console.log('v type is ' + unilevertickType);
                   console.log('v swing direction  is ' + unilever_currentSwingDirection );
                }

                console.log('current swing unilever direction is ' + unilever_currentSwingDirection);


            unilevertickarray = {
                "open": unilevertickopen,
                "low": unileverticklow,
                "high": unilevertickhigh,
                "close": unilevertickclose,
                "tickType": unilevertickType,
                'tickLength': unilevertickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataunilever(unilevertickarray);
            first = 0;
            unileverarr = [];
        };





     





        // trigger event callbacks
        function trigger(e, args) {
            if (!triggers[e]) return
            for (var n = 0; n < triggers[e].length; n++) {
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

            for (var n = 0; n < packets.length; n++) {
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
                        last_price: buf2long(bin.slice(4, 8)) / divisor
                    });
                    // Parse indices quote and full mode
                } else if (bin.byteLength === 28 || bin.byteLength === 32) {
                    var mode = modeQuote;
                    if (bin.byteLength === 32) mode = modeFull;

                    var tick = {
                        tradable: tradable,
                        mode: mode,
                        instrument_token: instrument_token,
                        last_price: buf2long(bin.slice(4, 8)) / divisor,
                        ohlc: {
                            high: buf2long(bin.slice(8, 12)) / divisor,
                            low: buf2long(bin.slice(12, 16)) / divisor,
                            open: buf2long(bin.slice(16, 20)) / divisor,
                            close: buf2long(bin.slice(20, 24)) / divisor,
                        },
                        change: buf2long(bin.slice(24, 28))
                    };

                    // Compute the change price using close price and last price
                    if (tick.ohlc.close != 0) {
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

                    var ticktype = '';

                    if ((buf2long(bin.slice(28, 32)) / divisor) > (buf2long(bin.slice(40, 44)) / divisor)) {
                        ticktype = "green";
                    } else if ((buf2long(bin.slice(40, 44)) / divisor) > (buf2long(bin.slice(28, 32)) / divisor)) {
                        ticktype = "red";
                    } else if ((buf2long(bin.slice(28, 32)) / divisor) == (buf2long(bin.slice(40, 44)) / divisor)) {
                        ticktype = "doji";
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
                            ticktype: ticktype,
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

                        var s = 0,
                            depth = bin.slice(64, 184);
                        for (var i = 0; i < 10; i++) {
                            s = i * 12;
                            tick.depth[i < 5 ? "buy" : "sell"].push({
                                quantity: buf2long(depth.slice(s, s + 4)),
                                price: buf2long(depth.slice(s + 4, s + 8)) / divisor,
                                orders: buf2long(depth.slice(s + 8, s + 10))
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

            for (var i = 0; i < num; i++) {
                // first two bytes is the packet length
                var size = buf2long(bin.slice(j, j + 2)),
                    packet = bin.slice(j + 2, j + 2 + size);

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

            for (var i = 0, j = len - 1; i < len; i++, j--) {
                val += b[j] << (i * 8);
            }

            return val;
        }




    }




    startCountingTick() {
      //  alert('called');
    }

    startWebsocketClient() {

        //  alert('called');
        //alert(this.props.access);KiteTicker("your_api_key", "your_access_token")
        let SIGNIN_ROOT_URL = 'token i2flrvtqc784yabsdhl8obbmi1dmoxed:';
        let accessdata = this.props.access;

        var headers = {
            'X-Kite-Version': '3',
            'Authorization': `${SIGNIN_ROOT_URL}${accessdata}`,
        };



        var data = {
            'api_key': 'vlu1o53tt1makdu3',
            'access_token': this.props.access,
        };

         debugger;


        var ticker = new KiteTicker(data, headers);

        ticker.connect();
        ticker.on("tick", this.onTick(ticker));
        ticker.on("connect", this.onConnect(ticker));
    }




    render() {

        return ( <
            div >


            <
            p > Congratulation we got the session key as {
                this.state.token
            } < /p>

            <
            p > Congrats first job done.Now we have to call websocket client < /p>

            <
            p > Call websocket client with sesion key < /p>

            <
            button onClick = {
                () => this.startGeneratingServerSession()
            } > Call Websocket client < /button>


           
                < button onClick = {
                    () => this.newWebsocketMETHOD()
                } > Start websocket client < /button>

            <
            div class = "container" >



       

                <
            div class = "row" >
             {
                (this.props.tickCombocopper != undefined && this.props.tickCombocopper.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "Copper"
                plotdata = {
                    this.props.tickCombocopper
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatacopper!= undefined && this.props.trendDatacopper.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "Copper1"
                plotdata = {
                    this.props.trendDatacopper
                }
                /></div >
                :
                ''
            } <
            /div>


               <
            div class = "row" >
             {
                (this.props.tickCombohindzinc != undefined && this.props.tickCombohindzinc.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "HINDZINC"
                plotdata = {
                    this.props.tickCombohindzinc
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatahindzinc!= undefined && this.props.trendDatahindzinc.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "zinchind"
                plotdata = {
                    this.props.trendDatahindzinc
                }
                /></div >
                :
                ''
            } <
            /div>

            

      




            </div>

             
           

            </div>
            )
        }
    }


    function mapStateToProps(state) {
        return {
            access: state.access,
            tickCombocrude: state.tickData,
            trendDatacrude: state.plData,
            tickCombocopper: state.tickDataCopper,
            trendDatacopper: state.plDataCopper,
            tickCombohindzinc :state.tickDatahindzinc,
            trendDatahindzinc:state.plDatahindzinc,


             tickCombobanknifty: state.tickDatabanknifty,
             trendDatabanknifty: state.plDatabanknifty,

             tickCombobosch: state.tickDatabosch,
             trendDatabosch: state.plDatabosch,

             tickCombocadila: state.tickDatacadila,
             trendDatacadila: state.plDatacadila,

             tickCombocipla: state.tickDatacipla,
            trendDatacipla: state.plDataCipla,

             tickCombocoal: state.tickDatacoal,
            trendDatacoal: state.plDatacoal,

             tickComboconcor: state.tickDataconcor,
             trendDataconcor: state.plDataconcor,

             tickCombocummsind: state.tickDatacummsind,
            trendDatacummsind: state.plDatacummsind,

             tickCombodabur: state.tickDatadabur,
            trendDatadabur: state.plDatadabur,

             tickCombodhfl: state.tickDatadhfl,
            trendDatadhfl: state.plDatadhfl,

             tickComboemami: state.tickDataemami,
            trendDataemami: state.plDataemami,

             tickCombogail: state.tickDatagail,
            trendDatagail: state.plDatagail,

             tickCombohavells: state.tickDatahavells,
            trendDatahavells: state.plDatahavells,

             tickComboinfratel: state.tickDatainfratel,
             trendDatainfratel: state.plDatainfratel,


             tickCombohdfc: state.tickDatahdfc,
            trendDatahdfc: state.plDatahdfc,


             tickComboreddy: state.tickDatareddy,
             trendDatareddy: state.plDatareddy,

             tickComboreliance: state.tickDatareliance,
            trendDatareliance: state.plDatareliance,

             tickCombosbin: state.tickDatasbin,
            trendDatasbin: state.plDatasbin,

             tickComboseimens: state.tickDataseimens,
            trendDataseimens: state.plDataseimens,

             tickCombotcs: state.tickDatatcs,
            trendDatatcs: state.plDatatcs,

             tickCombounilever: state.tickDataunilever,
            trendDataunilever: state.plDataunilever,

             
        }
    };

    export default withRouter(connect(mapStateToProps, {
        addTickData,
        pivotData,
        pivotDatacopper,
        addTickDatacopper,
        pivotDatabanknifty,
        addTickDatabanknifty,
        pivotDatabosch,
        addTickDatabosch,
        addTickDatacadila,
        pivotDatacadila,
        addTickDatacipla,
        pivotDatacipla,
        addTickDatacoal,
        pivotDatacoal,
        addTickDataconcor,
        pivotDataconcor,
        addTickDatacummsind,
        pivotDatacummsind,
        addTickDatadabur,
        pivotDatadabur,
        addTickDatadhfl,
        pivotDatadhfl,
        addTickDataemami,
        pivotDataemami,
        addTickDatagail,
        pivotDatagail,
        addTickDatahavells,
        pivotDatahavells,
        addTickDatahdfc,
        pivotDatahdfc,
        addTickDatahindzinc,
        pivotDatahindzinc,
        addTickDatainfratel,
        pivotDatainfratel,
        addTickDatareddy,
        pivotDatareddy,
        addTickDatareliance,
        pivotDatareliance,
        addTickDatasbin,
        pivotDatasbin,
        addTickDataseimens,
        pivotDataseimens,
        addTickDatatcs,
        pivotDatatcs,
        addTickDataunilever,
        pivotDataunilever,
    })(TestLoginNav));