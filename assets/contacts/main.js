 document.addEventListener('includemeCompleted', function (e) {

// Get modal element
var modal = document.getElementById('simpleModal');
// Get mini element

// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Get close 2 button

// Get min button

// Get max button


// Listen for open click
modalBtn.addEventListener('click',openModal);

// Listen for close click
closeBtn.addEventListener('click',closeModal);

// Listen for close2 click

//Listen for min click

//Listen for outside click
window.addEventListener('click',outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';

}
// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
// Function to close2 modal

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}
// Function to min modal

// Function to max modal

});
