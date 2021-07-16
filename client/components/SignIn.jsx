import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchUserName, loginSuccess } from '../actions'

function SignIn (props) {
  const { loginError } = props
  const history = useHistory()
  const [form, setForm] = useState({
    username: ''
  })

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    props.dispatch(fetchUserName(form))
      // .then(() => {
      //   return props.dispatch(loginSuccess())
      // })
      .then(() => {
        setForm({
          username: ''
        })
        console.log(loginError)
        if (!loginError) {
          history.push('/matching')
        }
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <section>
        {loginError &&
  <div>
    <p>Username not found</p>
  </div>}
        <form className='form-title'>
          <label name="UserName">
            <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
          </label>
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </section>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    loginError: globalState.loginError,
    user: globalState.user
  }
}

export default connect(mapStateToProps)(SignIn)
