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
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <Chat />
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
