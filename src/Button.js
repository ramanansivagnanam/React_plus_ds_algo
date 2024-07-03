import React, { useContext, useRef } from 'react'
import { ThemeContext } from './context';

export default function Button(props) {
    const { children } = props;
    const [theme, updateTheme ] = useContext(ThemeContext)
        const buttonRef = useRef(null);

    const handleClick = () => {
      const theeeme = theme === 'dark' ? 'light' : 'dark';
      updateTheme(theeeme);
    }
   
   return (
    <button onClick={handleClick} ref={buttonRef}>{children}</button>
  )
}
