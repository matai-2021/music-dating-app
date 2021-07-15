import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
import SignIn from './SignIn'

function App (props) {
  return (
    <>
      <Route path="/" component={Header}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={SignIn}/>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
