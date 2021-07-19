import { isAuthenticated, register } from 'authenticare/client'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createUser, fetchGenres } from '../actions/index'
import { baseUrl } from '../config'

function Register (props) {
  const history = useHistory()
  const { genres } = props
  const [genresForm, setGenresForm] = useState([])
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    genderId: '',
    description: ''
  })

  useEffect(() => {
    props.dispatch(fetchGenres())
  }, [])

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleCheck (genreId, event) {
    const { checked } = event.target
    if (checked) {
      setGenresForm([...genresForm, genreId])
    } else {
      setGenresForm(genresForm.filter(id => id !== genreId))
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    const { fullname, username, genderId, description } = form
    const userForm = {
      fullname,
      username,
      description,
      genderId,
      genre: genresForm
    }
    props.dispatch(createUser(userForm))

    register({ username }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
        return null
      })
      .catch(err => {
        console.error(err)
      })
    // // Creating user in Chatengine
    // var axios = require('axios')
    // var data = {
    //   username: form.username,
    //   secret: 'eda123',
    //   first_name: form.fullname
    // }

    // var config = {
    //   method: 'post',
    //   url: 'https://api.chatengine.io/users/',
    //   headers: {
    //     'PRIVATE-KEY': '{{ff67630c-b0eb-4c46-915a-f77c9d57a1b9}}'
    //   },
    //   data: data
    // }

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data))
    //     return null
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })

    setForm({
      fullname: '',
      username: '',
      description: '',
      genderId: ''
    })
    history.push('/matching')
  }

  return (
    <section className='whole-container'>
      <form className='form-title form-box'>
        <label name={form.fullname}>
          <input onChange={handleChange} type="text" name="fullname" placeholder="Name" value={form.fullname}/>
        </label>
        <label name={form.username}>
          <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
        </label>
        <label name={form.description}>
          <textarea className='form-box-height text-size' onChange={handleChange} type="textarea" name="description" placeholder="Tell everyone about your taste...." value={form.description}/>
        </label>
        <label htmlFor="genderId">Gender:
          <select name="genderId" id="genderId" onChange={handleChange}>
            <option value={form.genre}>Please Select an Option</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Non Binary/Other</option>
          </select>
        </label>
        <label className="para-description" htmlFor="genre">Choose a Genre of Music:
          {genres.map(genre => (
            <div key={genre.id}><input onChange={(event) => handleCheck(genre.id, event)} type="checkbox" id={genre.id} name={genre.name} value={genre.id}/>{genre.name}</div>
          ))}
        </label>
        <br></br>
        <button className='form-button-primary' onClick={handleSubmit}>Register</button>
      </form>
    </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    genres: globalState.genres
  }
}

export default connect(mapStateToProps)(Register)
