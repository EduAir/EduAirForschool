
$(document).ready(function(){ 


	if(window.is_desktop()){

		$('.big_home').addClass('container')
	}

	



	function get_all_files () {
		
		$.ajax({

            url: '/get_all_files',

            type: 'POST',

            processData: false,

            contentType: false,

            dataType: 'json',

            error: function  (err) {
              console.log(err)
            },
            success: function(data){ 

            	if(data.statu && data.files){

            		manage_result(data.files)
            	}else{

            		$('.all_card').html('<center class="col s12 this_is_loader" ><img src="assets/img/new.png" /></center>')
            	}
                
            }
        })
	}
	get_all_files();


	setTimeout(function  () {
		
		$('.logo_brand').height($('.logo_brand').width()) //For log of Eduaie on home page
	},2000)
	


	window.socket.emit('get_disk_space')


	window.socket.on('get_disk_space',function  (data) { 
		
		$('.rest').html(formatFileSize(data.free))

		$('.total').html(formatFileSize(data.total))

		$('.space').attr('style','width:'+data.used*100/data.total+'%')
	})



	function formatFileSize(bytes,decimalPoint) {
	   	if(bytes == 0) return '0 Bytes';
	   	var k = 1000,
	       dm = decimalPoint || 2,
	       sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	       i = Math.floor(Math.log(bytes) / Math.log(k));
	   	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}



	var number_of_files_to_display_at_home_page = 50;
	var index_of_number_of_files_to_display_at_home_page = 0;

	function manage_result (files) {

		if(files.length>0 && index_of_number_of_files_to_display_at_home_page < number_of_files_to_display_at_home_page){

			var rand = files[Math.floor(Math.random() * files.length)]; //We get radom index

			//We display it
			display_this_file(rand)

			//And we remove it
			files.splice(rand, 1)

			//We increment index
			index_of_number_of_files_to_display_at_home_page++

			//And we call the function again
			manage_result(files)
		}
	}


	function display_this_file (file) {

		$('.this_is_loader').remove()//We remove the loading image

		if(file.thumbnail!=undefined){



			var url_thumbnail 	= file.thumbnail;

			switch(file.media){

				case 'audio_video':
					var file_length = window.convertTime(file.duration)
				break;

				case 'text':
				 	var file_length =file.pages+' Pages';
				break;

				case 'image':
					var file_length = window.formatBytes(file.size)
				break;
			}

			var html='<div class="col s12 m6 l4 my_flex_card"><div class="card horizontal "><div class="card-image valign-wrapper">';
			html	+='<a href="/watch?media='+file.hashName+'"><img src="assets_media/'+url_thumbnail+'" width="100%"></a></div>';
			html	+='<div class="card-stacked"><div class="card-content"><div class="max_caracter"><p><a href="/watch?media='+file.hashName+'" style="color:black">'+file.title+'</a></p></div>';
			html	+='<span class="new badge blue" data-badge-caption="'+file_length+'"></span><span class="right" >'+file.view+' <i class="material-icons">visibility</i></span>';
			// html	+='</div><div class="card-action"><a href="/watch?media='+file.hashName+'">'+file.user_name+'</a></div></div></div></div>';
			html	+='</div><div class="card-action"><a href="/watch?media='+file.hashName+'">EduAir</a></div></div></div></div>';

			$('.all_card').append(html)
		}
	}



	//Here we get all the background image off eduair lolo on home page
	window.socket.emit('get_background')
	window.socket.on('get_background',function  (files) {
		
		// We select Random image
		var indexed_file = Math.floor(Math.random() * (files.length-1 - 0) + 0);
		$('.logo_brand').attr('style','background-image:url(assets/img/background/'+files[indexed_file] +');background-size:contain;background-repeat: no-repeat')
	})

	
});
