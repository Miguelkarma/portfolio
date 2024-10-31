
const carousel = document.getElementById('carouselExampleCaptions');
const navLinks = {
    0: document.getElementById('nav-home'),
    1: document.getElementById('nav-about'),
    2: document.getElementById('nav-certifications'),
    3: document.getElementById('nav-projects'),
    4: document.getElementById('nav-contact')
};


function removeActiveClass() {
    Object.values(navLinks).forEach(link => link.classList.remove('active'));
}


carousel.addEventListener('slid.bs.carousel', function (event) {
    removeActiveClass();  
    const activeIndex = event.to;  
    if (navLinks[activeIndex]) {
        navLinks[activeIndex].classList.add('active');  
    }
});


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


$(document).ready(function() {
    
   
    $('#apple').show().addClass('active');
  
   
    $('#workList .list-group-item').click(function() {
     
      $('#workList .list-group-item').removeClass('active');  
      $(this).addClass('active');  
  
      $('.content-item').hide().removeClass('active');  
  
      const target = $(this).data('target');  
      $('#' + target).fadeIn().addClass('active');  
    });
});
