import request from 'superagent'

const rootUrl = '/api/v1/swipe'

export function checkForMatchApi (swipe) {
  return request.post(rootUrl)
    .send(swipe)
    .then(res => {
      return res.body
    })
}
