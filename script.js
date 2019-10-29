
// variables
var $header_top = $('.header-top');
var $nav = $('.basenav');
var $togglemenu = $('.toggle-menu');
var $userCircle = $('.userCircle');
var $logoky1 = $('#logoky1');
// toggle menu
$header_top.find('.toggle-menu').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor : ['#0b1c42', '#5f0f40','#240b36','#302b63','#302b63' ],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['ShowCase', 'AboutUs', 'Throwback', 'Testimonials', 'Contact'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, 0)');
    $nav.css('background', 'url(http://www.upl.co/uploads/c0a602721571577894.jpg)');
    $nav.css('background-size', 'cover');
    $nav.css('background-position', 'center');
    $nav.css('backgound-repeat', 'no-repeat');
    $nav.css('position', 'absolute');
    $nav.css('top', '0');
    $('#logoky1').toggleClass('active2121');


      if (index == 1 ) {
          $togglemenu.css('background', 'rgba(0, 47, 77, 0.3)');
          $userCircle.css('background-color', 'rgb(0, 0, 0)');
        }
          if (index == 1 && window.matchMedia("(orientation:portrait)").matches) {

            $userCircle.css('background-color', 'rgb(0, 0, 0)');

        }

  },

  onLeave: function(index, nextIndex, direction) {

      if (index == 1) {
          $togglemenu.css('background', 'rgba(0, 47, 77, 0.0)');
          $userCircle.css('background-color', 'rgba(0, 47, 77, 0.0)');

        }
  },
  // if(index == 5) {
  //   $('#fp-nav').show();
  // }

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'ContactandLinks' && slideIndex == 1) {


      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '-webkit-linear-gradient(to right top, #07020d, #140d1d, #1c152c, #231b3b, #29224c, #3e295b, #543069, #6c3675, #973e7b, #bf4a7b, #e15c75, #fd746c)');
      $(this).css('background', 'linear-gradient(to right top, #07020d, #140d1d, #1c152c, #231b3b, #29224c, #3e295b, #543069, #6c3675, #973e7b, #bf4a7b, #e15c75, #fd746c)');

      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'ContactandLinks' && slideIndex == 1) {

      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, 0)');
      $nav.css('background', 'rgba(0, 47, 77, 0)');

    }
  }
});


jQuery('#menu a').click(function() {
  jQuery('.toggle-menu').trigger('click');
});
/**
       * Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
       * depending on the given type.
       */
       function isScrolled(type, scrollable){
           if(type === 'top'){
               return !scrollable.scrollTop();
           }else if(type === 'bottom'){
               return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;

           }
       }

       // use map
       // var i = 0, timeOut = 0;
       // $('.map').on('mousedown touchstart', function(e) {
       //   $(this).addClass('remove');
       //   timeOut = setInterval(function(){
       //     console.log(i++);
       //   }, 100);
       // }).bind('mouseup mouseleave touchend', function() {
       //   $(this).removeClass('remove');
       //   clearInterval(timeOut);
       // });
