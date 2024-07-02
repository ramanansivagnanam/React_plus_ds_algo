
import React, { forwardRef } from "react";
// const Input = forwardRef((props, ref) => {
//     return(
//         <input ref={ref} {...props} />
//     )
// });

const Input = forwardRef((props) => {
    return(
        <input ref={props.inputRef} />
    )
});

export default Input;