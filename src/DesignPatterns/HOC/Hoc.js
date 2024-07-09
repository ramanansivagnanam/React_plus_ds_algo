import React, { useEffect, useRef, useState } from "react";

function Hoc(Component) {
  console.log("Higer order component");

  return function UpdatedComponent(props) {
    const ref = useRef(null);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    useEffect(() => {
      if (ref.current) {
        const { height, width } = ref.current.getBoundingClientRect();
        setHeight(height);
        setWidth(width);
      }
    }, []);
    return <Component ref={ref} height={height} width={width} {...props} />;
  };
}

export default Hoc;
