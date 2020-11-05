import React, { useState, useEffect } from 'react';
import carWashImg from './assets/carWash.jpg';
import carWashImg1 from './assets/slide2.jpeg';
import carWashImg2 from './assets/slide3.jpeg';
import carWashImg3 from './assets/slide4.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./styles.css";
function Carousel() {
    
    const [slides, setSlides] = useState([
        {
            source: carWashImg,
            title: "Half Moon Pier"
        },
        {
            source: carWashImg1,
            title: "Port Washington Rocks"
        },
        {
            source: carWashImg2,
            title: "Abandoned Rail"
        },
        {
            source: carWashImg3,
            title: "Abandoned Rail"
        }
    ]);
    const slideImages = [
        carWashImg1,
        carWashImg2,
        carWashImg3,
      ];
       

    let indexValue = 0; // Initial slide index value
    let currentSlide = slides[indexValue]; // variable index value we can reference later

    // Index value moves up, but doesn't update the image. Why???
    const arrowRightClick = () => {
        currentSlide = slides[indexValue + 1];
        console.log(currentSlide);
    }

    return (
        <div className="centerImg">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:600}}>
              <span>Book Now</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:600}}>
              <span>Book Now</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:600}}>
              <span>Book Now</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Carousel;