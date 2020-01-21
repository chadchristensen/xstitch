import React from 'react';
import BoardSquare from './BoardSquare';

const Board: React.FC = () => {
  return (
    <>
      <h2>Board Title</h2>

      <div className="board-grid-container">
        <BoardSquare />
      </div>
    </>
  );
};

export default Board;
