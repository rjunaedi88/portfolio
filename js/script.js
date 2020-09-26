// event pada saat link di klis
// $('.page-scroll').click(function(e){

// 	// ambil isi href
// 	var tujuan = $(this).attr('href');
// 	// tangkap element yang bersangkutan
// 	var elemenTujuan = $(tujuan);
	
// 	// pindahkan scroll
// 	$('body, html').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	}, 1000, 'swing');

// 	e.preventDefault();

// });



// paralax
// about 
$(window).on ('load', function(){
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// portfolio
	if ( wScroll > $('.about').offset(). top - 150 ) {
		$('.about .pKanan').each(function(i){
			setTimeout(function() {
			  $('.about .pKanan').eq(i).addClass('pMuncul');	
			}, 300);
		});

		
	}
});



$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// portfolio
	if ( wScroll > $('.portfolio').offset(). top - 250 ) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
			  $('.portfolio .thumbnail').eq(i).addClass('muncul');	
			}, 300 * (i+1));
		});

		
	}
});