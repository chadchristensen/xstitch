import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPaintBrush } from '@fortawesome/pro-light-svg-icons';
import { Tools } from '../constants';

interface ToolBarProps {
  tool: Tools;
  handleToolChange: (toolType: Tools) => void;
}
const ToolBar: React.FC<ToolBarProps> = ({ tool, handleToolChange }) => {
  return (
    <div className="toolbar">
      <button
        className={['btn-with-icon']
          .concat(tool === Tools.Paint ? 'selected' : '')
          .join(' ')}
        onClick={() => handleToolChange(Tools.Paint)}
      >
        <FontAwesomeIcon icon={faPaintBrush} />
        <span>{Tools.Paint.toLowerCase()}</span>
      </button>
      <button
        className={['btn-with-icon']
          .concat(tool === Tools.Erase ? 'selected' : '')
          .join(' ')}
        onClick={() => handleToolChange(Tools.Erase)}
      >
        <FontAwesomeIcon icon={faEraser} />
        <span>{Tools.Erase.toLowerCase()}</span>
      </button>
    </div>
  );
};

export default ToolBar;
