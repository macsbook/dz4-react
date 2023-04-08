import React from 'react'

const Input = ({ name, onChangeFunc, placeholder }) => {
  return (
    <input 
    name={name}
    onChange={onChangeFunc}
    placeholder={placeholder}gtit
    />
  )
}

export default Input