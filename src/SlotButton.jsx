import React from 'react';

const SlotButton = ({ spin, isSpinning }) => {
  return (
    <button onClick={spin} disabled={isSpinning}>
      {isSpinning ? 'Girando...' : '¡Girar!'}
    </button>
  );
};

export default SlotButton;
