import React, { useRef } from 'react'

export default function Button(props) {
    const { children } = props;
    const buttonRef = useRef(null);
    
   return (
    <button ref={buttonRef}>{children}</button>
  )
}
