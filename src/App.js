import React, { useState } from "react";
import SlotReel from "./SlotReel";
import SlotButton from "./SlotButton";
import SlotResult from "./SlotResult";
import "./styles.css"; // Asegúrate de que el nombre del archivo sea correcto

const symbols = ["🍒", "🍋", "🍉", "⭐", "🔔"];

const SlotMachine = () => {
  const [reels, setReels] = useState([0, 0, 0]); // Posición de cada rodillo
  const [isSpinning, setIsSpinning] = useState(false); // Para saber si está girando
  const [result, setResult] = useState("");
  const [spinDurations, setSpinDurations] = useState([]); // Nuevo estado para almacenar las duraciones y direcciones

  const getRandomSpeed = () => {
    return Math.random() * 1000 + 500; // Velocidad aleatoria entre 500ms y 1500ms
  };

  const spin = () => {
    setIsSpinning(true);
    setResult("");

    const finalReels = [
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
    ];

    // Guardar velocidades y direcciones para cada rodillo en el estado
    const newSpinDurations = [
      { speed: getRandomSpeed(), direction: "up" }, // Primera tira hacia arriba
      { speed: getRandomSpeed(), direction: "down" }, // Segunda tira hacia abajo
      { speed: getRandomSpeed(), direction: "up" }, // Tercera tira hacia arriba
    ];
    setSpinDurations(newSpinDurations);

    const intervals = [];

    newSpinDurations.forEach((duration, index) => {
      const intervalId = setInterval(() => {
        setReels((prevReels) =>
          prevReels.map(() => Math.floor(Math.random() * symbols.length))
        );
      }, 100); // Cambia cada 100ms

      intervals.push(intervalId);

      // Detener el giro después del tiempo definido
      setTimeout(() => {
        clearInterval(intervalId); // Detener el intervalo
        setReels((prevReels) => {
          const newReels = [...prevReels];
          newReels[index] = finalReels[index]; // Establecer el resultado final
          return newReels;
        });
        if (index === 2) {
          // Solo verificar el resultado después del último rodillo
          setIsSpinning(false);
          checkResult(finalReels);
        }
      }, duration.speed); // Usar la velocidad aleatoria de cada rodillo
    });
  };

  const checkResult = (newReels) => {
    // Verificar si todos los rodillos tienen el mismo símbolo
    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      setResult("¡Ganaste!");
    } else {
      setResult("Intenta de nuevo");
    }
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        <SlotReel
          symbol={symbols[reels[0]]}
          spinning={isSpinning}
          direction={spinDurations[0]?.direction}
        />
        <SlotReel
          symbol={symbols[reels[1]]}
          spinning={isSpinning}
          direction={spinDurations[1]?.direction}
        />
        <SlotReel
          symbol={symbols[reels[2]]}
          spinning={isSpinning}
          direction={spinDurations[2]?.direction}
        />
      </div>
      <SlotButton spin={spin} isSpinning={isSpinning} />
      <SlotResult result={result} />
    </div>
  );
};

export default SlotMachine;
