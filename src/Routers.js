import React from 'react';
import  Home  from './Home';
import  About from './About';
import Services from './Services';
import Booking from './Booking';
import Contactus from './Contactus'; 
import {Nav,Navbar} from 'react-bootstrap';
import './Style/navigation.css';
import {Link , Route, Switch , BrowserRouter} from 'react-router-dom';


function Navigation(){
  return(
   
    <BrowserRouter >
  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="topNavigation"> 
         <Navbar.Brand href="Home">CarWash</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
            
         </Nav>
         <Nav>
            <Nav.Link href=""> <Link to='/'> Home </Link> </Nav.Link>
            <Nav.Link href=""> <Link to='/Booking'> Booking </Link> </Nav.Link>
            <Nav.Link href=""> <Link to='/Services'> Services </Link></Nav.Link>
            <Nav.Link href=""> <Link to='/About'>About</Link> </Nav.Link>
            <Nav.Link href=""> <Link to='/Contactus'> Contact us </Link></Nav.Link>      
         </Nav>
      </Navbar.Collapse>
   </Navbar>


    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Booking' component={Booking} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contactus' component={Contactus} />
    </Switch>


    </ BrowserRouter >
  );
}

export default Navigation;