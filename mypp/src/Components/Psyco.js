import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import Apropos from "./Apropos";
import human from "./Slices/human.mp4"
//import ChatApp from "./chat/ChatApp"
const Psyco = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="navpsy" onClick={() => navigate("/aboutus")}>
              About Us
            </Nav.Link>
            <Nav.Link className="navpsy" onClick={() => navigate("/solution")}>
              {" "}
              problems
              
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <video autoPlay loop muted width="100%" style={{position:"absolute",zIndex:"-1",top:"0",left:"0"}}>
        <source src={human} />
      </video>

      
    </div>
  );
};

export default Psyco;
