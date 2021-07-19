import React from 'react'
import { logOff } from 'authenticare/client'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'
import SignIn from './SignIn'

function Header (props) {
  const { user } = props

  function logout () {
    logOff()
    props.dispatch(logoutUser())
  }

  return (
    <>
      <section className='background'>
        <div className='flex-container'>
          <img src='/resonatelogo.png' alt="resonatelogo" />
        </div>
        <div>
          <p className='para-title'>
          Everyone speaks the universal language that is music, and we believe some of the best relationships are formed over just that. A shared interest of an artist, band, album, or even a genre is enough to spark a lifetime connection. There&apos;s no better feeling when music resonates with you, and in turn, resonating with someone you&apos;ve shared it with. So create an account below and start resonating with people who love music just like you!
          </p>
        </div>
        <div>
          {user.id
            ? <> <NavLink to="#" onClick={logout}>Sign Off</NavLink> </>
            : <> <SignIn className='form-button-secondary' /> <div><h1 className='preview-title'>{'Don\'t have an account? '}<Link className='form-button-primary' to="/register">Register Now</Link></h1></div> </>
          }
        </div>

      </section>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Header)
