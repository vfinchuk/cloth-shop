import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Category from './pages/Category/Category'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUpPage
  from './pages/SignInAndSignUpPage/SignInAndSignUpPage'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentUser} from './redux/user/userActions'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }))
        })
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route path="/shop/:category" component={Category}/>
        <Route path="/signIn" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App
