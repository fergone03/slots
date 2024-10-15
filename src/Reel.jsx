import React from "react";

const Reel = ({ symbol, spinning, highlight }) => {
  return (
    <div className={`reel ${spinning ? "reel-spinning" : ""} ${highlight ? "highlight" : ""}`}>
      <div className="reel-symbol">{symbol}</div>
    </div>
  );
};

export default Reel;
