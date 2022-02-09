var loadDom = document.getElementById('load')

function handleReload() {
  loadDom.style.visibility = 'visible'
  setTimeout(function () {
    location.reload(true)
  }, 500)
}
