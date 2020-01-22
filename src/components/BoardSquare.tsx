import React from 'react';

interface Props {
  idx: number;
  color: string;
  handleSquareClick: (idx: number) => void;
}

const BoardSquare: React.FC<Props> = ({ color, idx, handleSquareClick }) => {
  return (
    <div
      className="board-square"
      style={{ backgroundColor: color }}
      onClick={() => handleSquareClick(idx)}
    ></div>
  );
};

export default BoardSquare;
