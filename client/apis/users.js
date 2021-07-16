import request from 'superagent'

const rootUrl = '/api/v1/users'

export function getUserByName (username) {
  return request.post(rootUrl + '/signin')
    .send(username)
    .then(res => {
      return res.body
    })
}

export function postUser (user) {
  return request.post(rootUrl + '/register')
    .send(user)
    .then(res => {
      return res.body.id
    })
}

export function getUsersToMatch (user) {
  return request.post(rootUrl + '/match')
    .send(user)
    .then(res => {
      return res.body
    })
}
