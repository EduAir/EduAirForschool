
$(document).ready(function(){ 

	
	for (var i = 0; i < 50; i++) {
		
		$('.form_tag').append('<span class="next_tag"><input type="checkbox" id="test'+i+'" /><label for="test'+i+'">Geographie</label></span>')
	};

	window.suggestion()
	

});
