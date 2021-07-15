import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignIn from './SignIn'

function Header (props) {
  const { user } = props

  return (
    <>
      <div>
        <h1>Music</h1>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet minima quibusdam ratione! Quae praesentium alias reprehenderit molestiae hic libero ipsum quam tempora excepturi optio nostrum pariatur, rem quas aspernatur!
        </p>
      </div>
      <div>
        {user.id
          ? <> <h1>Logout</h1> </>
          : <> <SignIn /> <div><h1>{'Don\'t have an account? '}<Link to="/register">Register Now</Link></h1></div> </>
        }
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
