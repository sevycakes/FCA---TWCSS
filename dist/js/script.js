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


// FAQ SLIDER

const faqNav = document.querySelectorAll(".faq_nav_link");
const faqContent = document.querySelectorAll(".content");

faqNav.forEach((faq) => {
    faq.addEventListener("click", () => {
        removeActiveFaq();
        faq.classList.add("active");

        const activeContent = document.querySelector(`#${faq.id}-content`);
        removeActiveContentFaq();
        activeContent.classList.add("active");
    });
});

function removeActiveFaq() {
    faqNav.forEach((faq) => {
        faq.classList.remove("active");
    });
}

function removeActiveContentFaq() {
    faqContent.forEach((content) => {
        content.classList.remove("active");
    });
}

// FAQ

const links = document.querySelectorAll(".contentText a");

links.forEach((link) => {
    link.addEventListener("click", (faq) => {
        faq.preventDefault();
        const icon = link.querySelector("i");
        const paragraph = link.parentElement.querySelector("p");
        icon.classList.toggle("open");
        paragraph.classList.toggle("open");
    });
});