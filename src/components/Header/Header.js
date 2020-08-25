import React from 'react'
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
  return (
    <div className={classes.Header}>
      <Link to={`/`} className={classes.LogoContainer}>
        <Logo />
      </Link>

      <div className={classes.Options}>
        <Link to={'/shop'} className={classes.Option}>SHOP</Link>
        <Link to={'/contacts'} className={classes.Option}>CONTACTS</Link>
        {
          currentUser
          ? <div
            className={classes.Option}
            onClick={() => auth.signOut()}
          >SIGN OUT</div>
          : <Link to={'/signIn'}>SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default Header
