import React, { useState, useEffect } from 'react';
import BoardSquare from './BoardSquare';
import sampleData from '../sampleData.json';

const Board: React.FC = () => {
  const [boardTitle, setBoardTitle] = useState('New Board');
  const [boardSquares, setBoardSquares] = useState(Array(2000).fill('#ffffff'));

  const handleSquareClick = (idx: number): void => {
    // TODO: revisit if there is a better way
    const copiedBoard = [...boardSquares];

    copiedBoard[idx] = '#fe0120';
    setBoardSquares(copiedBoard);
  };

  useEffect(() => {
    setBoardTitle(sampleData.title);
    setBoardSquares(sampleData.squares);
  }, []);

  const handleBoardTitleChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setBoardTitle(e.currentTarget.value);
  };

  return (
    <>
      <input
        type="text"
        value={boardTitle}
        name="board-title"
        onChange={handleBoardTitleChange}
      />

      <div className="board-grid-container">
        {boardSquares.map((color, idx) => {
          return (
            <BoardSquare
              key={idx}
              idx={idx}
              color={color}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
