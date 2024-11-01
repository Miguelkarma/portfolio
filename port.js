// Init
const carousel = document.getElementById('carouselExampleCaptions');
const navLinks = {
    0: document.getElementById('nav-home'),
    1: document.getElementById('nav-about'),
    2: document.getElementById('nav-certifications'),
    3: document.getElementById('nav-projects'),
    4: document.getElementById('nav-contact')
};

// updating active
carousel.addEventListener('slid.bs.carousel', function (event) {
    removeActiveClass();  
    const activeIndex = event.to;  
    if (navLinks[activeIndex]) {
        navLinks[activeIndex].classList.add('active');  
    }
});

// removing active
function removeActiveClass() {
    Object.values(navLinks).forEach(link => link.classList.remove('active'));
}


// navigation control in carousel
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link[data-bs-slide-to]');
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'));

   
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  
            const slideIndex = parseInt(link.getAttribute('data-bs-slide-to'));
            carousel.to(slideIndex);  
        });
    });
});


