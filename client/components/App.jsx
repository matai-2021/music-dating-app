import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
import SignIn from './SignIn'

import Chat from './Chat'

function App (props) {
  return (
    <>
      <Route path="/" component={Header}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={SignIn}/>
      <Route exact path="/users/chat" component={Chat}/>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
