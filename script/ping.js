/* eslint-disable no-unused-vars */
function EmailValidation (mail) {
  const emailAddress = document.getElementById('email').value
  // eslint-disable-next-line no-useless-escape
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  // eslint-disable-next-line eqeqeq
  if (emailAddress == '') {
    document.getElementById('errorMessage').innerHTML = 'Whoops! It looks like you forgot to add your email'
    document.getElementById('email').style.border = '1px solid red'
    return false
  } else if (!emailAddress.match(validEmail)) {
    document.getElementById('errorMessage').innerHTML = 'Please enter a valid email address'
    document.getElementById('email').style.border = '1px solid red'
    return false
  }
};
