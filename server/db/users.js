const { generateHash } = require('authenticare/server')
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
    .then(async () => {
      const hash = await generateHash('eda123')
      return db('users')
        .insert({ ...user, hash })
    })
}

function updateUser (id, user, db = connection) {
  return db('users')
    .where('id', id)
    .update(user)
}

function getUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .select()
    .first()
}

function getUserById (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('genders', 'users.gender_id', 'genders.id')
    .select('genders.id as genderId',
      'genders.name as genderName',
      'users.id as id',
      'fullname',
      'description',
      'image_url as imageUrl',
      'username')
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

function deleteUserGenres (id, db = connection) {
  return db('users_genres')
    .where('user_id', id)
    .del()
}

function userExists (username, db = connection) {
  return db('users')
    .count('username as n')
    .where('username', username)
    .then(count => count[0].n > 0)
}

function getUnmatchedUsers (id, db = connection) {
  return db('users')
    .join('genders', 'users.gender_id', 'genders.id')
    .select('genders.id as genderId',
      'name as gender',
      'users.id as id',
      'fullname',
      'description',
      'image_url as imageUrl',
      'username')
    .whereNotExists(function () {
      this.select('*')
        .from('users_swipe')
        .where('sender_id', id)
        .whereRaw('receiver_id = users.id')
    })
    .whereNot('users.id', id)
}

function createSwipe (userId, receiverId, isMatch, db = connection) {
  return db('users_swipe')
    .insert({ sender_id: userId, receiver_id: receiverId, is_match: isMatch, created_at: new Date(Date.now()) })
}

function varifyMatch (userId, receiverId, db = connection) {
  return db('users_swipe')
    .count('* as n')
    .where('is_match', true)
    .where((whereBuilder) =>
      whereBuilder
        .where('receiver_id', userId)
        .orWhere('sender_id', userId)
    )
    .where((whereBuilder) =>
      whereBuilder
        .where('sender_id', receiverId)
        .orWhere('receiver_id', receiverId)
    )
    .then((result) => {
      return result[0].n >= 2
    })
}

function getGender (userId, db = connection) {
  return db('users')
    .where('users.id', userId)
    .join('genders', 'users.gender_id', 'genders.id')
    .select('genders.id as genderId', 'name as genderName')
    .first()
}

module.exports = {
  addUser,
  addGenres,
  getUser,
  getUserGenres,
  getUnmatchedUsers,
  createSwipe,
  varifyMatch,
  getUserById,
  getGender,
  updateUser,
  deleteUserGenres
}
