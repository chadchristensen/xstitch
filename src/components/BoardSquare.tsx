import React from 'react';

interface Props {
  idx: number;
  squareColor: string;
  currentColor: string;
  handleBoardUpdate: (idx: number) => void;
}

const BoardSquare: React.FC<Props> = ({
  squareColor,
  currentColor,
  idx,
  handleBoardUpdate
}) => {
  const handleColorChange = (): void => {
    if (squareColor === currentColor) return;
    handleBoardUpdate(idx);
  };

  return (
    <div
      className="board-square"
      style={{ backgroundColor: squareColor }}
      // QUESTION: Why is only mouseout logged?
      onMouseEnter={e => {
        // If mouse is being pressed when mouse enters square, change color
        if (e.buttons === 1) handleColorChange();
      }}
      onMouseDown={handleColorChange}
    ></div>
  );
};

export default BoardSquare;
