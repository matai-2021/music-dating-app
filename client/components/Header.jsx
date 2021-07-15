import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Header (props) {
  const { user } = props

  return (
    <>
      <div className='flex-container'>
        <nav>
          {user
            ? <> <Link to="/register"><h1 className='form-button-primary'>Register</h1></Link>
            <Link to="/login"><h1 className='form-button-secondary'>Already a user? Sign-In</h1></Link></>
            : <> <h1>Logout</h1> </>
          }
        </nav>
      </div>

    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Header)
