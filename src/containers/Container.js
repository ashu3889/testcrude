		import React ,{Component} from 'react';		
		import { connect } from "react-redux";
		//import CardDeckBody from './CardDeckBody.js';
		//import DrawnCardDeck from './DrawnCardDeck.js';		
		import Kitelogin from './KiteLogin.js';	
		import TestBLoginNav from './b_testLoginNav.js';
        import { Switch, Route } from 'react-router-dom';



		export default  class Board extends Component{

		  render(){

		    return(
		       <div>
		        <Switch>
                     <Route  path='/login' component={Kitelogin}/>                     
                     <Route exact path='/success/' component={TestBLoginNav}/>
                      <Route exact path='/btest' component={TestBLoginNav}/>

                </Switch>		 
		        </div>)
		    }
		}

