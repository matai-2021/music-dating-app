const express = require('express')

const db = require('../db/users')

const router = express.Router()

// POST /api/v1/users/register
router.post('/register', async (req, res) => {
  const user = req.body

  try {
    const userIds = await db.addUser({
      fullname: user.fullname,
      username: user.username,
      usersecret: user.usersecret,
      description: user.description,
      gender_id: user.genderId,
      created_at: new Date(Date.now())
    })

    await db.addGenres(userIds[0], user.genres)

    res.json({
      id: userIds[0]
    })
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// POST /api/v1/users/signin
router.post('/signin', async (req, res) => {
  try {
    const { username } = req.body
    const user = await db.getUser(username)
    console.log(user.id)
    const genres = await db.getUserGenres(user.id)
    res.json({
      id: user.id,
      username: user.username,
      usersecret: user.usersecret,
      fullname: user.fullname,
      description: user.description,
      gender_id: user.genderId,
      genres: genres
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.get('/:id/unmatched', async (req, res) => {
  try {
    const users = await db.getUnmatchedUsers(req.params.id)

    const promises = users.map(async user => ({
      ...user,
      genres: await db.getUserGenres(user.id)
    }))

    res.json(await Promise.all(promises))
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

module.exports = router
