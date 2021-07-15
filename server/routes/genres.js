const express = require('express')
const db = require('../db/genres')

const router = express.Router()

// GET /api/v1/genres/
router.get('/', async (req, res) => {
  try {
    const genres = await db.getGenres()
    res.json(genres)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Somthing went wrong' })
  }
})

module.exports = router
