import React from 'react';

const SlotReel = ({ symbol, spinning, direction }) => {
  return (
    <div className={`reel ${spinning ? 'spinning' : ''} ${direction}`}>
      {symbol}
    </div>
  );
};

export default SlotReel;
