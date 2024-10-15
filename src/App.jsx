import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SlotMachine from "./SlotMachine";
import HomePage from "./HomePage";
import BlackJack from "./BlackJack";
import Ruleta from "./Ruleta";
import AllGames from "./AllGames";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/slots">Slots</Link>
          </li>
          <li>
            <Link to="/blackjack">BlackJack</Link>
          </li>
          <li>
            <Link to="/ruleta">Ruleta</Link>
          </li>
          <li>
            <Link to="/allgames">Todos los juegos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slots" element={<SlotMachine />} />
        <Route path="/blackjack" element={<BlackJack />} />
        <Route path="/ruleta" element={<Ruleta />} />
        <Route path="/allgames" element={<AllGames />} />
      </Routes>
    </Router>
  );
};

export default App;
