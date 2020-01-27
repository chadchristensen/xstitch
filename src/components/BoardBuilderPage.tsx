import React, { useState } from 'react';
import Board from './Board';
import SideBar from './SideBar';
import { Tools } from '../constants';

const BoardBuilderPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState('#2ccce4');
  const [tool, setTool] = useState(Tools.Paint);

  return (
    <div className="board-builder-container">
      <Board currentColor={currentColor} currentTool={tool} />
      <SideBar
        currentColor={currentColor}
        tool={tool}
        setTool={setTool}
        setCurrentColor={setCurrentColor}
      />
    </div>
  );
};

export default BoardBuilderPage;
