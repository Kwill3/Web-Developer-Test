// Scripts start here
console.log('Welcome to my App');

const burgerIcon = document.querySelector('.navbar-burger-icon');
const navbarMenu = document.querySelector('.navbar-menu-links');
const dropdownShadow = document.querySelector('.navbar-menu');

// Listens for click at burger icon and toggles dropdown and bg shadow
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.add('active');
    dropdownShadow.classList.add('active');
    burgerIcon.classList.add('active');
});

// Removes the above toggle when clicked
dropdownShadow.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    dropdownShadow.classList.remove('active');
    burgerIcon.classList.remove('active');
});