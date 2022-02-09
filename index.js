var loadDom = document.getElementById('load')

function handleReload() {
  loadDom.style.display = 'block'
  setTimeout(function () {
    location.reload(true)
  }, 500)
}
