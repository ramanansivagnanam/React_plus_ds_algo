import React, { forwardRef, useRef } from 'react'
import Hoc from './hoc';
import './Hoc.css'

function Component1(props, forwardedRef) {
  console.log('Component 1');
  return (
    <div className='componentCls' ref={forwardedRef}>Component1
      <h5>Element height is : {props.height}</h5>
      <h5>Element width is : {props.width}</h5>
       <p>Data from parent: {props.data}</p>
    </div>
  )
}

export default Hoc(forwardRef(Component1));

// export default Component1;