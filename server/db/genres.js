const connection = require('./connection')

function getGenres (db = connection) {
  return db('genres')
    .select()
}

module.exports = {
  getGenres
}
