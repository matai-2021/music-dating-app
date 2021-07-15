import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createUser, fetchGenres } from '../actions/index'

function Register (props) {
  const { genres } = props
  // const aviableGenres = [
  //   {
  //     id: 1,
  //     name: 'Indie Rock'
  //   },
  //   {
  //     id: 2,
  //     name: 'Grunge'
  //   },
  //   {
  //     id: 3,
  //     name: 'Death Metal'
  //   },
  //   {
  //     id: 4,
  //     name: 'Grime'
  //   },
  //   {
  //     id: 5,
  //     name: 'Samba'
  //   }
  // ]
  useEffect(() => {
    props.dispatch(fetchGenres())
  }, [])

  const history = useHistory()
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    usersecret: '',
    genderId: '',
    description: ''
  })

  const [genresForm, setGenresForm] = useState([])

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleCheck (genreId, event) {
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
      usersecret: 'eda123',
      description,
      genderId,
      genres: genresForm
    }
    props.dispatch(createUser(userForm))
    // createNewProduct(form, props.dispatch)
    setForm({
      fullname: '',
      username: '',
      usersecret: '',
      description: '',
      genderId: ''
    })
    history.push('/')
  }

  return (
    <>
      <form>
        <label name={form.fullname}>
          <input onChange={handleChange} type="text" name="fullname" placeholder="Name" value={form.fullname}/>
        </label>
        <label name={form.username}>
          <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
        </label>
        <label name={form.description}>
          <textarea onChange={handleChange} type="textarea" name="description" placeholder="Tell everyone about your taste...." value={form.description}/>
        </label>
        <label htmlFor="genderId">Gender:
          <select name="genderId" id="genderId" onChange={handleChange}>
            <option value={form.genre}>Please Select an Option</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Non Binary/Other</option>
          </select>
        </label>
        <label htmlFor="genre">Choose a Genre of Music:
          {genres.map(genre => (
            <div key={genre.id}><input onChange={(event) => handleCheck(genre.id, event)} type="checkbox" id={genre.id} name={genre.name} value={genre.id}/>{genre.name}</div>
          ))}
        </label>
        <button onClick={handleSubmit}>Register</button>
      </form>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    genres: globalState.genres
  }
}

export default connect(mapStateToProps)(Register)
