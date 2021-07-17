const request = require('superagent')
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

// GET /api/v1/users/:username
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await db.getUserById(id)
    const currentUsersGenres = await db.getUserGenres(id)
    res.json({
      username: user.username,
      fullname: user.fullname,
      description: user.description,
      genres: currentUsersGenres,
      genderId: user.genderId,
      genderName: user.genderName
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
  await db.createSwipe(userId, receiverId, isMatch)
  try {
    const checkIfMatch = true // await db.varifyMatch(userId, receiverId)
    if (checkIfMatch) {
      const { username } = await db.getUserById(userId)
      const header = {
        projectid: '7565a494-51c5-49c2-943c-7c65ca00e965',
        username: username,
        usersecret: 'eda123'
      }
      const { username: receiverUsername } = await db.getUserById(receiverId)

      const body = {
        usernames: [username, receiverUsername],
        is_direct_chat: true
      }
      await createChatRoom(header, body)
      // res.sendStatus(201)
    }
    console.log(checkIfMatch)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
  }
})

function createChatRoom (header, body) {
  console.log(header)
  console.log(body)
  return request.put('https://api.chatengine.io/chats/')
    .send(body)
    .type('application/json')
    .set('Project-ID', header.projectid)
    .set('User-Name', header.username)
    .set('User-Secret', header.usersecret)
    .catch(console.error)
}

module.exports = router
