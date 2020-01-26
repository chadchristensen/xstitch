import React, { useState } from 'react';
import Board from './Board';
import SideBar from './SideBar';

const BoardBuilderPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState('#2ccce4');
  const [tool, setTool] = useState('PAINT');

  return (
    <div className="board-builder-container">
      <Board currentColor={currentColor} currentTool={tool} />
      <SideBar
        currentColor={currentColor}
        setTool={setTool}
        setCurrentColor={setCurrentColor}
      />
    </div>
  );
};

export default BoardBuilderPage;
