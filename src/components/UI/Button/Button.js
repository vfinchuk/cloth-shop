import React from 'react'
import classes from './Button.module.scss'

const Button = ({children, ...otherProps}) => {
  return (
    <button className={classes.Button} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
