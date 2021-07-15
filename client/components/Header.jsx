import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Header (props) {
  const { user } = props

  return (
    <>
      <div>
        <nav>
          {user
            ? <> <Link to="/login"><h1>Sign-In</h1></Link> <Link to="/register"><h1>Register</h1></Link> </>
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
