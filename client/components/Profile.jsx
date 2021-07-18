import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function Profile (props) {
  const { user, genres } = props
  const history = useHistory()
  const [genresForm, setGenresForm] = useState(false)
  const [form, setForm] = useState({
    fullname: user.fullname,
    username: user.username,
    genderId: '',
    description: user.description
  })

  const [gendersForm, setGendersForm] = useState(null)

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
  }, [user])

  useEffect(() => {
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
    const { fullname, username, genderId, description } = form
    const userForm = {
      fullname,
      username,
      description,
      genderId,
      genre: genresForm
    }
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
              {gendersForm && gendersForm.map(gender => (
                <option key={gender.id} value={gender.id}>{gender.genderName}</option>
              ))}
            </select>
          </label>
          <label htmlFor="genre">Choose a Genre of Music:
            {genresForm && genresForm.map(genre => (
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
