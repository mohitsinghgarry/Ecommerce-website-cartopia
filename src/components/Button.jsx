import React from 'react'
import './Button.css'
export const Button = (props) => {
  const {name} = props;
  return (
    <button className="button-89" role="button">{name}</button>
  )
}
