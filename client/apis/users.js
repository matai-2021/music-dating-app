import request from 'superagent'

const rootUrl = '/api/v1'

export function getUser () {
  return request.get(rootUrl + '/users')
    .then(res => {
      return res.body.user
    })
}
