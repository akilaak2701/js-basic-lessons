/* eslint-disable camelcase */
const inputs = document.querySelectorAll("input:not([type='submit'])")

inputs.forEach(input => {
  input.addEventListener('invalid', addErrorMessage)
  input.addEventListener('blur', (event) => {
    input.checkValidity()
  })

  input.addEventListener('focus', removeErrorMessage)
})

function addErrorMessage (e) {
  const name = e.target.getAttribute('name')

  const error_icon = document.createElement('span')
  error_icon.setAttribute('data-id', name)
  error_icon.classList.add('error-icon')
  error_icon.innerHTML = "<img src='images/icon-error.svg' alt=''>"

  const error_message = document.createElement('span')
  error_message.setAttribute('data-id', name)
  error_message.classList.add('error-message')

  // eslint-disable-next-line eqeqeq
  if (e.target.value == '' || e.target.value == null) error_message.innerHTML = '' + e.target.getAttribute('placeholder') + ' cannot be empty.'
  else error_message.innerHTML = 'Looks like this is not an ' + e.target.getAttribute('placeholder') + '.'

  e.target.after(error_message)
  e.target.after(error_icon)

  e.target.classList.add('error')
}

function removeErrorMessage (e) {
  const elements = document.querySelectorAll("[data-id='" + e.target.getAttribute('name') + "']")

  elements.forEach(error_element => {
    error_element.remove()
  })

  e.target.classList.remove('error')
}
