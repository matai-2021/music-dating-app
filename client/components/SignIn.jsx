import { isAuthenticated, signIn } from 'authenticare/client'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchUserName, invalidUsername, fetchGenres } from '../actions'
import { baseUrl } from '../config'

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

  async function handleSubmit (event) {
    props.dispatch(fetchGenres())
    event.preventDefault()
    const { username } = form
    try {
      await signIn({ username, password: 'eda123' }, { baseUrl })
      if (isAuthenticated()) {
        props.dispatch(fetchUserName(form))
        history.push('/matching')
      }
    } catch (error) {
      // console.log(error)
      if (error.message === 'INVALID_CREDENTIALS') {
        props.dispatch(invalidUsername())
      }
    }
  }

  return (
    <section>
      {loginError &&
  <div className='preview-title'>
    <p>Username not found</p>
  </div>}
      <form className='form-title'>
        <label className='form-button-signin' name="UserName">
          <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
        </label>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    loginError: globalState.loginError,
    user: globalState.user
  }
}

export default connect(mapStateToProps)(SignIn)
