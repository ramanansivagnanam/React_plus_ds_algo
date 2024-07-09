import React, { useRef } from 'react'
import Hoc from './hoc'

function Component2() {
  console.log('Component 2');
  return (
    <div className='componentCls'>Component2</div>
  )
}

export default Hoc(Component2)

// export default Component2;