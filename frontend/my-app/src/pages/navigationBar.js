import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../logo.svg';
import React from 'react';

const NavigationBar = () =>{
    return (
        <Navbar variant="dark" style = {{background: "#3282B8"}}>
        <Container>
        <img src={logo} className="App-logo" alt="logo" align="left"/>
        <Nav className="me-auto">
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link href="/mainpage">Mainpage</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/WorkoutLog">Workout Log</Nav.Link>
          <Nav.Link href="/workout">Workout</Nav.Link>
          <Nav.Link href="/dietTracker">DietTracker</Nav.Link>
          <Nav.Link href="/backside">BackWorkouts</Nav.Link>
          
        </Nav>
        
        </Container>
      </Navbar>        
    )
}

export default NavigationBar