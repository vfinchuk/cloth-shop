import React from 'react'
import classes from './CollectionPreview.module.scss'
import {withRouter} from 'react-router-dom'
import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({items, title, routeName, match, history}) => {
  const categoryClickHandler = () => {
    history.push(`${match.url}/${routeName}`)
  }

  return (
    <div className={classes.CollectionPreview}>
      <h1 className={classes.Title}>
        <span onClick={categoryClickHandler}>{title.toUpperCase()}</span>
      </h1>
      <div className={classes.Preview}>
        {
          items
              .filter((_, index) => index < 4)
              .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
              ))
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
