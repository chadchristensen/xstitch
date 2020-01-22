import React, { useState } from 'react';

interface Props {
  idx: number;
  handleSquareClick: (idx: number) => void;
}

const BoardSquare: React.FC<Props> = () => {
  const [color, setColor] = useState('#ffffff');

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
