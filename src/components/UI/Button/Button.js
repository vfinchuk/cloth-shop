import React from 'react'
import classes from './Button.module.scss'

const Button = ({children, isGoogleSignIn, ...otherProps}) => {
  const cls = [classes.Button]
  if (isGoogleSignIn) {
    cls.push(classes.GoogleSignIn)
  }

  return (
    <button className={cls.join(' ')} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
