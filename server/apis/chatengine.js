const request = require('superagent')

function createChatRoom (header, body) {
  return request.put('https://api.chatengine.io/chats/')
    .send(body)
    .type('application/json')
    .set('Project-ID', header.projectid)
    .set('User-Name', header.username)
    .set('User-Secret', header.usersecret)
    .catch(console.error)
}

module.exports = {
  createChatRoom
}
