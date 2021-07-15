import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Register () {
  const history = useHistory()
  const [form, setForm] = useState({
    name: '',
    userName: '',
    secret: '',
    genre: ''
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
    // createNewProduct(form, props.dispatch)
    setForm({
      name: '',
      userName: '',
      secret: '',
      genre: 'None'
    })
    history.push('/')
  }

  return (
    <section className='whole-container'>
      <form className='form-title'>
        <label name={form.name}>
          <input onChange={handleChange} type="text" name="name" placeholder="Name" value={form.name}/>
        </label>
        <label name={form.country}>
          <input onChange={handleChange} type="text" name="userName" placeholder="Username" value={form.userName}/>
        </label>
        <label name={form.description}>
          <input onChange={handleChange} type="text" name="secret" placeholder="Password" value={form.secret}/>
        </label>
        <br></br>
        <label htmlFor="genre">Choose a Genre of Music:
          <select name="genre" id="genre" onChange={handleChange}>
            <option value={form.genre}>Please Select an Option</option>
            <option value="Rock">Rock</option>
            <option value="K-Pop">K-Pop</option>
            <option value="Indie Rock">Indie Rock</option>
            <option value="Pop">Pop</option>
          </select>
        </label>
        <button className='form-button-primary' onClick={handleSubmit}>Register</button>
      </form>
    </section>
  )
}

export default Register
