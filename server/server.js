const express = require('express')
const path = require('path')

const userRoutes = require('./routes/users')
const genreRoutes = require('./routes/genres')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/genres', genreRoutes)

module.exports = server
