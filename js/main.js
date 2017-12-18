function addClassByClick(button) {
      $(button).toggleClass("menu-btn-wrap-active");
      $('#hidden-menu').toggleClass("hidden-menu-active");
      $('#header-content').toggleClass("header-content-active");
}

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
