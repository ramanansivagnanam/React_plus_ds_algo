import React, { useRef, useState } from "react";
import Tooltip from "./Tooltip";

export default function ButtonWithTooltip(props) {
  const { tooltipContent } = props;
  const [positions, setPositions] = useState(null);
  const buttonRef = useRef(null);
  const handlePointerEnter = () => {
    const { top, right, bottom, left } =
      buttonRef.current.getBoundingClientRect();
      setPositions({ top, right, bottom, left })
  };

  // pointer event -> Mouse event
  
  const handlePointeLeave = () => setPositions(null);
  
  return (
    <div style={{padding: 40}}>
      <button
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointeLeave}
        ref={buttonRef}
      >
        Hover over me
      </button>
      {positions && <Tooltip position={positions}>{tooltipContent}</Tooltip>}
    </div>
  );
}
