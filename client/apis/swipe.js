import request from 'superagent'

const rootUrl = '/api/v1/users/swipe'

export function checkForMatchApi (swipe) {
  return request.post(rootUrl)
    .send(swipe)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
