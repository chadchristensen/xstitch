import React, { useState } from 'react';
import Board from './Board';
import SideBar from './SideBar';
import { Tools } from '../constants';

const BoardBuilderPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState('#2ccce4');
  const [tool, setTool] = useState(Tools.Paint);
  const [documentColors, setDocumentColors] = useState<string[]>([]);

  const updateDocumentColors = (
    action: string,
    boardSquares: {
      [key: number]: string;
    }
  ): void => {
    let uniqueBoardColors = new Set(Object.values(boardSquares));

    switch (action) {
      case Tools.Erase:
        if (uniqueBoardColors.size === documentColors.length) return;
        setDocumentColors(
          documentColors.filter(color => uniqueBoardColors.has(color))
        );
        break;
      case Tools.Paint:
        if (uniqueBoardColors.size === documentColors.length) {
          if (uniqueBoardColors.size === 1) {
            setDocumentColors([uniqueBoardColors.values().next().value]);
            return;
          } else {
            let indexToRemove = documentColors.findIndex(
              color => uniqueBoardColors.has(color) === false
            );
            if (indexToRemove > -1) {
              // Remove color at index
              let updatedDocumentColors = [
                ...documentColors.slice(0, indexToRemove),
                ...documentColors.slice(indexToRemove + 1)
              ];
              // Add new color to document colors
              uniqueBoardColors.forEach(color => {
                if (!updatedDocumentColors.includes(color)) {
                  setDocumentColors([...updatedDocumentColors, color]);
                  return;
                }
              });
            }
          }
        } else if (uniqueBoardColors.size > documentColors.length) {
          uniqueBoardColors.forEach(color => {
            if (!documentColors.includes(color)) {
              setDocumentColors([...documentColors, color]);
              return;
            }
          });
        } else if (uniqueBoardColors.size <= documentColors.length) {
          setDocumentColors(
            documentColors.filter(color => uniqueBoardColors.has(color))
          );
        }
        break;
      case 'CLEAR_BOARD':
        setDocumentColors([]);
        break;
      default:
        break;
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
