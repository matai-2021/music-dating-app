const express = require('express')
const path = require('path')
const envPath = path.join(__dirname, '.env')
require('dotenv').config({ path: envPath })

const userRoutes = require('./routes/users')
const genreRoutes = require('./routes/genres')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/genres', genreRoutes)
server.use('/api/v1', authRoutes)

module.exports = server
