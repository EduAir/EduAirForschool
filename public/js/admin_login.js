
$(document).ready(function(){ 

	
	var json_data_form 	= {};


	$('.login_field').height((window.login_field_height*$(window).height())/100)

	$('.form_login_signup').height((window.form_login_signup_height*$(window).height())/100)

	if(window.is_mobile()){

		$('.form_login_signup').css('width','80%');
	}



	$(document).keypress(function(event) { alert('hdhhd')

	    var keycode = event.keyCode || event.which;

	    if(keycode == '13') {

	        if($('.form_number').val()!='' && $('.form_pass').val()!='')  {

	        	$('.admin_ok').click()
	        }  
	    }
	});


	

	$('.admin_ok').click(function  () {

		if($('.form_number').val()!='' && $('.form_pass').val()!=''){

			json_data_form.user_number 		= $('.form_number').val();
			json_data_form.user_form_pass 	= $('.form_pass').val();

			fedex()
		}else{
			form_error($('.notif').attr('no_complet'));
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

	       	url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/admin_login_form',

	       	type : 'POST',

	       	data : json_data_form,

	       	dataType:'json',

	       	error : function(err) {

	       		console.log(err)

	       		form_error($('.notif').attr('fatal_error'))
	       	},

	       	success : function  (data) {
	       		
	       		if(data.statu==false){

	       			form_error(data.message)

	       		}else{
	       			form_ok_validated()

	       			//We store cookies in localStorage HTML5
	       			$.jStorage.set('my_user_id', data.user._id, {TTL: window.session_TTL});
	       			$.jStorage.set('my_picture', data.user.user_avatar, {TTL: window.session_TTL});
	       			$.jStorage.set('my_user_name', data.user.user_full_name, {TTL: window.session_TTL});


	       			setTimeout(function  () {
	       				
	       				window.location.href=data.url;
	       			},2000)
	       		}
	       	}
    	})

	}


	

});
