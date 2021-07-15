import request from 'superagent'

const rootUrl = '/api/v1/users'

export function getUserByName (userName) {
  return request.get(rootUrl)
    .send(userName)
    .then(res => {
      return res.body.user
    })
}

export function postUser (user) {
  return request.post(rootUrl + '/register')
    .send(user)
    .then(res => {
      return res.body.id
    })
}

export function getUserById (id) {
  return request.get(rootUrl)
    .send(id)
    .then(res => {
      return res.body.user
    })
}
