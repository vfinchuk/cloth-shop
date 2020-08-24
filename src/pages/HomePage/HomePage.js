import React from 'react'
import classes from './HomePage.module.scss'
import Directory from '../../components/Directory/Directory'

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <Directory />
    </div>
  )
}

export default HomePage
