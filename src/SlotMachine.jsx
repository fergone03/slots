import React, { useState } from "react";
import Reel from "./Reel";
import "./styles.css";

const numbers = ["💜", "💛", "🧡", "💚", "💙"]; // Lista de números 

const SlotMachine = () => {
  const [reels, setReels] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningRowIndex, setWinningRowIndex] = useState(null); // Store the index of the winning row
  const [resultMessage, setResultMessage] = useState("");

  const spin = () => {
    if (isSpinning) return; // Evita girar si ya está girando

    setIsSpinning(true);
    setWinningRowIndex(null); // Reset winning row index before spinning
    const spins = 10; // Número de giros
    let currentSpins = 0;

    const interval = setInterval(() => {
      const newReels = reels.map((row) =>
        row.map(() => Math.floor(Math.random() * numbers.length))
      );
      setReels(newReels);
      currentSpins += 1;

      // Si hemos completado todos los giros, detener la animación
      if (currentSpins >= spins) {
        clearInterval(interval);
        // Muestra el resultado final
        const finalReels = reels.map((row) =>
          row.map(() => Math.floor(Math.random() * numbers.length))
        );
        setReels(finalReels);
        setIsSpinning(false);

        // Imprimir el resultado en la consola
        console.log("Resultados finales:", finalReels.map(row => row.map(num => numbers[num])));

        // Check for win condition
        checkWin(finalReels);
      }
    }, 50); // Ajusta la velocidad del giro
  };

  const checkWin = (finalReels) => {
    // Check if any row has three of the same number
    const winningIndex = finalReels.findIndex(row =>
      row[0] === row[1] && row[1] === row[2]
    );

    if (winningIndex !== -1) {
      setWinningRowIndex(winningIndex); // Set the winning row index
      setResultMessage("¡Ganaste!");
    } else {
      setResultMessage("Intenta de nuevo!");
    }
  };

  return (
    <div className="slot-machine">
      <div className="reels-container"> {/* Nuevo div contenedor para las filas */}
        {reels.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`reels ${winningRowIndex === rowIndex ? "highlight" : ""}`}
          >
            {row.map((reel, reelIndex) => (
              <Reel
                key={reelIndex}
                symbol={numbers[reel]}
                spinning={isSpinning}
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
