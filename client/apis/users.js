import request from 'superagent'

const rootUrl = '/api/v1/users'
// const authUrl = 'api/vi/'

export function getUserByName (username) {
  return request.get(`${rootUrl}/username/${username}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
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
  return request.get(rootUrl + `/${user}/unmatched`)
    .then(res => {
      return res.body
    })
}

export function patchUserApi (user) {
  return request.patch(rootUrl + `/${user}/unmatched`)
    .then(res => {
      return res.body
    })
}
