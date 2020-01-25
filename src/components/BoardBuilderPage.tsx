import React, { useState } from 'react';
import Board from './Board';
import SideBar from './SideBar';

const BoardBuilderPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState('#feab01');

  return (
    <div className="board-builder-container">
      <Board currentColor={currentColor} />
      <SideBar currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </div>
  );
};

export default BoardBuilderPage;
