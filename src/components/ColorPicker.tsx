import React from 'react';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
  currentColor: string;
  handleColorChange: (color: { hex: string }) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  currentColor,
  handleColorChange
}) => {
  return (
    <div className="color-picker">
      <ChromePicker
        disableAlpha={true}
        color={currentColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
