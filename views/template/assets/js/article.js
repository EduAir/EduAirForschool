
$(document).ready(function(){ 

	//Put pub in articles
	window.pub_article()

	//Insert suggestions
	window.suggestion()

	if(window.is_desktop()){
		$('.field').addClass('container');
	}


	//Demo ['image';views,'Timestamp,'autor_name_linked','autor','id_autor','subsription_link','number_of_subscriptions','download_link','share_link']
	var infos 	= 
	{
		'image':'img/image.jpg',
		'views':'180 views',
		'autor_name_linked':'Epiphany',
		'subsription_link':'essai',
		'number_of_subscriptions':673,
		'download_link':'ici',
		'share_link':'click',
		'timestamp':'Il ya 8 ans',
		'autor':'Gabriel',
		'id_autor':'27789'
	}
	var type_media ='text';
	var if_wikipedia = false;
	window.infobox(infos,type_media,if_wikipedia)

});
