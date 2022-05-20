import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain,faEject,faHeart,faUserGraduate, faUserPlus} from "@fortawesome/free-solid-svg-icons";




const Navi = () => {
const navigate = useNavigate();  
  return (
    <div className="navig">
    <Navbar bg="monta" variant="dark">
      <Container> 
        <Nav className="monta">
          <div className="iconpsy">
        <FontAwesomeIcon  className="desiconpsy" icon={faBrain} />
        
          <Nav.Link className="despsyyy"   onClick={() => navigate("/psy")} >
            Psycologie
          </Nav.Link>
          </div>
          <div className="iconeduc">
          <FontAwesomeIcon  className="desiconeduc" icon={faUserGraduate} />
          <Nav.Link className="deseduc" onClick={() => navigate("/education")}>
            Education
          </Nav.Link>
          </div>
          <div className="iconart">
          <FontAwesomeIcon  className="desiconart" icon={faHeart} />
          <Nav.Link className="desart" onClick={() => navigate("/arts")}>
            Arts
          </Nav.Link>
          </div>
          <div className="iconabout">
          <FontAwesomeIcon  className="desiconabout" icon={faEject} />
          <Nav.Link className="desaprop" onClick={() => navigate("/apropos")}>
           About Us
          </Nav.Link>
          </div>
          <div className="iconsstt">
          <FontAwesomeIcon  className="icondes" icon={faUserPlus} />
          <Nav.Link className="desss" onClick={() => navigate("/membre")}>
            Devenir membre
          </Nav.Link>
          </div>
          
        </Nav>
      </Container>
    </Navbar>
    </div>   
  );
}
export default Navi;
