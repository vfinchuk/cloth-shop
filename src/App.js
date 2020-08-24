import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Category from './pages/Category/Category'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/:category" component={Category} />
      </Switch>
    </div>
  )
}

export default App
