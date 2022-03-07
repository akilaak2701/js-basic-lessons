checkScreen()

window.onresize = function (event) {
  checkScreen()
}

function checkScreen () {
  let platform = 'desktop'
  let boxDisplay = 'block'

  if (window.matchMedia('(max-width: 700px)').matches) {
    platform = 'mobile'
    boxDisplay = 'none'
    changeImg(platform, boxDisplay)
  } else {
    platform = 'desktop'
    changeImg(platform, boxDisplay)
  }
}

function changeImg (n, e) {
  const bgS = document.getElementById('bg')
  const womanS = document.getElementById('woman')
  const boxS = document.getElementById('box')

  bgS.src = 'images/bg-pattern-' + n + '.svg'
  womanS.src = 'images/illustration-woman-online-' + n + '.svg'
  boxS.style.display = e
}

const questionClick = document.getElementsByClassName('question')
const displayAnswer = document.getElementsByClassName('answer')
const arrowChange = document.getElementsByClassName('arrow')

showHidecontent()

function showHidecontent () {
  for (let i = 0; i < questionClick.length; i++) {
    questionClick[i].addEventListener('click', function () {
      if (displayAnswer[i].style.display === 'block') {
        displayAnswer[i].style.display = 'none'
        removeClass(i)
        return
      }
      for (let j = 0; j < displayAnswer.length; j++) {
        displayAnswer[j].style.display = 'none'
        removeClass(j)
      }
      if (displayAnswer[i].style.display === 'none') {
        addClass(i)
        displayAnswer[i].style.display = 'block'
      }
    })
  }
}

function removeClass (n) {
  displayAnswer[n].classList.remove('fade')
  questionClick[n].classList.remove('weight')
  arrowChange[n].classList.remove('arrowup')
}

function addClass (n) {
  questionClick[n].classList.add('weight')
  arrowChange[n].classList.add('arrowup')
  const delay = 300
  // eslint-disable-next-line no-unused-vars
  const fadeAnimation = setTimeout(function () {
    displayAnswer[n].classList.add('fade')
  }, delay)
}
