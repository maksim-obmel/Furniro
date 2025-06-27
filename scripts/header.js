const burgerButtonElement = document.getElementById('burger-btn')
const burgerMenuElement = document.querySelector('.burger-menu')
const closeBurgerMenuElement = document.getElementById('close-btn')

burgerButtonElement.addEventListener('click', () => {
	burgerMenuElement.classList.add('is-active')
  document.documentElement.classList.add('dark')
})

closeBurgerMenuElement.addEventListener('click', () => {
  burgerMenuElement.classList.remove('is-active')
})
