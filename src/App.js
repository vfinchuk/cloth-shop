import React, {useEffect} from 'react'
import {setCurrentUser} from './redux/user/userActions'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import Category from './pages/Category/Category'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUpPage
  from './pages/SignInAndSignUpPage/SignInAndSignUpPage'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(({user}) => user.currentUser)

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
  }, [dispatch])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route path="/shop/:category" component={Category}/>
        <Route
          path="/signIn"
          render={() =>
            currentUser
              ? ( <Redirect to="/" />)
              : ( <SignInAndSignUpPage />)
          }
        />
      </Switch>
    </div>
  )
}

export default App
