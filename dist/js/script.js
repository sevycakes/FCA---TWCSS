// BURGER BUTTON

const burger = document.querySelector('.burger_menu');
const headerA = document.querySelector('.header_navM');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    headerA.classList.toggle('open');
});