import React, { useState } from 'react'
import { Button } from 'antd'

const MyButton = ({ children, onClick }) => {
  const [count, setCount] = useState(0)
  const disabled = count >=5
  const handleClick = () => {
    const newCount = count + 1
    setCount(newCount)
    if (!disabled) {
      onClick && onClick()
    }
  }
  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      type="primary"
    >{children}--YT</Button>
  )
}

export default MyButton