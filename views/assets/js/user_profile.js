
$(document).ready(function(){ 

	var onload = make_the_css_responsive()

	function make_the_css_responsive () {
		
		$('.img_user_pic').height(($('.marketing_account').height()*2)/3)
		$('.tel_user').height($('.tel_logo').height())
		$('.mini_pic_user').height($('.tel_user').height()-5)
	}


	//manager seach box////////////////////////////////////////////////////////////

	$('.search_on_media_user').click(function  () {
		
		$(this).hide()
		$('.user_input_search').show()
		$('#search-text-user').focus()
		$('._user').hide()
		$('.search_li').removeClass('m3')
		$('.search_li').removeClass('l3')
		$('.search_li').addClass('m12')
		$('.search_li').addClass('l12')

	})


	$('#search-button-user').click(function  () {
		
		$('.search_on_media_user').show()
		$('.user_input_search').hide()
		$('._user').show()
		$('.search_li').removeClass('l12')
		$('.search_li').removeClass('m12')
		$('.search_li').addClass('m3')
		$('.search_li').addClass('l3')

		return false;

	})

	

	
	//manager seach box////////////////////////////////////////////////////////////



	

});
