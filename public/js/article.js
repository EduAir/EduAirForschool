
$(document).ready(function(){ 

	//Put pub in articles
	window.pub_article()


	if(window.is_desktop()){
		$('.field').addClass('container');
	}


	$('.suggestion_vid').css('min-height','')
	$('.commentor').css('width','')


	window.socket.emit('get_suggestion',$('title').text())
	

	


	// var type_file =['wikipedia','file'];

	// function demo () {
	// 	for (var i = 0; i <10; i++) {

	// 		var title = 'Bellow to generate a number to send to your corre dhhdh';
	// 		var description ='Payclass truncate to the tag which  ss truncate to the tag which conta ss truncatjdjjddhhd dhhddgd dggd gdgd';
	// 		var first_letter = 'T';
	// 		var image = 'image.jpg';
	// 		var file_length ='23 636';
	// 		var view = '34M';
	// 		var from ='Il y a 2 ans';
			
	// 		var type = type_file[Math.floor((Math.random() * 2) + 0)];
	// 		if(type=='wikipedia'){
	// 			display_suggestion(title,description,first_letter,false,file_length,view,from,type)

	// 		}else{
	// 			display_suggestion(title,description,false,image,file_length,view,from,type)
	// 		}
	// 	};
	// }
	

});
