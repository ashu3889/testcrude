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
        addTickDatantpc,
        pivotDatantpc,
        pivotDatabpcl,
        addTickDatabpcl,
        addTickDatapowergrid,
        pivotDatapowergrid,
        addTickDataongc,
        pivotDataongc,
        addTickDatatatamotors,
        pivotDatatatamotors,
        addTickDatalarsen,
        pivotDatalarsen,
        addTickDataitc,
        pivotDataitc,
        addTickDataadaniports,
         pivotDataadaniports,
         addTickDataasianpaints,
        pivotDataasianpaints,
        addTickDataupl,
pivotDataupl,
addTickDatabajajfinserv,
pivotDatabajajfinserv,
addTickDatatatasteel,
pivotDatatatasteel,
addTickDatazeel,
pivotDatazeel,
addTickDatagrasim,
pivotDatagrasim,
addTickDatahindalco,
pivotDatahindalco,
addTickDataheromotoco,
pivotDataheromotoco,
addTickDatasunpharma,
pivotDatasunpharma,
addTickDatakotakbank,
pivotDatakotakbank,

addTickDatamarico,
pivotDatamarico,
addTickDatalupin,
pivotDatalupin,
addTickDatapidilitind,
pivotDatapidilitind,
addTickDataofss,
pivotDataofss,
addTickDatahcltech,
pivotDatahcltech,
addTickDatagodrejcp,
pivotDatagodrejcp,
    
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

var breakevenRatio = 0.001;

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


var hcltech_currentSwingDirection = '' ;
var hcltech_prevCandleMarumbo = '';
var hcltech_marumboThresholdHigh = 0;
var hcltech_marumboThresholdLow = 0;
var hcltech_prevCandleHeight = [];
var hcltech_count = 0;
var hcltecharr = [];
var hcltechtickcount = 0,
    hcltechticklow = 0,
    hcltechtickhigh = 0,
    hcltechtickopen = 0,
    hcltechtickarray = [],
    hcltechtickType = 0,
    hcltechtickLength = 0,
    hcltechtickclose = 0;

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
    ofsstickclose = 0;

var pidilitind_currentSwingDirection = '' ;
var pidilitind_prevCandleMarumbo = '';
var pidilitind_marumboThresholdHigh = 0;
var pidilitind_marumboThresholdLow = 0;
var pidilitind_prevCandleHeight = [];
var pidilitind_count = 0;
var pidilitindarr = [];
var pidilitindtickcount = 0,
    pidilitindticklow = 0,
    pidilitindtickhigh = 0,
    pidilitindtickopen = 0,
    pidilitindtickarray = [],
    pidilitindtickType = 0,
    pidilitindtickLength = 0,
    pidilitindtickclose = 0;


var lupin_currentSwingDirection = '' ;
var lupin_prevCandleMarumbo = '';
var lupin_marumboThresholdHigh = 0;
var lupin_marumboThresholdLow = 0;
var lupin_prevCandleHeight = [];
var lupin_count = 0;
var lupinarr = [];
var lupintickcount = 0,
    lupinticklow = 0,
    lupintickhigh = 0,
    lupintickopen = 0,
    lupintickarray = [],
    lupintickType = 0,
    lupintickLength = 0,
    lupintickclose = 0;

var marico_currentSwingDirection = '' ;
var marico_prevCandleMarumbo = '';
var marico_marumboThresholdHigh = 0;
var marico_marumboThresholdLow = 0;
var marico_prevCandleHeight = [];
var marico_count = 0;
var maricoarr = [];
var maricotickcount = 0,
    maricoticklow = 0,
    maricotickhigh = 0,
    maricotickopen = 0,
    maricotickarray = [],
    maricotickType = 0,
    maricotickLength = 0,
    maricotickclose = 0;


var kotakbank_currentSwingDirection = '' ;
var kotakbank_prevCandleMarumbo = '';
var kotakbank_marumboThresholdHigh = 0;
var kotakbank_marumboThresholdLow = 0;
var kotakbank_prevCandleHeight = [];
var kotakbank_count = 0;
var kotakbankarr = [];
var kotakbanktickcount = 0,
    kotakbankticklow = 0,
    kotakbanktickhigh = 0,
    kotakbanktickopen = 0,
    kotakbanktickarray = [],
    kotakbanktickType = 0,
    kotakbanktickLength = 0,
    kotakbanktickclose = 0;

var tatasteel_currentSwingDirection = '' ;
var tatasteel_prevCandleMarumbo = '';
var tatasteel_marumboThresholdHigh = 0;
var tatasteel_marumboThresholdLow = 0;
var tatasteel_prevCandleHeight = [];
var tatasteel_count = 0;
var tatasteelarr = [];
var tatasteeltickcount = 0,
    tatasteelticklow = 0,
    tatasteeltickhigh = 0,
    tatasteeltickopen = 0,
    tatasteeltickarray = [],
    tatasteeltickType = 0,
    tatasteeltickLength = 0,
    tatasteeltickclose = 0;

var sunpharma_currentSwingDirection = '' ;
var sunpharma_prevCandleMarumbo = '';
var sunpharma_marumboThresholdHigh = 0;
var sunpharma_marumboThresholdLow = 0;
var sunpharma_prevCandleHeight = [];
var sunpharma_count = 0;
var sunpharmaarr = [];
var sunpharmatickcount = 0,
    sunpharmaticklow = 0,
    sunpharmatickhigh = 0,
    sunpharmatickopen = 0,
    sunpharmatickarray = [],
    sunpharmatickType = 0,
    sunpharmatickLength = 0,
    sunpharmatickclose = 0;



var heromotoco_currentSwingDirection = '' ;
var heromotoco_prevCandleMarumbo = '';
var heromotoco_marumboThresholdHigh = 0;
var heromotoco_marumboThresholdLow = 0;
var heromotoco_prevCandleHeight = [];
var heromotoco_count = 0;
var heromotocoarr = [];
var heromotocotickcount = 0,
    heromotocoticklow = 0,
    heromotocotickhigh = 0,
    heromotocotickopen = 0,
    heromotocotickarray = [],
    heromotocotickType = 0,
    heromotocotickLength = 0,
    heromotocotickclose = 0;


var hindalco_currentSwingDirection = '' ;
var hindalco_prevCandleMarumbo = '';
var hindalco_marumboThresholdHigh = 0;
var hindalco_marumboThresholdLow = 0;
var hindalco_prevCandleHeight = [];
var hindalco_count = 0;
var hindalcoarr = [];
var hindalcotickcount = 0,
    hindalcoticklow = 0,
    hindalcotickhigh = 0,
    hindalcotickopen = 0,
    hindalcotickarray = [],
    hindalcotickType = 0,
    hindalcotickLength = 0,
    hindalcotickclose = 0;


var bajajfinserv_currentSwingDirection = '' ;
var bajajfinserv_prevCandleMarumbo = '';
var bajajfinserv_marumboThresholdHigh = 0;
var bajajfinserv_marumboThresholdLow = 0;
var bajajfinserv_prevCandleHeight = [];
var bajajfinserv_count = 0;
var bajajfinservarr = [];
var bajajfinservtickcount = 0,
    bajajfinservticklow = 0,
    bajajfinservtickhigh = 0,
    bajajfinservtickopen = 0,
    bajajfinservtickarray = [],
    bajajfinservtickType = 0,
    bajajfinservtickLength = 0,
    bajajfinservtickclose = 0;


var grasim_currentSwingDirection = '' ;
var grasim_prevCandleMarumbo = '';
var grasim_marumboThresholdHigh = 0;
var grasim_marumboThresholdLow = 0;
var grasim_prevCandleHeight = [];
var grasim_count = 0;
var grasimarr = [];
var grasimtickcount = 0,
    grasimticklow = 0,
    grasimtickhigh = 0,
    grasimtickopen = 0,
    grasimtickarray = [],
    grasimtickType = 0,
    grasimtickLength = 0,
    grasimtickclose = 0;



var zeel_currentSwingDirection = '' ;
var zeel_prevCandleMarumbo = '';
var zeel_marumboThresholdHigh = 0;
var zeel_marumboThresholdLow = 0;
var zeel_prevCandleHeight = [];
var zeel_count = 0;
var zeelarr = [];
var zeeltickcount = 0,
    zeelticklow = 0,
    zeeltickhigh = 0,
    zeeltickopen = 0,
    zeeltickarray = [],
    zeeltickType = 0,
    zeeltickLength = 0,
    zeeltickclose = 0;

var upl_currentSwingDirection = '' ;
var upl_prevCandleMarumbo = '';
var upl_marumboThresholdHigh = 0;
var upl_marumboThresholdLow = 0;
var upl_prevCandleHeight = [];
var upl_count = 0;
var uplarr = [];
var upltickcount = 0,
    uplticklow = 0,
    upltickhigh = 0,
    upltickopen = 0,
    upltickarray = [],
    upltickType = 0,
    upltickLength = 0,
    upltickclose = 0;

var asianpaints_currentSwingDirection = '' ;
var asianpaints_prevCandleMarumbo = '';
var asianpaints_marumboThresholdHigh = 0;
var asianpaints_marumboThresholdLow = 0;
var asianpaints_prevCandleHeight = [];
var asianpaints_count = 0;
var asianpaintsarr = [];
var asianpaintstickcount = 0,
    asianpaintsticklow = 0,
    asianpaintstickhigh = 0,
    asianpaintstickopen = 0,
    asianpaintstickarray = [],
    asianpaintstickType = 0,
    asianpaintstickLength = 0,
    asianpaintstickclose = 0;

var adaniports_currentSwingDirection = '' ;
var adaniports_prevCandleMarumbo = '';
var adaniports_marumboThresholdHigh = 0;
var adaniports_marumboThresholdLow = 0;
var adaniports_prevCandleHeight = [];
var adaniports_count = 0;
var adaniportsarr = [];
var adaniportstickcount = 0,
    adaniportsticklow = 0,
    adaniportstickhigh = 0,
    adaniportstickopen = 0,
    adaniportstickarray = [],
    adaniportstickType = 0,
    adaniportstickLength = 0,
    adaniportstickclose = 0;

var itc_currentSwingDirection = '' ;
var itc_prevCandleMarumbo = '';
var itc_marumboThresholdHigh = 0;
var itc_marumboThresholdLow = 0;
var itc_prevCandleHeight = [];
var itc_count = 0;
var itcarr = [];
var itctickcount = 0,
    itcticklow = 0,
    itctickhigh = 0,
    itctickopen = 0,
    itctickarray = [],
    itctickType = 0,
    itctickLength = 0,
    itctickclose = 0;



var tatamotors_currentSwingDirection = '' ;
var tatamotors_prevCandleMarumbo = '';
var tatamotors_marumboThresholdHigh = 0;
var tatamotors_marumboThresholdLow = 0;
var tatamotors_prevCandleHeight = [];
var tatamotors_count = 0;
var tatamotorsarr = [];
var tatamotorstickcount = 0,
    tatamotorsticklow = 0,
    tatamotorstickhigh = 0,
    tatamotorstickopen = 0,
    tatamotorstickarray = [],
    tatamotorstickType = 0,
    tatamotorstickLength = 0,
    tatamotorstickclose = 0;




var ongc_currentSwingDirection = '' ;
var ongc_prevCandleMarumbo = '';
var ongc_marumboThresholdHigh = 0;
var ongc_marumboThresholdLow = 0;
var ongc_prevCandleHeight = [];
var ongc_count = 0;
var ongcarr = [];
var ongctickcount = 0,
    ongcticklow = 0,
    ongctickhigh = 0,
    ongctickopen = 0,
    ongctickarray = [],
    ongctickType = 0,
    ongctickLength = 0,
    ongctickclose = 0;

    var powergrid_currentSwingDirection = '' ;
var powergrid_prevCandleMarumbo = '';
var powergrid_marumboThresholdHigh = 0;
var powergrid_marumboThresholdLow = 0;
var powergrid_prevCandleHeight = [];
var powergrid_count = 0;
var powergridarr = [];
var powergridtickcount = 0,
    powergridticklow = 0,
    powergridtickhigh = 0,
    powergridtickopen = 0,
    powergridtickarray = [],
    powergridtickType = 0,
    powergridtickLength = 0,
    powergridtickclose = 0;

    var larsen_currentSwingDirection = '' ;
var larsen_prevCandleMarumbo = '';
var larsen_marumboThresholdHigh = 0;
var larsen_marumboThresholdLow = 0;
var larsen_prevCandleHeight = [];
var larsen_count = 0;
var larsenarr = [];
var larsentickcount = 0,
    larsenticklow = 0,
    larsentickhigh = 0,
    larsentickopen = 0,
    larsentickarray = [],
    larsentickType = 0,
    larsentickLength = 0,
    larsentickclose = 0;


var bpcl_currentSwingDirection = '' ;
var bpcl_prevCandleMarumbo = '';
var bpcl_marumboThresholdHigh = 0;
var bpcl_marumboThresholdLow = 0;
var bpcl_prevCandleHeight = [];
var bpcl_count = 0;
var bpclarr = [];
var bpcltickcount = 0,
    bpclticklow = 0,
    bpcltickhigh = 0,
    bpcltickopen = 0,
    bpcltickarray = [],
    bpcltickType = 0,
    bpcltickLength = 0,
    bpcltickclose = 0;


var ntpc_currentSwingDirection = '' ;
var ntpc_prevCandleMarumbo = '';
var ntpc_marumboThresholdHigh = 0;
var ntpc_marumboThresholdLow = 0;
var ntpc_prevCandleHeight = [];
var ntpc_count = 0;
var ntpcarr = [];
var ntpctickcount = 0,
    ntpcticklow = 0,
    ntpctickhigh = 0,
    ntpctickopen = 0,
    ntpctickarray = [],
    ntpctickType = 0,
    ntpctickLength = 0,
    ntpctickclose = 0;



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
    ;
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

                  // ;
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





         let hcltech_len = nextProps.tickCombohcltech.length - 1;

        if ((this.props.tickCombohcltech) != undefined) {

            if ((nextProps.tickCombohcltech).length >= 1) {


            if (hcltech_len > 2) {
                hcltech_prevCandleHeight = [];
                hcltech_prevCandleHeight.push(nextProps.tickCombohcltech[hcltech_len-1].high);
                hcltech_prevCandleHeight.push(nextProps.tickCombohcltech[hcltech_len-1].low);
            }


                  


            if (hcltech_len > 1) {

                if (nextProps.tickCombohcltech[hcltech_len].marumbo == true){
                     hcltech_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombohcltech[hcltech_len].marumbo == false){
                     hcltech_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombohcltech[hcltech_len].pivot != undefined) {

                    //hcltech oil
                    if (this.state.hcltech_pivotpoint != nextProps.tickCombohcltech[hcltech_len].pivot) {

                        hcltech_count = hcltech_count + 1;

                        this.setState({
                            hcltech_pivotpoint: nextProps.tickCombohcltech[hcltech_len].pivot
                        });

                        var pivotValue = nextProps.tickCombohcltech[hcltech_len].pivot;

                        let datainput = {
                            x: hcltech_count,
                            y: nextProps.tickCombohcltech[hcltech_len].pivot,
                            dir: nextProps.tickCombohcltech[hcltech_len].dir,
                            date: nextProps.tickCombohcltech[hcltech_len].date,
                            currentPrice: nextProps.tickCombohcltech[hcltech_len].currentPrice,
                            tradeStatus : nextProps.tickCombohcltech[hcltech_len].tradeStatus
                        };

                        this.props.pivotDatahcltech(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatahcltech) != undefined && this.props.trendDatahcltech.length > 1 && (nextProps.trendDatahcltech) != undefined && nextProps.trendDatahcltech.length >1) {
            var hcltech_nextPropslen = nextProps.trendDatahcltech.length-1;

            if (hcltech_nextPropslen > 1) {
                if (nextProps.trendDatahcltech[hcltech_nextPropslen].dir == "up"){
                     hcltech_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatahcltech[hcltech_nextPropslen].dir == "low"){
                     hcltech_currentSwingDirection = 'upSwing';
                }

            }


        }



        let pidilitind_len = nextProps.tickCombopidilitind.length - 1;

        if ((this.props.tickCombopidilitind) != undefined) {

            if ((nextProps.tickCombopidilitind).length >= 1) {


            if (pidilitind_len > 2) {
                pidilitind_prevCandleHeight = [];
                pidilitind_prevCandleHeight.push(nextProps.tickCombopidilitind[pidilitind_len-1].high);
                pidilitind_prevCandleHeight.push(nextProps.tickCombopidilitind[pidilitind_len-1].low);
            }


                  


            if (pidilitind_len > 1) {

                if (nextProps.tickCombopidilitind[pidilitind_len].marumbo == true){
                     pidilitind_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombopidilitind[pidilitind_len].marumbo == false){
                     pidilitind_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombopidilitind[pidilitind_len].pivot != undefined) {

                    //pidilitind oil
                    if (this.state.pidilitind_pivotpoint != nextProps.tickCombopidilitind[pidilitind_len].pivot) {

                        pidilitind_count = pidilitind_count + 1;

                        this.setState({
                            pidilitind_pivotpoint: nextProps.tickCombopidilitind[pidilitind_len].pivot
                        });

                        var pivotValue = nextProps.tickCombopidilitind[pidilitind_len].pivot;

                        let datainput = {
                            x: pidilitind_count,
                            y: nextProps.tickCombopidilitind[pidilitind_len].pivot,
                            dir: nextProps.tickCombopidilitind[pidilitind_len].dir,
                            date: nextProps.tickCombopidilitind[pidilitind_len].date,
                            currentPrice: nextProps.tickCombopidilitind[pidilitind_len].currentPrice,
                            tradeStatus : nextProps.tickCombopidilitind[pidilitind_len].tradeStatus
                        };

                        this.props.pivotDatapidilitind(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatapidilitind) != undefined && this.props.trendDatapidilitind.length > 1 && (nextProps.trendDatapidilitind) != undefined && nextProps.trendDatapidilitind.length >1) {
            var pidilitind_nextPropslen = nextProps.trendDatapidilitind.length-1;

            if (pidilitind_nextPropslen > 1) {
                if (nextProps.trendDatapidilitind[pidilitind_nextPropslen].dir == "up"){
                     pidilitind_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatapidilitind[pidilitind_nextPropslen].dir == "low"){
                     pidilitind_currentSwingDirection = 'upSwing';
                }

            }


        }




       let lupin_len = nextProps.tickCombolupin.length - 1;

        if ((this.props.tickCombolupin) != undefined) {

            if ((nextProps.tickCombolupin).length >= 1) {


            if (lupin_len > 2) {
                lupin_prevCandleHeight = [];
                lupin_prevCandleHeight.push(nextProps.tickCombolupin[lupin_len-1].high);
                lupin_prevCandleHeight.push(nextProps.tickCombolupin[lupin_len-1].low);
            }


                  


            if (lupin_len > 1) {

                if (nextProps.tickCombolupin[lupin_len].marumbo == true){
                     lupin_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombolupin[lupin_len].marumbo == false){
                     lupin_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombolupin[lupin_len].pivot != undefined) {

                    //lupin oil
                    if (this.state.lupin_pivotpoint != nextProps.tickCombolupin[lupin_len].pivot) {

                        lupin_count = lupin_count + 1;

                        this.setState({
                            lupin_pivotpoint: nextProps.tickCombolupin[lupin_len].pivot
                        });

                        var pivotValue = nextProps.tickCombolupin[lupin_len].pivot;

                        let datainput = {
                            x: lupin_count,
                            y: nextProps.tickCombolupin[lupin_len].pivot,
                            dir: nextProps.tickCombolupin[lupin_len].dir,
                            date: nextProps.tickCombolupin[lupin_len].date,
                            currentPrice: nextProps.tickCombolupin[lupin_len].currentPrice,
                            tradeStatus : nextProps.tickCombolupin[lupin_len].tradeStatus
                        };

                        this.props.pivotDatalupin(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatalupin) != undefined && this.props.trendDatalupin.length > 1 && (nextProps.trendDatalupin) != undefined && nextProps.trendDatalupin.length >1) {
            var lupin_nextPropslen = nextProps.trendDatalupin.length-1;

            if (lupin_nextPropslen > 1) {
                if (nextProps.trendDatalupin[lupin_nextPropslen].dir == "up"){
                     lupin_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatalupin[lupin_nextPropslen].dir == "low"){
                     lupin_currentSwingDirection = 'upSwing';
                }

            }


        }

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



          let marico_len = nextProps.tickCombomarico.length - 1;

        if ((this.props.tickCombomarico) != undefined) {

            if ((nextProps.tickCombomarico).length >= 1) {


            if (marico_len > 2) {
                marico_prevCandleHeight = [];
                marico_prevCandleHeight.push(nextProps.tickCombomarico[marico_len-1].high);
                marico_prevCandleHeight.push(nextProps.tickCombomarico[marico_len-1].low);
            }


                  


            if (marico_len > 1) {

                if (nextProps.tickCombomarico[marico_len].marumbo == true){
                     marico_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombomarico[marico_len].marumbo == false){
                     marico_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombomarico[marico_len].pivot != undefined) {

                    //marico oil
                    if (this.state.marico_pivotpoint != nextProps.tickCombomarico[marico_len].pivot) {

                        marico_count = marico_count + 1;

                        this.setState({
                            marico_pivotpoint: nextProps.tickCombomarico[marico_len].pivot
                        });

                        var pivotValue = nextProps.tickCombomarico[marico_len].pivot;

                        let datainput = {
                            x: marico_count,
                            y: nextProps.tickCombomarico[marico_len].pivot,
                            dir: nextProps.tickCombomarico[marico_len].dir,
                            date: nextProps.tickCombomarico[marico_len].date,
                            currentPrice: nextProps.tickCombomarico[marico_len].currentPrice,
                            tradeStatus : nextProps.tickCombomarico[marico_len].tradeStatus
                        };

                        this.props.pivotDatamarico(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatamarico) != undefined && this.props.trendDatamarico.length > 1 && (nextProps.trendDatamarico) != undefined && nextProps.trendDatamarico.length >1) {
            var marico_nextPropslen = nextProps.trendDatamarico.length-1;

            if (marico_nextPropslen > 1) {
                if (nextProps.trendDatamarico[marico_nextPropslen].dir == "up"){
                     marico_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatamarico[marico_nextPropslen].dir == "low"){
                     marico_currentSwingDirection = 'upSwing';
                }

            }


        }


        let kotakbank_len = nextProps.tickCombokotakbank.length - 1;

        if ((this.props.tickCombokotakbank) != undefined) {

            if ((nextProps.tickCombokotakbank).length >= 1) {


            if (kotakbank_len > 2) {
                kotakbank_prevCandleHeight = [];
                kotakbank_prevCandleHeight.push(nextProps.tickCombokotakbank[kotakbank_len-1].high);
                kotakbank_prevCandleHeight.push(nextProps.tickCombokotakbank[kotakbank_len-1].low);
            }


                  


            if (kotakbank_len > 1) {

                if (nextProps.tickCombokotakbank[kotakbank_len].marumbo == true){
                     kotakbank_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombokotakbank[kotakbank_len].marumbo == false){
                     kotakbank_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombokotakbank[kotakbank_len].pivot != undefined) {

                    //kotakbank oil
                    if (this.state.kotakbank_pivotpoint != nextProps.tickCombokotakbank[kotakbank_len].pivot) {

                        kotakbank_count = kotakbank_count + 1;

                        this.setState({
                            kotakbank_pivotpoint: nextProps.tickCombokotakbank[kotakbank_len].pivot
                        });

                        var pivotValue = nextProps.tickCombokotakbank[kotakbank_len].pivot;

                        let datainput = {
                            x: kotakbank_count,
                            y: nextProps.tickCombokotakbank[kotakbank_len].pivot,
                            dir: nextProps.tickCombokotakbank[kotakbank_len].dir,
                            date: nextProps.tickCombokotakbank[kotakbank_len].date,
                            currentPrice: nextProps.tickCombokotakbank[kotakbank_len].currentPrice,
                            tradeStatus : nextProps.tickCombokotakbank[kotakbank_len].tradeStatus
                        };

                        this.props.pivotDatakotakbank(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatakotakbank) != undefined && this.props.trendDatakotakbank.length > 1 && (nextProps.trendDatakotakbank) != undefined && nextProps.trendDatakotakbank.length >1) {
            var kotakbank_nextPropslen = nextProps.trendDatakotakbank.length-1;

            if (kotakbank_nextPropslen > 1) {
                if (nextProps.trendDatakotakbank[kotakbank_nextPropslen].dir == "up"){
                     kotakbank_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatakotakbank[kotakbank_nextPropslen].dir == "low"){
                     kotakbank_currentSwingDirection = 'upSwing';
                }

            }


        }


        let tatasteel_len = nextProps.tickCombotatasteel.length - 1;

        if ((this.props.tickCombotatasteel) != undefined) {

            if ((nextProps.tickCombotatasteel).length >= 1) {


            if (tatasteel_len > 2) {
                tatasteel_prevCandleHeight = [];
                tatasteel_prevCandleHeight.push(nextProps.tickCombotatasteel[tatasteel_len-1].high);
                tatasteel_prevCandleHeight.push(nextProps.tickCombotatasteel[tatasteel_len-1].low);
            }


                  


            if (tatasteel_len > 1) {

                if (nextProps.tickCombotatasteel[tatasteel_len].marumbo == true){
                     tatasteel_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombotatasteel[tatasteel_len].marumbo == false){
                     tatasteel_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombotatasteel[tatasteel_len].pivot != undefined) {

                    //tatasteel oil
                    if (this.state.tatasteel_pivotpoint != nextProps.tickCombotatasteel[tatasteel_len].pivot) {

                        tatasteel_count = tatasteel_count + 1;

                        this.setState({
                            tatasteel_pivotpoint: nextProps.tickCombotatasteel[tatasteel_len].pivot
                        });

                        var pivotValue = nextProps.tickCombotatasteel[tatasteel_len].pivot;

                        let datainput = {
                            x: tatasteel_count,
                            y: nextProps.tickCombotatasteel[tatasteel_len].pivot,
                            dir: nextProps.tickCombotatasteel[tatasteel_len].dir,
                            date: nextProps.tickCombotatasteel[tatasteel_len].date,
                            currentPrice: nextProps.tickCombotatasteel[tatasteel_len].currentPrice,
                            tradeStatus : nextProps.tickCombotatasteel[tatasteel_len].tradeStatus
                        };

                        this.props.pivotDatatatasteel(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatatatasteel) != undefined && this.props.trendDatatatasteel.length > 1 && (nextProps.trendDatatatasteel) != undefined && nextProps.trendDatatatasteel.length >1) {
            var tatasteel_nextPropslen = nextProps.trendDatatatasteel.length-1;

            if (tatasteel_nextPropslen > 1) {
                if (nextProps.trendDatatatasteel[tatasteel_nextPropslen].dir == "up"){
                     tatasteel_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatatatasteel[tatasteel_nextPropslen].dir == "low"){
                     tatasteel_currentSwingDirection = 'upSwing';
                }

            }


        }


          let sunpharma_len = nextProps.tickCombosunpharma.length - 1;

        if ((this.props.tickCombosunpharma) != undefined) {

            if ((nextProps.tickCombosunpharma).length >= 1) {


            if (sunpharma_len > 2) {
                sunpharma_prevCandleHeight = [];
                sunpharma_prevCandleHeight.push(nextProps.tickCombosunpharma[sunpharma_len-1].high);
                sunpharma_prevCandleHeight.push(nextProps.tickCombosunpharma[sunpharma_len-1].low);
            }


                  


            if (sunpharma_len > 1) {

                if (nextProps.tickCombosunpharma[sunpharma_len].marumbo == true){
                     sunpharma_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombosunpharma[sunpharma_len].marumbo == false){
                     sunpharma_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombosunpharma[sunpharma_len].pivot != undefined) {

                    //sunpharma oil
                    if (this.state.sunpharma_pivotpoint != nextProps.tickCombosunpharma[sunpharma_len].pivot) {

                        sunpharma_count = sunpharma_count + 1;

                        this.setState({
                            sunpharma_pivotpoint: nextProps.tickCombosunpharma[sunpharma_len].pivot
                        });

                        var pivotValue = nextProps.tickCombosunpharma[sunpharma_len].pivot;

                        let datainput = {
                            x: sunpharma_count,
                            y: nextProps.tickCombosunpharma[sunpharma_len].pivot,
                            dir: nextProps.tickCombosunpharma[sunpharma_len].dir,
                            date: nextProps.tickCombosunpharma[sunpharma_len].date,
                            currentPrice: nextProps.tickCombosunpharma[sunpharma_len].currentPrice,
                            tradeStatus : nextProps.tickCombosunpharma[sunpharma_len].tradeStatus
                        };

                        this.props.pivotDatasunpharma(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatasunpharma) != undefined && this.props.trendDatasunpharma.length > 1 && (nextProps.trendDatasunpharma) != undefined && nextProps.trendDatasunpharma.length >1) {
            var sunpharma_nextPropslen = nextProps.trendDatasunpharma.length-1;

            if (sunpharma_nextPropslen > 1) {
                if (nextProps.trendDatasunpharma[sunpharma_nextPropslen].dir == "up"){
                     sunpharma_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatasunpharma[sunpharma_nextPropslen].dir == "low"){
                     sunpharma_currentSwingDirection = 'upSwing';
                }

            }


        }

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

       let heromotoco_len = nextProps.tickComboheromotoco.length - 1;

        if ((this.props.tickComboheromotoco) != undefined) {

            if ((nextProps.tickComboheromotoco).length >= 1) {


            if (heromotoco_len > 2) {
                heromotoco_prevCandleHeight = [];
                heromotoco_prevCandleHeight.push(nextProps.tickComboheromotoco[heromotoco_len-1].high);
                heromotoco_prevCandleHeight.push(nextProps.tickComboheromotoco[heromotoco_len-1].low);
            }


                  


            if (heromotoco_len > 1) {

                if (nextProps.tickComboheromotoco[heromotoco_len].marumbo == true){
                     heromotoco_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboheromotoco[heromotoco_len].marumbo == false){
                     heromotoco_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboheromotoco[heromotoco_len].pivot != undefined) {

                    //heromotoco oil
                    if (this.state.heromotoco_pivotpoint != nextProps.tickComboheromotoco[heromotoco_len].pivot) {

                        heromotoco_count = heromotoco_count + 1;

                        this.setState({
                            heromotoco_pivotpoint: nextProps.tickComboheromotoco[heromotoco_len].pivot
                        });

                        var pivotValue = nextProps.tickComboheromotoco[heromotoco_len].pivot;

                        let datainput = {
                            x: heromotoco_count,
                            y: nextProps.tickComboheromotoco[heromotoco_len].pivot,
                            dir: nextProps.tickComboheromotoco[heromotoco_len].dir,
                            date: nextProps.tickComboheromotoco[heromotoco_len].date,
                            currentPrice: nextProps.tickComboheromotoco[heromotoco_len].currentPrice,
                            tradeStatus : nextProps.tickComboheromotoco[heromotoco_len].tradeStatus
                        };

                        this.props.pivotDataheromotoco(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataheromotoco) != undefined && this.props.trendDataheromotoco.length > 1 && (nextProps.trendDataheromotoco) != undefined && nextProps.trendDataheromotoco.length >1) {
            var heromotoco_nextPropslen = nextProps.trendDataheromotoco.length-1;

            if (heromotoco_nextPropslen > 1) {
                if (nextProps.trendDataheromotoco[heromotoco_nextPropslen].dir == "up"){
                     heromotoco_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataheromotoco[heromotoco_nextPropslen].dir == "low"){
                     heromotoco_currentSwingDirection = 'upSwing';
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


         let hindalco_len = nextProps.tickCombohindalco.length - 1;

        if ((this.props.tickCombohindalco) != undefined) {

            if ((nextProps.tickCombohindalco).length >= 1) {


            if (hindalco_len > 2) {
                hindalco_prevCandleHeight = [];
                hindalco_prevCandleHeight.push(nextProps.tickCombohindalco[hindalco_len-1].high);
                hindalco_prevCandleHeight.push(nextProps.tickCombohindalco[hindalco_len-1].low);
            }


                  


            if (hindalco_len > 1) {

                if (nextProps.tickCombohindalco[hindalco_len].marumbo == true){
                     hindalco_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombohindalco[hindalco_len].marumbo == false){
                     hindalco_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombohindalco[hindalco_len].pivot != undefined) {

                    //hindalco oil
                    if (this.state.hindalco_pivotpoint != nextProps.tickCombohindalco[hindalco_len].pivot) {

                        hindalco_count = hindalco_count + 1;

                        this.setState({
                            hindalco_pivotpoint: nextProps.tickCombohindalco[hindalco_len].pivot
                        });

                        var pivotValue = nextProps.tickCombohindalco[hindalco_len].pivot;

                        let datainput = {
                            x: hindalco_count,
                            y: nextProps.tickCombohindalco[hindalco_len].pivot,
                            dir: nextProps.tickCombohindalco[hindalco_len].dir,
                            date: nextProps.tickCombohindalco[hindalco_len].date,
                            currentPrice: nextProps.tickCombohindalco[hindalco_len].currentPrice,
                            tradeStatus : nextProps.tickCombohindalco[hindalco_len].tradeStatus
                        };

                        this.props.pivotDatahindalco(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatahindalco) != undefined && this.props.trendDatahindalco.length > 1 && (nextProps.trendDatahindalco) != undefined && nextProps.trendDatahindalco.length >1) {
            var hindalco_nextPropslen = nextProps.trendDatahindalco.length-1;

            if (hindalco_nextPropslen > 1) {
                if (nextProps.trendDatahindalco[hindalco_nextPropslen].dir == "up"){
                     hindalco_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatahindalco[hindalco_nextPropslen].dir == "low"){
                     hindalco_currentSwingDirection = 'upSwing';
                }

            }


        }


          let adaniports_len = nextProps.tickComboadaniports.length - 1;

        if ((this.props.tickComboadaniports) != undefined) {

            if ((nextProps.tickComboadaniports).length >= 1) {


            if (adaniports_len > 2) {
                adaniports_prevCandleHeight = [];
                adaniports_prevCandleHeight.push(nextProps.tickComboadaniports[adaniports_len-1].high);
                adaniports_prevCandleHeight.push(nextProps.tickComboadaniports[adaniports_len-1].low);
            }


                  


            if (adaniports_len > 1) {

                if (nextProps.tickComboadaniports[adaniports_len].marumbo == true){
                     adaniports_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboadaniports[adaniports_len].marumbo == false){
                     adaniports_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboadaniports[adaniports_len].pivot != undefined) {

                    //adaniports oil
                    if (this.state.adaniports_pivotpoint != nextProps.tickComboadaniports[adaniports_len].pivot) {

                        adaniports_count = adaniports_count + 1;

                        this.setState({
                            adaniports_pivotpoint: nextProps.tickComboadaniports[adaniports_len].pivot
                        });

                        var pivotValue = nextProps.tickComboadaniports[adaniports_len].pivot;

                        let datainput = {
                            x: adaniports_count,
                            y: nextProps.tickComboadaniports[adaniports_len].pivot,
                            dir: nextProps.tickComboadaniports[adaniports_len].dir,
                            date: nextProps.tickComboadaniports[adaniports_len].date,
                            currentPrice: nextProps.tickComboadaniports[adaniports_len].currentPrice,
                            tradeStatus : nextProps.tickComboadaniports[adaniports_len].tradeStatus
                        };

                        this.props.pivotDataadaniports(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataadaniports) != undefined && this.props.trendDataadaniports.length > 1 && (nextProps.trendDataadaniports) != undefined && nextProps.trendDataadaniports.length >1) {
            var adaniports_nextPropslen = nextProps.trendDataadaniports.length-1;

            if (adaniports_nextPropslen > 1) {
                if (nextProps.trendDataadaniports[adaniports_nextPropslen].dir == "up"){
                     adaniports_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataadaniports[adaniports_nextPropslen].dir == "low"){
                     adaniports_currentSwingDirection = 'upSwing';
                }

            }


        }




       let tatamotors_len = nextProps.tickCombotatamotors.length - 1;

        if ((this.props.tickCombotatamotors) != undefined) {

            if ((nextProps.tickCombotatamotors).length >= 1) {


            if (tatamotors_len > 2) {
                tatamotors_prevCandleHeight = [];
                tatamotors_prevCandleHeight.push(nextProps.tickCombotatamotors[tatamotors_len-1].high);
                tatamotors_prevCandleHeight.push(nextProps.tickCombotatamotors[tatamotors_len-1].low);
            }


                  


            if (tatamotors_len > 1) {

                if (nextProps.tickCombotatamotors[tatamotors_len].marumbo == true){
                     tatamotors_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombotatamotors[tatamotors_len].marumbo == false){
                     tatamotors_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombotatamotors[tatamotors_len].pivot != undefined) {

                    //tatamotors oil
                    if (this.state.tatamotors_pivotpoint != nextProps.tickCombotatamotors[tatamotors_len].pivot) {

                        tatamotors_count = tatamotors_count + 1;

                        this.setState({
                            tatamotors_pivotpoint: nextProps.tickCombotatamotors[tatamotors_len].pivot
                        });

                        var pivotValue = nextProps.tickCombotatamotors[tatamotors_len].pivot;

                        let datainput = {
                            x: tatamotors_count,
                            y: nextProps.tickCombotatamotors[tatamotors_len].pivot,
                            dir: nextProps.tickCombotatamotors[tatamotors_len].dir,
                            date: nextProps.tickCombotatamotors[tatamotors_len].date,
                            currentPrice: nextProps.tickCombotatamotors[tatamotors_len].currentPrice,
                            tradeStatus : nextProps.tickCombotatamotors[tatamotors_len].tradeStatus
                        };

                        this.props.pivotDatatatamotors(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatatatamotors) != undefined && this.props.trendDatatatamotors.length > 1 && (nextProps.trendDatatatamotors) != undefined && nextProps.trendDatatatamotors.length >1) {
            var tatamotors_nextPropslen = nextProps.trendDatatatamotors.length-1;

            if (tatamotors_nextPropslen > 1) {
                if (nextProps.trendDatatatamotors[tatamotors_nextPropslen].dir == "up"){
                     tatamotors_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatatatamotors[tatamotors_nextPropslen].dir == "low"){
                     tatamotors_currentSwingDirection = 'upSwing';
                }

            }


        }

         let bajajfinserv_len = nextProps.tickCombobajajfinserv.length - 1;

        if ((this.props.tickCombobajajfinserv) != undefined) {

            if ((nextProps.tickCombobajajfinserv).length >= 1) {


            if (bajajfinserv_len > 2) {
                bajajfinserv_prevCandleHeight = [];
                bajajfinserv_prevCandleHeight.push(nextProps.tickCombobajajfinserv[bajajfinserv_len-1].high);
                bajajfinserv_prevCandleHeight.push(nextProps.tickCombobajajfinserv[bajajfinserv_len-1].low);
            }


                  


            if (bajajfinserv_len > 1) {

                if (nextProps.tickCombobajajfinserv[bajajfinserv_len].marumbo == true){
                     bajajfinserv_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombobajajfinserv[bajajfinserv_len].marumbo == false){
                     bajajfinserv_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombobajajfinserv[bajajfinserv_len].pivot != undefined) {

                    //bajajfinserv oil
                    if (this.state.bajajfinserv_pivotpoint != nextProps.tickCombobajajfinserv[bajajfinserv_len].pivot) {

                        bajajfinserv_count = bajajfinserv_count + 1;

                        this.setState({
                            bajajfinserv_pivotpoint: nextProps.tickCombobajajfinserv[bajajfinserv_len].pivot
                        });

                        var pivotValue = nextProps.tickCombobajajfinserv[bajajfinserv_len].pivot;

                        let datainput = {
                            x: bajajfinserv_count,
                            y: nextProps.tickCombobajajfinserv[bajajfinserv_len].pivot,
                            dir: nextProps.tickCombobajajfinserv[bajajfinserv_len].dir,
                            date: nextProps.tickCombobajajfinserv[bajajfinserv_len].date,
                            currentPrice: nextProps.tickCombobajajfinserv[bajajfinserv_len].currentPrice,
                            tradeStatus : nextProps.tickCombobajajfinserv[bajajfinserv_len].tradeStatus
                        };

                        this.props.pivotDatabajajfinserv(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatabajajfinserv) != undefined && this.props.trendDatabajajfinserv.length > 1 && (nextProps.trendDatabajajfinserv) != undefined && nextProps.trendDatabajajfinserv.length >1) {
            var bajajfinserv_nextPropslen = nextProps.trendDatabajajfinserv.length-1;

            if (bajajfinserv_nextPropslen > 1) {
                if (nextProps.trendDatabajajfinserv[bajajfinserv_nextPropslen].dir == "up"){
                     bajajfinserv_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatabajajfinserv[bajajfinserv_nextPropslen].dir == "low"){
                     bajajfinserv_currentSwingDirection = 'upSwing';
                }

            }


        }




         let zeel_len = nextProps.tickCombozeel.length - 1;

        if ((this.props.tickCombozeel) != undefined) {

            if ((nextProps.tickCombozeel).length >= 1) {


            if (zeel_len > 2) {
                zeel_prevCandleHeight = [];
                zeel_prevCandleHeight.push(nextProps.tickCombozeel[zeel_len-1].high);
                zeel_prevCandleHeight.push(nextProps.tickCombozeel[zeel_len-1].low);
            }


                  


            if (zeel_len > 1) {

                if (nextProps.tickCombozeel[zeel_len].marumbo == true){
                     zeel_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombozeel[zeel_len].marumbo == false){
                     zeel_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombozeel[zeel_len].pivot != undefined) {

                    //zeel oil
                    if (this.state.zeel_pivotpoint != nextProps.tickCombozeel[zeel_len].pivot) {

                        zeel_count = zeel_count + 1;

                        this.setState({
                            zeel_pivotpoint: nextProps.tickCombozeel[zeel_len].pivot
                        });

                        var pivotValue = nextProps.tickCombozeel[zeel_len].pivot;

                        let datainput = {
                            x: zeel_count,
                            y: nextProps.tickCombozeel[zeel_len].pivot,
                            dir: nextProps.tickCombozeel[zeel_len].dir,
                            date: nextProps.tickCombozeel[zeel_len].date,
                            currentPrice: nextProps.tickCombozeel[zeel_len].currentPrice,
                            tradeStatus : nextProps.tickCombozeel[zeel_len].tradeStatus
                        };

                        this.props.pivotDatazeel(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatazeel) != undefined && this.props.trendDatazeel.length > 1 && (nextProps.trendDatazeel) != undefined && nextProps.trendDatazeel.length >1) {
            var zeel_nextPropslen = nextProps.trendDatazeel.length-1;

            if (zeel_nextPropslen > 1) {
                if (nextProps.trendDatazeel[zeel_nextPropslen].dir == "up"){
                     zeel_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatazeel[zeel_nextPropslen].dir == "low"){
                     zeel_currentSwingDirection = 'upSwing';
                }

            }


        }







       let larsen_len = nextProps.tickCombolarsen.length - 1;

        if ((this.props.tickCombolarsen) != undefined) {

            if ((nextProps.tickCombolarsen).length >= 1) {


            if (larsen_len > 2) {
                larsen_prevCandleHeight = [];
                larsen_prevCandleHeight.push(nextProps.tickCombolarsen[larsen_len-1].high);
                larsen_prevCandleHeight.push(nextProps.tickCombolarsen[larsen_len-1].low);
            }


                  


            if (larsen_len > 1) {

                if (nextProps.tickCombolarsen[larsen_len].marumbo == true){
                     larsen_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombolarsen[larsen_len].marumbo == false){
                     larsen_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombolarsen[larsen_len].pivot != undefined) {

                    //larsen oil
                    if (this.state.larsen_pivotpoint != nextProps.tickCombolarsen[larsen_len].pivot) {

                        larsen_count = larsen_count + 1;

                        this.setState({
                            larsen_pivotpoint: nextProps.tickCombolarsen[larsen_len].pivot
                        });

                        var pivotValue = nextProps.tickCombolarsen[larsen_len].pivot;

                        let datainput = {
                            x: larsen_count,
                            y: nextProps.tickCombolarsen[larsen_len].pivot,
                            dir: nextProps.tickCombolarsen[larsen_len].dir,
                            date: nextProps.tickCombolarsen[larsen_len].date,
                            currentPrice: nextProps.tickCombolarsen[larsen_len].currentPrice,
                            tradeStatus : nextProps.tickCombolarsen[larsen_len].tradeStatus
                        };

                        this.props.pivotDatalarsen(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatalarsen) != undefined && this.props.trendDatalarsen.length > 1 && (nextProps.trendDatalarsen) != undefined && nextProps.trendDatalarsen.length >1) {
            var larsen_nextPropslen = nextProps.trendDatalarsen.length-1;

            if (larsen_nextPropslen > 1) {
                if (nextProps.trendDatalarsen[larsen_nextPropslen].dir == "up"){
                     larsen_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatalarsen[larsen_nextPropslen].dir == "low"){
                     larsen_currentSwingDirection = 'upSwing';
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


       let asianpaints_len = nextProps.tickComboasianpaints.length - 1;

        if ((this.props.tickComboasianpaints) != undefined) {

            if ((nextProps.tickComboasianpaints).length >= 1) {


            if (asianpaints_len > 2) {
                asianpaints_prevCandleHeight = [];
                asianpaints_prevCandleHeight.push(nextProps.tickComboasianpaints[asianpaints_len-1].high);
                asianpaints_prevCandleHeight.push(nextProps.tickComboasianpaints[asianpaints_len-1].low);
            }


                  


            if (asianpaints_len > 1) {

                if (nextProps.tickComboasianpaints[asianpaints_len].marumbo == true){
                     asianpaints_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboasianpaints[asianpaints_len].marumbo == false){
                     asianpaints_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboasianpaints[asianpaints_len].pivot != undefined) {

                    //asianpaints oil
                    if (this.state.asianpaints_pivotpoint != nextProps.tickComboasianpaints[asianpaints_len].pivot) {

                        asianpaints_count = asianpaints_count + 1;

                        this.setState({
                            asianpaints_pivotpoint: nextProps.tickComboasianpaints[asianpaints_len].pivot
                        });

                        var pivotValue = nextProps.tickComboasianpaints[asianpaints_len].pivot;

                        let datainput = {
                            x: asianpaints_count,
                            y: nextProps.tickComboasianpaints[asianpaints_len].pivot,
                            dir: nextProps.tickComboasianpaints[asianpaints_len].dir,
                            date: nextProps.tickComboasianpaints[asianpaints_len].date,
                            currentPrice: nextProps.tickComboasianpaints[asianpaints_len].currentPrice,
                            tradeStatus : nextProps.tickComboasianpaints[asianpaints_len].tradeStatus
                        };

                        this.props.pivotDataasianpaints(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataasianpaints) != undefined && this.props.trendDataasianpaints.length > 1 && (nextProps.trendDataasianpaints) != undefined && nextProps.trendDataasianpaints.length >1) {
            var asianpaints_nextPropslen = nextProps.trendDataasianpaints.length-1;

            if (asianpaints_nextPropslen > 1) {
                if (nextProps.trendDataasianpaints[asianpaints_nextPropslen].dir == "up"){
                     asianpaints_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataasianpaints[asianpaints_nextPropslen].dir == "low"){
                     asianpaints_currentSwingDirection = 'upSwing';
                }

            }


        }

        let upl_len = nextProps.tickComboupl.length - 1;

        if ((this.props.tickComboupl) != undefined) {

            if ((nextProps.tickComboupl).length >= 1) {


            if (upl_len > 2) {
                upl_prevCandleHeight = [];
                upl_prevCandleHeight.push(nextProps.tickComboupl[upl_len-1].high);
                upl_prevCandleHeight.push(nextProps.tickComboupl[upl_len-1].low);
            }


                  


            if (upl_len > 1) {

                if (nextProps.tickComboupl[upl_len].marumbo == true){
                     upl_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboupl[upl_len].marumbo == false){
                     upl_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboupl[upl_len].pivot != undefined) {

                    //upl oil
                    if (this.state.upl_pivotpoint != nextProps.tickComboupl[upl_len].pivot) {

                        upl_count = upl_count + 1;

                        this.setState({
                            upl_pivotpoint: nextProps.tickComboupl[upl_len].pivot
                        });

                        var pivotValue = nextProps.tickComboupl[upl_len].pivot;

                        let datainput = {
                            x: upl_count,
                            y: nextProps.tickComboupl[upl_len].pivot,
                            dir: nextProps.tickComboupl[upl_len].dir,
                            date: nextProps.tickComboupl[upl_len].date,
                            currentPrice: nextProps.tickComboupl[upl_len].currentPrice,
                            tradeStatus : nextProps.tickComboupl[upl_len].tradeStatus
                        };

                        this.props.pivotDataupl(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataupl) != undefined && this.props.trendDataupl.length > 1 && (nextProps.trendDataupl) != undefined && nextProps.trendDataupl.length >1) {
            var upl_nextPropslen = nextProps.trendDataupl.length-1;

            if (upl_nextPropslen > 1) {
                if (nextProps.trendDataupl[upl_nextPropslen].dir == "up"){
                     upl_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataupl[upl_nextPropslen].dir == "low"){
                     upl_currentSwingDirection = 'upSwing';
                }

            }


        }

         let grasim_len = nextProps.tickCombograsim.length - 1;

        if ((this.props.tickCombograsim) != undefined) {

            if ((nextProps.tickCombograsim).length >= 1) {


            if (grasim_len > 2) {
                grasim_prevCandleHeight = [];
                grasim_prevCandleHeight.push(nextProps.tickCombograsim[grasim_len-1].high);
                grasim_prevCandleHeight.push(nextProps.tickCombograsim[grasim_len-1].low);
            }


                  


            if (grasim_len > 1) {

                if (nextProps.tickCombograsim[grasim_len].marumbo == true){
                     grasim_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombograsim[grasim_len].marumbo == false){
                     grasim_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombograsim[grasim_len].pivot != undefined) {

                    //grasim oil
                    if (this.state.grasim_pivotpoint != nextProps.tickCombograsim[grasim_len].pivot) {

                        grasim_count = grasim_count + 1;

                        this.setState({
                            grasim_pivotpoint: nextProps.tickCombograsim[grasim_len].pivot
                        });

                        var pivotValue = nextProps.tickCombograsim[grasim_len].pivot;

                        let datainput = {
                            x: grasim_count,
                            y: nextProps.tickCombograsim[grasim_len].pivot,
                            dir: nextProps.tickCombograsim[grasim_len].dir,
                            date: nextProps.tickCombograsim[grasim_len].date,
                            currentPrice: nextProps.tickCombograsim[grasim_len].currentPrice,
                            tradeStatus : nextProps.tickCombograsim[grasim_len].tradeStatus
                        };

                        this.props.pivotDatagrasim(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatagrasim) != undefined && this.props.trendDatagrasim.length > 1 && (nextProps.trendDatagrasim) != undefined && nextProps.trendDatagrasim.length >1) {
            var grasim_nextPropslen = nextProps.trendDatagrasim.length-1;

            if (grasim_nextPropslen > 1) {
                if (nextProps.trendDatagrasim[grasim_nextPropslen].dir == "up"){
                     grasim_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatagrasim[grasim_nextPropslen].dir == "low"){
                     grasim_currentSwingDirection = 'upSwing';
                }

            }


        }







        //bpcl


       let bpcl_len = nextProps.tickCombobpcl.length - 1;

        if ((this.props.tickCombobpcl) != undefined) {

            if ((nextProps.tickCombobpcl).length >= 1) {


            if (bpcl_len > 2) {
                bpcl_prevCandleHeight = [];
                bpcl_prevCandleHeight.push(nextProps.tickCombobpcl[bpcl_len-1].high);
                bpcl_prevCandleHeight.push(nextProps.tickCombobpcl[bpcl_len-1].low);
            }


                  


            if (bpcl_len > 1) {

                if (nextProps.tickCombobpcl[bpcl_len].marumbo == true){
                     bpcl_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombobpcl[bpcl_len].marumbo == false){
                     bpcl_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombobpcl[bpcl_len].pivot != undefined) {

                    //bpcl oil
                    if (this.state.bpcl_pivotpoint != nextProps.tickCombobpcl[bpcl_len].pivot) {

                        bpcl_count = bpcl_count + 1;

                        this.setState({
                            bpcl_pivotpoint: nextProps.tickCombobpcl[bpcl_len].pivot
                        });

                        var pivotValue = nextProps.tickCombobpcl[bpcl_len].pivot;

                        let datainput = {
                            x: bpcl_count,
                            y: nextProps.tickCombobpcl[bpcl_len].pivot,
                            dir: nextProps.tickCombobpcl[bpcl_len].dir,
                            date: nextProps.tickCombobpcl[bpcl_len].date,
                            currentPrice: nextProps.tickCombobpcl[bpcl_len].currentPrice,
                            tradeStatus : nextProps.tickCombobpcl[bpcl_len].tradeStatus
                        };

                        this.props.pivotDatabpcl(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatabpcl) != undefined && this.props.trendDatabpcl.length > 1 && (nextProps.trendDatabpcl) != undefined && nextProps.trendDatabpcl.length >1) {
            var bpcl_nextPropslen = nextProps.trendDatabpcl.length-1;

            if (bpcl_nextPropslen > 1) {
                if (nextProps.trendDatabpcl[bpcl_nextPropslen].dir == "up"){
                     bpcl_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatabpcl[bpcl_nextPropslen].dir == "low"){
                     bpcl_currentSwingDirection = 'upSwing';
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
        //itc
        let itc_len = nextProps.tickComboitc.length - 1;

        if ((this.props.tickComboitc) != undefined) {

            if ((nextProps.tickComboitc).length >= 1) {


            if (itc_len > 2) {
                itc_prevCandleHeight = [];
                itc_prevCandleHeight.push(nextProps.tickComboitc[itc_len-1].high);
                itc_prevCandleHeight.push(nextProps.tickComboitc[itc_len-1].low);
            }


                  


            if (itc_len > 1) {

                if (nextProps.tickComboitc[itc_len].marumbo == true){
                     itc_prevCandleMarumbo = true;
                }

                if (nextProps.tickComboitc[itc_len].marumbo == false){
                     itc_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickComboitc[itc_len].pivot != undefined) {

                    //itc oil
                    if (this.state.itc_pivotpoint != nextProps.tickComboitc[itc_len].pivot) {

                        itc_count = itc_count + 1;

                        this.setState({
                            itc_pivotpoint: nextProps.tickComboitc[itc_len].pivot
                        });

                        var pivotValue = nextProps.tickComboitc[itc_len].pivot;

                        let datainput = {
                            x: itc_count,
                            y: nextProps.tickComboitc[itc_len].pivot,
                            dir: nextProps.tickComboitc[itc_len].dir,
                            date: nextProps.tickComboitc[itc_len].date,
                            currentPrice: nextProps.tickComboitc[itc_len].currentPrice,
                            tradeStatus : nextProps.tickComboitc[itc_len].tradeStatus
                        };

                        this.props.pivotDataitc(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDataitc) != undefined && this.props.trendDataitc.length > 1 && (nextProps.trendDataitc) != undefined && nextProps.trendDataitc.length >1) {
            var itc_nextPropslen = nextProps.trendDataitc.length-1;

            if (itc_nextPropslen > 1) {
                if (nextProps.trendDataitc[itc_nextPropslen].dir == "up"){
                     itc_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDataitc[itc_nextPropslen].dir == "low"){
                     itc_currentSwingDirection = 'upSwing';
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

        //ntpc 


       let ntpc_len = nextProps.tickCombontpc.length - 1;

        if ((this.props.tickCombontpc) != undefined) {

            if ((nextProps.tickCombontpc).length >= 1) {


            if (ntpc_len > 2) {
                ntpc_prevCandleHeight = [];
                ntpc_prevCandleHeight.push(nextProps.tickCombontpc[ntpc_len-1].high);
                ntpc_prevCandleHeight.push(nextProps.tickCombontpc[ntpc_len-1].low);
            }


                  


            if (ntpc_len > 1) {

                if (nextProps.tickCombontpc[ntpc_len].marumbo == true){
                     ntpc_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombontpc[ntpc_len].marumbo == false){
                     ntpc_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombontpc[ntpc_len].pivot != undefined) {

                    //ntpc oil
                    if (this.state.ntpc_pivotpoint != nextProps.tickCombontpc[ntpc_len].pivot) {

                        ntpc_count = ntpc_count + 1;

                        this.setState({
                            ntpc_pivotpoint: nextProps.tickCombontpc[ntpc_len].pivot
                        });

                        var pivotValue = nextProps.tickCombontpc[ntpc_len].pivot;

                        let datainput = {
                            x: ntpc_count,
                            y: nextProps.tickCombontpc[ntpc_len].pivot,
                            dir: nextProps.tickCombontpc[ntpc_len].dir,
                            date: nextProps.tickCombontpc[ntpc_len].date,
                            currentPrice: nextProps.tickCombontpc[ntpc_len].currentPrice,
                            tradeStatus : nextProps.tickCombontpc[ntpc_len].tradeStatus
                        };

                        this.props.pivotDatantpc(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatantpc) != undefined && this.props.trendDatantpc.length > 1 && (nextProps.trendDatantpc) != undefined && nextProps.trendDatantpc.length >1) {
            var ntpc_nextPropslen = nextProps.trendDatantpc.length-1;

            if (ntpc_nextPropslen > 1) {
                if (nextProps.trendDatantpc[ntpc_nextPropslen].dir == "up"){
                     ntpc_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatantpc[ntpc_nextPropslen].dir == "low"){
                     ntpc_currentSwingDirection = 'upSwing';
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


       let powergrid_len = nextProps.tickCombopowergrid.length - 1;

        if ((this.props.tickCombopowergrid) != undefined) {

            if ((nextProps.tickCombopowergrid).length >= 1) {


            if (powergrid_len > 2) {
                powergrid_prevCandleHeight = [];
                powergrid_prevCandleHeight.push(nextProps.tickCombopowergrid[powergrid_len-1].high);
                powergrid_prevCandleHeight.push(nextProps.tickCombopowergrid[powergrid_len-1].low);
            }


                  


            if (powergrid_len > 1) {

                if (nextProps.tickCombopowergrid[powergrid_len].marumbo == true){
                     powergrid_prevCandleMarumbo = true;
                }

                if (nextProps.tickCombopowergrid[powergrid_len].marumbo == false){
                     powergrid_prevCandleMarumbo = false;
                }
            }

               


                if (nextProps.tickCombopowergrid[powergrid_len].pivot != undefined) {

                    //powergrid oil
                    if (this.state.powergrid_pivotpoint != nextProps.tickCombopowergrid[powergrid_len].pivot) {

                        powergrid_count = powergrid_count + 1;

                        this.setState({
                            powergrid_pivotpoint: nextProps.tickCombopowergrid[powergrid_len].pivot
                        });

                        var pivotValue = nextProps.tickCombopowergrid[powergrid_len].pivot;

                        let datainput = {
                            x: powergrid_count,
                            y: nextProps.tickCombopowergrid[powergrid_len].pivot,
                            dir: nextProps.tickCombopowergrid[powergrid_len].dir,
                            date: nextProps.tickCombopowergrid[powergrid_len].date,
                            currentPrice: nextProps.tickCombopowergrid[powergrid_len].currentPrice,
                            tradeStatus : nextProps.tickCombopowergrid[powergrid_len].tradeStatus
                        };

                        this.props.pivotDatapowergrid(datainput);
                        
                    }
                }
            }
        }

        if ((this.props.trendDatapowergrid) != undefined && this.props.trendDatapowergrid.length > 1 && (nextProps.trendDatapowergrid) != undefined && nextProps.trendDatapowergrid.length >1) {
            var powergrid_nextPropslen = nextProps.trendDatapowergrid.length-1;

            if (powergrid_nextPropslen > 1) {
                if (nextProps.trendDatapowergrid[powergrid_nextPropslen].dir == "up"){
                     powergrid_currentSwingDirection = 'downSwing';
                }

                if (nextProps.trendDatapowergrid[powergrid_nextPropslen].dir == "low"){
                     powergrid_currentSwingDirection = 'upSwing';
                }

            }


        }

        




       
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
                    "v": [2585345,1850625,2748929,681985,2672641,1041153,492033,895745,857857,345089,348929,4268801,315393,975873,2889473,60417,3861249,424961,884737,2939649,633601,3834113,134657,2977281 ,2953217,806401,779521,738561,225537,7458561,364545,340481,1207553,3460353,215553,197633,54261767, 54087431 ,54363399 ,558337 ,11615490 ,2029825,356865,2029825,177665,5215745,1215745,486657]
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


                       if (d[i].instrument_token == "1041153") {
                                 get5minDatamaricoTimestamp(d[i].last_price, self);
                            }



                            if (d[i].instrument_token == "492033") {
                                  get5minDatakotakbankTimestamp(d[i].last_price, self);
                            }


                             if (d[i].instrument_token == "895745") {
                                 get5minDatatatasteelTimestamp(d[i].last_price, self);
                            }

                             if (d[i].instrument_token == "857857") {
                                 get5minDatasunpharmaTimestamp(d[i].last_price, self);
                            }



                       if (d[i].instrument_token == "345089") {
                                 get5minDataheromotocoTimestamp(d[i].last_price, self);
                            }




                       if (d[i].instrument_token == "348929") {
                                 get5minDatahindalcoTimestamp(d[i].last_price, self);
                            }



                       if (d[i].instrument_token == "4268801") {
                                 get5minDatabajajfinservTimestamp(d[i].last_price, self);
                            }




                            if (d[i].instrument_token == "315393") {
                                 get5minDatagrasimTimestamp(d[i].last_price, self);
                            }


                             if (d[i].instrument_token == "975873") {
                                 get5minDatazeelTimestamp(d[i].last_price, self);
                            }




                       if (d[i].instrument_token == "2889473") {
                                 get5minDatauplTimestamp(d[i].last_price, self);
                            }

                            if (d[i].instrument_token == "60417") {
                                 get5minDataasianpaintsTimestamp(d[i].last_price, self);
                            }



                            if (d[i].instrument_token == "3861249") {
                                 get5minDataadaniportsTimestamp(d[i].last_price, self);
                            }

                            if (d[i].instrument_token == "424961") {
                                 get5minDataitcTimestamp(d[i].last_price, self);
                            }


                             if (d[i].instrument_token == "884737") {
                                 get5minDatatatamotorsTimestamp(d[i].last_price, self);
                            }



                            if (d[i].instrument_token == "2939649") {
                                 get5minDatalarsenTimestamp(d[i].last_price, self);
                            }





                           if (d[i].instrument_token == "633601") {
                                 get5minDataongcTimestamp(d[i].last_price, self);
                            }

                            
                            if (d[i].instrument_token == "3834113") {
                                 get5minDatapowergridTimestamp(d[i].last_price, self);
                            }

                            //bpcl. 
                             if (d[i].instrument_token == "134657") {
                                 get5minDatabpclTimestamp(d[i].last_price, self);
                            }

                            //bpcl. get5minDatabpclTimestamp

                            if (d[i].instrument_token == "2977281") {
                                 get5minDatantpcTimestamp(d[i].last_price, self);
                            }


                            //ntpc 2977281

                             if (d[i].instrument_token == "2977281") {
                                 get5minDatantpcTimestamp(d[i].last_price, self);
                            }


                          
                            if (d[i].instrument_token == "54261767") {
                                 get5minDataCopperTimestamp(d[i].last_price, self);
                            }

                            if (d[i].instrument_token == "54362375") {
                                get5minDatahindzincTimestamp(d[i].last_price, self);
                            }

                            //banknifty 
                            if (d[i].instrument_token == "11615490") {
                                 get5minDatabankniftyTimestamp(d[i].last_price, self);
                            }

                            //bosch 558337
                            if (d[i].instrument_token == "558337") {
                                 get5minDataboschTimestamp(d[i].last_price, self);
                            }



                            //cadila 2029825
                            if (d[i].instrument_token == "2029825") {
                                 get5minDatacadilaTimestamp(d[i].last_price, self);
                            }


                            //cipla
                            if (d[i].instrument_token == "177665") {
                                 get5minDataciplaTimestamp(d[i].last_price, self);
                            }



                            //coal
                            if (d[i].instrument_token == "5215745") {
                                 get5minDatacoalTimestamp(d[i].last_price, self);
                            }


                            //concor
                            if (d[i].instrument_token == "1215745") {
                                 get5minDataconcorTimestamp(d[i].last_price, self);
                            }


                           


                            //cummsind
                            if (d[i].instrument_token == "486657") {
                                 get5minDatacummsindTimestamp(d[i].last_price, self);
                            }


                            //dabur
                            if (d[i].instrument_token == "197633") {
                                 get5minDatadaburTimestamp(d[i].last_price, self);
                            }


                            //dhfl
                            if (d[i].instrument_token == "558337") {
                                 get5minDatadhflTimestamp(d[i].last_price, self);
                            }


                            //emami
                            if (d[i].instrument_token == "3460353") {
                                 get5minDataemamiTimestamp(d[i].last_price, self);
                            }

                            

                            //gail
                            if (d[i].instrument_token == "1207553") {
                                 get5minDatagailTimestamp(d[i].last_price, self);
                            }


                            //havells
                            if (d[i].instrument_token == "558337") {
                                 get5minDatahavellsTimestamp(d[i].last_price, self);
                            }


                            //hdfc
                            if (d[i].instrument_token == "340481") {
                                 get5minDatahdfcTimestamp(d[i].last_price, self);
                            }


                            //hindzinc
                            if (d[i].instrument_token == "364545") {
                                 get5minDatahindzincTimestamp(d[i].last_price, self);
                            }


                            //infratel
                            if (d[i].instrument_token == "7458561") {
                                 get5minDatainfratelTimestamp(d[i].last_price, self);
                            }


                            //reddy
                            if (d[i].instrument_token == "225537") {
                                 get5minDatareddyTimestamp(d[i].last_price, self);
                            }


                            //reliance
                            if (d[i].instrument_token == "738561") {
                                 get5minDatarelianceTimestamp(d[i].last_price, self);
                            }


                            //sbin
                            if (d[i].instrument_token == "779521") {
                                 get5minDatasbinTimestamp(d[i].last_price, self);
                            }


                            //seimens
                            if (d[i].instrument_token == "806401") {
                                 get5minDataseimensTimestamp(d[i].last_price, self);
                            }


                            //tcs 
                            if (d[i].instrument_token == "2953217") {
                                 get5minDatatcsTimestamp(d[i].last_price, self);
                            }


                            //unilever
                            if (d[i].instrument_token == "356865") {
                                 get5minDataunileverTimestamp(d[i].last_price, self);
                            }


                             if (d[i].instrument_token == "2672641") {
                                 get5minDatalupinTimestamp(d[i].last_price, self);
                            }


                       if (d[i].instrument_token == "681985") {
                                 get5minDatapidilitindTimestamp(d[i].last_price, self);
                            }

                             if (d[i].instrument_token == "2748929") {
                                 get5minDataofssTimestamp(d[i].last_price, self);
                            }

                                if (d[i].instrument_token == "1850625") {
                                 get5minDatahcltechTimestamp(d[i].last_price, self);
                            }


                       if (d[i].instrument_token == "2585345") {
                                 get5minDatagodrejcpTimestamp(d[i].last_price, self);
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

                 getntpcOHLC(self);
                 getbpclOHLC(self);
                 getongcOHLC(self);
                 getpowergridOHLC(self);
                 getlarsenOHLC(self);
                 gettatamotorsOHLC(self);
                 getitcOHLC(self);
                 getadaniportsOHLC(self);
                 getasianpaintsOHLC(self);
                 getuplOHLC(self);
                 getzeelOHLC(self);
                 getgrasimOHLC(self);
                 getbajajfinservOHLC(self);
                 gethindalcoOHLC(self);
                 getheromotocoOHLC(self);
                 getsunpharmaOHLC(self);
                 gettatasteelOHLC(self);
                 getlupinOHLC(self);
                 getpidilitindOHLC(self);
                 getofssOHLC(self);
                 gethcltechOHLC(self);
                 getgodrejcpOHLC(self);

                
        }, 10000);

 function getlarsenOHLC(d) {

            larsentickopen = larsenarr[0];
            larsentickhigh = _.maxBy(larsenarr);
            larsenticklow = _.minBy(larsenarr);
            larsentickclose = larsenarr[larsenarr.length - 1];

            if (larsentickopen < larsentickclose) {
                larsentickType = "green";
            } else if (larsentickopen > larsentickclose) {
                larsentickType = "red";
            } else if (larsentickopen = larsentickclose) {
                larsentickType = "doji";
            }

            larsentickLength = Math.abs(larsentickhigh - larsenticklow);


                var marumbo = false;
                if(larsentickType == "red" && larsen_currentSwingDirection == 'downSwing'){
                        if(larsentickopen == larsentickhigh && larsentickclose == larsenticklow && larsenticklow < larsen_prevCandleHeight[1]){
                            marumbo = true;
                            larsen_marumboThresholdHigh = larsentickhigh;
                            larsen_marumboThresholdLow = larsenticklow;
                        }
                }

                if(larsentickType == "green" && larsen_currentSwingDirection == "upSwing"){
                        if(larsentickopen == larsenticklow && larsentickclose == larsentickhigh && larsentickhigh > larsen_prevCandleHeight[0]){
                            marumbo = true;
                            larsen_marumboThresholdHigh = larsentickhigh;
                            larsen_marumboThresholdLow = larsenticklow;
                        }
                }

                if(larsentickType == "doji"){
                         marumbo = false;
                         larsen_marumboThresholdHigh = 0;
                         larsen_marumboThresholdLow = 0;
                }

              

            larsentickarray = {
                "open": larsentickopen,
                "low": larsenticklow,
                "high": larsentickhigh,
                "close": larsentickclose,
                "tickType": larsentickType,
                'tickLength': larsentickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatalarsen(larsentickarray);
            first = 0;
            larsenarr = [];
        };


         function get5minDatalarsenTimestamp(d, scope) {

               if(larsen_prevCandleMarumbo == true && larsenarr.length == 1){
                    ;
                    
                    if(larsen_currentSwingDirection == "upSwing"){
                        if(larsenarr[0] >=  larsen_marumboThresholdHigh){
                            console.log('buy long here at' + larsen_marumboThresholdHigh);
                            scope.startTrade('LT', 'NSE', 'BUY', larsenarr[0],(larsen_marumboThresholdHigh+larsen_marumboThresholdLow)/2, larsenarr[0] + parseInt(larsenarr[0])*breakevenRatio);
                        }

                        if(larsenarr[0] <= larsen_marumboThresholdHigh){

                        }
                         larsen_prevCandleMarumbo = false;
                         larsen_marumboThresholdHigh = 0;
                         larsen_marumboThresholdLow = 0;
                    }


                    if(larsen_currentSwingDirection == "downSwing"){
                        if(larsenarr[0] > larsen_marumboThresholdLow){
                            console.log('sell short here at' + larsen_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', larsenTradePrice, stop, target);

                            scope.startTrade('LT', 'NSE', 'SELL', larsenarr[0],(larsen_marumboThresholdHigh+larsen_marumboThresholdLow)/2 , larsenarr[0]-parseInt(larsenarr[0])*breakevenRatio);
                     
                        }

                        if(larsenarr[0] <= larsen_marumboThresholdLow){
                    
                        }

                            larsen_prevCandleMarumbo = false;
                            larsen_marumboThresholdHigh = 0;
                            larsen_marumboThresholdLow = 0;
                    }
                       
                }

            larsenarr.push(d);
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




        function gethcltechOHLC(d) {

            hcltechtickopen = hcltecharr[0];
            hcltechtickhigh = _.maxBy(hcltecharr);
            hcltechticklow = _.minBy(hcltecharr);
            hcltechtickclose = hcltecharr[hcltecharr.length - 1];

            if (hcltechtickopen < hcltechtickclose) {
                hcltechtickType = "green";
            } else if (hcltechtickopen > hcltechtickclose) {
                hcltechtickType = "red";
            } else if (hcltechtickopen = hcltechtickclose) {
                hcltechtickType = "doji";
            }

            hcltechtickLength = Math.abs(hcltechtickhigh - hcltechticklow);


                var marumbo = false;
                if(hcltechtickType == "red" && hcltech_currentSwingDirection == 'downSwing'){
                        if(hcltechtickopen == hcltechtickhigh && hcltechtickclose == hcltechticklow && hcltechticklow < hcltech_prevCandleHeight[1]){
                            marumbo = true;
                            hcltech_marumboThresholdHigh = hcltechtickhigh;
                            hcltech_marumboThresholdLow = hcltechticklow;
                        }
                }

                if(hcltechtickType == "green" && hcltech_currentSwingDirection == "upSwing"){
                        if(hcltechtickopen == hcltechticklow && hcltechtickclose == hcltechtickhigh && hcltechtickhigh > hcltech_prevCandleHeight[0]){
                            marumbo = true;
                            hcltech_marumboThresholdHigh = hcltechtickhigh;
                            hcltech_marumboThresholdLow = hcltechticklow;
                        }
                }

                if(hcltechtickType == "doji"){
                         marumbo = false;
                         hcltech_marumboThresholdHigh = 0;
                         hcltech_marumboThresholdLow = 0;
                }

              

            hcltechtickarray = {
                "open": hcltechtickopen,
                "low": hcltechticklow,
                "high": hcltechtickhigh,
                "close": hcltechtickclose,
                "tickType": hcltechtickType,
                'tickLength': hcltechtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatahcltech(hcltechtickarray);
            first = 0;
            hcltecharr = [];
        };


         function get5minDatahcltechTimestamp(d, scope) {

               if(hcltech_prevCandleMarumbo == true && hcltecharr.length == 1){
                    ;
                    
                    if(hcltech_currentSwingDirection == "upSwing"){
                        if(hcltecharr[0] >=  hcltech_marumboThresholdHigh){
                            console.log('buy long here at' + hcltech_marumboThresholdHigh);
                            scope.startTrade('HCLTECH', 'NSE', 'BUY', hcltecharr[0],(hcltech_marumboThresholdHigh+hcltech_marumboThresholdLow)/2, hcltecharr[0] + parseInt(hcltecharr[0])*breakevenRatio);
                        }

                        if(hcltecharr[0] <= hcltech_marumboThresholdHigh){

                        }
                         hcltech_prevCandleMarumbo = false;
                         hcltech_marumboThresholdHigh = 0;
                         hcltech_marumboThresholdLow = 0;
                    }


                    if(hcltech_currentSwingDirection == "downSwing"){
                        if(hcltecharr[0] > hcltech_marumboThresholdLow){
                            console.log('sell short here at' + hcltech_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', hcltechTradePrice, stop, target);

                            scope.startTrade('HCLTECH', 'NSE', 'SELL', hcltecharr[0],(hcltech_marumboThresholdHigh+hcltech_marumboThresholdLow)/2 , hcltecharr[0]-parseInt(hcltecharr[0])*breakevenRatio);
                     
                        }

                        if(hcltecharr[0] <= hcltech_marumboThresholdLow){
                    
                        }

                            hcltech_prevCandleMarumbo = false;
                            hcltech_marumboThresholdHigh = 0;
                            hcltech_marumboThresholdLow = 0;
                    }
                       
                }

            hcltecharr.push(d);
        }


function getofssOHLC(d) {

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


                var marumbo = false;
                if(ofsstickType == "red" && ofss_currentSwingDirection == 'downSwing'){
                        if(ofsstickopen == ofsstickhigh && ofsstickclose == ofssticklow && ofssticklow < ofss_prevCandleHeight[1]){
                            marumbo = true;
                            ofss_marumboThresholdHigh = ofsstickhigh;
                            ofss_marumboThresholdLow = ofssticklow;
                        }
                }

                if(ofsstickType == "green" && ofss_currentSwingDirection == "upSwing"){
                        if(ofsstickopen == ofssticklow && ofsstickclose == ofsstickhigh && ofsstickhigh > ofss_prevCandleHeight[0]){
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
            first = 0;
            ofssarr = [];
        };


         function get5minDataofssTimestamp(d, scope) {

               if(ofss_prevCandleMarumbo == true && ofssarr.length == 1){
                    ;
                    
                    if(ofss_currentSwingDirection == "upSwing"){
                        if(ofssarr[0] >=  ofss_marumboThresholdHigh){
                            console.log('buy long here at' + ofss_marumboThresholdHigh);
                            scope.startTrade('OFSS', 'NSE', 'BUY', ofssarr[0],(ofss_marumboThresholdHigh+ofss_marumboThresholdLow)/2, ofssarr[0] + parseInt(ofssarr[0])*breakevenRatio);
                        }

                        if(ofssarr[0] <= ofss_marumboThresholdHigh){

                        }
                         ofss_prevCandleMarumbo = false;
                         ofss_marumboThresholdHigh = 0;
                         ofss_marumboThresholdLow = 0;
                    }


                    if(ofss_currentSwingDirection == "downSwing"){
                        if(ofssarr[0] > ofss_marumboThresholdLow){
                            console.log('sell short here at' + ofss_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', ofssTradePrice, stop, target);

                            scope.startTrade('OFSS', 'NSE', 'SELL', ofssarr[0],(ofss_marumboThresholdHigh+ofss_marumboThresholdLow)/2 , ofssarr[0]-parseInt(ofssarr[0])*breakevenRatio);
                     
                        }

                        if(ofssarr[0] <= ofss_marumboThresholdLow){
                    
                        }

                            ofss_prevCandleMarumbo = false;
                            ofss_marumboThresholdHigh = 0;
                            ofss_marumboThresholdLow = 0;
                    }
                       
                }

            ofssarr.push(d);
        }



function getpidilitindOHLC(d) {

            pidilitindtickopen = pidilitindarr[0];
            pidilitindtickhigh = _.maxBy(pidilitindarr);
            pidilitindticklow = _.minBy(pidilitindarr);
            pidilitindtickclose = pidilitindarr[pidilitindarr.length - 1];

            if (pidilitindtickopen < pidilitindtickclose) {
                pidilitindtickType = "green";
            } else if (pidilitindtickopen > pidilitindtickclose) {
                pidilitindtickType = "red";
            } else if (pidilitindtickopen = pidilitindtickclose) {
                pidilitindtickType = "doji";
            }

            pidilitindtickLength = Math.abs(pidilitindtickhigh - pidilitindticklow);


                var marumbo = false;
                if(pidilitindtickType == "red" && pidilitind_currentSwingDirection == 'downSwing'){
                        if(pidilitindtickopen == pidilitindtickhigh && pidilitindtickclose == pidilitindticklow && pidilitindticklow < pidilitind_prevCandleHeight[1]){
                            marumbo = true;
                            pidilitind_marumboThresholdHigh = pidilitindtickhigh;
                            pidilitind_marumboThresholdLow = pidilitindticklow;
                        }
                }

                if(pidilitindtickType == "green" && pidilitind_currentSwingDirection == "upSwing"){
                        if(pidilitindtickopen == pidilitindticklow && pidilitindtickclose == pidilitindtickhigh && pidilitindtickhigh > pidilitind_prevCandleHeight[0]){
                            marumbo = true;
                            pidilitind_marumboThresholdHigh = pidilitindtickhigh;
                            pidilitind_marumboThresholdLow = pidilitindticklow;
                        }
                }

                if(pidilitindtickType == "doji"){
                         marumbo = false;
                         pidilitind_marumboThresholdHigh = 0;
                         pidilitind_marumboThresholdLow = 0;
                }

              

            pidilitindtickarray = {
                "open": pidilitindtickopen,
                "low": pidilitindticklow,
                "high": pidilitindtickhigh,
                "close": pidilitindtickclose,
                "tickType": pidilitindtickType,
                'tickLength': pidilitindtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatapidilitind(pidilitindtickarray);
            first = 0;
            pidilitindarr = [];
        };


         function get5minDatapidilitindTimestamp(d, scope) {

               if(pidilitind_prevCandleMarumbo == true && pidilitindarr.length == 1){
                    ;
                    
                    if(pidilitind_currentSwingDirection == "upSwing"){
                        if(pidilitindarr[0] >=  pidilitind_marumboThresholdHigh){
                            console.log('buy long here at' + pidilitind_marumboThresholdHigh);
                            scope.startTrade('PIDILITIND', 'NSE', 'BUY', pidilitindarr[0],(pidilitind_marumboThresholdHigh+pidilitind_marumboThresholdLow)/2, pidilitindarr[0] + parseInt(pidilitindarr[0])*breakevenRatio);
                        }

                        if(pidilitindarr[0] <= pidilitind_marumboThresholdHigh){

                        }
                         pidilitind_prevCandleMarumbo = false;
                         pidilitind_marumboThresholdHigh = 0;
                         pidilitind_marumboThresholdLow = 0;
                    }


                    if(pidilitind_currentSwingDirection == "downSwing"){
                        if(pidilitindarr[0] > pidilitind_marumboThresholdLow){
                            console.log('sell short here at' + pidilitind_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', pidilitindTradePrice, stop, target);

                            scope.startTrade('PIDILITIND', 'NSE', 'SELL', pidilitindarr[0],(pidilitind_marumboThresholdHigh+pidilitind_marumboThresholdLow)/2 , pidilitindarr[0]-parseInt(pidilitindarr[0])*breakevenRatio);
                     
                        }

                        if(pidilitindarr[0] <= pidilitind_marumboThresholdLow){
                    
                        }

                            pidilitind_prevCandleMarumbo = false;
                            pidilitind_marumboThresholdHigh = 0;
                            pidilitind_marumboThresholdLow = 0;
                    }
                       
                }

            pidilitindarr.push(d);
        }


        function getlupinOHLC(d) {

            lupintickopen = lupinarr[0];
            lupintickhigh = _.maxBy(lupinarr);
            lupinticklow = _.minBy(lupinarr);
            lupintickclose = lupinarr[lupinarr.length - 1];

            if (lupintickopen < lupintickclose) {
                lupintickType = "green";
            } else if (lupintickopen > lupintickclose) {
                lupintickType = "red";
            } else if (lupintickopen = lupintickclose) {
                lupintickType = "doji";
            }

            lupintickLength = Math.abs(lupintickhigh - lupinticklow);


                var marumbo = false;
                if(lupintickType == "red" && lupin_currentSwingDirection == 'downSwing'){
                        if(lupintickopen == lupintickhigh && lupintickclose == lupinticklow && lupinticklow < lupin_prevCandleHeight[1]){
                            marumbo = true;
                            lupin_marumboThresholdHigh = lupintickhigh;
                            lupin_marumboThresholdLow = lupinticklow;
                        }
                }

                if(lupintickType == "green" && lupin_currentSwingDirection == "upSwing"){
                        if(lupintickopen == lupinticklow && lupintickclose == lupintickhigh && lupintickhigh > lupin_prevCandleHeight[0]){
                            marumbo = true;
                            lupin_marumboThresholdHigh = lupintickhigh;
                            lupin_marumboThresholdLow = lupinticklow;
                        }
                }

                if(lupintickType == "doji"){
                         marumbo = false;
                         lupin_marumboThresholdHigh = 0;
                         lupin_marumboThresholdLow = 0;
                }

              

            lupintickarray = {
                "open": lupintickopen,
                "low": lupinticklow,
                "high": lupintickhigh,
                "close": lupintickclose,
                "tickType": lupintickType,
                'tickLength': lupintickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatalupin(lupintickarray);
            first = 0;
            lupinarr = [];
        };


         function get5minDatalupinTimestamp(d, scope) {

               if(lupin_prevCandleMarumbo == true && lupinarr.length == 1){
                    ;
                    
                    if(lupin_currentSwingDirection == "upSwing"){
                        if(lupinarr[0] >=  lupin_marumboThresholdHigh){
                            console.log('buy long here at' + lupin_marumboThresholdHigh);
                            scope.startTrade('LUPIN', 'NSE', 'BUY', lupinarr[0],(lupin_marumboThresholdHigh+lupin_marumboThresholdLow)/2, lupinarr[0] + parseInt(lupinarr[0])*breakevenRatio);
                        }

                        if(lupinarr[0] <= lupin_marumboThresholdHigh){

                        }
                         lupin_prevCandleMarumbo = false;
                         lupin_marumboThresholdHigh = 0;
                         lupin_marumboThresholdLow = 0;
                    }


                    if(lupin_currentSwingDirection == "downSwing"){
                        if(lupinarr[0] > lupin_marumboThresholdLow){
                            console.log('sell short here at' + lupin_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', lupinTradePrice, stop, target);

                            scope.startTrade('LUPIN', 'NSE', 'SELL', lupinarr[0],(lupin_marumboThresholdHigh+lupin_marumboThresholdLow)/2 , lupinarr[0]-parseInt(lupinarr[0])*breakevenRatio);
                     
                        }

                        if(lupinarr[0] <= lupin_marumboThresholdLow){
                    
                        }

                            lupin_prevCandleMarumbo = false;
                            lupin_marumboThresholdHigh = 0;
                            lupin_marumboThresholdLow = 0;
                    }
                       
                }

            lupinarr.push(d);
        }




 function gettatamotorsOHLC(d) {

            tatamotorstickopen = tatamotorsarr[0];
            tatamotorstickhigh = _.maxBy(tatamotorsarr);
            tatamotorsticklow = _.minBy(tatamotorsarr);
            tatamotorstickclose = tatamotorsarr[tatamotorsarr.length - 1];

            if (tatamotorstickopen < tatamotorstickclose) {
                tatamotorstickType = "green";
            } else if (tatamotorstickopen > tatamotorstickclose) {
                tatamotorstickType = "red";
            } else if (tatamotorstickopen = tatamotorstickclose) {
                tatamotorstickType = "doji";
            }

            tatamotorstickLength = Math.abs(tatamotorstickhigh - tatamotorsticklow);


                var marumbo = false;
                if(tatamotorstickType == "red" && tatamotors_currentSwingDirection == 'downSwing'){
                        if(tatamotorstickopen == tatamotorstickhigh && tatamotorstickclose == tatamotorsticklow && tatamotorsticklow < tatamotors_prevCandleHeight[1]){
                            marumbo = true;
                            tatamotors_marumboThresholdHigh = tatamotorstickhigh;
                            tatamotors_marumboThresholdLow = tatamotorsticklow;
                        }
                }

                if(tatamotorstickType == "green" && tatamotors_currentSwingDirection == "upSwing"){
                        if(tatamotorstickopen == tatamotorsticklow && tatamotorstickclose == tatamotorstickhigh && tatamotorstickhigh > tatamotors_prevCandleHeight[0]){
                            marumbo = true;
                            tatamotors_marumboThresholdHigh = tatamotorstickhigh;
                            tatamotors_marumboThresholdLow = tatamotorsticklow;
                        }
                }

                if(tatamotorstickType == "doji"){
                         marumbo = false;
                         tatamotors_marumboThresholdHigh = 0;
                         tatamotors_marumboThresholdLow = 0;
                }

              

            tatamotorstickarray = {
                "open": tatamotorstickopen,
                "low": tatamotorsticklow,
                "high": tatamotorstickhigh,
                "close": tatamotorstickclose,
                "tickType": tatamotorstickType,
                'tickLength': tatamotorstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatatatamotors(tatamotorstickarray);
            first = 0;
            tatamotorsarr = [];
        };

        function getitcOHLC(d) {

            itctickopen = itcarr[0];
            itctickhigh = _.maxBy(itcarr);
            itcticklow = _.minBy(itcarr);
            itctickclose = itcarr[itcarr.length - 1];

            if (itctickopen < itctickclose) {
                itctickType = "green";
            } else if (itctickopen > itctickclose) {
                itctickType = "red";
            } else if (itctickopen = itctickclose) {
                itctickType = "doji";
            }

            itctickLength = Math.abs(itctickhigh - itcticklow);


                var marumbo = false;
                if(itctickType == "red" && itc_currentSwingDirection == 'downSwing'){
                        if(itctickopen == itctickhigh && itctickclose == itcticklow && itcticklow < itc_prevCandleHeight[1]){
                            marumbo = true;
                            itc_marumboThresholdHigh = itctickhigh;
                            itc_marumboThresholdLow = itcticklow;
                        }
                }

                if(itctickType == "green" && itc_currentSwingDirection == "upSwing"){
                        if(itctickopen == itcticklow && itctickclose == itctickhigh && itctickhigh > itc_prevCandleHeight[0]){
                            marumbo = true;
                            itc_marumboThresholdHigh = itctickhigh;
                            itc_marumboThresholdLow = itcticklow;
                        }
                }

                if(itctickType == "doji"){
                         marumbo = false;
                         itc_marumboThresholdHigh = 0;
                         itc_marumboThresholdLow = 0;
                }

              

            itctickarray = {
                "open": itctickopen,
                "low": itcticklow,
                "high": itctickhigh,
                "close": itctickclose,
                "tickType": itctickType,
                'tickLength': itctickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataitc(itctickarray);
            first = 0;
            itcarr = [];
        };


         function get5minDataitcTimestamp(d, scope) {

               if(itc_prevCandleMarumbo == true && itcarr.length == 1){
                    ;
                    
                    if(itc_currentSwingDirection == "upSwing"){
                        if(itcarr[0] >=  itc_marumboThresholdHigh){
                            console.log('buy long here at' + itc_marumboThresholdHigh);
                            scope.startTrade('ITC', 'NSE', 'BUY', itcarr[0],(itc_marumboThresholdHigh+itc_marumboThresholdLow)/2, itcarr[0] + parseInt(itcarr[0])*breakevenRatio);
                        }

                        if(itcarr[0] <= itc_marumboThresholdHigh){

                        }
                         itc_prevCandleMarumbo = false;
                         itc_marumboThresholdHigh = 0;
                         itc_marumboThresholdLow = 0;
                    }


                    if(itc_currentSwingDirection == "downSwing"){
                        if(itcarr[0] > itc_marumboThresholdLow){
                            console.log('sell short here at' + itc_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', itcTradePrice, stop, target);

                            scope.startTrade('ITC', 'NSE', 'SELL', itcarr[0],(itc_marumboThresholdHigh+itc_marumboThresholdLow)/2 , itcarr[0]-parseInt(itcarr[0])*breakevenRatio);
                     
                        }

                        if(itcarr[0] <= itc_marumboThresholdLow){
                    
                        }

                            itc_prevCandleMarumbo = false;
                            itc_marumboThresholdHigh = 0;
                            itc_marumboThresholdLow = 0;
                    }
                       
                }

            itcarr.push(d);
        }

        function getzeelOHLC(d) {

            zeeltickopen = zeelarr[0];
            zeeltickhigh = _.maxBy(zeelarr);
            zeelticklow = _.minBy(zeelarr);
            zeeltickclose = zeelarr[zeelarr.length - 1];

            if (zeeltickopen < zeeltickclose) {
                zeeltickType = "green";
            } else if (zeeltickopen > zeeltickclose) {
                zeeltickType = "red";
            } else if (zeeltickopen = zeeltickclose) {
                zeeltickType = "doji";
            }

            zeeltickLength = Math.abs(zeeltickhigh - zeelticklow);


                var marumbo = false;
                if(zeeltickType == "red" && zeel_currentSwingDirection == 'downSwing'){
                        if(zeeltickopen == zeeltickhigh && zeeltickclose == zeelticklow && zeelticklow < zeel_prevCandleHeight[1]){
                            marumbo = true;
                            zeel_marumboThresholdHigh = zeeltickhigh;
                            zeel_marumboThresholdLow = zeelticklow;
                        }
                }

                if(zeeltickType == "green" && zeel_currentSwingDirection == "upSwing"){
                        if(zeeltickopen == zeelticklow && zeeltickclose == zeeltickhigh && zeeltickhigh > zeel_prevCandleHeight[0]){
                            marumbo = true;
                            zeel_marumboThresholdHigh = zeeltickhigh;
                            zeel_marumboThresholdLow = zeelticklow;
                        }
                }

                if(zeeltickType == "doji"){
                         marumbo = false;
                         zeel_marumboThresholdHigh = 0;
                         zeel_marumboThresholdLow = 0;
                }

              

            zeeltickarray = {
                "open": zeeltickopen,
                "low": zeelticklow,
                "high": zeeltickhigh,
                "close": zeeltickclose,
                "tickType": zeeltickType,
                'tickLength': zeeltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatazeel(zeeltickarray);
            first = 0;
            zeelarr = [];
        };


         function get5minDatazeelTimestamp(d, scope) {

               if(zeel_prevCandleMarumbo == true && zeelarr.length == 1){
                    ;
                    
                    if(zeel_currentSwingDirection == "upSwing"){
                        if(zeelarr[0] >=  zeel_marumboThresholdHigh){
                            console.log('buy long here at' + zeel_marumboThresholdHigh);
                            scope.startTrade('ZEEL', 'NSE', 'BUY', zeelarr[0],(zeel_marumboThresholdHigh+zeel_marumboThresholdLow)/2, zeelarr[0] + parseInt(zeelarr[0])*breakevenRatio);
                        }

                        if(zeelarr[0] <= zeel_marumboThresholdHigh){

                        }
                         zeel_prevCandleMarumbo = false;
                         zeel_marumboThresholdHigh = 0;
                         zeel_marumboThresholdLow = 0;
                    }


                    if(zeel_currentSwingDirection == "downSwing"){
                        if(zeelarr[0] > zeel_marumboThresholdLow){
                            console.log('sell short here at' + zeel_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', zeelTradePrice, stop, target);

                            scope.startTrade('ZEEL', 'NSE', 'SELL', zeelarr[0],(zeel_marumboThresholdHigh+zeel_marumboThresholdLow)/2 , zeelarr[0]-parseInt(zeelarr[0])*breakevenRatio);
                     
                        }

                        if(zeelarr[0] <= zeel_marumboThresholdLow){
                    
                        }

                            zeel_prevCandleMarumbo = false;
                            zeel_marumboThresholdHigh = 0;
                            zeel_marumboThresholdLow = 0;
                    }
                       
                }

            zeelarr.push(d);
        }



         function get5minDatatatamotorsTimestamp(d, scope) {

               if(tatamotors_prevCandleMarumbo == true && tatamotorsarr.length == 1){
                    ;
                    
                    if(tatamotors_currentSwingDirection == "upSwing"){
                        if(tatamotorsarr[0] >=  tatamotors_marumboThresholdHigh){
                            console.log('buy long here at' + tatamotors_marumboThresholdHigh);
                            scope.startTrade('TATAMOTORS', 'NSE', 'BUY', tatamotorsarr[0],(tatamotors_marumboThresholdHigh+tatamotors_marumboThresholdLow)/2, tatamotorsarr[0] + parseInt(tatamotorsarr[0])*breakevenRatio);
                        }

                        if(tatamotorsarr[0] <= tatamotors_marumboThresholdHigh){

                        }
                         tatamotors_prevCandleMarumbo = false;
                         tatamotors_marumboThresholdHigh = 0;
                         tatamotors_marumboThresholdLow = 0;
                    }


                    if(tatamotors_currentSwingDirection == "downSwing"){
                        if(tatamotorsarr[0] > tatamotors_marumboThresholdLow){
                            console.log('sell short here at' + tatamotors_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', tatamotorsTradePrice, stop, target);

                            scope.startTrade('TATAMOTORS', 'NSE', 'SELL', tatamotorsarr[0],(tatamotors_marumboThresholdHigh+tatamotors_marumboThresholdLow)/2 , tatamotorsarr[0]-parseInt(tatamotorsarr[0])*breakevenRatio);
                     
                        }

                        if(tatamotorsarr[0] <= tatamotors_marumboThresholdLow){
                    
                        }

                            tatamotors_prevCandleMarumbo = false;
                            tatamotors_marumboThresholdHigh = 0;
                            tatamotors_marumboThresholdLow = 0;
                    }
                       
                }

            tatamotorsarr.push(d);
        }

         function gettatasteelOHLC(d) {

            tatasteeltickopen = tatasteelarr[0];
            tatasteeltickhigh = _.maxBy(tatasteelarr);
            tatasteelticklow = _.minBy(tatasteelarr);
            tatasteeltickclose = tatasteelarr[tatasteelarr.length - 1];

            if (tatasteeltickopen < tatasteeltickclose) {
                tatasteeltickType = "green";
            } else if (tatasteeltickopen > tatasteeltickclose) {
                tatasteeltickType = "red";
            } else if (tatasteeltickopen = tatasteeltickclose) {
                tatasteeltickType = "doji";
            }

            tatasteeltickLength = Math.abs(tatasteeltickhigh - tatasteelticklow);


                var marumbo = false;
                if(tatasteeltickType == "red" && tatasteel_currentSwingDirection == 'downSwing'){
                        if(tatasteeltickopen == tatasteeltickhigh && tatasteeltickclose == tatasteelticklow && tatasteelticklow < tatasteel_prevCandleHeight[1]){
                            marumbo = true;
                            tatasteel_marumboThresholdHigh = tatasteeltickhigh;
                            tatasteel_marumboThresholdLow = tatasteelticklow;
                        }
                }

                if(tatasteeltickType == "green" && tatasteel_currentSwingDirection == "upSwing"){
                        if(tatasteeltickopen == tatasteelticklow && tatasteeltickclose == tatasteeltickhigh && tatasteeltickhigh > tatasteel_prevCandleHeight[0]){
                            marumbo = true;
                            tatasteel_marumboThresholdHigh = tatasteeltickhigh;
                            tatasteel_marumboThresholdLow = tatasteelticklow;
                        }
                }

                if(tatasteeltickType == "doji"){
                         marumbo = false;
                         tatasteel_marumboThresholdHigh = 0;
                         tatasteel_marumboThresholdLow = 0;
                }

              

            tatasteeltickarray = {
                "open": tatasteeltickopen,
                "low": tatasteelticklow,
                "high": tatasteeltickhigh,
                "close": tatasteeltickclose,
                "tickType": tatasteeltickType,
                'tickLength': tatasteeltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatatatasteel(tatasteeltickarray);
            first = 0;
            tatasteelarr = [];
        };


         function get5minDatatatasteelTimestamp(d, scope) {

               if(tatasteel_prevCandleMarumbo == true && tatasteelarr.length == 1){
                    ;
                    
                    if(tatasteel_currentSwingDirection == "upSwing"){
                        if(tatasteelarr[0] >=  tatasteel_marumboThresholdHigh){
                            console.log('buy long here at' + tatasteel_marumboThresholdHigh);
                            scope.startTrade('TATASTEEL', 'NSE', 'BUY', tatasteelarr[0],(tatasteel_marumboThresholdHigh+tatasteel_marumboThresholdLow)/2, tatasteelarr[0] + parseInt(tatasteelarr[0])*breakevenRatio);
                        }

                        if(tatasteelarr[0] <= tatasteel_marumboThresholdHigh){

                        }
                         tatasteel_prevCandleMarumbo = false;
                         tatasteel_marumboThresholdHigh = 0;
                         tatasteel_marumboThresholdLow = 0;
                    }


                    if(tatasteel_currentSwingDirection == "downSwing"){
                        if(tatasteelarr[0] > tatasteel_marumboThresholdLow){
                            console.log('sell short here at' + tatasteel_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', tatasteelTradePrice, stop, target);

                            scope.startTrade('TATASTEEL', 'NSE', 'SELL', tatasteelarr[0],(tatasteel_marumboThresholdHigh+tatasteel_marumboThresholdLow)/2 , tatasteelarr[0]-parseInt(tatasteelarr[0])*breakevenRatio);
                     
                        }

                        if(tatasteelarr[0] <= tatasteel_marumboThresholdLow){
                    
                        }

                            tatasteel_prevCandleMarumbo = false;
                            tatasteel_marumboThresholdHigh = 0;
                            tatasteel_marumboThresholdLow = 0;
                    }
                       
                }

            tatasteelarr.push(d);
        }


 function getongcOHLC(d) {

            ongctickopen = ongcarr[0];
            ongctickhigh = _.maxBy(ongcarr);
            ongcticklow = _.minBy(ongcarr);
            ongctickclose = ongcarr[ongcarr.length - 1];

            if (ongctickopen < ongctickclose) {
                ongctickType = "green";
            } else if (ongctickopen > ongctickclose) {
                ongctickType = "red";
            } else if (ongctickopen = ongctickclose) {
                ongctickType = "doji";
            }

            ongctickLength = Math.abs(ongctickhigh - ongcticklow);


                var marumbo = false;
                if(ongctickType == "red" && ongc_currentSwingDirection == 'downSwing'){
                        if(ongctickopen == ongctickhigh && ongctickclose == ongcticklow && ongcticklow < ongc_prevCandleHeight[1]){
                            marumbo = true;
                            ongc_marumboThresholdHigh = ongctickhigh;
                            ongc_marumboThresholdLow = ongcticklow;
                        }
                }

                if(ongctickType == "green" && ongc_currentSwingDirection == "upSwing"){
                        if(ongctickopen == ongcticklow && ongctickclose == ongctickhigh && ongctickhigh > ongc_prevCandleHeight[0]){
                            marumbo = true;
                            ongc_marumboThresholdHigh = ongctickhigh;
                            ongc_marumboThresholdLow = ongcticklow;
                        }
                }

                if(ongctickType == "doji"){
                         marumbo = false;
                         ongc_marumboThresholdHigh = 0;
                         ongc_marumboThresholdLow = 0;
                }

              

            ongctickarray = {
                "open": ongctickopen,
                "low": ongcticklow,
                "high": ongctickhigh,
                "close": ongctickclose,
                "tickType": ongctickType,
                'tickLength': ongctickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataongc(ongctickarray);
            first = 0;
            ongcarr = [];
        };


         function get5minDataongcTimestamp(d, scope) {

               if(ongc_prevCandleMarumbo == true && ongcarr.length == 1){
                    ;
                    
                    if(ongc_currentSwingDirection == "upSwing"){
                        if(ongcarr[0] >=  ongc_marumboThresholdHigh){
                            console.log('buy long here at' + ongc_marumboThresholdHigh);
                            scope.startTrade('ONGC', 'NSE', 'BUY', ongcarr[0],(ongc_marumboThresholdHigh+ongc_marumboThresholdLow)/2, ongcarr[0] + parseInt(ongcarr[0])*breakevenRatio);
                        }

                        if(ongcarr[0] <= ongc_marumboThresholdHigh){

                        }
                         ongc_prevCandleMarumbo = false;
                         ongc_marumboThresholdHigh = 0;
                         ongc_marumboThresholdLow = 0;
                    }


                    if(ongc_currentSwingDirection == "downSwing"){
                        if(ongcarr[0] > ongc_marumboThresholdLow){
                            console.log('sell short here at' + ongc_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', ongcTradePrice, stop, target);

                            scope.startTrade('ONGC', 'NSE', 'SELL', ongcarr[0],(ongc_marumboThresholdHigh+ongc_marumboThresholdLow)/2 , ongcarr[0]-parseInt(ongcarr[0])*breakevenRatio);
                     
                        }

                        if(ongcarr[0] <= ongc_marumboThresholdLow){
                    
                        }

                            ongc_prevCandleMarumbo = false;
                            ongc_marumboThresholdHigh = 0;
                            ongc_marumboThresholdLow = 0;
                    }
                       
                }

            ongcarr.push(d);
        }


 function gethindalcoOHLC(d) {

            hindalcotickopen = hindalcoarr[0];
            hindalcotickhigh = _.maxBy(hindalcoarr);
            hindalcoticklow = _.minBy(hindalcoarr);
            hindalcotickclose = hindalcoarr[hindalcoarr.length - 1];

            if (hindalcotickopen < hindalcotickclose) {
                hindalcotickType = "green";
            } else if (hindalcotickopen > hindalcotickclose) {
                hindalcotickType = "red";
            } else if (hindalcotickopen = hindalcotickclose) {
                hindalcotickType = "doji";
            }

            hindalcotickLength = Math.abs(hindalcotickhigh - hindalcoticklow);


                var marumbo = false;
                if(hindalcotickType == "red" && hindalco_currentSwingDirection == 'downSwing'){
                        if(hindalcotickopen == hindalcotickhigh && hindalcotickclose == hindalcoticklow && hindalcoticklow < hindalco_prevCandleHeight[1]){
                            marumbo = true;
                            hindalco_marumboThresholdHigh = hindalcotickhigh;
                            hindalco_marumboThresholdLow = hindalcoticklow;
                        }
                }

                if(hindalcotickType == "green" && hindalco_currentSwingDirection == "upSwing"){
                        if(hindalcotickopen == hindalcoticklow && hindalcotickclose == hindalcotickhigh && hindalcotickhigh > hindalco_prevCandleHeight[0]){
                            marumbo = true;
                            hindalco_marumboThresholdHigh = hindalcotickhigh;
                            hindalco_marumboThresholdLow = hindalcoticklow;
                        }
                }

                if(hindalcotickType == "doji"){
                         marumbo = false;
                         hindalco_marumboThresholdHigh = 0;
                         hindalco_marumboThresholdLow = 0;
                }

              

            hindalcotickarray = {
                "open": hindalcotickopen,
                "low": hindalcoticklow,
                "high": hindalcotickhigh,
                "close": hindalcotickclose,
                "tickType": hindalcotickType,
                'tickLength': hindalcotickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatahindalco(hindalcotickarray);
            first = 0;
            hindalcoarr = [];
        };


         function get5minDatahindalcoTimestamp(d, scope) {

               if(hindalco_prevCandleMarumbo == true && hindalcoarr.length == 1){
                    ;
                    
                    if(hindalco_currentSwingDirection == "upSwing"){
                        if(hindalcoarr[0] >=  hindalco_marumboThresholdHigh){
                            console.log('buy long here at' + hindalco_marumboThresholdHigh);
                            scope.startTrade('HINDALCO', 'NSE', 'BUY', hindalcoarr[0],(hindalco_marumboThresholdHigh+hindalco_marumboThresholdLow)/2, hindalcoarr[0] + parseInt(hindalcoarr[0])*breakevenRatio);
                        }

                        if(hindalcoarr[0] <= hindalco_marumboThresholdHigh){

                        }
                         hindalco_prevCandleMarumbo = false;
                         hindalco_marumboThresholdHigh = 0;
                         hindalco_marumboThresholdLow = 0;
                    }


                    if(hindalco_currentSwingDirection == "downSwing"){
                        if(hindalcoarr[0] > hindalco_marumboThresholdLow){
                            console.log('sell short here at' + hindalco_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', hindalcoTradePrice, stop, target);

                            scope.startTrade('HINDALCO', 'NSE', 'SELL', hindalcoarr[0],(hindalco_marumboThresholdHigh+hindalco_marumboThresholdLow)/2 , hindalcoarr[0]-parseInt(hindalcoarr[0])*breakevenRatio);
                     
                        }

                        if(hindalcoarr[0] <= hindalco_marumboThresholdLow){
                    
                        }

                            hindalco_prevCandleMarumbo = false;
                            hindalco_marumboThresholdHigh = 0;
                            hindalco_marumboThresholdLow = 0;
                    }
                       
                }

            hindalcoarr.push(d);
        }

        function getmaricoOHLC(d) {

            maricotickopen = maricoarr[0];
            maricotickhigh = _.maxBy(maricoarr);
            maricoticklow = _.minBy(maricoarr);
            maricotickclose = maricoarr[maricoarr.length - 1];

            if (maricotickopen < maricotickclose) {
                maricotickType = "green";
            } else if (maricotickopen > maricotickclose) {
                maricotickType = "red";
            } else if (maricotickopen = maricotickclose) {
                maricotickType = "doji";
            }

            maricotickLength = Math.abs(maricotickhigh - maricoticklow);


                var marumbo = false;
                if(maricotickType == "red" && marico_currentSwingDirection == 'downSwing'){
                        if(maricotickopen == maricotickhigh && maricotickclose == maricoticklow && maricoticklow < marico_prevCandleHeight[1]){
                            marumbo = true;
                            marico_marumboThresholdHigh = maricotickhigh;
                            marico_marumboThresholdLow = maricoticklow;
                        }
                }

                if(maricotickType == "green" && marico_currentSwingDirection == "upSwing"){
                        if(maricotickopen == maricoticklow && maricotickclose == maricotickhigh && maricotickhigh > marico_prevCandleHeight[0]){
                            marumbo = true;
                            marico_marumboThresholdHigh = maricotickhigh;
                            marico_marumboThresholdLow = maricoticklow;
                        }
                }

                if(maricotickType == "doji"){
                         marumbo = false;
                         marico_marumboThresholdHigh = 0;
                         marico_marumboThresholdLow = 0;
                }

              

            maricotickarray = {
                "open": maricotickopen,
                "low": maricoticklow,
                "high": maricotickhigh,
                "close": maricotickclose,
                "tickType": maricotickType,
                'tickLength': maricotickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatamarico(maricotickarray);
            first = 0;
            maricoarr = [];
        };


         function get5minDatamaricoTimestamp(d, scope) {

               if(marico_prevCandleMarumbo == true && maricoarr.length == 1){
                    ;
                    
                    if(marico_currentSwingDirection == "upSwing"){
                        if(maricoarr[0] >=  marico_marumboThresholdHigh){
                            console.log('buy long here at' + marico_marumboThresholdHigh);
                            scope.startTrade('MARICO', 'NSE', 'BUY', maricoarr[0],(marico_marumboThresholdHigh+marico_marumboThresholdLow)/2, maricoarr[0] + parseInt(maricoarr[0])*breakevenRatio);
                        }

                        if(maricoarr[0] <= marico_marumboThresholdHigh){

                        }
                         marico_prevCandleMarumbo = false;
                         marico_marumboThresholdHigh = 0;
                         marico_marumboThresholdLow = 0;
                    }


                    if(marico_currentSwingDirection == "downSwing"){
                        if(maricoarr[0] > marico_marumboThresholdLow){
                            console.log('sell short here at' + marico_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', maricoTradePrice, stop, target);

                            scope.startTrade('MARICO', 'NSE', 'SELL', maricoarr[0],(marico_marumboThresholdHigh+marico_marumboThresholdLow)/2 , maricoarr[0]-parseInt(maricoarr[0])*breakevenRatio);
                     
                        }

                        if(maricoarr[0] <= marico_marumboThresholdLow){
                    
                        }

                            marico_prevCandleMarumbo = false;
                            marico_marumboThresholdHigh = 0;
                            marico_marumboThresholdLow = 0;
                    }
                       
                }

            maricoarr.push(d);
        }



        //bpcl

        function getbpclOHLC(d) {

            bpcltickopen = bpclarr[0];
            bpcltickhigh = _.maxBy(bpclarr);
            bpclticklow = _.minBy(bpclarr);
            bpcltickclose = bpclarr[bpclarr.length - 1];

            if (bpcltickopen < bpcltickclose) {
                bpcltickType = "green";
            } else if (bpcltickopen > bpcltickclose) {
                bpcltickType = "red";
            } else if (bpcltickopen = bpcltickclose) {
                bpcltickType = "doji";
            }

            bpcltickLength = Math.abs(bpcltickhigh - bpclticklow);


                var marumbo = false;
                if(bpcltickType == "red" && bpcl_currentSwingDirection == 'downSwing'){
                        if(bpcltickopen == bpcltickhigh && bpcltickclose == bpclticklow && bpclticklow < bpcl_prevCandleHeight[1]){
                            marumbo = true;
                            bpcl_marumboThresholdHigh = bpcltickhigh;
                            bpcl_marumboThresholdLow = bpclticklow;
                        }
                }

                if(bpcltickType == "green" && bpcl_currentSwingDirection == "upSwing"){
                        if(bpcltickopen == bpclticklow && bpcltickclose == bpcltickhigh && bpcltickhigh > bpcl_prevCandleHeight[0]){
                            marumbo = true;
                            bpcl_marumboThresholdHigh = bpcltickhigh;
                            bpcl_marumboThresholdLow = bpclticklow;
                        }
                }

                if(bpcltickType == "doji"){
                         marumbo = false;
                         bpcl_marumboThresholdHigh = 0;
                         bpcl_marumboThresholdLow = 0;
                }

              

            bpcltickarray = {
                "open": bpcltickopen,
                "low": bpclticklow,
                "high": bpcltickhigh,
                "close": bpcltickclose,
                "tickType": bpcltickType,
                'tickLength': bpcltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatabpcl(bpcltickarray);
            first = 0;
            bpclarr = [];
        };


         function get5minDatabpclTimestamp(d, scope) {

               if(bpcl_prevCandleMarumbo == true && bpclarr.length == 1){
                    ;
                    
                    if(bpcl_currentSwingDirection == "upSwing"){
                        if(bpclarr[0] >=  bpcl_marumboThresholdHigh){
                            console.log('buy long here at' + bpcl_marumboThresholdHigh);
                            scope.startTrade('BPCL', 'NSE', 'BUY', bpclarr[0],(bpcl_marumboThresholdHigh+bpcl_marumboThresholdLow)/2, bpclarr[0] + parseInt(bpclarr[0])*breakevenRatio);
                        }

                        if(bpclarr[0] <= bpcl_marumboThresholdHigh){

                        }
                         bpcl_prevCandleMarumbo = false;
                         bpcl_marumboThresholdHigh = 0;
                         bpcl_marumboThresholdLow = 0;
                    }


                    if(bpcl_currentSwingDirection == "downSwing"){
                        if(bpclarr[0] > bpcl_marumboThresholdLow){
                            console.log('sell short here at' + bpcl_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', bpclTradePrice, stop, target);

                            scope.startTrade('BPCL', 'NSE', 'SELL', bpclarr[0],(bpcl_marumboThresholdHigh+bpcl_marumboThresholdLow)/2 , bpclarr[0]-parseInt(bpclarr[0])*breakevenRatio);
                     
                        }

                        if(bpclarr[0] <= bpcl_marumboThresholdLow){
                    
                        }

                            bpcl_prevCandleMarumbo = false;
                            bpcl_marumboThresholdHigh = 0;
                            bpcl_marumboThresholdLow = 0;
                    }
                       
                }

            bpclarr.push(d);
        }



        function get5minDataCrudeTimestamp(d, scope) {

               if(crude_prevCandleMarumbo == true && crudearr.length == 1){
                    ;
                    
                    if(crude_currentSwingDirection == "upSwing"){
                        if(crudearr[0] >=  crude_marumboThresholdHigh){
                            console.log('buy long here at' + crude_marumboThresholdHigh);
                            scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'BUY', crudearr[0],(crude_marumboThresholdHigh+crude_marumboThresholdLow)/2, crudearr[0] + parseInt(crudearr[0])*breakevenRatio);
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
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', crudeTradePrice, stop, target);

                            scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', crudearr[0],(crude_marumboThresholdHigh+crude_marumboThresholdLow)/2 , crudearr[0]-parseInt(crudearr[0])*breakevenRatio);
                     
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
                  //  ;
                    
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

            var copperLengthRatio = coppertickLength/coppertickhigh;

             
                var marumbo = false;
                if(coppertickType == "red" && copper_currentSwingDirection == 'downSwing' && copperLengthRatio < 0.01) {
                        if(coppertickclose == copperticklow && copperticklow < copper_prevCandleHeight[1]){
                            marumbo = true;
                            copper_marumboThresholdHigh = coppertickhigh;
                            copper_marumboThresholdLow = copperticklow;
                        }
                }

                if(coppertickType == "green" && copper_currentSwingDirection == "upSwing" && copperLengthRatio < 0.01){
                        if(coppertickclose == coppertickhigh && coppertickhigh > copper_prevCandleHeight[0]){
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
                    ;
                    
                    if(banknifty_currentSwingDirection == "upSwing"){
                        if(bankniftyarr[0] >=  banknifty_marumboThresholdHigh){
                            console.log('buy long here at' + banknifty_marumboThresholdHigh);
                            scope.startTrade('BANKNIFTY19MARFUT', 'NSE', 'BUY', bankniftyarr[0],(banknifty_marumboThresholdHigh+banknifty_marumboThresholdLow)/2, bankniftyarr[0] + parseInt(bankniftyarr[0])*breakevenRatio);
                     
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
                            scope.startTrade('BANKNIFTY19MARFUT', 'NSE', 'SELL', bankniftyarr[0],(banknifty_marumboThresholdHigh+banknifty_marumboThresholdLow)/2 , bankniftyarr[0]-parseInt(bankniftyarr[0])*breakevenRatio);
                     
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
            var bankniftyLengthRatio = bankniftytickLength/bankniftytickhigh;


                var marumbo = false;
                if(bankniftytickType == "red" && banknifty_currentSwingDirection == 'downSwing' && bankniftyLengthRatio < 0.01){
                        if( bankniftytickclose == bankniftyticklow && bankniftyticklow < banknifty_prevCandleHeight[1]){
                            marumbo = true;
                            banknifty_marumboThresholdHigh = bankniftytickhigh;
                            banknifty_marumboThresholdLow = bankniftyticklow;
                        }
                }

                if(bankniftytickType == "green" && banknifty_currentSwingDirection == "upSwing" && bankniftyLengthRatio < 0.01){
                        if( bankniftytickclose == bankniftytickhigh && bankniftytickhigh > banknifty_prevCandleHeight[0]){
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
                    ;
                    
                    if(bosch_currentSwingDirection == "upSwing"){
                        if(boscharr[0] >=  bosch_marumboThresholdHigh){
                            console.log('buy long here at' + bosch_marumboThresholdHigh);
                            scope.startTrade('BOSCHLTD', 'NSE', 'BUY', boscharr[0],(bosch_marumboThresholdHigh+bosch_marumboThresholdLow)/2, boscharr[0] + parseInt(boscharr[0])*breakevenRatio);

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
                            scope.startTrade('BOSCHLTD', 'NSE', 'SELL', boscharr[0],(bosch_marumboThresholdHigh+bosch_marumboThresholdLow)/2 , boscharr[0]-parseInt(boscharr[0])*breakevenRatio);
                     
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
            var boschLengthRatio = boschtickLength/boschtickhigh;


                var marumbo = false;
                if(boschtickType == "red" && bosch_currentSwingDirection == 'downSwing'){
                        if( boschtickclose == boschticklow && boschticklow < bosch_prevCandleHeight[1] &&  boschLengthRatio < 0.01){
                            marumbo = true;
                            bosch_marumboThresholdHigh = boschtickhigh;
                            bosch_marumboThresholdLow = boschticklow;
                        }
                }

                if(boschtickType == "green" && bosch_currentSwingDirection == "upSwing"){
                        if(boschtickclose == boschtickhigh && boschtickhigh > bosch_prevCandleHeight[0]  &&  boschLengthRatio < 0.01){
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
                    ;
                    
                    if(cadila_currentSwingDirection == "upSwing"){
                        if(cadilaarr[0] >=  cadila_marumboThresholdHigh){
                            console.log('buy long here at' + cadila_marumboThresholdHigh);
                            scope.startTrade('CADILAHC', 'NSE', 'BUY', cadilaarr[0],(cadila_marumboThresholdHigh+cadila_marumboThresholdLow)/2, cadilaarr[0] + parseInt(cadilaarr[0])*breakevenRatio);

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
                            scope.startTrade('CADILAHC', 'NSE', 'SELL', cadilaarr[0],(cadila_marumboThresholdHigh+cadila_marumboThresholdLow)/2 , cadilaarr[0]-parseInt(cadilaarr[0])*breakevenRatio);
                     
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
            var cadilaLengthRatio = cadilatickLength/cadilatickhigh;


                var marumbo = false;
                if(cadilatickType == "red" && cadila_currentSwingDirection == 'downSwing' && cadilaLengthRatio <0.01){
                        if(cadilatickclose == cadilaticklow && cadilaticklow < cadila_prevCandleHeight[1]){
                            marumbo = true;
                            cadila_marumboThresholdHigh = cadilatickhigh;
                            cadila_marumboThresholdLow = cadilaticklow;
                        }
                }

                if(cadilatickType == "green" && cadila_currentSwingDirection == "upSwing"  && cadilaLengthRatio <0.01){
                        if(cadilatickclose == cadilatickhigh && cadilatickhigh > cadila_prevCandleHeight[0]){
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
                    ;
                    
                    if(cipla_currentSwingDirection == "upSwing"){
                        if(ciplaarr[0] >=  cipla_marumboThresholdHigh){
                            console.log('buy long here at' + cipla_marumboThresholdHigh);
                            scope.startTrade('CIPLA', 'NSE', 'BUY', ciplaarr[0],(cipla_marumboThresholdHigh+cipla_marumboThresholdLow)/2, ciplaarr[0] + parseInt(ciplaarr[0])*breakevenRatio);


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
                             scope.startTrade('CIPLA', 'NSE', 'SELL', ciplaarr[0],(cipla_marumboThresholdHigh+cipla_marumboThresholdLow)/2 , ciplaarr[0]-parseInt(ciplaarr[0])*breakevenRatio);
                     
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
            var ciplaLengthRatio = ciplatickLength/ciplatickhigh;


                var marumbo = false;
                if(ciplatickType == "red" && cipla_currentSwingDirection == 'downSwing' && ciplaLengthRatio<0.01){
                        if(ciplatickclose == ciplaticklow && ciplaticklow < cipla_prevCandleHeight[1]){
                            marumbo = true;
                            cipla_marumboThresholdHigh = ciplatickhigh;
                            cipla_marumboThresholdLow = ciplaticklow;
                        }
                }

                if(ciplatickType == "green" && cipla_currentSwingDirection == "upSwing"  && ciplaLengthRatio<0.01){
                        if(ciplatickclose == ciplatickhigh && ciplatickhigh > cipla_prevCandleHeight[0]){
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
                    ;
                    
                    if(coal_currentSwingDirection == "upSwing"){
                        if(coalarr[0] >=  coal_marumboThresholdHigh){
                            console.log('buy long here at' + coal_marumboThresholdHigh);
                             scope.startTrade('COALINDIA', 'NSE', 'BUY', coalarr[0],(coal_marumboThresholdHigh+coal_marumboThresholdLow)/2, coalarr[0] + parseInt(coalarr[0])*breakevenRatio);

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

                           scope.startTrade('COALINDIA', 'NSE', 'SELL', coalarr[0],(coal_marumboThresholdHigh+coal_marumboThresholdLow)/2 , coalarr[0]-parseInt(coalarr[0])*breakevenRatio);
                     
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
            var coalLengthRatio = coaltickLength/coaltickhigh;


                var marumbo = false;
                if(coaltickType == "red" && coal_currentSwingDirection == 'downSwing' && coalLengthRatio <0.01){
                        if(coaltickclose == coalticklow && coalticklow < coal_prevCandleHeight[1]){
                            marumbo = true;
                            coal_marumboThresholdHigh = coaltickhigh;
                            coal_marumboThresholdLow = coalticklow;
                        }
                }

                if(coaltickType == "green" && coal_currentSwingDirection == "upSwing" && coalLengthRatio <0.01){
                        if(coaltickclose == coaltickhigh && coaltickhigh > coal_prevCandleHeight[0]){
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
                
                    
                    if(concor_currentSwingDirection == "upSwing"){
                        if(concorarr[0] >=  concor_marumboThresholdHigh){
                            console.log('buy long here at' + concor_marumboThresholdHigh);
                            scope.startTrade('CONCOR', 'NSE', 'BUY', concorarr[0],(concor_marumboThresholdHigh+concor_marumboThresholdLow)/2, concorarr[0] + parseInt(concorarr[0])*breakevenRatio);


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
                            scope.startTrade('CONCOR', 'NSE', 'SELL', concorarr[0],(concor_marumboThresholdHigh+concor_marumboThresholdLow)/2 , concorarr[0]-parseInt(concorarr[0])*breakevenRatio);
                     
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
            var concorLengthRatio = concortickLength/concortickhigh;



                var marumbo = false;
                if(concortickType == "red" && concor_currentSwingDirection == 'downSwing'){
                        if(concortickclose == concorticklow && concorticklow < concor_prevCandleHeight[1] && concorLengthRatio<0.01){
                            marumbo = true;
                            concor_marumboThresholdHigh = concortickhigh;
                            concor_marumboThresholdLow = concorticklow;
                        }
                }

                if(concortickType == "green" && concor_currentSwingDirection == "upSwing"){
                        if(concortickclose == concortickhigh && concortickhigh > concor_prevCandleHeight[0] && concorLengthRatio<0.01){
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
                   
                }

          

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
                    ;
                    
                    if(cummsind_currentSwingDirection == "upSwing"){
                        if(cummsindarr[0] >=  cummsind_marumboThresholdHigh){
                            console.log('buy long here at' + cummsind_marumboThresholdHigh);
                            scope.startTrade('CUMMINSIND', 'NSE', 'BUY', cummsindarr[0],(cummsind_marumboThresholdHigh+cummsind_marumboThresholdLow)/2, cummsindarr[0] + parseInt(cummsindarr[0])*breakevenRatio);

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
                            scope.startTrade('CUMMINSIND', 'NSE', 'SELL', cummsindarr[0],(cummsind_marumboThresholdHigh+cummsind_marumboThresholdLow)/2 , cummsindarr[0]-parseInt(cummsindarr[0])*breakevenRatio);
                     
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
             var cummsindLengthRatio = cummsindtickLength/cummsindtickhigh;


                var marumbo = false;
                if(cummsindtickType == "red" && cummsind_currentSwingDirection == 'downSwing'){
                        if(cummsindtickclose == cummsindticklow && cummsindticklow < cummsind_prevCandleHeight[1] && cummsindLengthRatio<0.01){
                            marumbo = true;
                            cummsind_marumboThresholdHigh = cummsindtickhigh;
                            cummsind_marumboThresholdLow = cummsindticklow;
                        }
                }

                if(cummsindtickType == "green" && cummsind_currentSwingDirection == "upSwing" && cummsindLengthRatio<0.01){
                        if(cummsindtickclose == cummsindtickhigh && cummsindtickhigh > cummsind_prevCandleHeight[0]){
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


        function getsunpharmaOHLC(d) {

            sunpharmatickopen = sunpharmaarr[0];
            sunpharmatickhigh = _.maxBy(sunpharmaarr);
            sunpharmaticklow = _.minBy(sunpharmaarr);
            sunpharmatickclose = sunpharmaarr[sunpharmaarr.length - 1];

            if (sunpharmatickopen < sunpharmatickclose) {
                sunpharmatickType = "green";
            } else if (sunpharmatickopen > sunpharmatickclose) {
                sunpharmatickType = "red";
            } else if (sunpharmatickopen = sunpharmatickclose) {
                sunpharmatickType = "doji";
            }

            sunpharmatickLength = Math.abs(sunpharmatickhigh - sunpharmaticklow);


                var marumbo = false;
                if(sunpharmatickType == "red" && sunpharma_currentSwingDirection == 'downSwing'){
                        if(sunpharmatickopen == sunpharmatickhigh && sunpharmatickclose == sunpharmaticklow && sunpharmaticklow < sunpharma_prevCandleHeight[1]){
                            marumbo = true;
                            sunpharma_marumboThresholdHigh = sunpharmatickhigh;
                            sunpharma_marumboThresholdLow = sunpharmaticklow;
                        }
                }

                if(sunpharmatickType == "green" && sunpharma_currentSwingDirection == "upSwing"){
                        if(sunpharmatickopen == sunpharmaticklow && sunpharmatickclose == sunpharmatickhigh && sunpharmatickhigh > sunpharma_prevCandleHeight[0]){
                            marumbo = true;
                            sunpharma_marumboThresholdHigh = sunpharmatickhigh;
                            sunpharma_marumboThresholdLow = sunpharmaticklow;
                        }
                }

                if(sunpharmatickType == "doji"){
                         marumbo = false;
                         sunpharma_marumboThresholdHigh = 0;
                         sunpharma_marumboThresholdLow = 0;
                }

              

            sunpharmatickarray = {
                "open": sunpharmatickopen,
                "low": sunpharmaticklow,
                "high": sunpharmatickhigh,
                "close": sunpharmatickclose,
                "tickType": sunpharmatickType,
                'tickLength': sunpharmatickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatasunpharma(sunpharmatickarray);
            first = 0;
            sunpharmaarr = [];
        };


         function get5minDatasunpharmaTimestamp(d, scope) {

               if(sunpharma_prevCandleMarumbo == true && sunpharmaarr.length == 1){
                    ;
                    
                    if(sunpharma_currentSwingDirection == "upSwing"){
                        if(sunpharmaarr[0] >=  sunpharma_marumboThresholdHigh){
                            console.log('buy long here at' + sunpharma_marumboThresholdHigh);
                            scope.startTrade('SUNPHARMA', 'NSE', 'BUY', sunpharmaarr[0],(sunpharma_marumboThresholdHigh+sunpharma_marumboThresholdLow)/2, sunpharmaarr[0] + parseInt(sunpharmaarr[0])*breakevenRatio);
                        }

                        if(sunpharmaarr[0] <= sunpharma_marumboThresholdHigh){

                        }
                         sunpharma_prevCandleMarumbo = false;
                         sunpharma_marumboThresholdHigh = 0;
                         sunpharma_marumboThresholdLow = 0;
                    }


                    if(sunpharma_currentSwingDirection == "downSwing"){
                        if(sunpharmaarr[0] > sunpharma_marumboThresholdLow){
                            console.log('sell short here at' + sunpharma_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', sunpharmaTradePrice, stop, target);

                            scope.startTrade('SUNPHARMA', 'NSE', 'SELL', sunpharmaarr[0],(sunpharma_marumboThresholdHigh+sunpharma_marumboThresholdLow)/2 , sunpharmaarr[0]-parseInt(sunpharmaarr[0])*breakevenRatio);
                     
                        }

                        if(sunpharmaarr[0] <= sunpharma_marumboThresholdLow){
                    
                        }

                            sunpharma_prevCandleMarumbo = false;
                            sunpharma_marumboThresholdHigh = 0;
                            sunpharma_marumboThresholdLow = 0;
                    }
                       
                }

            sunpharmaarr.push(d);
        }


        //dabur
        function get5minDatadaburTimestamp(d, scope) {

               if(dabur_prevCandleMarumbo == true && daburarr.length == 1){
                    ;
                    
                    if(dabur_currentSwingDirection == "upSwing"){
                        if(daburarr[0] >=  dabur_marumboThresholdHigh){
                            console.log('buy long here at' + dabur_marumboThresholdHigh);
                            scope.startTrade('DABUR', 'NSE', 'BUY', daburarr[0],(dabur_marumboThresholdHigh+dabur_marumboThresholdLow)/2, daburarr[0] + parseInt(daburarr[0])*breakevenRatio);

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
                             scope.startTrade('DABUR', 'NSE', 'SELL', daburarr[0],(dabur_marumboThresholdHigh+dabur_marumboThresholdLow)/2 , daburarr[0]-parseInt(daburarr[0])*breakevenRatio);
                     
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
            var  daburLengthRatio =    daburtickLength/daburtickhigh;



                var marumbo = false;
                if(daburtickType == "red" && dabur_currentSwingDirection == 'downSwing' ){
                        if( daburtickclose == daburticklow && daburticklow < dabur_prevCandleHeight[1] && daburLengthRatio<0.01){
                            marumbo = true;
                            dabur_marumboThresholdHigh = daburtickhigh;
                            dabur_marumboThresholdLow = daburticklow;
                        }
                }

                if(daburtickType == "green" && dabur_currentSwingDirection == "upSwing"){
                        if( daburtickclose == daburtickhigh && daburtickhigh > dabur_prevCandleHeight[0] && daburLengthRatio<0.01){
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
                    ;
                    
                    if(dhfl_currentSwingDirection == "upSwing"){
                        if(dhflarr[0] >=  dhfl_marumboThresholdHigh){
                            console.log('buy long here at' + dhfl_marumboThresholdHigh);
                            scope.startTrade('DHFL', 'NSE', 'BUY', dhflarr[0],(dhfl_marumboThresholdHigh+dhfl_marumboThresholdLow)/2, dhflarr[0] + parseInt(dhflarr[0])*breakevenRatio);

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

                            scope.startTrade('DHFL', 'NSE', 'SELL', dhflarr[0],(dhfl_marumboThresholdHigh+dhfl_marumboThresholdLow)/2 , dhflarr[0]-parseInt(dhflarr[0])*breakevenRatio);
                   
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
            var  dhflLengthRatio =   dhfltickLength/dhfltickhigh;


                var marumbo = false;
                if(dhfltickType == "red" && dhfl_currentSwingDirection == 'downSwing'){
                        if(dhfltickclose == dhflticklow && dhflticklow < dhfl_prevCandleHeight[1] && dhflLengthRatio<0.01){
                            marumbo = true;
                            dhfl_marumboThresholdHigh = dhfltickhigh;
                            dhfl_marumboThresholdLow = dhflticklow;
                        }
                }

                if(dhfltickType == "green" && dhfl_currentSwingDirection == "upSwing"){
                        if( dhfltickclose == dhfltickhigh && dhfltickhigh > dhfl_prevCandleHeight[0]  && dhflLengthRatio<0.01){
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


        function getkotakbankOHLC(d) {

            kotakbanktickopen = kotakbankarr[0];
            kotakbanktickhigh = _.maxBy(kotakbankarr);
            kotakbankticklow = _.minBy(kotakbankarr);
            kotakbanktickclose = kotakbankarr[kotakbankarr.length - 1];

            if (kotakbanktickopen < kotakbanktickclose) {
                kotakbanktickType = "green";
            } else if (kotakbanktickopen > kotakbanktickclose) {
                kotakbanktickType = "red";
            } else if (kotakbanktickopen = kotakbanktickclose) {
                kotakbanktickType = "doji";
            }

            kotakbanktickLength = Math.abs(kotakbanktickhigh - kotakbankticklow);


                var marumbo = false;
                if(kotakbanktickType == "red" && kotakbank_currentSwingDirection == 'downSwing'){
                        if(kotakbanktickopen == kotakbanktickhigh && kotakbanktickclose == kotakbankticklow && kotakbankticklow < kotakbank_prevCandleHeight[1]){
                            marumbo = true;
                            kotakbank_marumboThresholdHigh = kotakbanktickhigh;
                            kotakbank_marumboThresholdLow = kotakbankticklow;
                        }
                }

                if(kotakbanktickType == "green" && kotakbank_currentSwingDirection == "upSwing"){
                        if(kotakbanktickopen == kotakbankticklow && kotakbanktickclose == kotakbanktickhigh && kotakbanktickhigh > kotakbank_prevCandleHeight[0]){
                            marumbo = true;
                            kotakbank_marumboThresholdHigh = kotakbanktickhigh;
                            kotakbank_marumboThresholdLow = kotakbankticklow;
                        }
                }

                if(kotakbanktickType == "doji"){
                         marumbo = false;
                         kotakbank_marumboThresholdHigh = 0;
                         kotakbank_marumboThresholdLow = 0;
                }

              

            kotakbanktickarray = {
                "open": kotakbanktickopen,
                "low": kotakbankticklow,
                "high": kotakbanktickhigh,
                "close": kotakbanktickclose,
                "tickType": kotakbanktickType,
                'tickLength': kotakbanktickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatakotakbank(kotakbanktickarray);
            first = 0;
            kotakbankarr = [];
        };


         function get5minDatakotakbankTimestamp(d, scope) {

               if(kotakbank_prevCandleMarumbo == true && kotakbankarr.length == 1){
                    ;
                    
                    if(kotakbank_currentSwingDirection == "upSwing"){
                        if(kotakbankarr[0] >=  kotakbank_marumboThresholdHigh){
                            console.log('buy long here at' + kotakbank_marumboThresholdHigh);
                            scope.startTrade('KOTAKBANK', 'NSE', 'BUY', kotakbankarr[0],(kotakbank_marumboThresholdHigh+kotakbank_marumboThresholdLow)/2, kotakbankarr[0] + parseInt(kotakbankarr[0])*breakevenRatio);
                        }

                        if(kotakbankarr[0] <= kotakbank_marumboThresholdHigh){

                        }
                         kotakbank_prevCandleMarumbo = false;
                         kotakbank_marumboThresholdHigh = 0;
                         kotakbank_marumboThresholdLow = 0;
                    }


                    if(kotakbank_currentSwingDirection == "downSwing"){
                        if(kotakbankarr[0] > kotakbank_marumboThresholdLow){
                            console.log('sell short here at' + kotakbank_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', kotakbankTradePrice, stop, target);

                            scope.startTrade('KOTAKBANK', 'NSE', 'SELL', kotakbankarr[0],(kotakbank_marumboThresholdHigh+kotakbank_marumboThresholdLow)/2 , kotakbankarr[0]-parseInt(kotakbankarr[0])*breakevenRatio);
                     
                        }

                        if(kotakbankarr[0] <= kotakbank_marumboThresholdLow){
                    
                        }

                            kotakbank_prevCandleMarumbo = false;
                            kotakbank_marumboThresholdHigh = 0;
                            kotakbank_marumboThresholdLow = 0;
                    }
                       
                }

            kotakbankarr.push(d);
        }


        function getheromotocoOHLC(d) {

            heromotocotickopen = heromotocoarr[0];
            heromotocotickhigh = _.maxBy(heromotocoarr);
            heromotocoticklow = _.minBy(heromotocoarr);
            heromotocotickclose = heromotocoarr[heromotocoarr.length - 1];

            if (heromotocotickopen < heromotocotickclose) {
                heromotocotickType = "green";
            } else if (heromotocotickopen > heromotocotickclose) {
                heromotocotickType = "red";
            } else if (heromotocotickopen = heromotocotickclose) {
                heromotocotickType = "doji";
            }

            heromotocotickLength = Math.abs(heromotocotickhigh - heromotocoticklow);


                var marumbo = false;
                if(heromotocotickType == "red" && heromotoco_currentSwingDirection == 'downSwing'){
                        if(heromotocotickopen == heromotocotickhigh && heromotocotickclose == heromotocoticklow && heromotocoticklow < heromotoco_prevCandleHeight[1]){
                            marumbo = true;
                            heromotoco_marumboThresholdHigh = heromotocotickhigh;
                            heromotoco_marumboThresholdLow = heromotocoticklow;
                        }
                }

                if(heromotocotickType == "green" && heromotoco_currentSwingDirection == "upSwing"){
                        if(heromotocotickopen == heromotocoticklow && heromotocotickclose == heromotocotickhigh && heromotocotickhigh > heromotoco_prevCandleHeight[0]){
                            marumbo = true;
                            heromotoco_marumboThresholdHigh = heromotocotickhigh;
                            heromotoco_marumboThresholdLow = heromotocoticklow;
                        }
                }

                if(heromotocotickType == "doji"){
                         marumbo = false;
                         heromotoco_marumboThresholdHigh = 0;
                         heromotoco_marumboThresholdLow = 0;
                }

              

            heromotocotickarray = {
                "open": heromotocotickopen,
                "low": heromotocoticklow,
                "high": heromotocotickhigh,
                "close": heromotocotickclose,
                "tickType": heromotocotickType,
                'tickLength': heromotocotickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataheromotoco(heromotocotickarray);
            first = 0;
            heromotocoarr = [];
        };


         function get5minDataheromotocoTimestamp(d, scope) {

               if(heromotoco_prevCandleMarumbo == true && heromotocoarr.length == 1){
                    ;
                    
                    if(heromotoco_currentSwingDirection == "upSwing"){
                        if(heromotocoarr[0] >=  heromotoco_marumboThresholdHigh){
                            console.log('buy long here at' + heromotoco_marumboThresholdHigh);
                            scope.startTrade('HEROMOTOCO', 'NSE', 'BUY', heromotocoarr[0],(heromotoco_marumboThresholdHigh+heromotoco_marumboThresholdLow)/2, heromotocoarr[0] + parseInt(heromotocoarr[0])*breakevenRatio);
                        }

                        if(heromotocoarr[0] <= heromotoco_marumboThresholdHigh){

                        }
                         heromotoco_prevCandleMarumbo = false;
                         heromotoco_marumboThresholdHigh = 0;
                         heromotoco_marumboThresholdLow = 0;
                    }


                    if(heromotoco_currentSwingDirection == "downSwing"){
                        if(heromotocoarr[0] > heromotoco_marumboThresholdLow){
                            console.log('sell short here at' + heromotoco_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', heromotocoTradePrice, stop, target);

                            scope.startTrade('HEROMOTOCO', 'NSE', 'SELL', heromotocoarr[0],(heromotoco_marumboThresholdHigh+heromotoco_marumboThresholdLow)/2 , heromotocoarr[0]-parseInt(heromotocoarr[0])*breakevenRatio);
                     
                        }

                        if(heromotocoarr[0] <= heromotoco_marumboThresholdLow){
                    
                        }

                            heromotoco_prevCandleMarumbo = false;
                            heromotoco_marumboThresholdHigh = 0;
                            heromotoco_marumboThresholdLow = 0;
                    }
                       
                }

            heromotocoarr.push(d);
        }


        //emami
        function get5minDataemamiTimestamp(d, scope) {

               if(emami_prevCandleMarumbo == true && emamiarr.length == 1){
                    ;
                    
                    if(emami_currentSwingDirection == "upSwing"){
                        if(emamiarr[0] >=  emami_marumboThresholdHigh){
                            console.log('buy long here at' + emami_marumboThresholdHigh);
                            scope.startTrade('EMAMILTD', 'NSE', 'BUY', emamiarr[0],(emami_marumboThresholdHigh+emami_marumboThresholdLow)/2, emamiarr[0] + parseInt(emamiarr[0])*breakevenRatio);

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
                            scope.startTrade('EMAMILTD', 'NSE', 'SELL', emamiarr[0],(emami_marumboThresholdHigh+emami_marumboThresholdLow)/2 , emamiarr[0]-parseInt(emamiarr[0])*breakevenRatio);
                     
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
             var  emamiLengthRatio =   emamitickLength/emamitickhigh;



                var marumbo = false;
                if(emamitickType == "red" && emami_currentSwingDirection == 'downSwing' && emamiLengthRatio<0.01){
                        if(emamitickclose == emamiticklow && emamiticklow < emami_prevCandleHeight[1]){
                            marumbo = true;
                            emami_marumboThresholdHigh = emamitickhigh;
                            emami_marumboThresholdLow = emamiticklow;
                        }
                }

                if(emamitickType == "green" && emami_currentSwingDirection == "upSwing" && emamiLengthRatio<0.01){
                        if( emamitickclose == emamitickhigh && emamitickhigh > emami_prevCandleHeight[0]){
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
                    ;
                    
                    if(gail_currentSwingDirection == "upSwing"){
                        if(gailarr[0] >=  gail_marumboThresholdHigh){
                            console.log('buy long here at' + gail_marumboThresholdHigh);
                             scope.startTrade('GAIL', 'NSE', 'BUY', gailarr[0],(gail_marumboThresholdHigh+gail_marumboThresholdLow)/2, gailarr[0] + parseInt(gailarr[0])*breakevenRatio);

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

                            scope.startTrade('GAIL', 'NSE', 'SELL', gailarr[0],(gail_marumboThresholdHigh+gail_marumboThresholdLow)/2 , gailarr[0]-parseInt(gailarr[0])*breakevenRatio);
                     
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
            var  gailLengthRatio =   gailtickLength/gailtickhigh;


                var marumbo = false;
                if(gailtickType == "red" && gail_currentSwingDirection == 'downSwing' && gailLengthRatio<0.01){
                        if(gailtickclose == gailticklow && gailticklow < gail_prevCandleHeight[1]){
                            marumbo = true;
                            gail_marumboThresholdHigh = gailtickhigh;
                            gail_marumboThresholdLow = gailticklow;
                        }
                }

                if(gailtickType == "green" && gail_currentSwingDirection == "upSwing" && gailLengthRatio<0.01){
                        if(gailtickclose == gailtickhigh && gailtickhigh > gail_prevCandleHeight[0]){
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
                    ;
                    
                    if(havells_currentSwingDirection == "upSwing"){
                        if(havellsarr[0] >=  havells_marumboThresholdHigh){
                            console.log('buy long here at' + havells_marumboThresholdHigh);
                             scope.startTrade('HAVELLS', 'NSE', 'BUY', havellsarr[0],(havells_marumboThresholdHigh+havells_marumboThresholdLow)/2, havellsarr[0] + parseInt(havellsarr[0])*breakevenRatio);

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

                            scope.startTrade('HAVELLS', 'NSE', 'SELL', havellsarr[0],(havells_marumboThresholdHigh+havells_marumboThresholdLow)/2 , havellsarr[0]-parseInt(havellsarr[0])*breakevenRatio);
            
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
            var  havellsLengthRatio =  havellstickLength/havellstickhigh;


                var marumbo = false;
                if(havellstickType == "red" && havells_currentSwingDirection == 'downSwing' && havellsLengthRatio<0.01){
                        if(havellstickclose == havellsticklow && havellsticklow < havells_prevCandleHeight[1]){
                            marumbo = true;
                            havells_marumboThresholdHigh = havellstickhigh;
                            havells_marumboThresholdLow = havellsticklow;
                        }
                }

                if(havellstickType == "green" && havells_currentSwingDirection == "upSwing" && havellsLengthRatio<0.01){
                        if(havellstickclose == havellstickhigh && havellstickhigh > havells_prevCandleHeight[0]){
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
                    ;
                    
                    if(hdfc_currentSwingDirection == "upSwing"){
                        if(hdfcarr[0] >=  hdfc_marumboThresholdHigh){
                            console.log('buy long here at' + hdfc_marumboThresholdHigh);
                            scope.startTrade('HDFC', 'NSE', 'BUY', hdfcarr[0],(hdfc_marumboThresholdHigh+hdfc_marumboThresholdLow)/2, hdfcarr[0] + parseInt(hdfcarr[0])*breakevenRatio);

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

                           scope.startTrade('HDFC', 'NSE', 'SELL', hdfcarr[0],(hdfc_marumboThresholdHigh+hdfc_marumboThresholdLow)/2 , hdfcarr[0]-parseInt(hdfcarr[0])*breakevenRatio);
                     
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
            var  hdfcLengthRatio =  hdfctickLength/hdfctickhigh;


                var marumbo = false;
                if(hdfctickType == "red" && hdfc_currentSwingDirection == 'downSwing' && hdfcLengthRatio<0.01){
                        if(hdfctickclose == hdfcticklow && hdfcticklow < hdfc_prevCandleHeight[1]){
                            marumbo = true;
                            hdfc_marumboThresholdHigh = hdfctickhigh;
                            hdfc_marumboThresholdLow = hdfcticklow;
                        }
                }

                if(hdfctickType == "green" && hdfc_currentSwingDirection == "upSwing" && hdfcLengthRatio<0.01){
                        if(hdfctickclose == hdfctickhigh && hdfctickhigh > hdfc_prevCandleHeight[0]){
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
                             scope.startTrade('HINDZINC', 'NSE', 'BUY', hindzincarr[0],(hindzinc_marumboThresholdHigh+hindzinc_marumboThresholdLow)/2, hindzincarr[0] + parseInt(hindzincarr[0])*breakevenRatio);

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

                              scope.startTrade('HINDZINC', 'NSE', 'SELL', hindzincarr[0],(hindzinc_marumboThresholdHigh+hindzinc_marumboThresholdLow)/2 , hindzincarr[0]-parseInt(hindzincarr[0])*breakevenRatio);
                     
                        }

                        if(hindzincarr[0] <= hindzinc_marumboThresholdLow){
                    
                        }

                            hindzinc_prevCandleMarumbo = false;
                            hindzinc_marumboThresholdHigh = 0;
                            hindzinc_marumboThresholdLow = 0;
                    }
                       
                }

            hindzincarr.push(d);
            console.log('hindzincarr' + hindzincarr);
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
             var  hindzincLengthRatio =  hindzinctickLength/hindzinctickhigh;



                var marumbo = false;
                if(hindzinctickType == "red" && hindzinc_currentSwingDirection == 'downSwing' && hindzincLengthRatio <0.01){
                        if( hindzinctickclose == hindzincticklow && hindzincticklow < hindzinc_prevCandleHeight[1]){
                            marumbo = true;
                            hindzinc_marumboThresholdHigh = hindzinctickhigh;
                            hindzinc_marumboThresholdLow = hindzincticklow;
                        }
                }

                if(hindzinctickType == "green" && hindzinc_currentSwingDirection == "upSwing" && hindzincLengthRatio <0.01){
                        if(hindzinctickclose == hindzinctickhigh && hindzinctickhigh > hindzinc_prevCandleHeight[0]){
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
                    
                    if(infratel_currentSwingDirection == "upSwing"){
                        if(infratelarr[0] >=  infratel_marumboThresholdHigh){
                            console.log('buy long here at' + infratel_marumboThresholdHigh);
                            scope.startTrade('INFRATEL', 'NSE', 'BUY', infratelarr[0],(infratel_marumboThresholdHigh+infratel_marumboThresholdLow)/2, infratelarr[0] + parseInt(infratelarr[0])*breakevenRatio);

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
                             scope.startTrade('INFRATEL', 'NSE', 'SELL', infratelarr[0],(infratel_marumboThresholdHigh+infratel_marumboThresholdLow)/2 , infratelarr[0]-parseInt(infratelarr[0])*breakevenRatio);
                     
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
            var  infratelLengthRatio =  infrateltickLength/infrateltickhigh;


                var marumbo = false;
                if(infrateltickType == "red" && infratel_currentSwingDirection == 'downSwing' && infratelLengthRatio<0.01){
                        if(infrateltickclose == infratelticklow && infratelticklow < infratel_prevCandleHeight[1]){
                            marumbo = true;
                            infratel_marumboThresholdHigh = infrateltickhigh;
                            infratel_marumboThresholdLow = infratelticklow;
                        }
                }

                if(infrateltickType == "green" && infratel_currentSwingDirection == "upSwing" && infratelLengthRatio<0.01){
                        if(infrateltickclose == infrateltickhigh && infrateltickhigh > infratel_prevCandleHeight[0]){
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

         function getbajajfinservOHLC(d) {

            bajajfinservtickopen = bajajfinservarr[0];
            bajajfinservtickhigh = _.maxBy(bajajfinservarr);
            bajajfinservticklow = _.minBy(bajajfinservarr);
            bajajfinservtickclose = bajajfinservarr[bajajfinservarr.length - 1];

            if (bajajfinservtickopen < bajajfinservtickclose) {
                bajajfinservtickType = "green";
            } else if (bajajfinservtickopen > bajajfinservtickclose) {
                bajajfinservtickType = "red";
            } else if (bajajfinservtickopen = bajajfinservtickclose) {
                bajajfinservtickType = "doji";
            }

            bajajfinservtickLength = Math.abs(bajajfinservtickhigh - bajajfinservticklow);


                var marumbo = false;
                if(bajajfinservtickType == "red" && bajajfinserv_currentSwingDirection == 'downSwing'){
                        if(bajajfinservtickopen == bajajfinservtickhigh && bajajfinservtickclose == bajajfinservticklow && bajajfinservticklow < bajajfinserv_prevCandleHeight[1]){
                            marumbo = true;
                            bajajfinserv_marumboThresholdHigh = bajajfinservtickhigh;
                            bajajfinserv_marumboThresholdLow = bajajfinservticklow;
                        }
                }

                if(bajajfinservtickType == "green" && bajajfinserv_currentSwingDirection == "upSwing"){
                        if(bajajfinservtickopen == bajajfinservticklow && bajajfinservtickclose == bajajfinservtickhigh && bajajfinservtickhigh > bajajfinserv_prevCandleHeight[0]){
                            marumbo = true;
                            bajajfinserv_marumboThresholdHigh = bajajfinservtickhigh;
                            bajajfinserv_marumboThresholdLow = bajajfinservticklow;
                        }
                }

                if(bajajfinservtickType == "doji"){
                         marumbo = false;
                         bajajfinserv_marumboThresholdHigh = 0;
                         bajajfinserv_marumboThresholdLow = 0;
                }

              

            bajajfinservtickarray = {
                "open": bajajfinservtickopen,
                "low": bajajfinservticklow,
                "high": bajajfinservtickhigh,
                "close": bajajfinservtickclose,
                "tickType": bajajfinservtickType,
                'tickLength': bajajfinservtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatabajajfinserv(bajajfinservtickarray);
            first = 0;
            bajajfinservarr = [];
        };


         function get5minDatabajajfinservTimestamp(d, scope) {

               if(bajajfinserv_prevCandleMarumbo == true && bajajfinservarr.length == 1){
                    ;
                    
                    if(bajajfinserv_currentSwingDirection == "upSwing"){
                        if(bajajfinservarr[0] >=  bajajfinserv_marumboThresholdHigh){
                            console.log('buy long here at' + bajajfinserv_marumboThresholdHigh);
                            scope.startTrade('BAJAJFINSV', 'NSE', 'BUY', bajajfinservarr[0],(bajajfinserv_marumboThresholdHigh+bajajfinserv_marumboThresholdLow)/2, bajajfinservarr[0] + parseInt(bajajfinservarr[0])*breakevenRatio);
                        }

                        if(bajajfinservarr[0] <= bajajfinserv_marumboThresholdHigh){

                        }
                         bajajfinserv_prevCandleMarumbo = false;
                         bajajfinserv_marumboThresholdHigh = 0;
                         bajajfinserv_marumboThresholdLow = 0;
                    }


                    if(bajajfinserv_currentSwingDirection == "downSwing"){
                        if(bajajfinservarr[0] > bajajfinserv_marumboThresholdLow){
                            console.log('sell short here at' + bajajfinserv_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', bajajfinservTradePrice, stop, target);

                            scope.startTrade('BAJAJFINSV', 'NSE', 'SELL', bajajfinservarr[0],(bajajfinserv_marumboThresholdHigh+bajajfinserv_marumboThresholdLow)/2 , bajajfinservarr[0]-parseInt(bajajfinservarr[0])*breakevenRatio);
                     
                        }

                        if(bajajfinservarr[0] <= bajajfinserv_marumboThresholdLow){
                    
                        }

                            bajajfinserv_prevCandleMarumbo = false;
                            bajajfinserv_marumboThresholdHigh = 0;
                            bajajfinserv_marumboThresholdLow = 0;
                    }
                       
                }

            bajajfinservarr.push(d);
        }

        //reddy
        function get5minDatareddyTimestamp(d, scope) {

               if(reddy_prevCandleMarumbo == true && reddyarr.length == 1){
                    ;
                    
                    if(reddy_currentSwingDirection == "upSwing"){
                        if(reddyarr[0] >=  reddy_marumboThresholdHigh){
                            console.log('buy long here at' + reddy_marumboThresholdHigh);
                             scope.startTrade('DRREDDY', 'NSE', 'BUY', reddyarr[0],(reddy_marumboThresholdHigh+reddy_marumboThresholdLow)/2, reddyarr[0] + parseInt(reddyarr[0])*breakevenRatio);

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

                            scope.startTrade('DRREDDY', 'NSE', 'SELL', reddyarr[0],(reddy_marumboThresholdHigh+reddy_marumboThresholdLow)/2 , reddyarr[0]-parseInt(reddyarr[0])*breakevenRatio);
               
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
            var reddyLengthRatio =  reddytickLength/reddytickhigh;



                var marumbo = false;
                if(reddytickType == "red" && reddy_currentSwingDirection == 'downSwing' && reddyLengthRatio<0.01){
                        if(reddytickclose == reddyticklow && reddyticklow < reddy_prevCandleHeight[1]){
                            marumbo = true;
                            reddy_marumboThresholdHigh = reddytickhigh;
                            reddy_marumboThresholdLow = reddyticklow;
                        }
                }

                if(reddytickType == "green" && reddy_currentSwingDirection == "upSwing"  && reddyLengthRatio<0.01){
                        if(reddytickclose == reddytickhigh && reddytickhigh > reddy_prevCandleHeight[0]){
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
                    ;
                    
                    if(reliance_currentSwingDirection == "upSwing"){
                        if(reliancearr[0] >=  reliance_marumboThresholdHigh){
                            console.log('buy long here at' + reliance_marumboThresholdHigh);
                            scope.startTrade('RELIANCE', 'NSE', 'BUY', reliancearr[0],(reliance_marumboThresholdHigh+reliance_marumboThresholdLow)/2, reliancearr[0] + parseInt(reliancearr[0])*breakevenRatio);

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
                            scope.startTrade('RELIANCE', 'NSE', 'SELL', reliancearr[0],(reliance_marumboThresholdHigh+reliance_marumboThresholdLow)/2 , reliancearr[0]-parseInt(reliancearr[0])*breakevenRatio);
                     
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
             var relianceLengthRatio =  reliancetickLength/reliancetickhigh;


                var marumbo = false;
                if(reliancetickType == "red" && reliance_currentSwingDirection == 'downSwing' && relianceLengthRatio<0.01){
                        if(reliancetickclose == relianceticklow && relianceticklow < reliance_prevCandleHeight[1]){
                            marumbo = true;
                            reliance_marumboThresholdHigh = reliancetickhigh;
                            reliance_marumboThresholdLow = relianceticklow;
                        }
                }

                if(reliancetickType == "green" && reliance_currentSwingDirection == "upSwing" && relianceLengthRatio<0.01){
                        if(reliancetickclose == reliancetickhigh && reliancetickhigh > reliance_prevCandleHeight[0]){
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
                    ;
                    
                    if(sbin_currentSwingDirection == "upSwing"){
                        if(sbinarr[0] >=  sbin_marumboThresholdHigh){
                            console.log('buy long here at' + sbin_marumboThresholdHigh);
                            scope.startTrade('SBIN', 'NSE', 'BUY', sbinarr[0],(sbin_marumboThresholdHigh+sbin_marumboThresholdLow)/2, sbinarr[0] + parseInt(sbinarr[0])*breakevenRatio);

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
                            scope.startTrade('SBIN', 'NSE', 'SELL', sbinarr[0],(sbin_marumboThresholdHigh+sbin_marumboThresholdLow)/2 , sbinarr[0]-parseInt(sbinarr[0])*breakevenRatio);
      
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
             var sbinLengthRatio =  sbintickLength/sbintickhigh;


                var marumbo = false;
                if(sbintickType == "red" && sbin_currentSwingDirection == 'downSwing' && sbinLengthRatio<0.01){
                        if(sbintickclose == sbinticklow && sbinticklow < sbin_prevCandleHeight[1]){
                            marumbo = true;
                            sbin_marumboThresholdHigh = sbintickhigh;
                            sbin_marumboThresholdLow = sbinticklow;
                        }
                }

                if(sbintickType == "green" && sbin_currentSwingDirection == "upSwing" && sbinLengthRatio<0.01){
                        if(sbintickclose == sbintickhigh && sbintickhigh > sbin_prevCandleHeight[0]){
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
                    ;
                    
                    if(seimens_currentSwingDirection == "upSwing"){
                        if(seimensarr[0] >=  seimens_marumboThresholdHigh){
                            console.log('buy long here at' + seimens_marumboThresholdHigh);
                             scope.startTrade('SIEMENS', 'NSE', 'BUY', seimensarr[0],(seimens_marumboThresholdHigh+seimens_marumboThresholdLow)/2, seimensarr[0] + parseInt(seimensarr[0])*breakevenRatio);


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
                            scope.startTrade('SIEMENS', 'NSE', 'SELL', seimensarr[0],(seimens_marumboThresholdHigh+seimens_marumboThresholdLow)/2 , seimensarr[0]-parseInt(seimensarr[0])*breakevenRatio);
                     
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
             var seimensLengthRatio =  seimenstickLength/seimenstickhigh;


                var marumbo = false;
                if(seimenstickType == "red" && seimens_currentSwingDirection == 'downSwing' && seimensLengthRatio<0.01){
                        if(seimenstickclose == seimensticklow && seimensticklow < seimens_prevCandleHeight[1]){
                            marumbo = true;
                            seimens_marumboThresholdHigh = seimenstickhigh;
                            seimens_marumboThresholdLow = seimensticklow;
                        }
                }

                if(seimenstickType == "green" && seimens_currentSwingDirection == "upSwing" && seimensLengthRatio<0.01){
                        if(seimenstickclose == seimenstickhigh && seimenstickhigh > seimens_prevCandleHeight[0]){
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
                    ;
                    
                    if(tcs_currentSwingDirection == "upSwing"){
                        if(tcsarr[0] >=  tcs_marumboThresholdHigh){
                            console.log('buy long here at' + tcs_marumboThresholdHigh);
                             scope.startTrade('TCS', 'NSE', 'BUY', tcsarr[0],(tcs_marumboThresholdHigh+tcs_marumboThresholdLow)/2, tcsarr[0] + parseInt(tcsarr[0])*breakevenRatio);


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

                            scope.startTrade('TCS', 'NSE', 'SELL', tcsarr[0],(tcs_marumboThresholdHigh+tcs_marumboThresholdLow)/2 , tcsarr[0]-parseInt(tcsarr[0])*breakevenRatio);
                     
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
             var tcsLengthRatio =  tcstickLength/tcstickhigh;


                var marumbo = false;
                if(tcstickType == "red" && tcs_currentSwingDirection == 'downSwing' && tcsLengthRatio<0.01){
                        if(tcstickclose == tcsticklow && tcsticklow < tcs_prevCandleHeight[1]){
                            marumbo = true;
                            tcs_marumboThresholdHigh = tcstickhigh;
                            tcs_marumboThresholdLow = tcsticklow;
                        }
                }

                if(tcstickType == "green" && tcs_currentSwingDirection == "upSwing" && tcsLengthRatio<0.01){
                        if(tcstickclose == tcstickhigh && tcstickhigh > tcs_prevCandleHeight[0]){
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
            d.props.addTickDatatcs(tcstickarray);
            first = 0;
            tcsarr = [];
        };

        //unilever
        function get5minDataunileverTimestamp(d, scope) {

               if(unilever_prevCandleMarumbo == true && unileverarr.length == 1){
                    ;
                    
                    if(unilever_currentSwingDirection == "upSwing"){
                        if(unileverarr[0] >=  unilever_marumboThresholdHigh){
                            console.log('buy long here at' + unilever_marumboThresholdHigh);
                             scope.startTrade('HINDUNILVR', 'NSE', 'BUY', unileverarr[0],(unilever_marumboThresholdHigh+unilever_marumboThresholdLow)/2, unileverarr[0] + parseInt(unileverarr[0])*breakevenRatio);


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
                            scope.startTrade('HINDUNILVR', 'NSE', 'SELL', unileverarr[0],(unilever_marumboThresholdHigh+unilever_marumboThresholdLow)/2 , unileverarr[0]-parseInt(unileverarr[0])*breakevenRatio);
            
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
               var unileverLengthRatio =  unilevertickLength/unilevertickhigh;


                var marumbo = false;
                if(unilevertickType == "red" && unilever_currentSwingDirection == 'downSwing' && unileverLengthRatio <0.01){
                        if(unilevertickclose == unileverticklow && unileverticklow < unilever_prevCandleHeight[1]){
                            marumbo = true;
                            unilever_marumboThresholdHigh = unilevertickhigh;
                            unilever_marumboThresholdLow = unileverticklow;
                        }
                }

                if(unilevertickType == "green" && unilever_currentSwingDirection == "upSwing"  && unileverLengthRatio <0.01){
                        if(unilevertickclose == unilevertickhigh && unilevertickhigh > unilever_prevCandleHeight[0]){
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


//ntpc

   
        function getntpcOHLC(d) {

            ntpctickopen = ntpcarr[0];
            ntpctickhigh = _.maxBy(ntpcarr);
            ntpcticklow = _.minBy(ntpcarr);
            ntpctickclose = ntpcarr[ntpcarr.length - 1];

            if (ntpctickopen < ntpctickclose) {
                ntpctickType = "green";
            } else if (ntpctickopen > ntpctickclose) {
                ntpctickType = "red";
            } else if (ntpctickopen = ntpctickclose) {
                ntpctickType = "doji";
            }

            ntpctickLength = Math.abs(ntpctickhigh - ntpcticklow);


                var marumbo = false;
                if(ntpctickType == "red" && ntpc_currentSwingDirection == 'downSwing'){
                        if(ntpctickopen == ntpctickhigh && ntpctickclose == ntpcticklow && ntpcticklow < ntpc_prevCandleHeight[1]){
                            marumbo = true;
                            ntpc_marumboThresholdHigh = ntpctickhigh;
                            ntpc_marumboThresholdLow = ntpcticklow;
                        }
                }

                if(ntpctickType == "green" && ntpc_currentSwingDirection == "upSwing"){
                        if(ntpctickopen == ntpcticklow && ntpctickclose == ntpctickhigh && ntpctickhigh > ntpc_prevCandleHeight[0]){
                            marumbo = true;
                            ntpc_marumboThresholdHigh = ntpctickhigh;
                            ntpc_marumboThresholdLow = ntpcticklow;
                        }
                }

                if(ntpctickType == "doji"){
                         marumbo = false;
                         ntpc_marumboThresholdHigh = 0;
                         ntpc_marumboThresholdLow = 0;
                }

              

            ntpctickarray = {
                "open": ntpctickopen,
                "low": ntpcticklow,
                "high": ntpctickhigh,
                "close": ntpctickclose,
                "tickType": ntpctickType,
                'tickLength': ntpctickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatantpc(ntpctickarray);
            first = 0;
            ntpcarr = [];
        };


         function get5minDatantpcTimestamp(d, scope) {

               if(ntpc_prevCandleMarumbo == true && ntpcarr.length == 1){
                    ;
                    
                    if(ntpc_currentSwingDirection == "upSwing"){
                        if(ntpcarr[0] >=  ntpc_marumboThresholdHigh){
                            console.log('buy long here at' + ntpc_marumboThresholdHigh);
                            scope.startTrade('NTPC', 'NSE', 'BUY', ntpcarr[0],(ntpc_marumboThresholdHigh+ntpc_marumboThresholdLow)/2, ntpcarr[0] + parseInt(ntpcarr[0])*breakevenRatio);
                        }

                        if(ntpcarr[0] <= ntpc_marumboThresholdHigh){

                        }
                         ntpc_prevCandleMarumbo = false;
                         ntpc_marumboThresholdHigh = 0;
                         ntpc_marumboThresholdLow = 0;
                    }


                    if(ntpc_currentSwingDirection == "downSwing"){
                        if(ntpcarr[0] > ntpc_marumboThresholdLow){
                            console.log('sell short here at' + ntpc_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', ntpcTradePrice, stop, target);

                            scope.startTrade('NTPC', 'NSE', 'SELL', ntpcarr[0],(ntpc_marumboThresholdHigh+ntpc_marumboThresholdLow)/2 , ntpcarr[0]-parseInt(ntpcarr[0])*breakevenRatio);
                     
                        }

                        if(ntpcarr[0] <= ntpc_marumboThresholdLow){
                    
                        }

                            ntpc_prevCandleMarumbo = false;
                            ntpc_marumboThresholdHigh = 0;
                            ntpc_marumboThresholdLow = 0;
                    }
                       
                }

            ntpcarr.push(d);
        }


//powergrid


        function getpowergridOHLC(d) {

            powergridtickopen = powergridarr[0];
            powergridtickhigh = _.maxBy(powergridarr);
            powergridticklow = _.minBy(powergridarr);
            powergridtickclose = powergridarr[powergridarr.length - 1];

            if (powergridtickopen < powergridtickclose) {
                powergridtickType = "green";
            } else if (powergridtickopen > powergridtickclose) {
                powergridtickType = "red";
            } else if (powergridtickopen = powergridtickclose) {
                powergridtickType = "doji";
            }

            powergridtickLength = Math.abs(powergridtickhigh - powergridticklow);


                var marumbo = false;
                if(powergridtickType == "red" && powergrid_currentSwingDirection == 'downSwing'){
                        if(powergridtickopen == powergridtickhigh && powergridtickclose == powergridticklow && powergridticklow < powergrid_prevCandleHeight[1]){
                            marumbo = true;
                            powergrid_marumboThresholdHigh = powergridtickhigh;
                            powergrid_marumboThresholdLow = powergridticklow;
                        }
                }

                if(powergridtickType == "green" && powergrid_currentSwingDirection == "upSwing"){
                        if(powergridtickopen == powergridticklow && powergridtickclose == powergridtickhigh && powergridtickhigh > powergrid_prevCandleHeight[0]){
                            marumbo = true;
                            powergrid_marumboThresholdHigh = powergridtickhigh;
                            powergrid_marumboThresholdLow = powergridticklow;
                        }
                }

                if(powergridtickType == "doji"){
                         marumbo = false;
                         powergrid_marumboThresholdHigh = 0;
                         powergrid_marumboThresholdLow = 0;
                }

              

            powergridtickarray = {
                "open": powergridtickopen,
                "low": powergridticklow,
                "high": powergridtickhigh,
                "close": powergridtickclose,
                "tickType": powergridtickType,
                'tickLength': powergridtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatapowergrid(powergridtickarray);
            first = 0;
            powergridarr = [];
        };


         function get5minDatapowergridTimestamp(d, scope) {

               if(powergrid_prevCandleMarumbo == true && powergridarr.length == 1){
                    ;
                    
                    if(powergrid_currentSwingDirection == "upSwing"){
                        if(powergridarr[0] >=  powergrid_marumboThresholdHigh){
                            console.log('buy long here at' + powergrid_marumboThresholdHigh);
                            scope.startTrade('POWERGRID', 'NSE', 'BUY', powergridarr[0],(powergrid_marumboThresholdHigh+powergrid_marumboThresholdLow)/2, powergridarr[0] + parseInt(powergridarr[0])*breakevenRatio);
                        }

                        if(powergridarr[0] <= powergrid_marumboThresholdHigh){

                        }
                         powergrid_prevCandleMarumbo = false;
                         powergrid_marumboThresholdHigh = 0;
                         powergrid_marumboThresholdLow = 0;
                    }


                    if(powergrid_currentSwingDirection == "downSwing"){
                        if(powergridarr[0] > powergrid_marumboThresholdLow){
                            console.log('sell short here at' + powergrid_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', powergridTradePrice, stop, target);

                            scope.startTrade('POWERGRID', 'NSE', 'SELL', powergridarr[0],(powergrid_marumboThresholdHigh+powergrid_marumboThresholdLow)/2 , powergridarr[0]-parseInt(powergridarr[0])*breakevenRatio);
                     
                        }

                        if(powergridarr[0] <= powergrid_marumboThresholdLow){
                    
                        }

                            powergrid_prevCandleMarumbo = false;
                            powergrid_marumboThresholdHigh = 0;
                            powergrid_marumboThresholdLow = 0;
                    }
                       
                }

            powergridarr.push(d);
        }

         function getadaniportsOHLC(d) {

            adaniportstickopen = adaniportsarr[0];
            adaniportstickhigh = _.maxBy(adaniportsarr);
            adaniportsticklow = _.minBy(adaniportsarr);
            adaniportstickclose = adaniportsarr[adaniportsarr.length - 1];

            if (adaniportstickopen < adaniportstickclose) {
                adaniportstickType = "green";
            } else if (adaniportstickopen > adaniportstickclose) {
                adaniportstickType = "red";
            } else if (adaniportstickopen = adaniportstickclose) {
                adaniportstickType = "doji";
            }

            adaniportstickLength = Math.abs(adaniportstickhigh - adaniportsticklow);


                var marumbo = false;
                if(adaniportstickType == "red" && adaniports_currentSwingDirection == 'downSwing'){
                        if(adaniportstickopen == adaniportstickhigh && adaniportstickclose == adaniportsticklow && adaniportsticklow < adaniports_prevCandleHeight[1]){
                            marumbo = true;
                            adaniports_marumboThresholdHigh = adaniportstickhigh;
                            adaniports_marumboThresholdLow = adaniportsticklow;
                        }
                }

                if(adaniportstickType == "green" && adaniports_currentSwingDirection == "upSwing"){
                        if(adaniportstickopen == adaniportsticklow && adaniportstickclose == adaniportstickhigh && adaniportstickhigh > adaniports_prevCandleHeight[0]){
                            marumbo = true;
                            adaniports_marumboThresholdHigh = adaniportstickhigh;
                            adaniports_marumboThresholdLow = adaniportsticklow;
                        }
                }

                if(adaniportstickType == "doji"){
                         marumbo = false;
                         adaniports_marumboThresholdHigh = 0;
                         adaniports_marumboThresholdLow = 0;
                }

              

            adaniportstickarray = {
                "open": adaniportstickopen,
                "low": adaniportsticklow,
                "high": adaniportstickhigh,
                "close": adaniportstickclose,
                "tickType": adaniportstickType,
                'tickLength': adaniportstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataadaniports(adaniportstickarray);
            first = 0;
            adaniportsarr = [];
        };


         function get5minDataadaniportsTimestamp(d, scope) {

               if(adaniports_prevCandleMarumbo == true && adaniportsarr.length == 1){
                    ;
                    
                    if(adaniports_currentSwingDirection == "upSwing"){
                        if(adaniportsarr[0] >=  adaniports_marumboThresholdHigh){
                            console.log('buy long here at' + adaniports_marumboThresholdHigh);
                            scope.startTrade('ADANIPORTS', 'NSE', 'BUY', adaniportsarr[0],(adaniports_marumboThresholdHigh+adaniports_marumboThresholdLow)/2, adaniportsarr[0] + parseInt(adaniportsarr[0])*breakevenRatio);
                        }

                        if(adaniportsarr[0] <= adaniports_marumboThresholdHigh){

                        }
                         adaniports_prevCandleMarumbo = false;
                         adaniports_marumboThresholdHigh = 0;
                         adaniports_marumboThresholdLow = 0;
                    }


                    if(adaniports_currentSwingDirection == "downSwing"){
                        if(adaniportsarr[0] > adaniports_marumboThresholdLow){
                            console.log('sell short here at' + adaniports_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', adaniportsTradePrice, stop, target);

                            scope.startTrade('ADANIPORTS', 'NSE', 'SELL', adaniportsarr[0],(adaniports_marumboThresholdHigh+adaniports_marumboThresholdLow)/2 , adaniportsarr[0]-parseInt(adaniportsarr[0])*breakevenRatio);
                     
                        }

                        if(adaniportsarr[0] <= adaniports_marumboThresholdLow){
                    
                        }

                            adaniports_prevCandleMarumbo = false;
                            adaniports_marumboThresholdHigh = 0;
                            adaniports_marumboThresholdLow = 0;
                    }
                       
                }

            adaniportsarr.push(d);
        }

        function getasianpaintsOHLC(d) {

            asianpaintstickopen = asianpaintsarr[0];
            asianpaintstickhigh = _.maxBy(asianpaintsarr);
            asianpaintsticklow = _.minBy(asianpaintsarr);
            asianpaintstickclose = asianpaintsarr[asianpaintsarr.length - 1];

            if (asianpaintstickopen < asianpaintstickclose) {
                asianpaintstickType = "green";
            } else if (asianpaintstickopen > asianpaintstickclose) {
                asianpaintstickType = "red";
            } else if (asianpaintstickopen = asianpaintstickclose) {
                asianpaintstickType = "doji";
            }

            asianpaintstickLength = Math.abs(asianpaintstickhigh - asianpaintsticklow);


                var marumbo = false;
                if(asianpaintstickType == "red" && asianpaints_currentSwingDirection == 'downSwing'){
                        if(asianpaintstickopen == asianpaintstickhigh && asianpaintstickclose == asianpaintsticklow && asianpaintsticklow < asianpaints_prevCandleHeight[1]){
                            marumbo = true;
                            asianpaints_marumboThresholdHigh = asianpaintstickhigh;
                            asianpaints_marumboThresholdLow = asianpaintsticklow;
                        }
                }

                if(asianpaintstickType == "green" && asianpaints_currentSwingDirection == "upSwing"){
                        if(asianpaintstickopen == asianpaintsticklow && asianpaintstickclose == asianpaintstickhigh && asianpaintstickhigh > asianpaints_prevCandleHeight[0]){
                            marumbo = true;
                            asianpaints_marumboThresholdHigh = asianpaintstickhigh;
                            asianpaints_marumboThresholdLow = asianpaintsticklow;
                        }
                }

                if(asianpaintstickType == "doji"){
                         marumbo = false;
                         asianpaints_marumboThresholdHigh = 0;
                         asianpaints_marumboThresholdLow = 0;
                }

              

            asianpaintstickarray = {
                "open": asianpaintstickopen,
                "low": asianpaintsticklow,
                "high": asianpaintstickhigh,
                "close": asianpaintstickclose,
                "tickType": asianpaintstickType,
                'tickLength': asianpaintstickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataasianpaints(asianpaintstickarray);
            first = 0;
            asianpaintsarr = [];
        };


         function get5minDataasianpaintsTimestamp(d, scope) {

               if(asianpaints_prevCandleMarumbo == true && asianpaintsarr.length == 1){
                    ;
                    
                    if(asianpaints_currentSwingDirection == "upSwing"){
                        if(asianpaintsarr[0] >=  asianpaints_marumboThresholdHigh){
                            console.log('buy long here at' + asianpaints_marumboThresholdHigh);
                            scope.startTrade('ASIANPAINT', 'NSE', 'BUY', asianpaintsarr[0],(asianpaints_marumboThresholdHigh+asianpaints_marumboThresholdLow)/2, asianpaintsarr[0] + parseInt(asianpaintsarr[0])*breakevenRatio);
                        }

                        if(asianpaintsarr[0] <= asianpaints_marumboThresholdHigh){

                        }
                         asianpaints_prevCandleMarumbo = false;
                         asianpaints_marumboThresholdHigh = 0;
                         asianpaints_marumboThresholdLow = 0;
                    }


                    if(asianpaints_currentSwingDirection == "downSwing"){
                        if(asianpaintsarr[0] > asianpaints_marumboThresholdLow){
                            console.log('sell short here at' + asianpaints_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', asianpaintsTradePrice, stop, target);

                            scope.startTrade('ASIANPAINT', 'NSE', 'SELL', asianpaintsarr[0],(asianpaints_marumboThresholdHigh+asianpaints_marumboThresholdLow)/2 , asianpaintsarr[0]-parseInt(asianpaintsarr[0])*breakevenRatio);
                     
                        }

                        if(asianpaintsarr[0] <= asianpaints_marumboThresholdLow){
                    
                        }

                            asianpaints_prevCandleMarumbo = false;
                            asianpaints_marumboThresholdHigh = 0;
                            asianpaints_marumboThresholdLow = 0;
                    }
                       
                }

            asianpaintsarr.push(d);
        }



        function getuplOHLC(d) {

            upltickopen = uplarr[0];
            upltickhigh = _.maxBy(uplarr);
            uplticklow = _.minBy(uplarr);
            upltickclose = uplarr[uplarr.length - 1];

            if (upltickopen < upltickclose) {
                upltickType = "green";
            } else if (upltickopen > upltickclose) {
                upltickType = "red";
            } else if (upltickopen = upltickclose) {
                upltickType = "doji";
            }

            upltickLength = Math.abs(upltickhigh - uplticklow);


                var marumbo = false;
                if(upltickType == "red" && upl_currentSwingDirection == 'downSwing'){
                        if(upltickopen == upltickhigh && upltickclose == uplticklow && uplticklow < upl_prevCandleHeight[1]){
                            marumbo = true;
                            upl_marumboThresholdHigh = upltickhigh;
                            upl_marumboThresholdLow = uplticklow;
                        }
                }

                if(upltickType == "green" && upl_currentSwingDirection == "upSwing"){
                        if(upltickopen == uplticklow && upltickclose == upltickhigh && upltickhigh > upl_prevCandleHeight[0]){
                            marumbo = true;
                            upl_marumboThresholdHigh = upltickhigh;
                            upl_marumboThresholdLow = uplticklow;
                        }
                }

                if(upltickType == "doji"){
                         marumbo = false;
                         upl_marumboThresholdHigh = 0;
                         upl_marumboThresholdLow = 0;
                }

              

            upltickarray = {
                "open": upltickopen,
                "low": uplticklow,
                "high": upltickhigh,
                "close": upltickclose,
                "tickType": upltickType,
                'tickLength': upltickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDataupl(upltickarray);
            first = 0;
            uplarr = [];
        };


         function get5minDatauplTimestamp(d, scope) {

               if(upl_prevCandleMarumbo == true && uplarr.length == 1){
                    ;
                    
                    if(upl_currentSwingDirection == "upSwing"){
                        if(uplarr[0] >=  upl_marumboThresholdHigh){
                            console.log('buy long here at' + upl_marumboThresholdHigh);
                            scope.startTrade('UPL', 'NSE', 'BUY', uplarr[0],(upl_marumboThresholdHigh+upl_marumboThresholdLow)/2, uplarr[0] + parseInt(uplarr[0])*breakevenRatio);
                        }

                        if(uplarr[0] <= upl_marumboThresholdHigh){

                        }
                         upl_prevCandleMarumbo = false;
                         upl_marumboThresholdHigh = 0;
                         upl_marumboThresholdLow = 0;
                    }


                    if(upl_currentSwingDirection == "downSwing"){
                        if(uplarr[0] > upl_marumboThresholdLow){
                            console.log('sell short here at' + upl_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', uplTradePrice, stop, target);

                            scope.startTrade('UPL', 'NSE', 'SELL', uplarr[0],(upl_marumboThresholdHigh+upl_marumboThresholdLow)/2 , uplarr[0]-parseInt(uplarr[0])*breakevenRatio);
                     
                        }

                        if(uplarr[0] <= upl_marumboThresholdLow){
                    
                        }

                            upl_prevCandleMarumbo = false;
                            upl_marumboThresholdHigh = 0;
                            upl_marumboThresholdLow = 0;
                    }
                       
                }

            uplarr.push(d);
        }

         function getgrasimOHLC(d) {

            grasimtickopen = grasimarr[0];
            grasimtickhigh = _.maxBy(grasimarr);
            grasimticklow = _.minBy(grasimarr);
            grasimtickclose = grasimarr[grasimarr.length - 1];

            if (grasimtickopen < grasimtickclose) {
                grasimtickType = "green";
            } else if (grasimtickopen > grasimtickclose) {
                grasimtickType = "red";
            } else if (grasimtickopen = grasimtickclose) {
                grasimtickType = "doji";
            }

            grasimtickLength = Math.abs(grasimtickhigh - grasimticklow);


                var marumbo = false;
                if(grasimtickType == "red" && grasim_currentSwingDirection == 'downSwing'){
                        if(grasimtickopen == grasimtickhigh && grasimtickclose == grasimticklow && grasimticklow < grasim_prevCandleHeight[1]){
                            marumbo = true;
                            grasim_marumboThresholdHigh = grasimtickhigh;
                            grasim_marumboThresholdLow = grasimticklow;
                        }
                }

                if(grasimtickType == "green" && grasim_currentSwingDirection == "upSwing"){
                        if(grasimtickopen == grasimticklow && grasimtickclose == grasimtickhigh && grasimtickhigh > grasim_prevCandleHeight[0]){
                            marumbo = true;
                            grasim_marumboThresholdHigh = grasimtickhigh;
                            grasim_marumboThresholdLow = grasimticklow;
                        }
                }

                if(grasimtickType == "doji"){
                         marumbo = false;
                         grasim_marumboThresholdHigh = 0;
                         grasim_marumboThresholdLow = 0;
                }

              

            grasimtickarray = {
                "open": grasimtickopen,
                "low": grasimticklow,
                "high": grasimtickhigh,
                "close": grasimtickclose,
                "tickType": grasimtickType,
                'tickLength': grasimtickLength,
                 'marumbo' : marumbo,
            };
            //
            d.props.addTickDatagrasim(grasimtickarray);
            first = 0;
            grasimarr = [];
        };


         function get5minDatagrasimTimestamp(d, scope) {

               if(grasim_prevCandleMarumbo == true && grasimarr.length == 1){
                    ;
                    
                    if(grasim_currentSwingDirection == "upSwing"){
                        if(grasimarr[0] >=  grasim_marumboThresholdHigh){
                            console.log('buy long here at' + grasim_marumboThresholdHigh);
                            scope.startTrade('GRASIM', 'NSE', 'BUY', grasimarr[0],(grasim_marumboThresholdHigh+grasim_marumboThresholdLow)/2, grasimarr[0] + parseInt(grasimarr[0])*breakevenRatio);
                        }

                        if(grasimarr[0] <= grasim_marumboThresholdHigh){

                        }
                         grasim_prevCandleMarumbo = false;
                         grasim_marumboThresholdHigh = 0;
                         grasim_marumboThresholdLow = 0;
                    }


                    if(grasim_currentSwingDirection == "downSwing"){
                        if(grasimarr[0] > grasim_marumboThresholdLow){
                            console.log('sell short here at' + grasim_marumboThresholdLow );
                            //scope.startTrade('CRUDEOILM18DECFUT', 'MCX', 'SELL', grasimTradePrice, stop, target);

                            scope.startTrade('GRASIM', 'NSE', 'SELL', grasimarr[0],(grasim_marumboThresholdHigh+grasim_marumboThresholdLow)/2 , grasimarr[0]-parseInt(grasimarr[0])*breakevenRatio);
                     
                        }

                        if(grasimarr[0] <= grasim_marumboThresholdLow){
                    
                        }

                            grasim_prevCandleMarumbo = false;
                            grasim_marumboThresholdHigh = 0;
                            grasim_marumboThresholdLow = 0;
                    }
                       
                }

            grasimarr.push(d);
        }





     





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

         ;


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

              <
            div class = "row" >
             {
                (this.props.tickCombobosch != undefined && this.props.tickCombobosch.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "Bosch"
                plotdata = {
                    this.props.tickCombobosch
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatabosch!= undefined && this.props.trendDatabosch.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "TRENDBOSCH"
                plotdata = {
                    this.props.trendDatabosch
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombocadila != undefined && this.props.tickCombocadila.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "Cadila"
                plotdata = {
                    this.props.tickCombocadila
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatacadila!= undefined && this.props.trendDatacadila.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "TREND_CADILA"
                plotdata = {
                    this.props.trendDatacadila
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombocipla != undefined && this.props.tickCombocipla.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "Cipla"
                plotdata = {
                    this.props.tickCombocipla
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatacipla!= undefined && this.props.trendDatacipla.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "TRENDBcipla"
                plotdata = {
                    this.props.trendDatacipla
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombocoal != undefined && this.props.tickCombocoal.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "coal"
                plotdata = {
                    this.props.tickCombocoal
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatacoal!= undefined && this.props.trendDatacoal.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendcoal"
                plotdata = {
                    this.props.trendDatacoal
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboconcor != undefined && this.props.tickComboconcor.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "concor"
                plotdata = {
                    this.props.tickComboconcor
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataconcor!= undefined && this.props.trendDataconcor.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendconcor"
                plotdata = {
                    this.props.trendDataconcor
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombocummsind != undefined && this.props.tickCombocummsind.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "cummsind"
                plotdata = {
                    this.props.tickCombocummsind
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatacummsind!= undefined && this.props.trendDatacummsind.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendcummsind"
                plotdata = {
                    this.props.trendDatacummsind
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombodabur != undefined && this.props.tickCombodabur.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "dabur"
                plotdata = {
                    this.props.tickCombodabur
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatadabur!= undefined && this.props.trendDatadabur.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trenddabur"
                plotdata = {
                    this.props.trendDatadabur
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombodhfl != undefined && this.props.tickCombodhfl.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "dhfl"
                plotdata = {
                    this.props.tickCombodhfl
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatadhfl!= undefined && this.props.trendDatadhfl.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trenddhfl"
                plotdata = {
                    this.props.trendDatadhfl
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboemami != undefined && this.props.tickComboemami.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "emami"
                plotdata = {
                    this.props.tickComboemami
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataemami!= undefined && this.props.trendDataemami.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendemami"
                plotdata = {
                    this.props.trendDataemami
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombogail != undefined && this.props.tickCombogail.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "gail"
                plotdata = {
                    this.props.tickCombogail
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatagail!= undefined && this.props.trendDatagail.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendgail"
                plotdata = {
                    this.props.trendDatagail
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombohavells != undefined && this.props.tickCombohavells.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "havells"
                plotdata = {
                    this.props.tickCombohavells
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatahavells!= undefined && this.props.trendDatahavells.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendhavells"
                plotdata = {
                    this.props.trendDatahavells
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombohdfc != undefined && this.props.tickCombohdfc.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "hdfc"
                plotdata = {
                    this.props.tickCombohdfc
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatahdfc!= undefined && this.props.trendDatahdfc.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendhdfc"
                plotdata = {
                    this.props.trendDatahdfc
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboinfratel != undefined && this.props.tickComboinfratel.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "infratel"
                plotdata = {
                    this.props.tickComboinfratel
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatainfratel!= undefined && this.props.trendDatainfratel.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendinfratel"
                plotdata = {
                    this.props.trendDatainfratel
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboreddy != undefined && this.props.tickComboreddy.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "reddy"
                plotdata = {
                    this.props.tickComboreddy
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatareddy!= undefined && this.props.trendDatareddy.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendreddy"
                plotdata = {
                    this.props.trendDatareddy
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboreliance != undefined && this.props.tickComboreliance.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "reliance"
                plotdata = {
                    this.props.tickComboreliance
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatareliance!= undefined && this.props.trendDatareliance.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendreliance"
                plotdata = {
                    this.props.trendDatareliance
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombosbin != undefined && this.props.tickCombosbin.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "sbin"
                plotdata = {
                    this.props.tickCombosbin
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatasbin!= undefined && this.props.trendDatasbin.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendsbin"
                plotdata = {
                    this.props.trendDatasbin
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickComboseimens != undefined && this.props.tickComboseimens.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "seimens"
                plotdata = {
                    this.props.tickComboseimens
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataseimens!= undefined && this.props.trendDataseimens.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendseimens"
                plotdata = {
                    this.props.trendDataseimens
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombotcs != undefined && this.props.tickCombotcs.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "tcs"
                plotdata = {
                    this.props.tickCombotcs
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatatcs!= undefined && this.props.trendDatatcs.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendtcs"
                plotdata = {
                    this.props.trendDatatcs
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickCombounilever != undefined && this.props.tickCombounilever.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "unilever"
                plotdata = {
                    this.props.tickCombounilever
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataunilever!= undefined && this.props.trendDataunilever.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "trendunilever"
                plotdata = {
                    this.props.trendDataunilever
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickCombontpc != undefined && this.props.tickCombontpc.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "ntpc"
                plotdata = {
                    this.props.tickCombontpc
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatantpc!= undefined && this.props.trendDatantpc.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "ntpc1"
                plotdata = {
                    this.props.trendDatantpc
                }
                /></div >
                :
                ''
            } <
            /div>

               <
            div class = "row" >
             {
                (this.props.tickCombobpcl != undefined && this.props.tickCombobpcl.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "bpcl"
                plotdata = {
                    this.props.tickCombobpcl
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatabpcl!= undefined && this.props.trendDatabpcl.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "bpcl1"
                plotdata = {
                    this.props.trendDatabpcl
                }
                /></div >
                :
                ''
            } <
            /div>

               <
            div class = "row" >
             {
                (this.props.tickCombopowergrid != undefined && this.props.tickCombopowergrid.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "powergrid"
                plotdata = {
                    this.props.tickCombopowergrid
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatapowergrid!= undefined && this.props.trendDatapowergrid.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "powergrid1"
                plotdata = {
                    this.props.trendDatapowergrid
                }
                /></div >
                :
                ''
            } <
            /div>

             <
            div class = "row" >
             {
                (this.props.tickCombolarsen != undefined && this.props.tickCombolarsen.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "larsen"
                plotdata = {
                    this.props.tickCombolarsen
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatalarsen!= undefined && this.props.trendDatalarsen.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "larsen1"
                plotdata = {
                    this.props.trendDatalarsen
                }
                /></div >
                :
                ''
            } <
            /div>



              <
            div class = "row" >
             {
                (this.props.tickCombotatamotors != undefined && this.props.tickCombotatamotors.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "tatamotors"
                plotdata = {
                    this.props.tickCombotatamotors
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatatatamotors!= undefined && this.props.trendDatatatamotors.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "tatamotors1"
                plotdata = {
                    this.props.trendDatatatamotors
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboitc != undefined && this.props.tickComboitc.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "itc"
                plotdata = {
                    this.props.tickComboitc
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataitc!= undefined && this.props.trendDataitc.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "itc1"
                plotdata = {
                    this.props.trendDataitc
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboadaniports != undefined && this.props.tickComboadaniports.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "adaniports"
                plotdata = {
                    this.props.tickComboadaniports
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataadaniports!= undefined && this.props.trendDataadaniports.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "adaniports1"
                plotdata = {
                    this.props.trendDataadaniports
                }
                /></div >
                :
                ''
            } <
            /div>

              <
            div class = "row" >
             {
                (this.props.tickComboasianpaints != undefined && this.props.tickComboasianpaints.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "asianpaints"
                plotdata = {
                    this.props.tickComboasianpaints
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataasianpaints!= undefined && this.props.trendDataasianpaints.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "asianpaints1"
                plotdata = {
                    this.props.trendDataasianpaints
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickComboupl != undefined && this.props.tickComboupl.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "upl"
                plotdata = {
                    this.props.tickComboupl
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataupl!= undefined && this.props.trendDataupl.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "upl1"
                plotdata = {
                    this.props.trendDataupl
                }
                /></div >
                :
                ''
            } <
            /div>


               <
            div class = "row" >
             {
                (this.props.tickCombozeel != undefined && this.props.tickCombozeel.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "zeel"
                plotdata = {
                    this.props.tickCombozeel
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatazeel!= undefined && this.props.trendDatazeel.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "zeel1"
                plotdata = {
                    this.props.trendDatazeel
                }
                /></div >
                :
                ''
            } <
            /div>

               <
            div class = "row" >
             {
                (this.props.tickCombograsim != undefined && this.props.tickCombograsim.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "grasim"
                plotdata = {
                    this.props.tickCombograsim
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatagrasim!= undefined && this.props.trendDatagrasim.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "grasim1"
                plotdata = {
                    this.props.trendDatagrasim
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickCombobajajfinserv != undefined && this.props.tickCombobajajfinserv.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "bajajfinserv"
                plotdata = {
                    this.props.tickCombobajajfinserv
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatabajajfinserv!= undefined && this.props.trendDatabajajfinserv.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "bajajfinserv1"
                plotdata = {
                    this.props.trendDatabajajfinserv
                }
                /></div >
                :
                ''
            } <
            /div>

             <
            div class = "row" >
             {
                (this.props.tickCombohindalco != undefined && this.props.tickCombohindalco.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "hindalco"
                plotdata = {
                    this.props.tickCombohindalco
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatahindalco!= undefined && this.props.trendDatahindalco.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "hindalco1"
                plotdata = {
                    this.props.trendDatahindalco
                }
                /></div >
                :
                ''
            } <
            /div>

               <
            div class = "row" >
             {
                (this.props.tickComboheromotoco != undefined && this.props.tickComboheromotoco.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "heromotoco"
                plotdata = {
                    this.props.tickComboheromotoco
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDataheromotoco!= undefined && this.props.trendDataheromotoco.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "heromotoco1"
                plotdata = {
                    this.props.trendDataheromotoco
                }
                /></div >
                :
                ''
            } <
            /div>

               <
            div class = "row" >
             {
                (this.props.tickCombosunpharma != undefined && this.props.tickCombosunpharma.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "sunpharma"
                plotdata = {
                    this.props.tickCombosunpharma
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatasunpharma!= undefined && this.props.trendDatasunpharma.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "sunpharma1"
                plotdata = {
                    this.props.trendDatasunpharma
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickCombotatasteel != undefined && this.props.tickCombotatasteel.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "tatasteel"
                plotdata = {
                    this.props.tickCombotatasteel
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatatatasteel!= undefined && this.props.trendDatatatasteel.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "tatasteel1"
                plotdata = {
                    this.props.trendDatatatasteel
                }
                /></div >
                :
                ''
            } <
            /div>


            <
            div class = "row" >
             {
                (this.props.tickCombokotakbank != undefined && this.props.tickCombokotakbank.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "kotakbank"
                plotdata = {
                    this.props.tickCombokotakbank
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatakotakbank!= undefined && this.props.trendDatakotakbank.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "kotakbank1"
                plotdata = {
                    this.props.trendDatakotakbank
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickCombomarico != undefined && this.props.tickCombomarico.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "marico"
                plotdata = {
                    this.props.tickCombomarico
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatamarico!= undefined && this.props.trendDatamarico.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "marico1"
                plotdata = {
                    this.props.trendDatamarico
                }
                /></div >
                :
                ''
            } <
            /div>


              <
            div class = "row" >
             {
                (this.props.tickCombolupin != undefined && this.props.tickCombolupin.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "lupin"
                plotdata = {
                    this.props.tickCombolupin
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatalupin!= undefined && this.props.trendDatalupin.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "lupin1"
                plotdata = {
                    this.props.trendDatalupin
                }
                /></div >
                :
                ''
            } <
            /div>


                <
            div class = "row" >
             {
                (this.props.tickCombopidilitind != undefined && this.props.tickCombopidilitind.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "pidilitind"
                plotdata = {
                    this.props.tickCombopidilitind
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatapidilitind!= undefined && this.props.trendDatapidilitind.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "pidilitind1"
                plotdata = {
                    this.props.trendDatapidilitind
                }
                /></div >
                :
                ''
            } <
            /div>



              <
            div class = "row" >
             {
                (this.props.tickCombohcltech != undefined && this.props.tickCombohcltech.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "hcltech"
                plotdata = {
                    this.props.tickCombohcltech
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendDatahcltech!= undefined && this.props.trendDatahcltech.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "hcltech1"
                plotdata = {
                    this.props.trendDatahcltech
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

            tickCombobpcl: state.tickDatabpcl,
            trendDatabpcl: state.plDatabpcl,

            tickCombontpc: state.tickDatantpc,
            trendDatantpc: state.plDatantpc,

            tickCombopowergrid: state.tickDatapowergrid,
            trendDatapowergrid : state.plDatapowergrid,

            tickComboongc: state.tickDataongc,
            trendDataongc : state.plDataongc,

            tickCombolarsen: state.tickDatalarsen,
            trendDatalarsen : state.plDatalarsen,

            tickCombotatamotors: state.tickDatatatamotors,
            trendDatatatamotors : state.plDatatatamotors,

            tickComboitc: state.tickDataitc,
            trendDataitc : state.plDataitc,


            tickComboadaniports: state.tickDataadaniports,
            trendDataadaniports : state.plDataadaniports,

               tickComboasianpaints: state.tickDataasianpaints,
            trendDataasianpaints : state.plDataasianpaints,

             tickComboupl: state.tickDataupl,
            trendDataupl : state.plDataupl,

             tickCombozeel: state.tickDatazeel,
            trendDatazeel : state.plDatazeel,


            tickCombograsim: state.tickDatagrasim,
            trendDatagrasim : state.plDatagrasim,

            tickCombobajajfinserv: state.tickDatabajajfinserv,
            trendDatabajajfinserv : state.plDatabajajfinserv,

             tickCombohindalco: state.tickDatahindalco,
            trendDatahindalco : state.plDatahindalco,

             tickComboheromotoco: state.tickDataheromotoco,
            trendDataheromotoco : state.plDataheromotoco,


            tickCombosunpharma: state.tickDatasunpharma,
            trendDatasunpharma : state.plDatasunpharma,

             tickCombotatasteel: state.tickDatatatasteel,
            trendDatatatasteel : state.plDatatatasteel,

             tickCombokotakbank: state.tickDatakotakbank,
            trendDatakotakbank : state.plDatakotakbank,

             tickCombomarico: state.tickDatamarico,
            trendDatamarico : state.plDatamarico,

            tickCombolupin: state.tickDatalupin,
            trendDatalupin : state.plDatalupin,

             tickCombopidilitind: state.tickDatapidilitind,
            trendDatapidilitind : state.plDatapidilitind,

             tickComboofss: state.tickDataofss,
            trendDataofss : state.plDataofss,


            tickCombohcltech: state.tickDatahcltech,
            trendDatahcltech : state.plDatahcltech,

            tickCombogodrejcp: state.tickDatagodrejcp,
            trendDatagodrejcp : state.plDatagodrejcp,




             
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
        addTickDatantpc,
        pivotDatantpc,
        pivotDatabpcl,
        addTickDatabpcl,
        addTickDatapowergrid,
        pivotDatapowergrid,
        addTickDataongc,
        pivotDataongc,
        addTickDatalarsen,
        pivotDatalarsen,
        addTickDatatatamotors,
        pivotDatatatamotors ,
        addTickDataitc,
        pivotDataitc,
        addTickDataadaniports,
pivotDataadaniports,
addTickDataasianpaints,
pivotDataasianpaints,
addTickDataupl,
pivotDataupl,
addTickDatabajajfinserv,
pivotDatabajajfinserv,
addTickDatasunpharma,
pivotDatasunpharma,
addTickDatatatasteel,
pivotDatatatasteel,
addTickDatazeel,
pivotDatazeel,
addTickDatagrasim,
pivotDatagrasim,
addTickDatahindalco,
pivotDatahindalco,
addTickDataheromotoco,
pivotDataheromotoco,
addTickDatakotakbank,
pivotDatakotakbank,
addTickDatapidilitind,
pivotDatapidilitind,
addTickDataofss,
pivotDataofss,
addTickDatamarico,
pivotDatamarico,
addTickDatalupin,
pivotDatalupin,
addTickDatahcltech,
pivotDatahcltech,
addTickDatagodrejcp,
pivotDatagodrejcp,


    })(TestLoginNav));