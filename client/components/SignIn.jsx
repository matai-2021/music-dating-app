import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Register () {
  const history = useHistory()
  const [form, setForm] = useState({
    userName: '',
    password: ''
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
    // createNewProduct(form, props.dispatch) Check if login .....
    setForm({
      userName: '',
      password: ''
    })
    history.push('/')
  }

  return (
    <>
      <form>
        <label name={form.name}>
          <input onChange={handleChange} type="text" name="userName" placeholder="Username" value={form.userName}/>
        </label>
        <label name={form.country}>
          <input onChange={handleChange} autoComplete="on" type="password" name="password" placeholder="Password" value={form.password}/>
        </label>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </>
  )
}

export default Register
