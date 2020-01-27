import React, { useState } from 'react';
import { BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPaintBrush } from '@fortawesome/pro-light-svg-icons';
import { Tools } from '../constants';

interface SideBarProps {
  currentColor: string;
  tool: Tools;
  setCurrentColor: (hex: string) => void;
  setTool: (toolType: Tools) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  currentColor,
  tool,
  setCurrentColor,
  setTool
}) => {
  const [isColorPickerDisplayed, setIsColorPickerDisplayed] = useState(false);

  const handlePickerClick = (): void => {
    // TODO: Convert to using function arg
    setIsColorPickerDisplayed(!isColorPickerDisplayed);
  };

  const handleChangeComplete = (color: { hex: string }): void => {
    setCurrentColor(color.hex);
  };

  const handleToolChange = (toolType: Tools): void => {
    setTool(toolType);
  };

  return (
    <div className="sidebar-container">
      <div className="toolbar">
        <button
          className={tool === Tools.Paint ? 'selected' : ''}
          onClick={() => handleToolChange(Tools.Paint)}
        >
          <FontAwesomeIcon icon={faPaintBrush} />
        </button>
        <button
          className={tool === Tools.Erase ? 'selected' : ''}
          onClick={() => handleToolChange(Tools.Erase)}
        >
          <FontAwesomeIcon icon={faEraser} />
        </button>
      </div>
      <p>Current Color</p>
      <hr />
      <div
        style={{
          backgroundColor: currentColor
        }}
        className="current-color"
        onClick={() => handlePickerClick()}
      ></div>
      {isColorPickerDisplayed ? (
        <BlockPicker color={currentColor} onChange={handleChangeComplete} />
      ) : null}
    </div>
  );
};

export default SideBar;
