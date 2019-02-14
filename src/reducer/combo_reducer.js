import {combineReducers, createStore,applyMiddleware} from 'redux';


import tickData from './tickdata.js';
import plData from './plotdata.js';


import tickDataCopper from './tickdata_copper.js';
import plDataCopper from './plotdata_copper.js';

import tickDatabanknifty from './tickdata_banknifty.js';
import plDatabanknifty from './plotdata_banknifty.js';


import tickDatabosch from './tickdata_bosch.js';
import plDatabosch from './plotdata_bosch.js';


import tickDatacadila from './tickdata_cadila.js';
import plDatacadila  from './plotdata_cadila.js';


import tickDatacipla from './tickdata_cipla.js';
import plDatacipla from './plotdata_cipla.js';


import tickDatacoal from './tickdata_coal.js';
import plDatacoal from './plotdata_coal.js';


import tickDataconcor from './tickdata_concor.js';
import plDataconcor from './plotdata_concor.js';


import tickDatacummsind from './tickdata_cummsind.js';
import plDatacummsind from './plotdata_cummsind.js';


import tickDatadabur from './tickdata_dabur.js';
import plDatadabur from './plotdata_dabur.js';


import tickDatadhfl from './tickdata_dhfl.js';
import plDatadhfl from './plotdata_dhfl.js';


import tickDataemami from './tickdata_emami.js';
import plDataemami from './plotdata_emami.js';


import tickDatagail from './tickdata_gail.js';
import plDatagail from './plotdata_gail.js';


import tickDatahavells from './tickdata_havells.js';
import plDatahavells from './plotdata_havells.js';


import tickDatahdfc from './tickdata_hdfc.js';
import plDatahdfc from './plotdata_hdfc.js';


import tickDatahindzinc from './tickdata_hindzinc.js';
import plDatahindzinc from './plotdata_hindzinc.js';


import tickDatainfratel from './tickdata_infratel.js';
import plDatainfratel from './plotdata_infratel.js';


import tickDatareddy from './tickdata_reddy.js';
import plDatareddy from './plotdata_reddy.js';


import tickDatareliance from './tickdata_reliance.js';
import plDatareliance from './plotdata_reliance.js';


import tickDatasbin from './tickdata_sbin.js';
import plDatasbin from './plotdata_sbin.js';


import tickDataseimens from './tickdata_seimens.js';
import plDataseimens  from './plotdata_seimens.js';


import tickDatatcs from './tickdata_tcs.js';
import plDatatcs from './plotdata_tcs.js';


import tickDataunilever from './tickdata_unilever.js';
import plDataunilever from './plotdata_unilever.js';


/*import tickDataCopper from './tickdata_copper.js';
import plDataCopper from './plotdata_copper.js';


import tickDataCopper from './tickdata_copper.js';
import plDataCopper from './plotdata_copper.js';


import tickDataCopper from './tickdata_copper.js';
import plDataCopper from './plotdata_copper.js';


import tickDataCopper from './tickdata_copper.js';
import plDataCopper from './plotdata_copper.js';*/




import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootreducer = combineReducers({
tickData :tickData,
plData:plData,

tickDataCopper :tickDataCopper,
plDataCopper:plDataCopper,

tickDataunilever :tickDataunilever,
plDataunilever:plDataunilever,

tickDatatcs :tickDatatcs,
plDatatcs:plDatatcs,


tickDataseimens :tickDataseimens,
plDataseimens:plDataseimens,


tickDatasbin :tickDatasbin,
plDatasbin:plDatasbin,

tickDatareliance :tickDatareliance,
plDatareliance:plDatareliance,

tickDatareddy :tickDatareddy,
plDatareddy:plDatareddy,

tickDatainfratel :tickDatainfratel,
plDatainfratel:plDatainfratel,

tickDatahindzinc :tickDatahindzinc,
plDatahindzinc:plDatahindzinc,

tickDatahdfc :tickDatahdfc,
plDatahdfc:plDatahdfc,

tickDatahavells :tickDatahavells,
plDatahavells:plDatahavells,

tickDatagail :tickDatagail,
plDatagail:plDatagail,

tickDataemami :tickDataemami,
plDataemami:plDataemami,

tickDatadhfl :tickDatadhfl,
plDatadhfl:plDatadhfl,

tickDatadabur :tickDatadabur,
plDatadabur:plDatadabur,

tickDatacummsind :tickDatacummsind,
plDatacummsind:plDatacummsind,

tickDataconcor :tickDataconcor,
plDataconcor:plDataconcor,

tickDatacoal :tickDatacoal,
plDatacoal:plDatacoal,

tickDatacipla :tickDatacipla,
plDatacipla:plDatacipla,

tickDatacadila :tickDatacadila,
plDatacadila:plDatacadila,

tickDatabosch :tickDatabosch,
plDatabosch:plDatabosch,

tickDatabanknifty :tickDatabanknifty,
plDatabanknifty:plDatabanknifty,

});

const persistedstate = {
  cards : [
  {count: 1,value:'A♣' ,type:'clubs' }, {count: 2,value:'2♣' ,type:'clubs'} , {count: 3,value:'3♣',type:'clubs' } ,{count: 4,value:'4♣',type:'clubs' },{count: 5,value:'5♣',type:'clubs' }, {count: 6,value:'6♣',type:'clubs' } , {count: 7,value:'7♣',type:'clubs' } ,{count: 8,value:'8♣',type:'clubs'},
  {count: 9,value:'9♣',type:'clubs' }, {count: 10,value:'10♣',type:'clubs' } , {count: 11,value:'J♣',type:'clubs' } ,{count: 12,value:'Q♣',type:'clubs' },{count: 13,value:'K♣',type:'clubs' },
  {count: 14,value:'A♠',type:'Spades'}, {count: 15,value:'2♠',type:'Spades'} , {count: 16,value:'3♠',type:'Spades'} ,{count: 17,value:'4♠',type:'Spades'},
  {count: 18,value:'5♠',type:'Spades'}, {count: 19,value:'6♠',type:'Spades'} , {count: 20,value:'7♠',type:'Spades'} ,{count: 21,value:'8♠' ,type:'Spades'},
  {count: 22,value:'9♠',type:'Spades'}, {count: 23,value:'10♠',type:'Spades'} , {count: 24,value:'J♠',type:'Spades'} ,{count: 25,value:'Q♠',type:'Spades'},
  {count: 26,value:'K♠',type:'Spades'},{count: 27,value:'A♥',type:'Hearts'}, {count: 28,value:'2♥',type:'Hearts'} , {count: 29,value:'3♥',type:'Hearts'} ,{count: 30,value:'4♥',type:'Hearts'},
  {count: 31,value:'5♥',type:'Hearts'}, {count: 32,value:'6♥',type:'Hearts'} , {count: 33,value:'7♥',type:'Hearts'} ,{count: 34,value:'8♥',type:'Hearts'},
  {count: 35,value:'9♥',type:'Hearts'}, {count: 36,value:'10♥',type:'Hearts'} , {count: 37,value:'J♥',type:'Hearts'} ,{count: 38,value:'Q♥',type:'Hearts'},
  {count: 39,value:'K♥',type:'Hearts'},{count: 40,value:'A♦',type:'Diamonmds'}, {count: 41,value:'2♦',type:'Diamonmds'} , {count: 42,value:'3♦',type:'Diamonmds'} ,{count: 43,value:'4♦',type:'Diamonmds'},
  {count: 44,value:'5♦',type:'Diamonmds'}, {count: 45,value:'6♦',type:'Diamonmds'} , {count: 46,value:'7♦',type:'Diamonmds'} ,{count: 47,value:'8♦',type:'Diamonmds'},
  {count: 48,value:'9♦',type:'Diamonmds'}, {count: 49,value:'10♦',type:'Diamonmds'} , {count: 50,value:'J♦',type:'Diamonmds'} ,{count: 51,value:'Q♦',type:'Diamonmds'},
 {count: 52,value:'K♦',type:'Diamonmds'},
  ],
   drawncards : []
};

const store = createStoreWithMiddleware(rootreducer , persistedstate,/* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );



//console.log(store.getstate());

export default store;