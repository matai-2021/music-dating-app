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
      description: user.description,
      gender_id: user.genderId,
      image_ur: user.imageUrl,
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

// GET /api/v1/users/:id
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
      genderName: user.genderName,
      imageUrl: user.imageUrl
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

// PATCH /api/v1/users/:id
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { fullname, description, genderId, genres, imageUrl } = req.body
  try {
    await db.updateUser(id, { fullname, description, gender_id: genderId, image_url: imageUrl })
    await db.deleteUserGenres(id)
    await db.addGenres(id, genres)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// GET /api/v1/users/username/:username
router.get('/username/:username', async (req, res) => {
  const { username } = req.params
  try {
    const user = await db.getUser(username)
    const { genderName, genderId } = await db.getGender(user.id)
    const currentUsersGenres = await db.getUserGenres(user.id)
    res.json({
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      description: user.description,
      genres: currentUsersGenres,
      genderId: genderId,
      genderName: genderName,
      imageUrl: user.image_url
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
  try {
    if (isMatch) {
      await db.createSwipe(userId, receiverId, isMatch)
      const checkIfMatch = await db.varifyMatch(userId, receiverId)
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
        res.json({ isMatch: true })
        await createChatRoom(header, body)
        return
      }

      res.json({ isMatch: false })
    } else {
      await db.createSwipe(userId, receiverId, isMatch)
      res.json({ isMatch: false })
    }
  } catch (error) {
    console.error(error)
  }
})

function createChatRoom (header, body) {
  return request.put('https://api.chatengine.io/chats/')
    .send(body)
    .type('application/json')
    .set('Project-ID', header.projectid)
    .set('User-Name', header.username)
    .set('User-Secret', header.usersecret)
    .catch(console.error)
}

module.exports = router
