import React, { useState, useEffect } from 'react';
import BoardSquare from './BoardSquare';
import sampleData from '../sampleData.json';
import { Tools } from '../constants';

interface BoardProps {
  currentColor: string;
  currentTool: Tools;
}

const Board: React.FC<BoardProps> = ({ currentColor, currentTool }) => {
  const [boardTitle, setBoardTitle] = useState('New Board');
  const [boardSquares, setBoardSquares] = useState(Array(2000).fill('#ffffff'));

  useEffect(() => {
    setBoardTitle(sampleData.title);
    setBoardSquares(sampleData.squares);
  }, []);

  const handleBoardUpdate = (idx: number, squareColor: string): void => {
    if (currentTool === Tools.Paint && squareColor === currentColor) return;

    // TODO: revisit if there is a better way
    const copiedBoard = [...boardSquares];

    copiedBoard[idx] = currentTool === Tools.Paint ? currentColor : '#ffffff';

    setBoardSquares(copiedBoard);
  };

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
