import { logOff } from 'authenticare/client'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav (props) {
  function logout () {
    logOff()
    props.dispatch(logoutUser())
  }

  return (
    <div className='form-button-signin'>
      <IfAuthenticated>
        <NavLink to="/" onClick={logout}>Sign Off</NavLink>
        <div><NavLink to="/profile">My Profile</NavLink></div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <NavLink to="/signin" className='form-button-secondary nav-link'>Sign in</NavLink>
      </IfNotAuthenticated>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    swipee: globalState.swipee,
    match: globalState.match
  }
}

export default connect(mapStateToProps)(Nav)
