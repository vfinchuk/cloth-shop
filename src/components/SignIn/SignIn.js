import React, {useState} from 'react'
import FormControl from '../UI/FormControl/FormControl'
import classes from './SignIn.module.scss'
import Button from '../UI/Button/Button'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

const SignIn = () => {
  const [formControls, setFormControls] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formControls

  const submitHandler = async event => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)

      setFormControls(() => ({
        email: '',
        password: ''
      }))
    } catch (e) {
      console.log(e)
    }
  }

  const changeInputHandler = event => {
    event.persist()

    const {name, value} = event.target
    setFormControls(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className={classes.SignIn}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormControl
          id="email"
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={changeInputHandler}
          autoComplete="email"
          required
        />
        <FormControl
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={changeInputHandler}
          autoComplete="new-password"
          required
        />
        <div className={classes.Buttons}>
          <Button type="submit">Sing In</Button>
          <Button
            onClick={signInWithGoogle}
            isGoogleSignIn
          >Sing In With Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
