import React from 'react'
import classes from './FormControl.module.scss'

const Input = ({handleChange, label, ...otherProps}) => {
  const labelCls = [classes.FormInputLabel]

  if (otherProps.value.length) {
    labelCls.push(classes.Shrink)
  }

  return (
    <div className={classes.Group}>
      <input
        className={classes.FormInput}
        onChange={handleChange}
        {...otherProps}
      />
      {
        label
          ? <label className={labelCls.join(' ')}>{label}</label>
          : null
      }
    </div>
  )
}

export default Input
