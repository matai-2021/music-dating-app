import { logOff } from 'authenticare/client'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div>
      <div><NavLink to="/signin">Sign in</NavLink></div>
      <div><NavLink to="#" onClick={logOff}></NavLink></div>
    </div>
  )
}
