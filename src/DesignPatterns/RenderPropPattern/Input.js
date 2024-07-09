import React, { useState } from 'react'

function Input(props) {
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>Input
        <div>
            <input value={value} onChange={handleChange}  />
            { value && props.showValue(value) }
            { value && props.multiplyBy10(value) }
        </div>
    </div>
  )
}

export default Input