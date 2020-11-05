import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contactus from './Contactus'
import Booking from './Booking'
import Services from './Services'
import Footer from'./footer'

function Router()
{
  return( < BrowserRouter >
    <div id="rootDiv">
      <div id="topNavigation">
       <ul id="topNavigationText"> 
          <li className="marginTop">
             <Link to="/">HOME</Link>
          </li>
          <li className="marginTop">
             <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li className="marginTop">
             <Link to="/Services">SERVICES</Link>
          </li>
          <li className="marginTop">
             <Link to="/contactus">FAQ'S</Link>
          </li>
          <li className="marginTop">
             <Link to="/contactus">CONTACT US</Link>
          </li>
       </ul>
       </div>
       <section className="blankSpace"> </section>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Booking" component={Booking} />
         
       </Switch>
       <Footer/>
    </div>
 </ BrowserRouter >)
}


//
//main component - rendering from index.js file
function App(){
  return (
   <Router/>
  );
}



export default  App