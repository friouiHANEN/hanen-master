import React from 'react'
import { Container, Nav, Navbar, NavDropdown,Carousel } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router';

import Exercice from './Compeducation/Exercice';

function Education() {
  const navigate = useNavigate();
  return (
      
<>

      <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
    <Nav.Link  onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link> 
      <Nav.Link  onClick={() => navigate("/etudeadistance")}>Etude à distance</Nav.Link>
     
      <Nav.Link className="navpsy" onClick={() => navigate("/languages")} > Languages</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://naitreetgrandir.com/documentsng/images/imagesheaders/5-8-ecole.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.unicef.org/wca/sites/unicef.org.wca/files/styles/hero_desktop/public/wca-programme-2017-education.jpg?itok=nvG0RG9p"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.processmaker.com/wp-content/uploads/2019/12/464-768x511.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
  
  </>      
  )
}

export default Education