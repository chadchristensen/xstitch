import React from 'react';
import { Tools } from '../constants';
import ToolBar from './ToolBar';
import ColorPicker from './ColorPicker';

interface SideBarProps {
  currentColor: string;
  tool: Tools;
  setCurrentColor: (hex: string) => void;
  setTool: (toolType: Tools) => void;
  documentColors: string[];
}

const SideBar: React.FC<SideBarProps> = ({
  currentColor,
  tool,
  setCurrentColor,
  setTool,
  documentColors
}) => {
  const handleColorChange = (color: { hex: string }): void => {
    setCurrentColor(color.hex);
  };

  const handleToolChange = (toolType: Tools): void => {
    setTool(toolType);
  };

  return (
    <div className="sidebar-container">
      <ToolBar tool={tool} handleToolChange={handleToolChange} />
      <p>Current Color</p>
      <hr />
      <div
        style={{
          backgroundColor: currentColor
        }}
        className="current-color"
      ></div>
      <ColorPicker
        currentColor={currentColor}
        handleColorChange={handleColorChange}
      />
      <div className="document-colors-container">
        <p>Document Colors</p>
        <div className="document-colors-options">
          {documentColors.map((color, i) => (
            <div
              key={i}
              onClick={() => setCurrentColor(color)}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
