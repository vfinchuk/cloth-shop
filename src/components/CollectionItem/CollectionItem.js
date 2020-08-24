import React from 'react'
import classes from './CollectionItem.module.scss'
import currencyFilter from '../../utils/filter.price'

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (
    <div className={classes.CollectionItem}>
      <div
        className={classes.Image}
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className={classes.CollectionFooter}>
        <span className={classes.Name}>{name}</span>
        <span className={classes.Price}>{currencyFilter(price)}</span>
      </div>
    </div>
  )
}

export default CollectionItem
