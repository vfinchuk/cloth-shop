import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Category from './pages/Category/Category'
import ShopPage from './pages/ShopPage/ShopPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:category" component={Category} />
      </Switch>
    </div>
  )
}

export default App
