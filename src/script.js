const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burgerBtn.classList.toggle('burger-active');
    body.classList.toggle('no-scroll');
})