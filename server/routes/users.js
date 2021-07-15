const express = require('express')

const db = require('../db/users')

const router = express.Router()

// POST /api/v1/users/
router.post('/register', async (req, res) => {
  const { fullname, username, usersecret, genre, genderId } = req.body

  const userIds = await db.addUser({
    fullname,
    username,
    usersecret,
    genre,
    gender_id: genderId,
    created_at: new Date(Date.now())
  })

  res.json({
    id: userIds[0]
  })
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
