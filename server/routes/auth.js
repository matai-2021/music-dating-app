const express = require('express')

const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUser,
  addUser
} = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUser,
  addUser
})
// POST /api/v1/auth/signin
// router.post('/signin', async (req, res) => {
//   try {
//     const { username } = req.body
//     const user = await db.getUser(username)
//     const genres = await db.getUserGenres(user.id)
//     res.json({
//       id: user.id,
//       username: user.username,
//       usersecret: user.usersecret,
//       fullname: user.fullname,
//       description: user.description,
//       gender_id: user.genderId,
//       genres: genres
//     })
//   } catch (error) {
//     console.error(error)
//     res.status(500).send(error)
//   }
// })

module.exports = router
