
$(document).ready(function(){ 

	//fixe the size of the uploader
	$('.field_upload').height((window.field_upload_height*$(window).height())/100)

	$('.selector').hover(function  () {
		
		$('.icon_publish').addClass('red-text text-darken-2')
		},
		function  () {
		
		$('.icon_publish').removeClass('red-text text-darken-2')
	})

	
	//To do 
	// Gerer les cas de video multiples 


});
