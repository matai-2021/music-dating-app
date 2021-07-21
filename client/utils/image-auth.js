export default function checkURL (url) {
  if (url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
  }
  return false
}
