import { logOff } from 'authenticare/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav () {
  return (
    <div>
      <IfAuthenticated>
        <NavLink to="#" onClick={logOff}>Sign Off</NavLink>
        <div><NavLink to="/profile" onClick={logOff}>My Profile</NavLink></div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <NavLink to="/signin">Sign in</NavLink>
      </IfNotAuthenticated>
    </div>
  )
}
