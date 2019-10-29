 document.addEventListener('includemeCompleted', function (e) {

const slides = document.querySelectorAll('.slideCC');
const next = document.querySelector('#nextCC');
const prev = document.querySelector('#prevCC');
const auto = true; //Auto Scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.currentCC');
  // Remove current class
  current.classList.remove('currentCC');
  // Check for next slide
  if (current.nextElementSibling) {
  // Add current to next sibling
  current.nextElementSibling.classList.add('currentCC');
} else {
  // Add current to start
  slides[0].classList.add('currentCC');
 }
 setTimeout(() => current.classList.remove('currentCC'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.currentCC');
  // Remove current class
  current.classList.remove('currentCC');
  // Check for prev slide
  if (current.previousElementSibling) {
  // Add current to prev sibling
  current.previousElementSibling.classList.add('currentCC');
} else{
  // Add current to last
  slides[slides.length -1].classList.add('currentCC');
 }
 setTimeout(() => current.classList.remove('currentCC'));
};

var el = document.getElementById('prev');
if(el){
  el.addEventListener('click', swapper, false);
}
var el = document.getElementById('next');
if(el){
  el.addEventListener('click', swapper, false);
}
// Button events

next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});


// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

});
