import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOff } from 'authenticare/client'
import SignIn from './SignIn'

function Header (props) {
  const { user } = props
  console.log(user)

  return (
    <>
      <section className='background'>
        <div className='flex-container'>
          <h1 className='pre-title'>Music</h1>
        </div>
        <div>
          <p className='para-title'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet minima quibusdam ratione! Quae praesentium alias reprehenderit molestiae hic libero ipsum quam tempora excepturi optio nostrum pariatur, rem quas aspernatur!
          </p>
        </div>
        <div>
          {user.id
            ? <> <NavLink to="#" onClick={logOff}>Sign Off</NavLink> </>
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
