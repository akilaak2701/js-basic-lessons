const body = document.querySelector('body')
const mobileBtn = document.querySelector('.mobile-btn')
const nav = document.querySelector('.header-nav')

const toggleMenu = () => {
  nav.classList.toggle('show')
  nav.classList.contains('show')
    ? mobileBtn.src = './images/icon-close.svg'
    : mobileBtn.src = './images/icon-hamburger.svg'
  body.classList.toggle('overflow-hidden')
  window.scrollTo(0, 0)
}

mobileBtn.addEventListener('click', toggleMenu)
