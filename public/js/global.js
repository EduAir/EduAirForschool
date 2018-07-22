
$(document).ready(function(){ 


	//Config system

	//Pub
	window.activate_pub 				= false;
	window.activate_downloads			= true;
	window.simple_infos_file			= true; //Remove autor and other data to the page displaying file if true
	window.sell_plateform 				= 'Whatsapp';
	window.sell_contact   				= '678335503';

	//card
	window.maxi_character_title_card	= 50;
	window.width_card_mobile			= '90%';
	window.width_card_not_mobile		= '200px';
	window.width_infoxBoxNotMobile		= '200px';
	window.wikipedia_image				= 'assets/img/wikipedia.jpg';
	window.suggestion_width_articles	= '40%'; //Not use. See this value on global.css in .suggestion
	window.commentor_width_article		= '60%';

	//Path for media
	window.audio_path					= 'img/';
	window.video_path					= 'img/';
	window.photo_path					= 'img/';

	// for the upload page
	window.field_upload_height			= 70; //In percent %

	//background profil
	window.user_backgound_height		= 20; //In percent %

	//For the Login page
	window.login_field_height			= 80; //In percent %
	window.form_login_signup_height		= 60; //In percent %

	// For video call
	window.video_caller_height			= 90; //In percent %


	window.default_avatar				= 'assets/img/avatar/avatar.png';


	window.socket  = io.connect($('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+':8083/');


	$('.show_suggestion').css('bottom',$(window).height()/2) //For the buttons suggestion box


	//Mobile Devices <= 600px	
	//Tablet Devices <= 992px	
	//Desktop Devices > 992px

	var mobile_size = 600;
	var tablet_size	= 992;

	window.is_mobile = function() {
		
		if($(window).width()<=mobile_size){
			return true;
		}else{
			return false;
		}
	}

	window.is_tablet = function() {
		
		if($(window).width()<=tablet_size){
			return true;
		}else{
			return false;
		}
	}

	window.is_desktop = function() {
		
		if($(window).width()>tablet_size){
			return true;
		}else{
			return false;
		}
	}



	var date = new Date();



	$('.chips').material_chip();//Initiate chip
	


	//This manages the number of character of card title
	window.card_title = function (title) {
		
		if(title.length<maxi_character_title_card){ 
			var gap = maxi_character_title_card - title.length;
			
			for (var i = 0; i < gap; i++) { 
				title = title+' &nbsp;';
				if(i==gap-1){
					return title;
				}
			};
		}else{
			return title;
		}
	}



	///////////////////////verify if local storage exist///////////////////////////////////
	if(!$.jStorage.storageAvailable()){

		alert('local storage non permit')
	}
	///////////////////////verify if local storage exist///////////////////////////////////



	////////////////////diseable right click on a div///////////////////////////////////////
	$('.no_bruh').bind('contextmenu', function(e) {
    	return false;
	}); 
	////////////////////diseable right click on a div///////////////////////////////////////









	//T///////////////////////////////////////////This manages the suggestion on desktop or tablet

	window.socket.on('get_suggestion',function  (data) { 

		
		if(data.wikipedia.length==0 || data.media.total>1){  //If there is suggestion
			
			//First, we defuse the stop displaying of the suggestions
			$('.loader_suggestion').fadeOut()

		}

		
		//display_suggestion(title,url,description,first_letter,image,file_length,view,from,type)

		if(data.media.total!=0 || data.wikipedia.length!=0){

			var media_data = data.media.hits;
		
			for (var i = 0; i < media_data.length; i++) {

				switch(media_data[i]._source.media){

					case 'audio_video':
						var file_length = window.convertTime(media_data[i]._source.duration)
					break;

					case 'text':
					 	var file_length = media_data[i]._source.pages+' Pages';
					break;

					case 'image':
						var file_length = window.formatBytes(media_data[i]._source.size)
					break;
				}

				var url_thumbnail 	= media_data[i]._source.thumbnail;

		    	//We prevent that the media which is displaying is not the same than hich one e want to display in suggestion
		    	if($('.media_data').attr('MongoDbFileId')!=media_data[i]._id){

					window.display_suggestion(media_data[i]._source.title,media_data[i]._source.hashName,media_data[i]._source.description,'',url_thumbnail,file_length,media_data[i]._source.view,'','media')
		    	}

			}

			for (var i = 0; i < data.wikipedia.length; i++) { 

				if(window.location.href.indexOf(data.wikipedia[i][1])==-1){

					window.display_suggestion(data.wikipedia[i][0],data.wikipedia[i][1],data.wikipedia[i][2],data.wikipedia[i][0].charAt(0),'','','','','wikipedia')
				}
			}
		}else{

			$('.suggestion,.suggestion_vid').hide()
			$('.suggestion,.suggestion_vid').removeClass('s12 m4 l4')

			$('.field').removeClass('s12 m8 l8')
			$('.field').addClass('s12 m12 l12')
		}
		
	})


	window.display_suggestion = function(title,url,description,first_letter,image,file_length,view,from,type){


		$('.suggestion,.suggestion_vid').fadeIn();
		
		$('.loader_suggestion').hide()

		if(type=='wikipedia'){ //If it's wikipedia article

			var info_length = '';
			var sample 		= '<div class="first_letter" style="background-color:'+window.set_background_first_letter()+'">'+first_letter+'</div>';
			var view 		= '';
			
		}else{
			var info_length = '<div><span class="new badge blue" data-badge-caption="'+file_length+'"></span></div>';
			var sample		= '<img src="assets_media/'+image+'" alt="" class="square responsive-img first_pic">';
			var view 		= '<span class="views"><span class="number">'+view+'</span>&nbsp;<span class="view_lang">Views</span></span>&nbsp;.&nbsp;';
			url 			= '/watch?media='+url;
		}

		var html ='<a href="'+url+'" class="collection-item waves-effect waves-light">';
			html +=sample;
			html +='<div class="title blue-text text-darken-2 truncate">'+title+'</div>';
            html +='<span class="red-text text-darken-2 truncate description">'+description+'</span>';
            html +=info_length;
            html +='<div class="black-text text-darken-2 data_file">';
            html +=view;
            html +='<span class="dateTime">'+from+'</span></div></a><div class="divider"></div>';

        $('.suggestion .collection,.suggestion_vid .collection,.suggestion_mobile .collection').append(html);
	}



	$('.hide_suggestion').click(function  () { 
		
		$('.suggestion,.suggestion_vid').hide("slide", { direction: 'right' }, 250);
		$('.suggestion,.suggestion_vid').removeClass('s12 m4 l4')

		//We put article in the wide spage
		$('.field').removeClass('s12 m8 l8')
		$('.field').addClass('s12 m12 l12')

		//We make a float buuton to show suggestion and we go to the top of the page
		$('.show_suggestion').fadeIn()
	})


	$('.show_suggestion').click(function  () {
		
		$('.suggestion,.suggestion_vid').addClass('s12 m4 l4')
		$('.suggestion,.suggestion_vid').show("slide", { direction: 'left' }, 250);

		//We put article in the middle spage
		$('.field').removeClass('s12 m12 l12')
		$('.field').addClass('s12 m8 l8')

		//We make a float button to show suggestion and we go to the top of the page
		$('.show_suggestion').fadeOut()

	})
	


	/////////////////////////managin suggestion style in responsive design////////////////////////////////////////////
	var range_responsive = suggestion_responsive();

	function suggestion_responsive () {
		
		if(window.is_tablet()){

			$("[class*='suggestion_'] .first_pic").css('float','none')
			$("[class*='suggestion_'] .first_pic").css('width','100%')
			$("[class*='suggestion_'] .first_pic").css('max-height','none')
			$("[class*='suggestion_'] .first_letter").hide()
		}


		if(window.is_desktop()){

			$("[class*='suggestion_'] .first_pic").css('float','left')
			$("[class*='suggestion_'] .first_pic").css('width','')
			$("[class*='suggestion_'] .first_pic").css('max-height','70px')
			$("[class*='suggestion_'] .first_letter").show()
		}

	}
	$(window).resize(function  () {
		
		suggestion_responsive()
	})





	//convert second to time
	window.convertTime = function (input, separator) {
	    var pad = function(input) {return input < 10 ? "0" + input : input;};
	    return [
	        pad(Math.floor(input / 3600)),
	        pad(Math.floor(input % 3600 / 60)),
	        pad(Math.floor(input % 60)),
	    ].join(typeof separator !== 'undefined' ?  separator : ':' );
	}



	//Convert bit to Octet,megaoctet and Go
	window.formatBytes = function(bytes) {
	    if(bytes < 1024) return bytes + " Bytes";
	    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
	    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
	    else return(bytes / 1073741824).toFixed(3) + " GB";
	};




	


	//Design the first letter
	window.set_background_first_letter = function  () { 

		var things = ['#F44336', '#AF8BD2', '#F29400'];

		return things[Math.floor(Math.random()*things.length)];
	}


	//This is for InfoxBox of any content (wikipedia an files)
	window.infobox = function (infos,type_media,if_wikipedia) { 
	//Info is a json which has['image';views,'Timestamp,'autor_name_linked','autor','id_autor',subsription_link','number_of_subscriptions','download_link','share_link']
	//type_media contents the type of file;Is it a text,or video,audio,or pictures.
	//if_wikipedia tells if it's wikipedia article

		if(if_wikipedia==true){
			infos.image = window.wikipedia_image;
		}

		if(window.activate_downloads){

			var link_to_download = '<a class="blue-text text-darken-2 waves-effect waves-light download" type_media="'+type_media+'" download="'+infos.title+'" href="'+infos.download_link+'"><i class="material-icons">file_download</i></a>';
		}else{
			var link_to_download = '';
		}


		if(type_media=='text'){

			var image_card = '<div class="card-image"><img src="'+infos.image+'"><span class="card-title">'+infos.views+'</span></div>';

			if(window.is_mobile()){
				var width 		='100%';
				var	position 	='';
			}else{
				var width 		=window.width_infoxBoxNotMobile;
				var position	='right';
			}

			var this_class	='badge_article';
			title ='';

		}else{
			var image_card 	='';
			var position	='';
			var	width 		='100%';
			var this_class	='badge_video';
			title 			='<h1>'+infos.title+'</h1>'
		}

		if(window.simple_infos_file){ //If it is a box for foundation

			autor ='';
			subsription_link='';

		}else{
			var autor = '<div class="truncate"><a href="'+infos.id_autor+'"><span class="nom bold">'+infos.autor+'</span></a></div>';

			var subsription_link = '<div><span class="abon"><a href="'+infos.subsription_link+'"><span class="new badge blue" data-badge-caption="S\'abonner"></span></a>';
			subsription_link	+= '</span>&nbsp;<span class="nom">'+infos.number_of_subscriptions+'</span></div>'
			
		}
		
		var html ='<div class="card '+this_class+' '+position+'" style="width:'+width+'">';
		html	+=image_card;
		html	+='<div class="card-content">'+title+'<h3 class="right">'+infos.views+'</h3><div class="info_file black-text text-darken-2 data_file">';
		html	+='<div class="black-text text-darken-2 data_file truncate"><span class="nom">'+infos.timestamp+'</span></div>';
		html	+=autor;
		html	+=subsription_link;
		html	+='<div class="divider"></div><div class="article_option">';
		html	+=link_to_download;
		html	+='</div></div></div></div>';

		if(type_media=='text'){

			$('h1:eq(0)').after(html);
		}else{
			$('.info_space').html(html);
		}
	}



	/////////Comments
	if(!window.is_mobile() && $('.field').attr('article')=='yes'){
		$('.commentor,.description_media').width(window.commentor_width_article);
	}

	autosize($('text_comment,.text_comment_comment'));//For elasctic textarea

	//Show button when you want to comment
	$('.text_comment').focus(function  () {
		
		$('.option_comment').show();
		$('.hidden_form').hide();

	})


	$('.add_comment').click(function () {
		
		if($('.text_comment').val().length>0){

			add_comment (user_id,$('.text_comment').val(),$('.media_data').attr('MongoDbFileId'),false)
		}

	})


	function add_comment (user_id,user_text,file_id,comment_id) {
		
		$.ajax({
			type: "POST",
			url: "/add_comment",
			dataType: "json",
			data: {'user_id':user_id,'user_name':$.jStorage.get('my_user_name'),'user_pic':$.jStorage.get('my_picture',window.default_avatar),'user_text':user_text,'file_id':file_id,'comment_id':comment_id},
			error: function  (error) {
				
				console.log(error)
			},
			success: function  (data) {  console.log(data)
				
				if(data.statu==true){

					if(comment_id){ //If we comment a comment

						window.display_ans(user_id,user_text,comment_id,$('.ul_com_'+comment_id+' li').length, moment.unix(date.getTime()/1000).fromNow(),date.getTime())
						
						//We wipe text form
						$('.this_text_area').val('') 
					}else{
						window.display_com(user_id,$.jStorage.get('my_user_name'),$.jStorage.get('my_picture',window.default_avatar),user_text,data.this_comment_id,moment.unix(date.getTime()/1000).fromNow(),false)

						//We wipe text form
						$('.this_text_area').val('')
						$('.add_comment').addClass('disabled')
					}
				}else{
					if(data.message=='not_connected'){
						window.display_popup('<a class="btn-flat toast-action waves-effect waves-light btn blue white-text" href="/connect?url='+document.location+'">'+$('.language').attr('not_connected')+'</a>')
					}else{
						window.display_popup($('.language').attr('unknow'))
					}
					
				}
			}
		});
	}

	

	//Verify if the user can apply the text
	$('.text_comment').keyup(function  () {
		
		if($(this).val().length==0){
			$('.add_comment').addClass('disabled')
		}else{
			$('.add_comment').removeClass('disabled')
		}
	})


	//display comment             
	window.display_com = function(user_id,user_name,user_pic,user_text,user_text_id,user_timestamp_text,there_is_response) {

		if(there_is_response){
			var displaying_list_of_response = '<a href="#" class="all_of_com_this" id_com="'+user_text_id+'">Réponses ('+there_is_response+')</a>';
		}else{
			var displaying_list_of_response = '';
		}

		if(window.user_id==user_id){

			var manage_comment ='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" action="update" type="comment" class="manage_this" id_com="'+user_text_id+'"><i class="material-icons tiny">edit</i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" action="delete" type="comment" class="manage_this" id_com="'+user_text_id+'"><i class="material-icons tiny">delete</i></a>';
		}
		
		var html 	='<li class="collection-item avatar li_comment_'+user_text_id+'">';
			html	+='<a href="'+user_id+'"><img src="'+user_pic+'" alt="" class="circle"></a>';
			html	+='<span class="title"><a href="'+user_id+'">'+user_name+'</a></span>&nbsp;<span class="timestamper">'+user_timestamp_text+'</span>';
			html	+='<p class="comment_text_'+user_text_id+'">'+user_text+'</p><a href="#" class="com_this" id_com="'+user_text_id+'">Répondre</a>&nbsp;&nbsp;'+displaying_list_of_response+manage_comment;
			html	+='<div class="hidden_form com_form_'+user_text_id+'" style="display:none;"><textarea class="this_text_area text_comment_'+user_text_id+'"></textarea>';
			html	+='<div class="right"><a class="waves-effect waves-light btn-flat cancel">Annuler</a>';
			html	+='<a class="waves-effect waves-light btn-flat send_com blue" id_com="'+user_text_id+'">Répondre</a></div></div><ul class="ul_com_'+user_text_id+'"></ul></li>';

			$('.list_comments').prepend(html)
	}

	window.display_ans = function(user_id,user_name,user_pic,user_text,user_text_id,index_response,user_timestamp_text,real_timestamp) { 

		if(window.user_id==user_id){

			var manage_comment ='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" action="update" type="response" index="'+index_response+'" class="manage_this" id_com="'+user_text_id+'" real_timestamp="'+real_timestamp+'"><i class="material-icons tiny">edit</i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" action="delete" type="response" index="'+index_response+'" class="manage_this" id_com="'+user_text_id+'" real_timestamp="'+real_timestamp+'"><i class="material-icons tiny">delete</i></a>';
		}
		
		var html 	='<li class="collection-item avatar li_response_'+user_text_id+'_'+index_response+'">';
			html	+='<a href="'+user_id+'"><img src="'+user_pic+'" alt="" class="circle"></a>';
			html	+='<span class="title"><a href="'+user_id+'">'+user_name+'</a></span>&nbsp;<span class="timestamper">'+user_timestamp_text+'</span>';
			html	+='<p class="response_'+user_text_id+'_'+index_response+'">'+user_text+'</p>';
			html	+=manage_comment;
			html	+='</li>';

			$('.ul_com_'+user_text_id).prepend(html)
	}



	var responses_to_comment__ID_of_comments 		= new Array();//This variable keep ID comments in order to display after by a click
	var responses_to_comment__responses_to_comments = new Array();//This variable keep response to comments in order to display after by a click
	
	window.get_file_comments = function (file_id) { 
		
		$.ajax({
			type: "POST",
			url: "/get_comment",
			dataType: "json",
			data: {'file_id':file_id},
			error: function  (error) {
				
				console.log(error)
			},
			success: function  (data) { 
				
				if(data.statu==true){

					if(data.comment.length>0){ //Display comments

						$('.all_comments').text(data.comment.length)

						for (var i = 0; i < data.comment.length; i++) {

							var this_comment  =  data.comment[i];

							if(this_comment.comment.length>0){

								var there_is_response = this_comment.comment.length;
							}else{
								var there_is_response = false;
							}

							window.display_com(this_comment.user_id,this_comment.user_name,this_comment.user_pic,this_comment.user_text,this_comment._id,moment.unix(this_comment.create_at*1/1000).fromNow(),there_is_response)

							if(this_comment.comment.length>0){
								responses_to_comment__ID_of_comments.push(this_comment._id)
								responses_to_comment__responses_to_comments.push(this_comment.comment)
							}
						}
					}
				}
			}
		});
	}


	//Click to respond a comment
	$(document).on('click','.com_this', {} ,function(e){
  		
  		var this_id =  $(this).attr('id_com');

  		$('.hidden_form').hide()

  		$('.com_form_'+this_id).fadeIn()

  		return false;
	})


	$(document).on('click','.send_com', {} ,function(e){
  		
  		var this_id =  $(this).attr('id_com');

  		if($('.text_comment_'+this_id).val().length>0){ //If there is comment we comment it

  			//We send response
  			add_comment(user_id,$('.text_comment_'+this_id).val(),$('.media_data').attr('MongoDbFileId'),this_id)
  		}

  		return false;
	}) 


	//Display responses to comment
	$(document).on('click','.all_of_com_this', {} ,function(e){  
  		
  		var this_id =  	$(this).attr('id_com'); 

  		get_index_on_object(this_id,responses_to_comment__ID_of_comments,function  (index) { 
  			
  			get_responses_of_comment(index,responses_to_comment__responses_to_comments,function  (responses) {
  				
				display_response_to_comments(this_id,responses);

  			})
  		})

  		$(this).hide();

  		return false;
	})


	//Display responses to comment
	$(document).on('click','.manage_this', {} ,function(e){  
  		

		if($(this).attr('action') =='delete'){

			var confimation = confirm($('.media_data').attr('delete_confirmation'));

			if(confimation == true) {
			    
			    if($(this).attr('type')=='comment'){
					manage_comments_and_responses_on_file($(this).attr('action'),$(this).attr('type'),$(this).attr('id_com'),false,false,false,false)
				}else{
					manage_comments_and_responses_on_file($(this).attr('action'),$(this).attr('type'),$(this).attr('id_com'),$(this).attr('index'),false,$('.response_'+$(this).attr('id_com')+'_'+$(this).attr('index')).text(),$(this).attr('real_timestamp'))
				}
			}
		}else{

			if($(this).attr('type')=='comment'){

				$('.text_to_update').val($('.comment_text_'+$(this).attr('id_com')).text())

				window.text_to_update = {'action':$(this).attr('action'),'type':$(this).attr('type'),'comment_id':$(this).attr('id_com'),'response_index':false};

				open_popup_edit();
			}else{
				$('.text_to_update').val($('.response_'+$(this).attr('id_com')+'_'+$(this).attr('index')).text())
				
				window.text_to_update = {'action':$(this).attr('action'),'type':$(this).attr('type'),'comment_id':$(this).attr('id_com'),'response_index':$(this).attr('index'),'real_timestamp':$(this).attr('real_timestamp')};
				
				open_popup_edit();
			}
		}

		return false;
	})


	//Form to validate editing comment or responses
	$('.go_edit_it').click(function  () {
		
		manage_comments_and_responses_on_file(window.text_to_update.action,window.text_to_update.type,window.text_to_update.comment_id,window.text_to_update.response_index,$('.text_to_update').val(),$('.text_to_update').val(),window.text_to_update.real_timestamp)
	})


	$('#modal_edit').modal();// Initiating modal window


	function open_popup_edit(){

		$('.ok_icon').hide()
		$('.text_to_update').show()
		$('#modal_edit').modal('open')
	}


	function close_popup_edit(){

		$('.ok_icon').show()
		$('.text_to_update').hide()

		setTimeout(function  () {
			$('#modal_edit').modal('close')
		},1000)
	}


	//Popup to edit text

	function manage_comments_and_responses_on_file(action,type,comment_id,response_index,comment_text,response_text,real_timestamp) {
		
		var parcel = {'user_id':user_id,'comment_id':comment_id,'response_index':response_index,'comment_text':comment_text,'response_text':response_text,'real_timestamp':real_timestamp};
		
		console.log(parcel)
		$.ajax({
			type: "POST",
			url: "/"+action+"_"+type,
			dataType: "json",
			data: parcel,
			error: function  (error) {
				
				window.display_popup($('.media_data').attr('fatal_error'))

				console.log(error)
			},
			success: function  (data) { 
				
				if(data.statu==true){

					if(action=='delete'){

						if(type=='comment'){
							$('.li_comment_'+comment_id).fadeOut()
						}else{
							$('.li_response_'+comment_id+'_'+response_index).fadeOut()
						}

					}else{

						close_popup_edit();

						if(type=='comment'){
							$('.comment_text_'+comment_id).html(comment_text)
						}else{
							$('.response_'+comment_id+'_'+response_index).html(response_text)
						}
					}
				}else{
					if(data.message=='not_connected'){
						window.display_popup('<a class="btn-flat toast-action waves-effect waves-light btn blue white-text" href="/connect?url='+document.location+'">'+$('.language').attr('not_connected')+'</a>')
					}else{
						window.display_popup($('.language').attr('unknow'))
					}
				}
			}
		})
	}


	function get_index_on_object (this_id,object,CallBack) {
		
		$.each(object, function( index, entry ) {
			
			if(entry==this_id){

				CallBack(index);
			} 
		})
	}


	function get_responses_of_comment (index_comment,responses,CallBack) {
		
		$.each(responses, function( index, entry ) { 
			
			if(index==index_comment){

				CallBack(entry);
			} 
		})
	}



	function display_response_to_comments (id_comment,responses) { 
	 	

		$.each(responses, function( index, entry ) { 

			window.display_ans(entry['user_id'],entry['user_text'],id_comment,index,moment.unix(entry['create_at']*1/1000).fromNow(),entry['create_at']) 
		})
	} 
	



	window.display_popup = function  (message) {
		
  		Materialize.toast(message, 10000);
	}






	window.make_user_id = function() {
		  
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 20; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));

		  return text;
	}

	window.user_id = $.jStorage.get('my_user_id',window.make_user_id()); 



	//Hide comment space for foundations
	if(window.simple_infos_file){

		$('.commentor').remove()
	}





});
