import React from 'react';
import { SliderPicker } from 'react-color';

interface ColorPickerProps {
  currentColor: string;
  handleColorChange: (color: { hex: string }) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  currentColor,
  handleColorChange
}) => {
  return (
    <div style={{ width: '80%', padding: '1.5em' }}>
      <SliderPicker color={currentColor} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
