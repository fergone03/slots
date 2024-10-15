import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SlotMachine from "./SlotMachine";
import HomePage from "./HomePage";
import BlackJack from "./BlackJack";
import Ruleta from "./Ruleta";
import AllGames from "./AllGames";
import "./styles.css"; 
import logo from "./assets/logo.svg"


const App = () => {
  return (
    <Router>
      <header>
             <div class="logo">
              <img src={logo} alt="Custom Logo" style={{ height: '60px' }} />
              <h2 className="nombre-empresa">FortuneFlare</h2>
              </div> 
        <nav>
       <a href="./HomePage.jsx" className="navlink">Homepage</a>
       <a href="./SlotMachine.jsx" className="navlink">Slots</a>
       <a href="./BlackJack.jsx" className="navlink">BlackJack</a>
       <a href="./Ruleta.jsx" className="navlink">Ruleta</a>
       <a href="./AllGames.jsx" className="navlink">Todos los juegos</a>

        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/slots" element={<SlotMachine />} />
          <Route path="/blackjack" element={<BlackJack />} />
          <Route path="/ruleta" element={<Ruleta />} />
          <Route path="/allgames" element={<AllGames />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
