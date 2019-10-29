

   document.addEventListener('includemeCompleted', function (e) {
var swiper = new Swiper('.swiper-container', {
effect: 'coverflow',
grabCursor: true,
centeredSlides: true,
slidesPerView: 'auto',
coverflowEffect: {
 rotate: 50,
 stretch: 0,
 depth: 500,
 modifier: 1,
 slideShadows : true,
},
pagination: {
 el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

});
//
// jQuery(document).ready(checkContainer);
//
// function checkContainer () {
//   if($('#D').is(':visible')){ //if the container is visible on the page
//
//    var swiper = new Swiper('.swiper-container', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 500,
//     modifier: 1,
//     slideShadows : true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
// });
//
// } else {
//   setTimeout(checkContainer, 50); //wait 50 ms, then try again
// }
// }
