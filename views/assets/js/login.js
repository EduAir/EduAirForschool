
$(document).ready(function(){ 

	var is_connect 		= true; //True if it is login or false if it is signup

	var json_data_form 	= {};


	$('.login_field').height((window.login_field_height*$(window).height())/100)
	$('.form_login_signup').height((window.form_login_signup_height*$(window).height())/100)

	if(window.is_mobile()){
		$('.form_login_signup').css('width','80%');
	}


	
	$('.create_account').click(function  () {
		
		$('.form_login_signup h4').text('Registration')

		$('.form_log_in,.form_error,.form_pass_conf,.form_pass,.form_forgot_pass,.create_account,.form_back,.form_sign_up,.form_accept').addClass('hide')

		$('.form_next,.form_login_signup h4,.form_name,.form_number,.ooh_login').removeClass('hide')

		is_connect=false;

		return false;
	})

	$('.form_name,.form_number').keyup(function () {console.log('rr')
		
		if($('.form_name').val()!='' && $('.form_number').val()!=''){ 

			$('.form_next').removeClass('disabled')
		}
	})

	$('.ooh_login').click(function  () {
		
		$('.form_login_signup h4').text('Login')
		$('.form_log_in,.form_error,.form_name,.form_pass,.form_forgot_pass,.create_account').removeClass('hide')
		$('.form_next,.form_pass_conf,.form_number,.form_back,.ooh_login,.form_accept').addClass('hide')

		return false;
	})

	$('.form_next').click(function  () {
		
		$('.form_error,.form_next,.form_name,.form_number,.ooh_login').addClass('hide')
		$('.form_sign_up,.form_pass,.form_pass_conf,.form_back,.form_accept').removeClass('hide')

		json_data_form.user_full_name 	= $('.form_name').val();
		json_data_form.user_number		= $('.form_number').val();	

		return false;
	})

	$('.form_back').click(function  () {

		$('.create_account').click()
	})


	$('.form_log_in').click(function  () {
		
		form_ok_validated()
		
		//ToDo Verifier remplissage de chaque formulaire
		return false;
	})

	$('.modal').modal();

	$('.form_sign_up').click(function  () {

		if($('.form_name').val()!='' && $('.form_number').val()!='' && $('.form_pass_conf').val()!='' && $('.form_pass').val()!=''){

			if($('#advised').attr('checked')=='checked'){

				$('#modal_form').modal('open');
			}else{

				form_error("<%= __('no_complet')%>");
			}
		}
	})

	function form_error (message) {
		
		$('.form_error').html(message)
		$('.form_error').removeClass('hide')
		$('.form_login_signup h4').addClass('hide')
	}

	function form_ok_avlidated(){
		
		$('.form_login_signup').html('<center class="validated"><i class="material-icons large blue-text text-darken-2">done</i></center>')
	}


	

});
