const connection = require('./connection')

function addUser (user, db = connection) {
  return db('users')
    .insert(user)
}

module.exports = {
  addUser
}
