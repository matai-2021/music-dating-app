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
  getUserByName: getUser,
  createUser: addUser
})

module.exports = router
