import React, { useState } from 'react';
import Board from './Board';
import SideBar from './SideBar';
import { Tools } from '../constants';

const BoardBuilderPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState('#2ccce4');
  const [tool, setTool] = useState(Tools.Paint);
  const [documentColors, setDocumentColors] = useState<string[]>([]);

  const updateDocumentColors = (boardSquares: {
    [key: number]: string;
  }): void => {
    if (tool === Tools.Erase) {
      let uniqueBoardColors = new Set(Object.values(boardSquares));

      if (uniqueBoardColors.size === documentColors.length) return;

      setDocumentColors(
        documentColors.filter(color => uniqueBoardColors.has(color))
      );
      return;
    }

    if (tool === Tools.Paint) {
      if (documentColors.includes(currentColor)) {
        return;
      } else {
        setDocumentColors([...documentColors, currentColor]);
      }
    }
  };

  return (
    <div className="board-builder-container">
      <Board
        currentColor={currentColor}
        currentTool={tool}
        updateDocumentColors={updateDocumentColors}
      />
      <SideBar
        currentColor={currentColor}
        tool={tool}
        setTool={setTool}
        setCurrentColor={setCurrentColor}
        documentColors={documentColors}
      />
    </div>
  );
};

export default BoardBuilderPage;
