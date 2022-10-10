const headerBurger = document.querySelector('.header__burger');
const navListContent = document.querySelector('.nav__list-device');
const bodyFixed = document.querySelector('body');

headerBurger.addEventListener('click', function() {

    this.classList.toggle('active');
    navListContent.classList.toggle('active');
    bodyFixed.classList.toggle('lock');

})