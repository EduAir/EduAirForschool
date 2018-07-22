
$(document).ready(function(){ 

	//Config system

	//Pub
	window.activate_pub 				= false;
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







	//This manages the suggestion on desktop or tablet
	window.suggestion = function  () {
		
			get_suggestion()
	}

	function get_suggestion () {
		
		//ToDo
		//All wille be in Ajax request base on latest search
		$('.suggestion,.suggestion_vid').html('<center style="margin:5px;"><div class="progress"><div class="indeterminate"></div></div></center>');
		$('.suggestion,.suggestion_vid').css({'min-height':$('.article_airedu').height()});
		$('.suggestion,.suggestion_vid').fadeIn();

		if(window.is_mobile() && $('.field').attr('article')=='yes'){ //If we are in mobile

			$('.suggestion_mobile').html($('.suggestion').html())
			$('.suggestion_mobile').fadeIn();

			$('.suggestion').remove() 
		}

		//Suggestion venant de Wikipedia et les files
		//We make request

		//We diplay result on finish
		$('.suggestion,.suggestion_vid,.suggestion_mobile').html('<h5>SUGGESTIONS</h5><div class="collection"></div>');
		demo();

	}

	function display_suggestion(title,description,first_letter,image,file_length,view,from,type){

		if(type=='wikipedia'){ //If it's wikipedia article

			var info_length = '';
			var sample 		= '<div class="first_letter blue lighten-2">'+first_letter+'</div>';
		}else{
			var info_length = '<div><span class="new badge blue" data-badge-caption="'+file_length+'"></span></div>';
			var sample		= '<img src="img/'+image+'" alt="" class="square responsive-img first_pic">';

		}

		var html ='<a href="#!" class="card-panel collection-item waves-effect waves-light">';
			html +=sample;
			html +='<div class="title blue-text text-darken-2 truncate">'+title+'</div>';
            html +='<span class="red-text text-darken-2 truncate description">'+description+'</span>';
            html +=info_length;
            html +='<div class="black-text text-darken-2 data_file">';
            html +='<span class="views"><span class="number">'+view+'</span>&nbsp;<span class="view_lang">Views</span></span>&nbsp;.&nbsp;'
            html +='<span class="dateTime">'+from+'</span></div></a>';

        $('.suggestion .collection,.suggestion_vid .collection,.suggestion_mobile .collection').append(html);
	}

	var type_file =['wikipedia','file'];

	function demo () {
		for (var i = 0; i <10; i++) {

			var title = 'Bellow to generate a number to send to your corre dhhdh';
			var description ='Payclass truncate to the tag which  ss truncate to the tag which conta ss truncatjdjjddhhd dhhddgd dggd gdgd';
			var first_letter = 'T';
			var image = 'image.jpg';
			var file_length ='23 636';
			var view = '34M';
			var from ='Il y a 2 ans';
			
			var type = type_file[Math.floor((Math.random() * 2) + 0)];
			if(type=='wikipedia'){
				display_suggestion(title,description,first_letter,false,file_length,view,from,type)

			}else{
				display_suggestion(title,description,false,image,file_length,view,from,type)
			}
		};
	}



	//This is for InfoxBox of any content (wikipedia an files)
	window.infobox = function (infos,type_media,if_wikipedia) { 
	//Info is a json which has['image';views,'Timestamp,'autor_name_linked','autor','id_autor',subsription_link','number_of_subscriptions','download_link','share_link']
	//type_media contents the type of file;Is it a text,or video,audio,or pictures.
	//if_wikipedia tells if it's wikipedia article

		if(if_wikipedia==true){
			infos.image = window.wikipedia_image;
		}

		if(type_media=='video' ||type_media=='audio' || type_media=='photo'){

			var link_to_download = '';
		}else{
			//download_link is a id of file
			var link_to_download = '<a class="blue-text text-darken-2 waves-effect waves-light download" type_media="'+type_media+'" href="'+infos.download_link+'"><i class="material-icons">file_download</i></a>';
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
		
		var html ='<div class="card '+this_class+' '+position+'" style="width:'+width+'">';
		html	+=image_card;
		html	+='<div class="card-content">'+title+'<div class="info_file black-text text-darken-2 data_file">';
		html	+='<div class="black-text text-darken-2 data_file truncate"><span class="nom">'+infos.timestamp+'</span></div>';
		html	+='<div class="truncate"><a href="'+infos.id_autor+'"><span class="nom bold">'+infos.autor+'</span></a></div>';
		html	+='<div><span class="abon"><a href="'+infos.subsription_link+'"><span class="new badge blue" data-badge-caption="S\'abonner"></span></a>';
		html	+='</span>&nbsp;<span class="nom">'+infos.number_of_subscriptions+'</span></div>';
		html	+='<div class="divider"></div><div class="article_option">';
		html	+=link_to_download;
		html	+=' <a class="blue-text text-darken-2 waves-effect waves-light"><i class="material-icons">share</i></a></div></div></div></div>';

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

	

	//Verify if the user can apply the text
	$('.text_comment').keyup(function  () {
		
		if($(this).val().length==0){
			$('.commentor .btn-flat').addClass('disabled')
		}else{
			$('.commentor .btn-flat').removeClass('disabled')
		}
	})


	//display comment
	window.display_com = function(user_name,user_pic,user_id,user_text,user_text_id,user_timestamp_text) {
		
		var html 	='<li class="collection-item avatar">';
			html	+='<a href="'+user_id+'"><img src="img/'+user_pic+'" alt="" class="circle"></a>';
			html	+='<span class="title"><a href="'+user_id+'">'+user_name+'</a></span>&nbsp;<span class="timestamper">'+user_timestamp_text+'</span>';
			html	+='<p>'+user_text+'</p><a href="#" class="com_this" id_com="'+user_text_id+'">Répondre</a>';
			html	+='<div class="hidden_form com_form_'+user_text_id+'" style="display:none;"><textarea class="text_comment_'+user_text_id+'"></textarea>';
			html	+='<div class="right"><a class="waves-effect waves-light btn-flat cancel">Annuler</a>';
			html	+='<a class="waves-effect waves-light btn-flat send_com blue" id_com="'+user_text_id+'">Répondre</a></div></div><ul class="ul_com_'+user_text_id+'"></ul></li>';

			$('.list_com').append(html)
	}

	window.display_ans = function(user_name,user_pic,user_id,user_text,user_text_id,user_timestamp_text) {
		
		var html 	='<li class="collection-item avatar">';
			html	+='<a href="'+user_id+'"><img src="img/'+user_pic+'" alt="" class="circle"></a>';
			html	+='<span class="title"><a href="'+user_id+'">'+user_name+'</a></span>&nbsp;<span class="timestamper">'+user_timestamp_text+'</span>';
			html	+='<p>'+user_text+'</p>';
			html	+='</li>';

			$('.ul_com_'+user_text_id).append(html)
	}

	//demo comments
	for (var i = 0; i < 10; i++) {
		var text = 'There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page';
		window.display_com('Stephane','yuna.jpg',12,text,i,'Il y a 2 ans');

		if(i==1){
			for (var y = 0; y < 3; y++) {
				var text = 'There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page';
				window.display_ans('Stephane','yuna.jpg',12,text,i,'Il y a 2 ans');
			}
		}

		if(i==9){
			$(document).ready(function(){
				$('.com_this,.send_com').unbind('click');
				$('.com_this').click(function  () {
					$('.com_this').show()
					$('.hidden_form').hide();
					$('.com_form_'+$(this).attr('id_com')).show();
					$('.text_comment_'+$(this).attr('id_com')).focus()
					$(this).hide();
					return false;
				})
			}) 
		}
	}
});
