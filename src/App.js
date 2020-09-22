import React from 'react';
import './App.css';
import carWashImg from './assets/carWash.jpg';

//main component - rendering from index.js file
function App(){
  return (
   <div id="rootDiv"> 
      <div id="topNavigation"  >
        <ul>
          <li>Home</li>
          <li>Appointment</li>
          <li>Contact us</li>
          <li>About</li>
        </ul>
      </div>

      <section className="blankSpace"> </section>

      <IntroDev/>
      <Services/>
   </div>
    
  );
}

//component to add Intro of website
function IntroDev(){
  return (
   
        <div className="introDiv">
            <div>
              <h1 className="headerText"> <span className="redText"> C</span>ar Wash <br/> <span className="redText">D</span>ummy Text  </h1>
              <p className="headerPara"> AutoBrix provides Car Wash, Bike Services, Tyre Services, Battery Services, AC Services and Many other Auto Services right at your DOORSTEP, anytime.
                    CONVENIENT, TRANSPARENT and ONE CLICK Service.</p>
              
            </div>

            <div className="centerImg">  
              <img src={carWashImg} className="centerImg"/>
            </div>
      </div>
    
  );
}

function Services(){
  return (
    <div className="servicesDiv">

      <div className="serviceItem">
          <h1> Convenient </h1>
          <p> #Doorstep Services provide convenience to our customers. Disrupting Auto Services at doorstep. </p>
      </div>

      <div className="serviceItem">
          <h1> Transparent </h1>
          <p> Spare Parts for services and materials used in car wash can be checked and verified before and after service. </p>
      </div>

      <div className="serviceItem">
          <h1> One Click </h1>
          <p> Our mobile app provides one click auto services at your doorstep. Download and enjoy doorstep auto services.</p>
      </div>

    </div>
  );
}


export default  App