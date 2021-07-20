import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import Header from './Header'
import Register from './Register'
import Swipe from './Swipe'
import Profile from './Profile'
import Chat from './Chat'
import Nav from './Nav'
import Footer from './Footer'

function App (props) {
  return (
    <>
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Header}/>
      <Route exact path="/signin" component={Header}/>

      <Route
        path='/register'
        render={() => {
          return isAuthenticated()
            ? <Redirect to="/matching" />
            : <Register />
        }}
      />

      <Route
        path='/chat'
        render={() => {
          return !isAuthenticated()
            ? <Redirect to="/" />
            : <Chat />
        }}
      />

      <Route
        path='/matching'
        render={() => {
          return !isAuthenticated()
            ? <Redirect to="/" />
            : <Swipe />
        }}
      />

      <Route
        path='/profile'
        render={() => {
          return !isAuthenticated()
            ? <Redirect to="/" />
            : <Profile />
        }}
      />

      <Route path="/" component={Footer}/>
    </>
  )
}

export default connect()(App)
