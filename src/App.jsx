import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import SlotMachine from "./SlotMachine";
import HomePage from "./HomePage";
import BlackJack from "./BlackJack";
import Ruleta from "./Ruleta";
import AllGames from "./AllGames";
import "./styles.css"; 
import logo from "./assets/logo.svg";


const App = () => {
  return (
    <Router>
      <header>
        <div className="logo">
          <img src={logo} alt="Custom Logo" style={{ height: '60px' }} />
          <h2 className="nombre-empresa">FortuneFlare</h2>
        </div> 
        <nav>
          <NavLink to="/" className="navlink">Homepage</NavLink>
          <NavLink to="/slots" className="navlink">Slots</NavLink>
          <NavLink to="/blackjack" className="navlink">BlackJack</NavLink>
          <NavLink to="/ruleta" className="navlink">Ruleta</NavLink>
          <NavLink to="/allgames" className="navlink">Todos los juegos</NavLink>
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
