import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Register () {
  const history = useHistory()
  const [form, setForm] = useState({
    userName: ''
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
      userName: ''
    })
    history.push('/')
  }

  return (
    <section>
      <form className='form-title'>
        <label name={form.name}>
          <input onChange={handleChange} type="text" name="userName" placeholder="Username" value={form.userName}/>
        </label>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </section>
  )
}

export default Register
