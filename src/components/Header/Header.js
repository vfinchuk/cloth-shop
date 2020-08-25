import React from 'react'
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to={`/`} className={classes.LogoContainer}>
        <Logo />
      </Link>

      <div className={classes.Options}>
        <Link to={'/shop'} className={classes.Option}>SHOP</Link>
        <Link to={'/contacts'} className={classes.Option}>CONTACTS</Link>
      </div>
    </div>
  )
}

export default Header
