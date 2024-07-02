import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Tooltip(props) {
  const { children, position: { top, right, bottom, left }, position } = props;
  // console.log({ top, right, bottom, left });
  const [ tooltipHeight, updateTooltipHeight ] = useState(null);
  const tooltipRef = useRef(null);

  let x = 0;
  let y = 0;

  if(position !== null && tooltipHeight) {
    x = left;
    y = top - tooltipHeight;
    if(y < 0) {
      y = bottom
    }
  }
  let now = performance.now;
  // while(performance.now - now < 400) {
  //   // do nothing 
  //   // performance throttling
  // }

  // repaint blocking effect

  useLayoutEffect(()=> {
    const { height } = tooltipRef.current.getBoundingClientRect();
    updateTooltipHeight(height);
  }, []);

  return createPortal(
    <>
      <div ref={tooltipRef} style={{
        background: 'black',
        color: '#FFF',
        position: "absolute",
        left: 0,
        top: 0,
        padding: 5,
        borderRadius: 5,
        transform: `translate3d(${x}px, ${y}px, 0 )`
      }} >{children}</div>
    </>,
    document.body
  );
}
