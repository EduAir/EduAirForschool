
$(document).ready(function(){ 

	$('.img_user_pic').height($('.marketing_account').height()*2/3)

	$('.contact_me').height($('.marketing_account').height()*2/10)

	$('.mini_pic_user').height($('.marketing_account').height()*1/10)

	$('ul.tabs').tabs();


	function display_tabs (hashName,thumbnail,title,view,file_id,tab,original_path,original_ext,final_path,final_ext) { 
		
		var html ='<tr class="this_file_'+file_id+'"><td><a href="/watch?media='+hashName+'"><img src="/assets_media/'+thumbnail+'">';
		html	+='<p>'+title+'</p></a></td><td><p>'+view+'</p></td><td>';
		html	+='<a href="'+file_id+'" thumbnail="'+thumbnail+'" hashName="'+hashName+'" original_path="'+original_path+'" original_ext="'+original_ext+'" final_path="'+final_path+'" final_ext="'+final_ext+'" class="delete_this_file">';
		html	+='<i class="material-icons left">close</i></a></td></tr>';

		$('#tab_'+tab+' tbody').append(html)
	}


	window.socket.emit('get_my_file')

	window.socket.on('get_my_file',function  (data) { 

		$('.this_list_progress').remove()
		
		var recent = data.recent;
		var popular= data.popular;

		if(recent.length<0){

			$('#tab_recent,#tab_popular').html('<div class="card-panel red-text text-darken-2">'+$('.user_note').attr('no_file')+'</div>');

		}else{

			for (var i = 0; i < recent.length; i++) {

				var this_entry = recent[i];

				display_tabs(this_entry.hashName,this_entry.thumbnail,this_entry.title,this_entry.view,this_entry._id,'recent',this_entry.original_path,this_entry.original_ext,this_entry.final_path,this_entry.final_ext)

			};

			for (var i = 0; i < popular.length; i++) {
				
				var this_entry = popular[i];

				display_tabs(this_entry.hashName,this_entry.thumbnail,this_entry.title,this_entry.view,this_entry._id,'popular',this_entry.original_path,this_entry.original_ext,this_entry.final_path,this_entry.final_ext)
			};
		}
	})


	$(document).on('click', '.delete_this_file', function(){
    	
    	var confirmation = confirm($('.user_note').attr('confirm_delete_file'))

		if(confirmation){

			var json_data = {'file_id':$(this).attr('href'),
							'hashName':$(this).attr('hashName'),
							'original_path':$(this).attr('original_path'),
							'original_ext':$(this).attr('original_ext'),
							'final_path':$(this).attr('final_path'),
							'final_ext':$(this).attr('final_ext'),
							'thumbnail':$(this).attr('thumbnail')
						} 

			window.socket.emit('delete_file',json_data)
		}

		return false;
	});


	window.socket.on('delete_file',function  (file_id) { 
		
		$('.this_file_'+file_id).fadeOut()
	})



});
