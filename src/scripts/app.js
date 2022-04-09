// Scripts start here
console.log('Welcome to my App');

const toggleBurger = document.getElementsByClassName('navbar-burger-icon')[0];
const navbarMenu = document.getElementsByClassName('navbar-menu')[0];

toggleBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    console.log('clicked!');
});