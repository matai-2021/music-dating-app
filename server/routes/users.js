const express = require('express')

const db = require('../db/users')

const router = express.Router()

// POST /api/v1/users/
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

// GET /api/v1/users
router.get('/', (req, res) => {
  db.getFruits()
    .then(results => {
      res.json({ fruits: results.map(fruit => fruit.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
