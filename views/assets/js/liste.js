
$(document).ready(function(){ 

  //We keep The menu open
  $('.truncate_title').succinct({'size':50});
  $('.truncate_text').succinct({'size':100});


  var on_body_start = range_all()

	function range_all () {
		
		$('.suggest_image img').width($('.suggest_image').width()/5)

	}

	$(window).resize(function  () {
		
		range_all()
	})


	$('.test_video').click(function  () {
		
		$(this).get(0).play()
	})

});
