import React, { useState } from 'react';
import BoardSquare from './BoardSquare';

const Board: React.FC = () => {
  const [boardTitle, setBoardTitle] = useState('Untitled');
  const [boardSquares, setBoardSquares] = useState(Array(1000).fill('#ffffff'));
  console.log(boardSquares);

  const handleSquareClick = (idx: number) => {
    // TODO: revisit if there is a better way
    const copiedBoard = [...boardSquares];

    copiedBoard[idx] = '#fe0120';

    setBoardSquares(copiedBoard);
  };

  return (
    <>
      <h2>{boardTitle}</h2>

      <div className="board-grid-container">
        {boardSquares.map((square, idx) => {
          return (
            <BoardSquare
              key={idx}
              idx={idx}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
