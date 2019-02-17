var godrejcp_currentSwingDirection = '' ;
var godrejcp_prevCandleMarumbo = '';
var godrejcp_marumboThresholdHigh = 0;
var godrejcp_marumboThresholdLow = 0;
var godrejcp_prevCandleHeight = [];
var godrejcp_count = 0;
var godrejcparr = [];
var godrejcptickcount = 0,
    godrejcpticklow = 0,
    godrejcptickhigh = 0,
    godrejcptickopen = 0,
    godrejcptickarray = [],
    godrejcptickType = 0,
    godrejcptickLength = 0,
    godrejcptickclose = 0;



       let godrejcp_len = nextProps.tickCombogodrejcp.length - 1;

        if ((this.props.tickCombogodrejcp) != undefined) {

            if ((nextProps.tickCombogodrejcp).length >= 1) {


            if (godrejcp_len > 2) {
                godrejcp_prevCandleHeight = [];
                godrejcp_prevCandleHeight.push(nextProps.tickCombogodrejcp[godrejcp_len-1].high);
                godrejcp_prevCandleHeight.push(nextProps.tickCombogodrejcp[godrejcp_len-1].low);
            }


                  


            if (godrejcp_len > 1) {

                if (nextProps.tickCombogodrejcp[godrejcp_len].marumbo == true){
                     godrejcp_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombogodrejcp[godrejcp_len].marumbo == false){
                     godrejcp_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombogodrejcp[godrejcp_len].pivot != undefined) {

                    //godrejcp oil
                    if (this.state.godrejcp_pivotpoint != nextProps.tickCombogodrejcp[godrejcp_len].pivot) {

                        godrejcp_count = godrejcp_count + 1;

                        this.setState({
                            godrejcp_pivotpoint: nextProps.tickCombogodrejcp[godrejcp_len].pivot
                        });

                        var pivotValue = nextProps.tickCombogodrejcp[godrejcp_len].pivot;

                        let datainput = {
                            x: godrejcp_count,
                            y: nextProps.tickCombogodrejcp[godrejcp_len].pivot,
                            dir: nextProps.tickCombogodrejcp[godrejcp_len].dir,
                            date: nextProps.tickCombogodrejcp[godrejcp_len].date,
                            currentPrice: nextProps.tickCombogodrejcp[godrejcp_len].currentPrice,
                            tradeStatus : nextProps.tickCombogodrejcp[godrejcp_len].tradeStatus
                        };

                        this.props.pivotDatagodrejcp(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatagodrejcp) != undefined && this.props.trendDatagodrejcp.length > 1 && (nextProps.trendDatagodrejcp) != undefined && nextProps.trendDatagodrejcp.length >1) {
            var godrejcp_nextPropslen = nextProps.trendDatagodrejcp.length-1;

            if (godrejcp_nextPropslen > 1) {
                if (nextProps.trendDatagodrejcp[godrejcp_nextPropslen].dir == "up"){
                     godrejcp_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatagodrejcp[godrejcp_nextPropslen].dir == "low"){
                     godrejcp_currentSwingDirection = 'upSwing';
                }

            }


        }




        function getgodrejcpOHLC(d) {

            godrejcptickopen = godrejcparr[0];
            godrejcptickhigh = _.maxBy(godrejcparr);
            godrejcpticklow = _.minBy(godrejcparr);
            godrejcptickclose = godrejcparr[godrejcparr.length - 1];

            if (godrejcptickopen < godrejcptickclose) {
                godrejcptickType = "green";
            } else if (godrejcptickopen > godrejcptickclose) {
                godrejcptickType = "red";
            } else if (godrejcptickopen = godrejcptickclose) {
                godrejcptickType = "doji";
            }

            godrejcptickLength = Math.abs(godrejcptickhigh - godrejcpticklow);


                var marumbo = false;
                if(godrejcptickType == "red" && godrejcp_currentSwingDirection == 'downSwing'){
                        if(godrejcptickopen == godrejcptickhigh && godrejcptickclose == godrejcpticklow && godrejcpticklow < godrejcp_prevCandleHeight[1]){
                            marumbo = true;
                            godrejcp_marumboThresholdHigh = godrejcptickhigh;
                            godrejcp_marumboThresholdLow = godrejcpticklow;
                        }
                }

                if(godrejcptickType == "green" && godrejcp_currentSwingDirection == "upSwing"){
                        if(godrejcptickopen == godrejcpticklow && godrejcptickclose == godrejcptickhigh && godrejcptickhigh > godrejcp_prevCandleHeight[0]){
                            marumbo = true;
                            godrejcp_marumboThresholdHigh = godrejcptickhigh;
                            godrejcp_marumboThresholdLow = godrejcpticklow;
                        }
                }

                if(godrejcptickType == "doji"){
                         marumbo = false;
                         godrejcp_marumboThresholdHigh = 0;
                         godrejcp_marumboThresholdLow = 0;
                }

              

            godrejcptickarray = {
                "open": godrejcptickopen,
                "low": godrejcpticklow,
                "high": godrejcptickhigh,
                "close": godrejcptickclose,
                "tickType": godrejcptickType,
                'tickLength': godrejcptickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatagodrejcp(godrejcptickarray);
            first = 0;
            godrejcparr = [];
        };


         function get5minDatagodrejcpTimestamp(d, scope) {

               if(godrejcp_prevCandleMarumbo == true && godrejcparr.length == 1){
                    ;
                    
                    if(godrejcp_currentSwingDirection == "upSwing"){
                        if(godrejcparr[0] >=  godrejcp_marumboThresholdHigh){
                            console.log('buy long here at' + godrejcp_marumboThresholdHigh);
                            scope.startTrade('GODREJCP', 'NSE', 'BUY', godrejcparr[0],(godrejcp_marumboThresholdHigh+godrejcp_marumboThresholdLow)/2, godrejcparr[0] + parseInt(godrejcparr[0])*breakevenRatio);
                        }

                        if(godrejcparr[0] <= godrejcp_marumboThresholdHigh){

                        }
                         godrejcp_prevCandleMarumbo = false;
                         godrejcp_marumboThresholdHigh = 0;
                         godrejcp_marumboThresholdLow = 0;
                    }


                    if(godrejcp_currentSwingDirection == "downSwing"){
                        if(godrejcparr[0] > godrejcp_marumboThresholdLow){
                            console.log('sell short here at' + godrejcp_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', godrejcpTradePrice, stop, target);

                            scope.startTrade('GODREJCP', 'NSE', 'SELL', godrejcparr[0],(godrejcp_marumboThresholdHigh+godrejcp_marumboThresholdLow)/2 , godrejcparr[0]-parseInt(godrejcparr[0])*breakevenRatio);
                     
                        }

                        if(godrejcparr[0] <= godrejcp_marumboThresholdLow){
                    
                        }

                            godrejcp_prevCandleMarumbo = false;
                            godrejcp_marumboThresholdHigh = 0;
                            godrejcp_marumboThresholdLow = 0;
                    }
                       
                }

            godrejcparr.push(d);
        }


              <
            div class = "row" >
             {
                (this.props.tickCombogodrejcp != undefined && this.props.tickCombogodrejcp.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "godrejcp"
                plotdata = {
                    this.props.tickCombogodrejcp
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatagodrejcp!= undefined && this.props.trendDatagodrejcp.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "godrejcp1"
                plotdata = {
                    this.props.trendDatagodrejcp
                }
                /></div >
                :
                ''
            } <
            /div>

export function addTickDatagodrejcp(data){
  //alert(JSON.stringify(data));
   return ({
     type :'ADD_DATA_SCOPE_GODREJCP',
     payload : data
    })
}

export function pivotDatagodrejcp(data){
    return ({
     type :'PLOT_PIVOT_DATA_GODREJCP',
     payload : data,
    })
}

                       if (d[i].instrument_token == "2585345") {
                                 get5minDatagodrejcpTimestamp(d[i].last_price, self);
                            }



            tickCombogodrejcp: state.tickDatagodrejcp,
            trendDatagodrejcp : state.plDatagodrejcp,


addTickDatagodrejcp,
pivotDatagodrejcp





