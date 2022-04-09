// Scripts start here
console.log('Welcome to my App');

const toggleBurger = document.querySelector('.navbar-burger-icon');
const navbarMenu = document.querySelector('.navbar-menu-links');
const burgerBg = document.querySelector('.navbar-menu');

toggleBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    burgerBg.classList.toggle('active');
    toggleBurger.classList.toggle('active');
});

burgerBg.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    burgerBg.classList.remove('active');
    toggleBurger.classList.remove('active');
});