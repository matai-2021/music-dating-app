import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchUserName } from '../actions'

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
    console.log(form)
    props.dispatch(fetchUserName(form))
    // createNewProduct(form, props.dispatch)
    setForm({
      username: ''
    })
    history.push('/')
  }

  return (
      <section>
        {loginError &&
  <div className='preview-title'>
    <p>Username not found</p>
  </div>}
        <form className='form-title'>
          <label name="UserName">
            <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
          </label>
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    loginError: globalState.loginError
  }
}

export default connect(mapStateToProps)(SignIn)
