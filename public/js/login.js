
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

		$('.form_next,.form_login_signup h4,.form_name,.form_number,.ooh_login,.sexe').removeClass('hide')

		is_connect=false;

		return false;
	})


	$('.form_name,.form_number').keyup(function () {
		
		if($('.form_name').val()!='' && $('.form_number').val()!='' && $("input[name='sexe']:checked").val()!=undefined){ 

			$('.form_next').removeClass('disabled')
		}
	})

	$("input[name='sexe']").click(function () {
		
		if($('.form_name').val()!='' && $('.form_number').val()!='' && $("input[name='sexe']:checked").val()!=undefined){ 

			$('.form_next').removeClass('disabled')
		}
	})



	$('.ooh_login').click(function  () {
		
		$('.form_login_signup h4').text('Login')
		$('.form_log_in,.form_error,.form_number,.form_pass,.form_forgot_pass,.create_account').removeClass('hide')
		$('.form_next,.form_pass_conf,.form_name,.form_back,.ooh_login,.form_accept,.sexe').addClass('hide')

		is_connect = true;

		return false;
	})

	$('.form_next').click(function  () {
		
		$('.form_error,.form_next,.form_name,.form_number,.ooh_login,.sexe').addClass('hide')
		$('.form_sign_up,.form_pass,.form_pass_conf,.form_back,.form_accept').removeClass('hide')

		json_data_form.user_full_name 	= $('.form_name').val();
		json_data_form.user_number		= $('.form_number').val();	
		json_data_form.user_sexe		= $("input[name='sexe']:checked").val();

		return false;
	})

	$('.form_back').click(function  () {

		$('.create_account').click()
	})


	$('.form_log_in').click(function  () {

		is_connect=true;

		if($('.form_number').val()!='' && $('.form_pass').val()!=''){

			json_data_form.user_number		= $('.form_number').val();
			json_data_form.user_form_pass 	= $('.form_pass').val();
			json_data_form.is_connect			= is_connect;
			
			fedex()
		}else{
			form_error($('.notif').attr('no_complet'));
		}
		return false;
	})


	$('.modal').modal();


	$('.form_sign_up').click(function  () {

		is_connect=false;

		if($('.form_name').val()!='' && $('.form_number').val()!='' && $('.form_pass_conf').val()!='' && $('.form_pass').val()!=''){

			if($('#advised').prop('checked')==true){

				if($('.form_pass_conf').val() == $('.form_pass').val()){

					$('#modal_form').modal('open')
				}else{
					form_error($('.notif').attr('error_password'))
				}
			}else{

				form_error($('.notif').attr('no_accepted'));
			}
		}else{
			form_error($('.notif').attr('no_complet'));
		}
	})


	$('.ok_done').click(function  () {
		
		if($('#noted').prop('checked')==true){

			json_data_form.user_form_pass 		= $('.form_pass').val();
			json_data_form.is_connect			= is_connect;

			fedex()
		}

		return false;
	})

	function form_error (message) {
		
		$('.form_error').html(message)
		$('.form_error').removeClass('hide')
		$('.form_login_signup h4').addClass('hide')
	}

	function form_ok_validated(){
		
		$('.form_login_signup').html('<center class="validated"><i class="material-icons large blue-text text-darken-2">done</i></center>')
	}



	//This function treats the form
	function fedex () {
		
		$.ajax({

	       	url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/connect_form',

	       	type : 'POST',

	       	data : json_data_form,

	       	dataType:'json',

	       	error : function(err) {

	       		console.log(err)
	       	},

	       	success : function  (data) { 
	       		
	       		if(data.statu==false){

	       			form_error(data.message)

	       		}else{
	       			form_ok_validated()

	       			//We store cookies in localStorage HTML5
	       			$.jStorage.set('user', data.user, {TTL: window.session_TTL});

	       			setTimeout(function  () {

	       				window.location.href=data.url;
	       				
	       				
	       			},1000)
	       		}
	       	}
    	});
	}


	$(document).keypress(function(event) { 

	    var keycode = event.keyCode || event.which;

	    if(keycode == '13') {

	        if($('.form_number').val()!='' && $('.form_pass').val()!='')  {

	        	$('.form_log_in').click()
	        }  
	    }
	});


	

});
