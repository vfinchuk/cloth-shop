import React from 'react'
import classes from './MenuItem.module.scss'

const MenuItem = ({title, imageUrl, size}) => {
  const itemCls = [classes.MenuItem]
  if (size) {
    itemCls.push(classes.Large)
  }

  return (
    <div className={itemCls.join(' ')}>
      <div
        className={classes.BackgroundImage}
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className={classes.Content}>
        <h1 className={classes.Title}>{title}</h1>
        <span className={classes.Subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
