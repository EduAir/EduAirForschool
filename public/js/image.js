
$(document).ready(function(){ 

	//Put pub in articles
	window.pub_video();


	
	if(window.is_desktop()){
		$('.player').addClass('container');
	}

	if(window.is_desktop() || window.is_tablet()){
		$('.img_target').attr('width','70%')
	}else{
		$('.img_target').attr('width','100%')
	}


	

	//Demo ['image';views,'Timestamp,'autor_name_linked','autor','id_autor','subsription_link','number_of_subscriptions','download_link','share_link']
	var infos  =
	{
		'image':$('.media_data').attr('fileName'),
		'views':$('.media_data').attr('views')+' <i class="material-icons">visibility</i>',
		'autor_name_linked':'Epiphany',
		'subsription_link':'essai',
		'number_of_subscriptions':673,
		'download_link':'/get_it?media='+$('.media_data').attr('fileName')+$('.media_data').attr('format')+'&dir='+$('.media_data').attr('type')+'&title='+$('.media_data').attr('title'),
		'share_link':'click',
		'timestamp':moment.unix($('.media_data').attr('timestamp')*1/1000).fromNow(),
		'autor':'Gabriel',
		'id_autor':$('.media_data').attr('autor_id'),
		'title':$('.media_data').attr('title')
	}
	var type_media ='photo';
	var if_wikipedia = false;
	window.infobox(infos,type_media,if_wikipedia)



	$('.my_pic_comment').attr('src',$.jStorage.get('my_picture',window.default_avatar)) //dipsplay my picture at the side of comment

	window.get_file_comments($('.media_data').attr('MongoDbFileId'))

	window.socket.emit('get_suggestion',$('.media_data').attr('title'))


});
