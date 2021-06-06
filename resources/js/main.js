
/*=========================
Navbar Fixed
=========================*/
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50)
});

/*===============================
Scroll Top up
===============================*/
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('scrollActive',window.scrollY > 100);
})

function scrollTotop (){
window.scrollTo(
  {
    top:0,
    behavior:'smooth',
  }
)
}

/*==========================
Initialize Swiper
==========================*/
    
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });



















    