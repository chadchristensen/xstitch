import React from 'react';

interface Props {
  idx: number;
  squareColor: string;
  handleBoardUpdate: (idx: number, squareColor: string) => void;
}

const BoardSquare: React.FC<Props> = React.memo(
  ({ squareColor, idx, handleBoardUpdate }) => {
    const handleColorChange = (): void => {
      handleBoardUpdate(idx, squareColor);
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
  }
);

export default BoardSquare;
