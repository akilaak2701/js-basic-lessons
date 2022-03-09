document.querySelector('.toggle-switch__toggle')
  .addEventListener('mouseup', function () {
    const amounts = document
      .getElementsByClassName('card__amount')
    for (let i = 0; i < amounts.length; i++) {
      const element = amounts[i]
      const classList = element.classList
      classList.toggle('card__amount--hidden')
    }
  })
