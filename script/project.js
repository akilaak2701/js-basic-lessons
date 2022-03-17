const toggle = document.getElementById('menu-toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', (e) => {
  e.preventDefault()
  nav.classList.toggle('is-open')
  if (nav.classList.contains('is-open')) {
    toggle.children[0].setAttribute('src', './images/icon-close.svg')
  } else {
    toggle.children[0].setAttribute('src', './images/icon-hamburger.svg')
  }
})
