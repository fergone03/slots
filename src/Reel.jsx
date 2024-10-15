import React from "react";

const Reel = ({ symbol, spinning }) => {
  return (
    <div className={`reel ${spinning ? "reel-spinning" : ""}`}>
      <div className="reel-symbol">{symbol}</div>
    </div>
  );
};


export default Reel;
