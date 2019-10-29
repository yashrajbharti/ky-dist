 document.addEventListener('includemeCompleted', function (e) {
 var scene = document.getElementById('scene');
 var parallaxInstance = new Parallax(scene);

  $('a.fs-doc-button').click(function(){
    $('.fs-doc-pop-overlay').fadeOut();
    //sets the coookie to five minutes if the fs-doc-pop is fs-doc-buttoned (whole numbers = days)
  });
var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};
var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};
var fsDocButton = document.getElementById('fs-doc-button');
var fsExitDocButton = document.getElementById('fs-exit-doc-button');

fsDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.documentElement);
});


});
