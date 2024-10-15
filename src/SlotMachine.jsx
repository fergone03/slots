import React, { useState, useEffect } from 'react';
import Reel from "./Reel";
import "./styles.css";

const numbers = ["💜", "💛", "🧡", "💚", "💙"];


const SlotMachine = () => {
  useEffect(() => {
    document.title = "FortuneFlare - ¡Slots!"; // Cambia el título de la página
  }, []);
  const [reels, setReels] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningCells, setWinningCells] = useState([]); // Array to store winning cell coordinates
  const [resultMessage, setResultMessage] = useState("");

  const spin = () => {
    if (isSpinning) return; // Prevent spinning if already spinning

    setIsSpinning(true);
    setWinningCells([]); // Reset winning cells before spinning
    const spins = 10;
    let currentSpins = 0;

    const interval = setInterval(() => {
      const newReels = reels.map((row) =>
        row.map(() => Math.floor(Math.random() * numbers.length))
      );
      setReels(newReels);
      currentSpins += 1;

      if (currentSpins >= spins) {
        clearInterval(interval);
        const finalReels = newReels; // Use the last generated reels
        setReels(finalReels);
        setIsSpinning(false);

        console.log("Resultados finales:", finalReels.map(row => row.map(num => numbers[num])));
        checkWin(finalReels);
      }
    }, 50);
  };

  const checkWin = (finalReels) => {
    const winningCoordinates = [];

    // Check rows for win
    finalReels.forEach((row, rowIndex) => {
      if (row[0] === row[1] && row[1] === row[2]) {
        winningCoordinates.push([rowIndex, 0], [rowIndex, 1], [rowIndex, 2]);
      }
    });

    // Check columns for win
    for (let col = 0; col < 3; col++) {
      if (finalReels[0][col] === finalReels[1][col] && finalReels[1][col] === finalReels[2][col]) {
        winningCoordinates.push([0, col], [1, col], [2, col]);
      }
    }

    // Check diagonals for win
    if (finalReels[0][0] === finalReels[1][1] && finalReels[1][1] === finalReels[2][2]) {
      winningCoordinates.push([0, 0], [1, 1], [2, 2]);
    }
    if (finalReels[0][2] === finalReels[1][1] && finalReels[1][1] === finalReels[2][0]) {
      winningCoordinates.push([0, 2], [1, 1], [2, 0]);
    }

    if (winningCoordinates.length > 0) {
      setWinningCells(winningCoordinates); // Store winning cells
      setResultMessage("¡Ganaste!");
    } else {
      setResultMessage("Intenta de nuevo!");
    }
  };

  const isWinningCell = (rowIndex, reelIndex) => {
    return winningCells.some(([winRow, winCol]) => winRow === rowIndex && winCol === reelIndex);
  };

  return (
    <div className="slot-machine">
      <div className="reels-container">
        {reels.map((row, rowIndex) => (
          <div key={rowIndex} className="reels">
            {row.map((reel, reelIndex) => (
              <Reel
                key={reelIndex}
                symbol={numbers[reel]}
                spinning={isSpinning}
                highlight={isWinningCell(rowIndex, reelIndex)} // Highlight if it's a winning cell
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={spin} disabled={isSpinning}>
        {isSpinning ? "Girando..." : "Girar"}
      </button>
      <div className="result">
        {resultMessage}
      </div>
    </div>
  );
};

export default SlotMachine;
