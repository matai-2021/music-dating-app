import { isAuthenticated, register, getDecodedToken } from 'authenticare/client'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchGenres, fetchUserName, setUsersGenres } from '../actions/index'
import { baseUrl } from '../config'
import checkURL from '../utils/image-auth'

function Register (props) {
  const history = useHistory()
  const { genres } = props
  const [genresForm, setGenresForm] = useState([])
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    genderId: '',
    imageUrl: '',
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
    const { fullname, imageUrl, username, genderId, description } = form
    const userForm = {
      fullname,
      username,
      description,
      gender_id: genderId,
      image_url: imageUrl
    }

    const filteredGenres = genres.map(genre => {
      if (genresForm.map(genreSelected => genreSelected).find(element => element === genre.id)) {
        return { genreId: genre.id, name: genre.name }
      } else return null
    }).filter(element => element !== null)

    register(userForm, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          const { id } = getDecodedToken()
          return props.dispatch(setUsersGenres(id, filteredGenres))
        }
        return null
      })
      .then(() => {
        props.dispatch(fetchUserName(userForm))
        history.push('/matching')
        return null
      })
      .catch(err => {
        console.error(err)
      })
    // Creating user in Chatengine
    var axios = require('axios')
    var data = {
      username: form.username,
      secret: 'eda123',
      first_name: form.fullname
    }

    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': '{{ff67630c-b0eb-4c46-915a-f77c9d57a1b9}}'
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        return null
      })
      .catch(function (error) {
        console.log(error)
      })

    setForm({
      fullname: '',
      username: '',
      description: '',
      genderId: '',
      imageUrl: ''
    })
  }

  return (
    <section className='profile-container'>
      <div>
        <img className='profile-img' src={checkURL(form.imageUrl) ? form.imageUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} />
      </div>
      <form className='form-title form-box'>
        <label name={form.fullname}>
          <input onChange={handleChange} type="text" name="fullname" placeholder="Name" value={form.fullname} />
        </label>
        <label name={form.username}>
          <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username} />
        </label>
        <label name={form.imageUrl}>
          <input onChange={handleChange} type="text" name="imageUrl" placeholder="Image Url" value={form.imageUrl} />
        </label>
        <label name={form.description}>
          <textarea className='form-box-height text-size' onChange={handleChange} type="textarea" name="description" placeholder="Tell everyone about your taste...." value={form.description} />
        </label>
        <label htmlFor="genderId">
          <select name="genderId" id="genderId" onChange={handleChange}>
            <option value={form.genre}>Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Non Binary/Other</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <span>Genres:</span>
        <table className='table-container'>
          <tbody>
            {genres.map(genre => (
              <tr key={`tr-${genre.id}`}>
                <td key={`td-input-${genre.id}`}>
                  <input onChange={(event) => handleCheck(genre.id, event)} type="checkbox" id={genre.id} name={genre.name} value={genre.id} checked={genre.checked} />
                </td>
                <td key={`td-label-${genre.id}`} className='text-align'>
                  <label key={genre.id + 'label'} className="para-description" htmlFor={genre.id}>{genre.name}</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <button className='form-button-primary' onClick={handleSubmit}>Register</button>
      </form>
    </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    genres: globalState.genres,
    match: globalState.match
  }
}

export default connect(mapStateToProps)(Register)
