var ofss_currentSwingDirection = '' ;
var ofss_prevCandleMarumbo = '';
var ofss_marumboThresholdHigh = 0;
var ofss_marumboThresholdLow = 0;
var ofss_prevCandleHeight = [];
var ofss_count = 0;
var ofssarr = [];
var ofsstickcount = 0,
    ofssticklow = 0,
    ofsstickhigh = 0,
    ofsstickopen = 0,
    ofsstickarray = [],
    ofsstickType = 0,
    ofsstickLength = 0,
    ofsstickclose = 0,
    ofssfirstcall;



       let ofss_len = nextProps.tickComboofss.length - 1;

        if ((this.props.tickComboofss) != undefined) {

            if ((nextProps.tickComboofss).length >= 1) {


            if (ofss_len > 2) {
                ofss_prevCandleHeight = [];
                ofss_prevCandleHeight.push(nextProps.tickComboofss[ofss_len-1].high);
                ofss_prevCandleHeight.push(nextProps.tickComboofss[ofss_len-1].low);
            }


                  


            if (ofss_len > 1) {

                if (nextProps.tickComboofss[ofss_len].marumbo == true){
                     ofss_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboofss[ofss_len].marumbo == false){
                     ofss_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboofss[ofss_len].pivot != undefined) {

                    //ofss oil
                    if (this.state.ofss_pivotpoint != nextProps.tickComboofss[ofss_len].pivot) {

                        ofss_count = ofss_count + 1;

                        this.setState({
                            ofss_pivotpoint: nextProps.tickComboofss[ofss_len].pivot
                        });

                        var pivotValue = nextProps.tickComboofss[ofss_len].pivot;

                        let datainput = {
                            x: ofss_count,
                            y: nextProps.tickComboofss[ofss_len].pivot,
                            dir: nextProps.tickComboofss[ofss_len].dir,
                            date: nextProps.tickComboofss[ofss_len].date,
                            currentPrice: nextProps.tickComboofss[ofss_len].currentPrice,
                            tradeStatus : nextProps.tickComboofss[ofss_len].tradeStatus
                        };

                        this.props.pivotDataofss(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataofss) != undefined && this.props.trendDataofss.length > 1 && (nextProps.trendDataofss) != undefined && nextProps.trendDataofss.length >1) {
            var ofss_nextPropslen = nextProps.trendDataofss.length-1;

            if (ofss_nextPropslen > 1) {
                if (nextProps.trendDataofss[ofss_nextPropslen].dir == "up"){
                     ofss_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataofss[ofss_nextPropslen].dir == "low"){
                     ofss_currentSwingDirection = 'upSwing';
                }

            }


        }




         function get5minDataofssTimestamp(d, scope) {

               if(ofss_prevCandleMarumbo == true && ofssarr.length == 0){
                   
                    
                    if(ofss_currentSwingDirection == "upSwing"){
                        if(d >=  ofss_marumboThresholdHigh){
                             console.log('buy long here at' + ofss_marumboThresholdHigh);
                             scope.startTrade('DHFL', 'NSE', 'BUY', d,(ofss_marumboThresholdHigh+ofss_marumboThresholdLow)/2, d + parseInt(d)*breakevenRatio);

                        }
                    }


                    if(ofss_currentSwingDirection == "downSwing"){
                        if(d <= ofss_marumboThresholdLow){
                              console.log('sell short here at' + ofss_marumboThresholdLow );
                              scope.startTrade('DHFL', 'NSE', 'SELL', d,(ofss_marumboThresholdHigh+ofss_marumboThresholdLow)/2 , d-parseInt(ofssarr[0])*breakevenRatio);
                     
                        }
                    }



                       
                    ofss_prevCandleMarumbo = false;
                    ofss_marumboThresholdHigh = 0;
                    ofss_marumboThresholdLow = 0;
                       
                }

            ofssarr.push(d);
            console.log('ofssarr' + ofssarr);
        }

function getofssOHLC(d) {
            
            var marumboPivotCheck = true;
            ofsstickopen = ofssarr[0];
            ofsstickhigh = _.maxBy(ofssarr);
            ofssticklow = _.minBy(ofssarr);
            ofsstickclose = ofssarr[ofssarr.length - 1];

            if (ofsstickopen < ofsstickclose) {
                ofsstickType = "green";
            } else if (ofsstickopen > ofsstickclose) {
                ofsstickType = "red";
            } else if (ofsstickopen = ofsstickclose) {
                ofsstickType = "doji";
            }

                ofsstickLength = Math.abs(ofsstickhigh - ofssticklow);
                var  ofssLengthRatio =  ofsstickLength/ofsstickhigh;

                //check if value is contained inside any value 

                if(d.props.trendDataofss.length >1 && ofsstickType == "green" && ofss_currentSwingDirection == "upSwing"){

                    if(d.props.trendDataofss[d.props.trendDataofss.length-1].upPivotPointsArr !== undefined){
                        
                         d.props.trendDataofss[d.props.trendDataofss.length-1].upPivotPointsArr.map((v,i) => {

                                 if( ofssticklow <= v && v <= ofsstickhigh){
                                     marumboPivotCheck = false;
                                 }

                         })
                    }

                }


                if(d.props.trendDataofss.length >1 && ofsstickType == "red" && ofss_currentSwingDirection == 'downSwing'){

                    if(d.props.trendDataofss[d.props.trendDataofss.length-1].lowPivotPointsArr !== undefined){
                        
                         d.props.trendDataofss[d.props.trendDataofss.length-1].lowPivotPointsArr.map((v,i) => {

                                 if( ofssticklow <= v && v <= ofsstickhigh){
                                     marumboPivotCheck = false;
                                 }

                         })
                    }

                }




                var marumbo = false;
                if(ofsstickType == "red" && ofss_currentSwingDirection == 'downSwing' && ofssLengthRatio <0.01 && marumboPivotCheck == true ){
                        if( ofsstickclose == ofssticklow && ofssticklow < ofss_prevCandleHeight[1]){
                            marumbo = true;
                            ofss_marumboThresholdHigh = ofsstickhigh;
                            ofss_marumboThresholdLow = ofssticklow;
                        }
                }

                if(ofsstickType == "green" && ofss_currentSwingDirection == "upSwing" && ofssLengthRatio <0.01 && marumboPivotCheck == true){
                        if(ofsstickclose == ofsstickhigh && ofsstickhigh > ofss_prevCandleHeight[0]){
                            marumbo = true;
                            ofss_marumboThresholdHigh = ofsstickhigh;
                            ofss_marumboThresholdLow = ofssticklow;
                        }
                }

                if(ofsstickType == "doji"){
                         marumbo = false;
                         ofss_marumboThresholdHigh = 0;
                         ofss_marumboThresholdLow = 0;


                }

               
        if(ofssarr.length >1){   
            ofsstickarray = {
                "open": ofsstickopen,
                "low": ofssticklow,
                "high": ofsstickhigh,
                "close": ofsstickclose,
                "tickType": ofsstickType,
                'tickLength': ofsstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataofss(ofsstickarray);
        }

                if( ofssfirstcall == false){
                         ofssfirstcall = true;

                         var value = 0;
                         if(ofsstickopen < ofsstickclose){
                             //up direction
                             value= ofssticklow;
                              
                          }
                          else if(ofsstickopen > ofsstickclose){
                               //down direction
                              value= ofsstickhigh;
                          }
                          else{
                              value= ofsstickhigh;
                          }

                        let datainput = {
                            x: 0,
                            y: value
                        };
                        d.props.pivotDataofss(datainput);
                }



            first = 0;
            ofssarr = [];
        };



        
              <
            div class = "row" >
             {
                (this.props.tickComboofss != undefined && this.props.tickComboofss.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "ofss"
                plotdata = {
                    this.props.tickComboofss
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataofss!= undefined && this.props.trendDataofss.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "ofss1"
                plotdata = {
                    this.props.trendDataofss
                }
                /></div >
                :
                ''
            } <
            /div>

export function addTickDataofss(data){
  //alert(JSON.stringify(data));
   return ({
     type :'ADD_DATA_SCOPE_GODREJCP',
     payload : data
    })
}

export function pivotDataofss(data){
    return ({
     type :'PLOT_PIVOT_DATA_GODREJCP',
     payload : data,
    })
}

                       if (d[i].instrument_token == "2585345") {
                                 get5minDataofssTimestamp(d[i].last_price, self);
                            }



            tickComboofss: state.tickDataofss,
            trendDataofss : state.plDataofss,


addTickDataofss,
pivotDataofss





