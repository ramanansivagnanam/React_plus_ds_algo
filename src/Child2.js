import React, { memo } from 'react'

function Child2({data}) {
  console.log('Child 2 rerendered')
  return (
    <>
    <div>Child2</div>
    <button>child2 click</button>
    </>
  )
}

export default memo(Child2);