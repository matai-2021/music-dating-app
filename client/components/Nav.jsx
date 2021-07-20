import { logOff } from 'authenticare/client'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions'
import { IfAuthenticated } from './Authenticated'
import { IoIosLogOut } from 'react-icons/io'
import { MdQueueMusic } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { RiChatNewLine, RiChat4Line } from 'react-icons/ri'

function Nav (props) {
  const { notifiactions } = props
  function logout () {
    logOff()
    props.dispatch(logoutUser())
  }

  function Navigation () {
    const pathname = window.location.href.replace('http://localhost:3000/#', '')

    const navigationLinks = [
      { path: '/profile' },
      { path: '/matching' },
      { path: '/chat' },
      { path: 'constant' }
    ]

    const navLinks = navigationLinks.map(element => (element.path !== pathname) ? { ...element, return: true } : { ...element, return: false })
    if (pathname === '/') {
      return null
    } else {
      return (
        <>
          <div>
            <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
          </div>
          <div>
            {navLinks[0].return && <NavLink className='img-size' to="/profile"><CgProfile /></NavLink>}
            {navLinks[1].return && <NavLink className='pre-title' to='/matching'><MdQueueMusic /></NavLink>}
            {navLinks[2].return && <NavLink className={`img-size ${notifiactions ? 'notify' : ''}`} to="/chat">{notifiactions ? <RiChatNewLine /> : <RiChat4Line /> }</NavLink>}
            {navLinks[3].return && <NavLink className='img-size' to="/" onClick={logout}><IoIosLogOut /></NavLink>}
          </div>
        </>
      )
    }
  }

  return (
    <>
      <IfAuthenticated>
        <nav className='nav-container'>
          <Navigation />
        </nav>
      </IfAuthenticated>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    notifiactions: globalState.notifiactions
  }
}

export default connect(mapStateToProps)(Nav)
