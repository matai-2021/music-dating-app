import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserName, pathUserInformation } from '../actions'
import checkURL from '../utils/image-auth'

function Profile (props) {
  const { user, genres } = props
  const history = useHistory()
  const [genresForm, setGenresForm] = useState(false)
  const [gendersForm, setGendersForm] = useState(null)
  const [form, setForm] = useState({
    userId: user.id,
    fullname: user.fullname,
    username: user.username,
    genderId: '',
    imageUrl: user.imageUrl,
    description: user.description
  })

  const genders = [
    { id: 1, genderName: 'Male' },
    { id: 2, genderName: 'Female' },
    { id: 3, genderName: 'Non Binary/Other' }
  ]

  useEffect(() => {
    if (genres) {
      const updateGenreForm = genres.map(genre => { if (user.genres.map(genre => genre.genreId).find(element => element === genre.id)) { return { ...genre, checked: true } } else { return { ...genre, checked: false } } })
      setGenresForm(updateGenreForm)
    }
    if (user.genderName) {
      setGendersForm([...genders.filter(element => element.genderName === user.genderName), ...genders.filter(element => element.genderName !== user.genderName)])
    }
  }, [user])

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleCheck (genreId) {
    const updateForm = genresForm.map(element => element.id === genreId ? { ...element, checked: !element.checked } : { ...element })
    setGenresForm(updateForm)
  }

  function handleSubmit (event) {
    event.preventDefault()
    const { userId, fullname, username, genderId, description, imageUrl } = form
    const genreIds = genresForm.filter(genreForm => genreForm.checked === true).map(genres2 => genres2.id)
    const userForm = {
      userId,
      fullname,
      username,
      description,
      imageUrl,
      genderId: Number(genderId) || gendersForm[0].id,
      genres: genreIds
    }
    props.dispatch(pathUserInformation(userForm))
    props.dispatch(fetchUserName(userForm))

    setForm({
      fullname: '',
      username: '',
      description: '',
      genderId: '',
      imageUrl: ''
    })
    history.push('/matching')
  }

  return (
    <section className='profile-container'>
      <div>
        <img className='profile-img' src={checkURL(form.imageUrl) ? form.imageUrl : user.imageUrl}/>
      </div>
      <form className='form-title form-box'>
        <label name={form.username}>Username:
          <input onChange={handleChange} type="text" name="username" placeholder="Username" value={form.username} disabled/>
        </label>
        <label name={form.imageUrl}>Image:
          <input onChange={handleChange} type="text" name="imageUrl" placeholder="Image Url" value={form.imageUrl}/>
        </label>
        <label name={form.fullname}>Fullname:
          <input onChange={handleChange} type="text" name="fullname" placeholder="Name" value={form.fullname}/>
        </label>
        <label name={form.description}>Profile Description:
          <textarea className='form-box-height text-size' onChange={handleChange} type="textarea" name="description" placeholder="Tell everyone about your taste...." value={form.description}/>
        </label>
        <br></br>
        <label htmlFor="genderId">Gender:
          <select name="genderId" id="genderId" onChange={handleChange}>
            {gendersForm && gendersForm.map(gender => (
              <option key={gender.id} value={gender.id}>{gender.genderName}</option>
            ))}
          </select>
        </label>
        {genresForm && genresForm.map(genre => (
          <label key={genre.id} className="para-description" htmlFor={genre.id}>
            <div ><input onChange={(event) => handleCheck(genre.id, event)} type="checkbox" id={genre.id} name={genre.name} value={genre.id} checked={genre.checked}/>{genre.name} </div>
          </label>
        ))}
        <button onClick={handleSubmit}>Update Information</button>
      </form>
    </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    genres: globalState.genres
  }
}

export default connect(mapStateToProps)(Profile)
