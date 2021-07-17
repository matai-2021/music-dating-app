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

    await db.addGenres(userIds[0], user.genre)

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

// GET /api/v1/users/:id/unmatched
router.get('/:id/unmatched', async (req, res) => {
  try {
    const userId = req.params.id
    const users = await db.getUnmatchedUsers(userId)
    const currentUsersGenres = await db.getUserGenres(userId)
    const promises = users.map(async user => ({
      ...user,
      genres: await db.getUserGenres(user.id)
    }))

    const unmatchedUsers = (await Promise.all(promises))
      .filter(user => user.genres.some(genre => currentUsersGenres.map(obj => obj.genreId).includes(genre.genreId)))

    res.json(unmatchedUsers)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.post('/swipe', async (req, res) => {
  const { userId, receiverId, isMatch } = req.body
  // await db.createSwipe(userId, receiverId, isMatch)
  try {
    const checkIfMatch = await db.varifyMatch(userId, receiverId, isMatch)
    if (checkIfMatch) {
    // await createChatRoom(userId, { 'Project-ID': '7565a494-51c5-49c2-943c-7c65ca00e965', username: '', userSecret: '' })
      res.sendStatus(201)
    }
    console.log(checkIfMatch)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
