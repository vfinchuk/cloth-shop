import React, {useState} from 'react'
import classes from './SignUp.module.scss'
import FormControl from '../UI/FormControl/FormControl'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import Button from '../UI/Button/Button'


const SignUp = () => {
  const [formControls, setFormControls] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {displayName, email, password, confirmPassword} = formControls

  const submitHandler = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert(`Passwords don't match`)
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, {displayName})

      setFormControls(() => ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }))
    } catch (e) {
      console.log(e)
    }
  }

  const inputChangeHandler = event => {
    event.persist()
    const {name, value} = event.target

    setFormControls(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className={classes.SignUp}>
      <h2>I dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormControl
          name='displayName'
          type='text'
          value={displayName}
          label='Display name'
          handleChange={inputChangeHandler}
          required
        />
        <FormControl
          name='email'
          type='email'
          value={email}
          label='Email'
          handleChange={inputChangeHandler}
          required
        />
        <FormControl
          name='password'
          type='password'
          value={password}
          label='Password'
          handleChange={inputChangeHandler}
          required
        />
        <FormControl
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          label='confirmPassword'
          handleChange={inputChangeHandler}
          required
        />

        <Button type='submit'>SIGN UP</Button>
      </form>
    </div>
  )
}

export default SignUp
