const burgerBtn = document.querySelector('.burger'); // burger button
const navLinks = document.querySelector('.nav-links'); //ul of the navbar
const body = document.querySelector('body'); // body of the html

function toggleNav() {
    navLinks.classList.toggle('nav-active');
    burgerBtn.classList.toggle('burger-active');
    body.classList.toggle('no-scroll');
}

// Toggle the navbar using the burger button.
burgerBtn.addEventListener('click', function () {
    toggleNav();
})

// Close the navbar and remove no-scroll after the navigation links are clicked.
navLinks.addEventListener('click', function (e) {
   if(e.target.tagName === 'A' && window.innerWidth < 650) {
    toggleNav();
   }
})