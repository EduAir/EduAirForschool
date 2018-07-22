
$(document).ready(function(){ 

	//fixe the size of the uploader
	$('.field_upload').height((window.field_upload_height*$(window).height())/100)

	/*$('.selector').hover(function  () {
		$('.icon_publish').addClass('red-text text-darken-2')
	},function() {
		$('.icon_publish').removeClass('red-text text-darken-2')
	});*/

	// Gerer les cas de video multiples 
	var obj = $(".selector");
	obj.on("dragenter", function(){
		e.stopPropagation();
		e.preventDefault();
		$(this).css('border', '2px solid #0B85A1');
	})

	obj.on('dragover', function (e) 
	{
		e.stopPropagation();
		e.preventDefault();
	});

});
