// BURGER BUTTON

const burger = document.querySelector('.burger_menu');
const headerA = document.querySelector('.header_navM');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    headerA.classList.toggle('open');
});

// CLIENT SLIDER

const slideNav = document.querySelectorAll(".slide_nav_link");
const slideContent = document.querySelectorAll(".slider-content");
slideNav.forEach((slide) => {
    slide.addEventListener("click", () => {
        removeActiveSlide();
        slide.classList.add("active");

const activeContent = document.querySelector(`#${slide.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveSlide() {
    slideNav.forEach((slide) => {
        slide.classList.remove("active");
    });
}

function removeActiveContent() {
    slideContent.forEach((content) => {
        content.classList.remove("active");
    });
}
