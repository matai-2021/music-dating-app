const connection = require('./connection')

function getGenres (user, db = connection) {
  return db('genres')
    .select()
}

module.exports = {
  getGenres
}
