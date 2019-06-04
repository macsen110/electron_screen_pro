
// Query all cookies associated with a specific url.

function getCookie(params = {}, __base) {
  session.defaultSession.cookies.get({ params })
    .then((cookies) => {
      return cookies
    }).catch((error) => {
      console.log(error)
    })
}
function setCookie(params = {}, __base) {
  session.defaultSession.cookies.set(params)
    .then(() => {
      // success
    }, (error) => {
      console.error(error)
    })
}
module.exports = {
  getCookie,
  setCookie
}