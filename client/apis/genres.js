import request from 'superagent'

const rootUrl = '/api/v1/genres'

export function getGenres () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.user
    })
}
