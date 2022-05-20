import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navi from "./Components/Navi";
import Inter from "./Components/Inter";
import Artss from "./Components/Artss";
import Psyco from "./Components/Psyco";
import Education from "./Components/Education";
import Apropos from "./Components/Apropos";
import Aboutt from "./Components/Aboutt";
import Solutionn from "./Components/Solutionn";
import Exercice from "./Components/Compeducation/Exercice";
import Etude from "./Components/Compeducation/Etude";
import Examens from "./Components/Compeducation/Examens";
import Debats from "./Components/Compeducation/Debats";
import Languages from "./Components/Compeducation/Languages";
import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatApp from "./Components/chat/ChatApp"

function App() {
  return (
    <div className="App">
      <Navi />

      <Routes>
        <Route exact path="/" element={<Inter />} />
        <Route exact path="/membre" element={<Home />} />
        <Route exact path="/arts" element={<Artss />} />
        <Route exact path="/psy" element={<Psyco />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/apropos" element={<Apropos />} />
        <Route exact path="/aboutus" element={<Aboutt />} />
        <Route exact path="/solution" element={<ChatApp />} />
        <Route exact path="/exercices" element={< Exercice/>} />
        <Route exact path="/etudeadistance" element={< Etude/>} />
        <Route exact path="/examens" element={< Examens/>} />
        <Route exact path="/debates" element={< Debats/>} />
        <Route exact path="/languages" element={< Languages/>} />
        <Route exact path="/dashboard" element={< Sidebar/>} />
        <Route exact path="/dashboard" element={< Sidebar/>} />

      </Routes>
      
    </div>
  );
}

export default App;
