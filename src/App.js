import React from 'react';
import './App.css';
import carWashImg from './assets/carWash.jpg';
import Home from './Home'
//main component - rendering from index.js file
function App(){
  return (
   <div id="rootDiv"> 
      <div id="topNavigation"  >
        <ul id="topNavigationText">
          <li>Home</li>
          <li>Appointment</li>
          <li>Contact us</li>
          <li>About</li>
        </ul>
      </div>

      <section className="blankSpace"> </section>
      <Home/>
   </div>
    
  );
}



export default  App