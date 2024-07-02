import React, { memo } from "react";
import Child2 from "./Child2";

function Child1({data}) {
  console.log('Child 1 rerendered')
  return (
    <>
      <div>Child1</div>
      <button>child1 click</button>
      <Child2 data={data}/>
    </>
  );
}

export default memo(Child1);
