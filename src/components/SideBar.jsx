import React from 'react';
import ClassSvg from '../assets/class.svg'
import InnerClassSvg from '../assets/innerClass.svg'
import InterfaceSvg from '../assets/interfaceSvg.svg'
import { Tooltip } from 'antd';
export const SideBar = () => {

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'ClassDigram')} draggable>
        <Tooltip title="class">
          <img alt="class" src={ClassSvg} />
        </Tooltip>
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'InterfaceDigram')} draggable>
        <Tooltip title="interface">
          <img alt="interface" src={InterfaceSvg} />
        </Tooltip>
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'InnerClassDigram')} draggable>
        <Tooltip title="Inner Class">
          <img alt="inner class" src={InnerClassSvg} />
        </Tooltip>
      </div>
    </aside>
  );
};
