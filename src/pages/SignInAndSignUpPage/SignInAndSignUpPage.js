import React from 'react'
import classes from './SignInAndSignUpPage.module.scss'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const SignInAndSignUpPage = () => {
  return (
    <div className={classes.SignInAndSignUpPage}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
