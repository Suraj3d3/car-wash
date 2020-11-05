import React from 'react';
import './App.css';
import carWashImg from './assets/carWash.jpg';
import Carousel from './Carousel'
//component to add Intro of website
function IntroDev(){
    return (
     
          <div className="introDiv">
       
               <Carousel/>
              
              <div>
                <h1 className="headerText"> <span className="redText"> C</span>ar Wash - Best Car Washing Services at Your Doorstep<br/>   </h1>
                <p className="headerPara"> Everyone wants to look their best when they step out of their house. When you take the time to get ready and look sharp, why not give your car the same treatment as well? In case you cannot find the time to take your car out to get it cleaned, give us a call, and our professional cleaning crew will be at your doorstep in no time. While you are busy getting ready or while you are at work, our team will meticulously clean your car to leave it sleek and shining. Choose any of our affordable monthly plans and enjoy hassle-free car wash at your parking. Try GoKleen’s car wash at doorstep service and give your car the five-star treatment today!</p>
                
              </div>
              <div>
                <h1 className="headerText"> <span className="redText"> P</span>rofessional Mobile Car Wash and Detailing <br/>   </h1>
                <p className="headerPara"> There are few things in life that are as relaxing as a nice long drive on an open road with some smooth music. Whenever you want to take your car out for a drive, go ahead and give us a call. GoKleen offers professional car cleaning service at home to give your car a complete makeover before you head out the door. We know you sometimes have a busy schedule that is why GoKleen provides mobile car wash at apartments so that you do not have to run around. From a sleek outer finish to pristine interiors, our mobile car wash and detailing services will surely make you feel like a King of the road. Check out our affordable monthly packages and book your slot today.
  
  Have a look at some of the benefits of availing our professional mobile car wash and detailing services:
  
  Cleans stains from the interior as well as the exterior of the car
  Improves the all-around look of the vehicle
  Uses professional cleaning techniques and tools
  Eradicates scratches and swirl marks on your car.</p>
                
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
        <div class="copyright_wrap copyright_style_text  scheme_original">
                      <div class="copyright_wrap_inner">
                          <div class="content_wrap">
                                                          <div class="copyright_text"><p>© 2020 carWash. All Rights Reserved. Conceptualised &amp; Designed by Krishna</p></div>
                          </div>
                      </div>
                  </div>
      </div>
    );
  }
  

function Home()
{
    return(<div>
        <IntroDev/>
        <Services/>
    </div>)
}
export default  Home