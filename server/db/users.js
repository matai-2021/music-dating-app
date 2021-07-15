const connection = require('./connection')

function addUser (user, db = connection) {
  return userExists(user.username)
    .then((exists) => {
      if (exists) {
        throw new Error('User already exists')
      } else {
        return false
      }
    })
    .then(() => {
      return db('users')
        .insert(user)
    })
}

function getUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .select()
    .first()
}

function getUserGenres (userId, db = connection) {
  return db('users_genres')
    .where('user_id', userId)
    .join('genres', 'users_genres.genre_id', 'genres.id')
    .select()
    .then((results) =>
      results.map(result => ({
        genreId: result.genre_id,
        name: result.name
      }))
    )
}

function addGenres (userId, genreIds, db = connection) {
  const promises = genreIds.map(id =>
    db('users_genres')
      .insert({ user_id: userId, genre_id: id })
  )
  return Promise.all(promises)
}

function userExists (username, db = connection) {
  return db('users')
    .count('username as n')
    .where('username', username)
    .then(count => count[0].n > 0)
}

module.exports = {
  addUser,
  addGenres,
  getUser,
  getUserGenres
}
