import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './MenuItem.module.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  const itemCls = [classes.MenuItem]
  if (size) {
    itemCls.push(classes.Large)
  }

  const itemClickHandler = () => {
    history.push(`${match.url}${linkUrl}`)
  }

  return (
    <div className={itemCls.join(' ')} onClick={itemClickHandler}>
      <div
        className={classes.BackgroundImage}
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className={classes.Content}>
        <h1 className={classes.Title}>{title.toUpperCase()}</h1>
        <span className={classes.Subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
