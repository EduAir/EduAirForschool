
$(document).ready(function(){ 


	///////////////////////////////////////////////////////:ToDo///////////////////////////////////////////////////////////////////////////////
	// -Creer en admin le hastag pour chaque filière
	///////////////////////////////////////////////////////:ToDo///////////////////////////////////////////////////////////////////////////////


	//We prepare the json file
	var json_choice = {};


		//Manage all school
	//This dis the structure of the database	
	window.list_profil = {
		'students':[
			{	
				'name':'secondary',
				'list':[
							{
								'name':'BEPC',
								'number':0,
								'list_user':[0]
							}
						]},
			{	
				'name':'high_school',
				'list':[
							{
								'name':'Univsersité de Douala',
								'number':0,
								'censured':true,
								'list_user':[0]
							},
							{
								'name':'IUC',
								'number':0,
								'list_user':[0]
							}
						]},
			{	
				'name':'formation',
				'list':[
							{
								'name':'CIS',
								'number':18,
								'list_user':[0]
							},
							{
								'name':'CEFOR Hotêlerie',
								'number':0,
								'list_user':[0]
							}
						]}
		],
		'teacher':{
			'number':0,
			'list_user':[0]
		},
		'professional':{
			'number':0,
			'list_user':[0]
		},
		'visitors':{
			'number':0,
			'list_user':[0]
		}
	}

	//Get all profils on database
	$.ajax({

			url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/get_school',

			type : 'POST',

			data : window.list_profil,

			dataType:'json',

			error : function(err) {

				console.log(err)
			},

			success : function  (data) { 

				$('.overlay').fadeOut();//We hide the Loader of some pages
				       		
				if(data.statu==true){console.log(data)

				    window.all_list_school = data.results.results[0];

				    list_profils()

				}else{
				    console.log(data.message)
				}
			}
    })


    function list_profils () {
    	
    	$.each(window.all_list_school,function(index,value){

    		if(index!='_id'){

    			$('#schooler').append('<option value="'+index+'" data-icon="assets/img/yuna.jpg" class="left circle">'+$('.my_choose').attr(index)+'</option>')

				$('select').material_select()
    		}
    	})
    }

    $('#schooler').change(function  () {

    	$('.finish_profil,.type_of_students,.all_school').fadeOut()

    	$('.type_of_students').html('')

    	if($('#schooler').val()!=''){

    		if($('#schooler').val()=='students'){//If he choose to be a student

    			//We show him which type of students
    			list_type_of_students()

    			$('.type_of_students').fadeIn()
    		}else{
    			//We ask him to finish the form
    			$('.finish_profil').fadeIn()
    		}

    		//We store it
    		json_choice.profil 		= $('#schooler').val();

    		json_choice.students 	= undefined;

    		json_choice.school 		= undefined;

    	}
    })


    function list_type_of_students () {
    	
		for (var i = 0; i < window.all_list_school.students.length; i++) {

			$('.type_of_students').append('<input class="with-gap type_of_students_radio" name="type_of_students" type="radio" value="'+window.all_list_school.students[i].name+'" id="type_'+i+'"  /><label for="type_'+i+'">'+$('.my_choose').attr(window.all_list_school.students[i].name) +'</label>')
		

			if(i==window.all_list_school.students.length-1){

				select_radio()
			}
		}
    }


   function select_radio () {
   	
   		$('input[type=radio]').change(function  () { 

	    	var this_choose = $(this).val()

	    	$('.all_school').fadeIn();//We show the container of all the list of schools

	    	$('.finish_profil').fadeOut()

	    	if(this_choose!=''){

	    		$('#list_school').html('<option value="nan" disabled selected>'+$('.my_choose').attr('user_choose_school')+'</option>')

	    		json_choice.students 	= this_choose;
	    		json_choice.school 		= undefined;

	    		switch(this_choose){

	    			case'secondary':
	    				list_school_secondary()
	    			break;

	    			case'high_school':
	    				list_school_high_school()
	    			break;

	    			case'formation':
	    				list_school_formation()
	    			break;
	    		}
	    	}
    	})
   }


    function list_school_secondary () {

		for (var i = 0; i < window.all_list_school.students.length; i++) {

			for(var j = 0; j < window.all_list_school.students[i].list.length; j++){

				if(window.all_list_school.students[i].name=='secondary'){
					
					$('#list_school').append('<option value="'+window.all_list_school.students[i].list[j].name+'" type_of_student="'+window.all_list_school.students[i].name+'" >'+window.all_list_school.students[i].list[j].name+'</option>')
				
					$('select').material_select()
				}
			}
		}
    }


     function list_school_high_school () {

		for (var i = 0; i < window.all_list_school.students.length; i++) {

			for(var j = 0; j < window.all_list_school.students[i].list.length; j++){

				if(window.all_list_school.students[i].name=='high_school'){
					
					$('#list_school').append('<option value="'+window.all_list_school.students[i].list[j].name+'" type_of_student="'+window.all_list_school.students[i].name+'" >'+window.all_list_school.students[i].list[j].name+'</option>')
				
					$('select').material_select()
				}
			}
		}
    }


     function list_school_formation () {

		for (var i = 0; i < window.all_list_school.students.length; i++) {

			for(var j = 0; j < window.all_list_school.students[i].list.length; j++){

				if(window.all_list_school.students[i].name=='formation'){
					
					$('#list_school').append('<option value="'+window.all_list_school.students[i].list[j].name+'" type_of_student="'+window.all_list_school.students[i].name+'" >'+window.all_list_school.students[i].list[j].name+'</option>')
				
					$('select').material_select()
				}
			}
		}
    }



    $('#list_school').change(function  () {
    	
    	var this_school = $('#list_school').val()

    	if(this_school!='' && this_school!='nan'){

    		json_choice.school 		= this_school;

    		$('.finish_profil').fadeIn()
    	}
    })


    //We submit the profil
    $('.finish_profil').click(function  () { 

    	$('.overlay').fadeIn()
    	$('.finish_profil').fadeOut()
    	
		$.ajax({

			url : $('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/set_my_profil',

			type : 'POST',

			data : json_choice,

			dataType:'json',

			error : function(err) {

				console.log(err)
			},

			success : function  (data) { 

				$('.overlay').fadeOut()

				$('.overlay').fadeOut();//We hide the Loader of some pages
				       		
				if(data.statu==true){console.log(data)

				    window.data_profil = data.results;
				}

				window.location.href=data.url;
			}
    	})
    })

	
});
