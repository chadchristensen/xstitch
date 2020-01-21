import React, { useState } from 'react';

const BoardSquare: React.FC = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = () => {
    color === '#000000' ? setColor('#fefefe') : setColor('#000000');
  };

  return (
    <div
      className="board-square"
      style={{ backgroundColor: color }}
      onClick={handleColorChange}
    ></div>
  );
};

export default BoardSquare;
