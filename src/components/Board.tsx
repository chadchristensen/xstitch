import React, { useState, useEffect } from 'react';
import BoardSquare from './BoardSquare';
import sampleData from '../sampleData.json';

interface BoardProps {
  currentColor: string;
}

const Board: React.FC<BoardProps> = ({ currentColor }) => {
  const [boardTitle, setBoardTitle] = useState('New Board');
  const [boardSquares, setBoardSquares] = useState(Array(2000).fill('#ffffff'));

  const handleBoardUpdate = (idx: number): void => {
    // TODO: revisit if there is a better way
    const copiedBoard = [...boardSquares];

    copiedBoard[idx] = currentColor;
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
    <div className="board-display-container">
      <input
        type="text"
        value={boardTitle}
        name="board-title"
        className="board-title"
        onChange={handleBoardTitleChange}
      />

      <div className="board-grid-container">
        {boardSquares.map((color, idx) => {
          return (
            <BoardSquare
              key={idx}
              idx={idx}
              squareColor={color}
              handleBoardUpdate={handleBoardUpdate}
              currentColor={currentColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
