const burger = () => {

    const headerBurger = document.querySelector('.burger');
    const navListContent = document.querySelector('.nav__list-device');
    const bodyFixed = document.querySelector('body');
    const navLink = document.querySelectorAll('.nav__link');

    headerBurger.addEventListener('click', function () {

        this.classList.toggle('active');
        navListContent.classList.toggle('active');
        bodyFixed.classList.toggle('lock');

    })

    navLink.forEach(function (item) {
        item.addEventListener('click', function () {
            navListContent.classList.remove('active');
            headerBurger.classList.remove('active');
            bodyFixed.classList.remove('lock');
        })
    })

}

burger();