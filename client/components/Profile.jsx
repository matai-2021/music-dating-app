import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchGenres } from '../actions/index'

function Profile (props) {
  const { user, genres } = props
  const history = useHistory()
  const [genresForm, setGenresForm] = useState([])
  const [form, setForm] = useState({
    fullname: user.fullname,
    username: user.username,
    genderId: user.gender,
    description: user.description
  })

  const usersGenres = () => {
    return genres.map(genre => { if (user.genres.map(genre => genre.genreId).find(element => element === genre.id)) { return { ...genre, checked: true } } else { return { ...genre, checked: false } } })
  }

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
    console.log(userForm)
    // props.dispatch(createUser(userForm))

    setForm({
      fullname: '',
      username: '',
      description: '',
      genderId: ''
    })
    history.push('/matching')
  }

  return (
    <>
      <section className='whole-container'>
        <form className='form-title form-box'>
          <label name={form.fullname}>Fullname:
            <input onChange={handleChange} type="text" name="fullname" placeholder="Name" value={form.fullname}/>
          </label>
          <label name={form.username}>Username:
            <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username}/>
          </label>
          <label name={form.description}>Profile Description:
            <textarea onChange={handleChange} type="textarea" name="description" placeholder="Tell everyone about your taste...." value={form.description}/>
          </label>
          <label htmlFor="genderId">Gender:
            <select name="genderId" id="genderId" onChange={handleChange}>
              <option value={form.genderId}>{form.gender}</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Non Binary/Other</option>
            </select>
          </label>
          <label htmlFor="genre">Choose a Genre of Music:
            {usersGenres.map(genre => (
              <div key={genre.id}><input onChange={(event) => handleCheck(genre.id, event)} type="checkbox" id={genre.id} name={genre.name} value={genre.id} checked={genre.checked}/>{genre.name} </div>
            ))}
          </label>
          <button onClick={handleSubmit}>Register</button>
        </form>
      </section>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    genres: globalState.genres
  }
}

export default connect(mapStateToProps)(Profile)
