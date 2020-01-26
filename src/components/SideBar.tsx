import React, { useState } from 'react';
import { BlockPicker } from 'react-color';

interface SideBarProps {
  currentColor: string;
  setCurrentColor: (hex: string) => void;
  setTool: (toolType: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  currentColor,
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

  const handleToolChange = (toolType: string): void => {
    // TODO: Set up tool types as constants (enums?)
    setTool(toolType);
  };

  return (
    <div className="sidebar-container">
      <div className="toolbar">
        <button onClick={() => handleToolChange('PAINT')}>Paint</button>
        <button onClick={() => handleToolChange('ERASE')}>Erase</button>
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
