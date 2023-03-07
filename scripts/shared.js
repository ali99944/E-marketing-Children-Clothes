let navbarColor = localStorage.getItem('navbarColor') ?? '#2f2d2d'
let navbar = document.querySelector('.site-navigation')
navbar.style.backgroundColor = navbarColor

const changeColor = () =>{
  let newColor = `rgb(${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())})`
  localStorage.setItem('navbarColor',newColor)
  navbar.style.backgroundColor = newColor
}
