import React, { useState } from 'react';
import { BlockPicker } from 'react-color';

interface SideBarProps {
  setCurrentColor: (hex: string) => void;
  currentColor: string;
}

const SideBar: React.FC<SideBarProps> = ({ currentColor, setCurrentColor }) => {
  const [isColorPickerDisplayed, setIsColorPickerDisplayed] = useState(false);

  const handlePickerClick = (): void => {
    // TODO: Convert to using function arg
    setIsColorPickerDisplayed(!isColorPickerDisplayed);
  };

  const handleChangeComplete = (color: { hex: string }): void => {
    setCurrentColor(color.hex);
  };

  return (
    <div className="sidebar-container">
      <div>
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
    </div>
  );
};

export default SideBar;
