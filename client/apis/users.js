import request from 'superagent'

const rootUrl = '/api/v1/users'

export function getUser () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.user
    })
}

export function postUser (user) {
  return request.post(rootUrl + '/register')
    .send(user)
    .then(res => {
      return res.body.user
    })
}
