import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Category from './pages/Category/Category'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUpPage
  from './pages/SignInAndSignUpPage/SignInAndSignUpPage'
import {auth} from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(() => user)
    })

    return () => unsubscribe()
  }, [currentUser])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:category" component={Category} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
