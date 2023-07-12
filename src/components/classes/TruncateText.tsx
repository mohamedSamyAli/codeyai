import React, { useState, useRef, useEffect } from 'react';

export const ResizableLabel = () => {
  const [text, setText] = useState('');
  const [width, setWidth] = useState(200);
  const [isResizing, setIsResizing] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (event) => {
    if (!isResizing) return;

    const newWidth = event.clientX - labelRef.current.getBoundingClientRect().left;
    setWidth(newWidth);
  };

  const truncatedText = text.length > 30 ? text.substring(0, 30) + '...' : text;

  return (
    <>
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div
        ref={labelRef}
        style={{
            width: `${width}px`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          resize: 'horizontal',
          border: '1px solid #ddd',
          padding: '4px',
          cursor: 'ew-resize',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        >
        {truncatedText}
      </div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
</>
  );
};