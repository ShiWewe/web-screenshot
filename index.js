var body = document.body
var loadDom = document.getElementById('load')

function handleReload() {
  loadDom.style.visibility = 'visible'
  body.style.overflow = 'hidden'
  setTimeout(function () {
    location.reload(true)
  }, 500)
}
