$(document).ready(function() {
	
	// fixes breadcrumbs to topNav on all pages
	$('.breadcrumb').addClass('breadcrumbs');

	// make modal popup work
	$('.modal-content-box').each(function(index) {
		$(this).attr('id', 'box' + index);
	});

	$('.modal-click').click(function() {
		var $modal = this.id;
		$('#' + $modal + '-modal').css('display', 'block');
	});

	$('span').click(function() {
		$('.modal').css('display', 'none');
	});

	$('#slider img').click(function() {
		var $img = $(this).attr('src');
		var $id = $(this).closest('.modal-content-box').attr('id');
		var $mainView = $('#' + $id).find('.quick-view-main');
		$mainView.attr('src', $img);
		$('#slider img').css('border-bottom', 'none');
		$(this).css('border-bottom', '3px solid black');
	});

	// zoom in on images
	$('.quick-view-main').mouseover(function() {
		$(this).addClass('quick-view-transition');
	});

	$('.quick-view-container').on('mousemove', function(e) {
		$(this).children('.quick-view-main').css('transform-origin', ((e.pageX - $(this).offset().left) / $(this).width() * 100) + '% ' + ((e.pageY - $(this).offset().top) / $(this).height() * 100) + '%');
	});

	$('.quick-view-main').mouseleave(function() {
		$(this).removeClass('quick-view-transition');
	});

	$(window).click(function(event) {
		if (event.target.className == 'modal') {
			$('.modal').css('display', 'none');
		}
	});

	// show back view when mouse stays on object
	var config = {
		over: function() {
			$(this).fadeOut(400);
			$(this).next().delay(400).fadeIn(600);
		},
		interval: 600,
		out: function() {}
	}
	$('.frontPic').hoverIntent(config);

	$('.backPic').mouseout(function() {
		$(this).fadeOut(400);
		$(this).prev().delay(400).fadeIn(600);
	});
});