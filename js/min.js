var qyui = {
	navbarBackgroundColor: '#201a16'
}

$(document).on('scroll', function() {

	var doc_h = $('nav').height();
	var win_h = $(window).height();

	var doc_top = $(this).scrollTop();

	if(win_h - doc_h - 100 <= doc_top) {
		console.log(1);
		$('nav').css('background-color', qyui.navbarBackgroundColor)

	} else {
		$('nav').css('background-color', 'transparent')

	}

})