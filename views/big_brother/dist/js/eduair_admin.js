
$(document).ready(function(){ 

	var load_school = window.get_school();



	//This dipslay form in order to add school to the database
	$('.add_school').click(function  () {

		var cols = '<div class="row">';
		cols 	+='<div class="col-md-4 list_school"></div>';
		cols 	+='<div class="col-md-8 add_form"></div></div>';

		$('.my_field').html(cols);

		list_all_school()
  

		//We put the input to enter name school
		var title = '<h2>'+$('.my_page').attr('profil')+'</h2>';
		var school_name = '<label for="school_name"></label><div class="input-group">';
		school_name		+= '<span class="input-group-addon blue" id="basic-addon3">'+$('.my_page').attr('school_name') +'</span>';
		school_name		+= '<input type="text" class="form-control" id="school_name" aria-describedby="basic-addon3"></div><br>';

		$('.add_form').html(title+school_name)


		//And we select the type of school
		$('.add_form').append('<select name="carlist" class="this_select"></select><br><br><button type="button" class="btn btn-primary btn-sm now_add_it">'+$('.my_page').attr('profil') +'</button>')

		$('.this_select').append('<option value="">'+$('.school').attr('school') +'</option>')

		var i=0;

		for (var i = 0; i < window.all_list_school.students.length; i++) {

			$('.this_select').append('<option value="'+ window.all_list_school.students[i].name+'">'+$('.school').attr( window.all_list_school.students[i].name) +'</option>')

			if(i== window.all_list_school.students.length-1){ 

				now_add_it()
			}
		}
		return false;
	})



	function now_add_it () {
		
		$('.now_add_it').click(function  () {
		
			if($('#school_name').val()!='' && $('.this_select option:selected').val()!=''){

				var list_to_add = {'list_name':$('.this_select option:selected').val(),'element':{'name':$('#school_name').val() ,'number':0,'list_user':[0]}};

				$('.overlay').fadeIn()

				$.ajax({

			       	url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/add_school',

			       	type : 'POST',

			       	data : list_to_add,

			       	dataType:'json',

			       	error : function(err) {

			       		console.log(err)
						$('.overlay').fadeOut()

			       	},

			       	success : function(data) { 
			       		
			       		if(data.statu==true){

			       			$('.add_form').html(succes_form('Youpi'))

			       			window.all_list_school = data.results[0];

			       		}else{
			       			$('h2').after(error_form(data.message));
			       		}
			       		$('.overlay').fadeOut()
			       	}
    			})
			}else{
				$('h2').after(error_form($('.my_page').attr('error_form')))
			}
			return false;
		})
	}


	function error_form (message) {

		var html ='<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>';
		html	+='<span class="sr-only">Error:</span> ';
		html	+=message;
		html	+='</div>';

		return html;

	}


	function succes_form (message) {
		
		var html ='<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ';
		html	+=message;
		html	+='</div>';

		return html;
	}



	function list_all_school () {

		$('.list_school').html('<ul class="list-group get_the_list"></ul>')

		for (var i = 0; i < window.all_list_school.students.length; i++) {

			for(var j = 0; j < window.all_list_school.students[i].list.length; j++){

				$('.get_the_list').append('<li class="list-group-item" type_of_student="'+window.all_list_school.students[i].name+'" school="'+window.all_list_school.students[i].list[j].name+'"><span class="badge" title="Students">'+window.all_list_school.students[i].list[j].number+'</span>'+window.all_list_school.students[i].list[j].name+' ('+$('.school').attr(window.all_list_school.students[i].name)+')<br><a href="#" class="delete_school"><span class="label label-warning ">X</span></a></li>')
			}

			if(i==window.all_list_school.students.length-1){

				manage_list_school()
			}
		}

	}


	function manage_list_school () {

		$('.delete_school').click(function  () {
		
			var this_school_users = $(this).closest('li').find('span').html()*1;

			$this = $(this).parent();

			if(this_school_users>0){

				$('h2').after(error_form($('.my_page').attr('admin_cannot_delete_school'))) 
			}else{

				var confirmation_deleting = confirm($('.my_page').attr('admin_confirm_delete_school'));

				if(confirmation_deleting){

					$.ajax({

				       	url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/delete_school',

				       	type : 'POST',

				       	data : {'type_of_student':$this.attr('type_of_student'),'school':$this.attr('school')},

				       	dataType:'json',

				       	error : function(err) {

				       		console.log(err)
							$('.overlay').fadeOut()

				       	},

				       	success : function(data) {
				       		
				       		if(data.statu==true){

				       			$this.remove();//We hide the element of the list

				       			window.all_list_school = data.results[0];

				       		}else{
				       			$('h2').after(error_form(data.message));
				       		}
				       		$('.overlay').fadeOut()
				       	}
    				})
				}
			}
		})
	}

	

	var total_user=0;

	function add_profil (list_profil) {

		total_user =parseInt(list_profil.students)+parseInt(list_profil.professional)+parseInt(list_profil.visitors)+parseInt(list_profil.teacher);
		
		if(total_user==0){

			total_user=1;
		}

	    $('.my_field').html('<div class="row"></div><hr>')

		$.each(list_profil, function(index, value) {

			var percent = (parseInt(value)/total_user)*100; 
    		
    		display_profil(index,value,percent)
		});
	}

	function display_profil(type,number,percent) { 

		if(type=='students'){

			var html 	='<div class="col-lg-3 col-xs-6"><div class="small-box bg-aqua" type="'+type+'">';
			html		+='<div class="inner"><h3>'+number+'</h3>';
			html		+='<p>'+type+' ('+percent+'%)</p></div><div class="icon">';
			html		+='<i class="ion ion-person-add"></i></div>';
			html		+='<a href="#" class="small-box-footer this_profil">More info <i class="fa fa-arrow-circle-right"></i></a>';
			html		+='</div></div>';
		}else{
			var html 	='<div class="col-lg-3 col-xs-6"><div class="small-box bg-aqua" type="'+type+'">';
			html		+='<div class="inner"><h3>'+number+'</h3>';
			html		+='<p>'+type+' ('+percent+'%)</p></div><div class="icon">';
			html		+='<i class="ion ion-person-add"></i></div>';
			html		+='</div></div>';
		}	

		$('.my_field .row').append(html)
	}



	$('.this_profil').click(function  () { 

		$.ajax({

	       	url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/get_profil_type',

	       	type : 'POST',

	       	data : {'type':$(this).parent().attr('type')},

	       	dataType:'json',

	       	error : function(err) {

	       		console.log(err)
	       	},

	       	success : function  (data) { console.log(data)
	       		
	       		// display_profil_type(type,number)
	       		
	       	}
    	})
	})


	function display_profil_type(type,number) { 

		var html 	='<div class="col-lg-3 col-xs-6"><div class="small-box bg-aqua" type="'+type+'">';
		html		+='<div class="inner"><h3>'+number+'</h3>';
		html		+='<p>'+type+'</p></div><div class="icon">';
		html		+='<i class="ion ion-person-add"></i></div>';
		html		+='<a href="#" class="small-box-footer this_profil">';
		html		+='More info <i class="fa fa-arrow-circle-right"></i>';
		html		+='</a></div></div>';

		$('.my_field .row').append(html)
	}

});
