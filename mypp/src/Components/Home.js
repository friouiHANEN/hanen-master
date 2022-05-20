import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Immage from "./Slices/dodo.png";
const Home = () => {
  const [user, setuser] = useState({
    nomComplet: "",
    email: "",
    password: "",
    role: "",
  });

  //function setValue({ newValue: String }) {}

  const url = "http://localhost:8080/";
  function submitUser() {
    console.log(user);
    axios.post("http://localhost:8080/users/new", user);
  }
  return (
    <div className="secon">
      <h1 className="des-9raya"> N7eb 9rayti</h1>
      <img className="des-image" src={Immage} alt="dddd" />
      <Form className="design-form">
        <h1 className="create">create account:</h1>

        <h1 className="orr"></h1>
        <h1 className="desor">OR</h1>
        <h1 className="ort"></h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom Complet</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom Complet"
            onChange={(e) =>
              setuser({
                ...user,
                nomComplet: e.target.value,
                email: user.email,
                password: user.password,
                role: user.role,
              })
            }
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Adresse e-mail"
            onChange={(e) =>
              setuser({
                ...user,
                nomComplet: user.nomComplet,
                email: e.target.value,
                password: user.password,
                role: user.role,
              })
            }
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control
            type="password"
            placeholder="mot de passe"
            onChange={(e) =>
              setuser({
                ...user,
                nomComplet: user.nomComplet,
                email: user.email,
                password: e.target.value,
                role: user.role,
              })
            }
          />
        </Form.Group>

        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Student"
                name="group1"
                type="radio"
                onChange={(e) => {
                  if (e.target.checked) {
                    setuser({
                      ...user,
                      nomComplet: user.nomComplet,
                      email: user.email,
                      password: user.password,
                      role: "Student",
                    });
                  }
                }}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Teacher"
                name="group1"
                type="radio"
                value="Psychologist"
                onChange={(e) => {
                  if (e.target.checked) {
                    setuser({
                      ...user,
                      nomComplet: user.nomComplet,
                      email: user.email,
                      password: user.password,
                      role: "Teacher",
                    });
                  }
                }}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                name="group1"
                label="Psychologist"
                value="Psychologist"
                type="radio"
                onChange={(e) => {
                  if (e.target.checked) {
                    setuser({
                      ...user,
                      nomComplet: user.nomComplet,
                      email: user.email,
                      password: user.password,
                      role: "Psychologist",
                    });
                  }
                }}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="J'accepte tous les conditions " />
        </Form.Group>
        <Button
          className="dessuiv"
          variant="primary"
          type="submit"
          onClick={submitUser}
        >
          Suivant
        </Button>
      </Form>
    
    </div>
  );
};

export default Home;
