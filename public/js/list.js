
$(document).ready(function(){ 

  //We keep The menu open
  $('.truncate_title').succinct({'size':50});
  $('.truncate_text').succinct({'size':100});


  var on_body_start = range_all()

	function range_all () {
		
		$('.suggest_image img').width($('.suggest_image').width()/5)

	}

	$(window).resize(function  () {
		
		range_all()
	})


	$('.test_video').click(function  () {
		
		$(this).get(0).play()
	})


	//Return language of moment
	moment.locale();




	var default_library = 'wikipedia';

	var starter_pagination 	= 0;
	var ender_pagination   	= 20;
	var last_pagination		= 0;

	var shower = false;


	search($('.search_string').attr('string'),false)
	
	
	function search (term,ajax) {

		show_loader_tab() 
		
		var search_post = 	{'term':term,
							 'user_id':$.jStorage.get('user_id',window.make_user_id()),
							 'start':$('.library_'+default_library).attr('start')*1,
							 'end': $('.library_'+default_library).attr('end')*1,
							 'library':default_library
							}
		if(ajax){
			//We search more result from the click "Plus"
			window.socket.emit('search_ajax',search_post)
		}else{
			//We make an initial search
			window.socket.emit('get_sample_image',search_post);
			window.socket.emit('search',search_post);
		}	
	}



	function hide_loader_tab () {
		
		if(shower){

			$('.this_'+default_library+' center').html('<i class="large material-icons">sentiment_dissatisfied</i>')

			shower = false;
		}
		
	}

	function show_loader_tab () {
		
		if($('.this_'+default_library+' center').html()=='<i class="large material-icons">sentiment_dissatisfied</i>' || $('.this_'+default_library+' center').html()=='<img src="assets/img/loading.gif">'){

			$('.this_'+default_library+' center').html('<img src="assets/img/loading.gif">')

			shower = true;

			setTimeout(function  () {
				
				hide_loader_tab()
			},10000)
		}
	}






	window.socket.on('results',function  (data) { 

		shower = false; 
		
		switch(data.statu){

    		case 'ok':
    		  	//We display the result 
    		  	display_results(false,data.results)
    		break;

    		case 'fail':
    		  	//We display the result 
    		  	$('.this_'+default_library+' center').html('No result')
    		break;

    		case 'fatal_error': //I redirect to fatal_error page
    			location.href = '/fatal_error';
    		break;
        }
	});


	var open_suggestion_image = true; //This variable control if the suggestion can appear or not dependinf of the tab


	window.socket.on('get_sample_image',function  (results) { 

		if(open_suggestion_image){

			$('.suggest_image .container center').html('')

			$('.search_image_result').html('<b>'+$('.search_string').attr('string')+'</b>')
			
			if(results.total>=1){

				$('.suggest_image').fadeIn()

				//We display image card
				for (var i = 0; i < results.hits.length; i++) {

					var url_thumbnail 	= results.hits[i]._source.thumbnail;
					
					$('.suggest_image .container center').append('<li class="col s3"> <a href="/watch?media='+results.hits[i]._source.hashName+'"> <img src="assets_media/'+url_thumbnail+'" class="responsive-img"> </a> </li>')
					
					results.hits[i];

					$('.suggest_image .container').addClass('row') //For some reason the class row diseaper. That's why We force it to stay by this line
				};
			}
		}
	})


	$('.more_image').click(function  () {
		
		$('ul.tabs').tabs('select_tab', 'image');

		$('.suggest_image').hide()

		open_suggestion_image = false;
	})


	$('.library_image').click(function  () {
		
		$('.suggest_image').hide()

		open_suggestion_image = false;
	})



	
	




	

	function display_results (is_it_scroll,all_results) { // Is it scroll determines if we are display results while scrolling or nor. It takes 2 values (true or false)
		
		if(all_results!=false){ 

			$('#search-text').val(all_results.search_string)
			$('.library_'+default_library).attr('start',all_results.start)
			$('.library_'+default_library).attr('end',all_results.end)

			switch(all_results.library){

				case 'wikipedia': 
	    		  	//Process displaying wikipedia results
	    		  	var wikipedia = all_results.wikipedia.all_results;

	    		  	if(!is_it_scroll){

	    		  		$('#wikipedia').html('<div class="collection"></div>')
	    		  		$('.library_wikipedia').attr('already_search','yes') //We mark that we have dispaly results in this tab yet

	    		  	}

	    		  	for (var i = 0; i < wikipedia.length; i++) {
	    		  		
	    		  		var html = '<a href="'+wikipedia[i][1]+'" class="collection-item waves-effect waves-light">';
	    		  		html 	+='<span class="first_letter" style="background-color:'+window.set_background_first_letter()+'">'+wikipedia[i][0].charAt(0)+'</span>';
	    		  		html	+='<div class="title blue-text text-darken-2 truncate">'+wikipedia[i][0]+'</div>';
	    		  		html	+='<span class="red-text text-darken-2 truncate description">'+wikipedia[i][2]+'</span></a>';

	    		  		$('#wikipedia .collection').append(html)
	    		  	};

	    		  	$('#wikipedia').attr('already_search','yes') //We mark that we have dispaly results in this tab yet


	    		  	//We mind other results

		  		break;

		  		case 'image':
		  			//Process displaying image results
		  			var documents = all_results.results.hits;

	    		  	if(!is_it_scroll && all_results.results.total!=0){

	    		  		$('#image').html('<div class="collection"></div>')

	    		  		$('.library_image').attr('already_search','yes') //We mark that we have dispaly results in this tab yet
	    		  	}

	    		  	for (var i = 0; i < documents.length; i++) { 

	    		  		if(documents[i]._source.description==''){

	    		  			var description = '';
	    		  		}else{
	    		  			var description = documents[i]._source.description;
	    		  		}

	    		  		var url_thumbnail 	= documents[i]._source.thumbnail;

	    		  		
	    		  		var html = '<a href="/watch?media='+documents[i]._source.hashName+'" class="collection-item waves-effect waves-light" id="'+documents[i]._id+'" >';
	    		  		html 	+='<img class="first_pic" src="assets_media/'+url_thumbnail+'">';
	    		  		html	+='<div class="title blue-text text-darken-2 truncate">'+documents[i]._source.title+'</div>';
	    		  		html	+='<span class="red-text text-darken-2 truncate description">'+description+'</span>';
	    		  		html	+=' <div><span class="new badge blue" data-badge-caption="'+window.formatBytes(documents[i]._source.size)+'"></span></div>';
	    		  		html	+='<div class="black-text text-darken-2 data_file"><span class="views"><span class="number">'+documents[i]._source.view+'</span>&nbsp;';
	    		  		html	+='<span class="view_lang">Views</span></span>&nbsp;.&nbsp;<span class="dateTime">'+moment(documents[i]._source.create_at).fromNow();+'</span></div></a>';

	    		  		$('#image .collection').append(html)
	    		  	}


	    		  	if(all_results.results.total==0){ //IF there is no result

	    		  		$('.this_'+default_library+' center').html('<i class="large material-icons">sentiment_dissatisfied</i>')
	    		  	}


				break;

				case 'audio_video':
		  			//Process displaying audio/video results
		  			//Process displaying documents results
		  			var documents = all_results.results.hits;

	    		  	if(!is_it_scroll && all_results.results.total!=0){

	    		  		$('#audio_video').html('<div class="collection"></div>')

	    		  		$('.library_audio_video').attr('already_search','yes') //We mark that we have dispaly results in this tab yet
	    		  	}

	    		  	for (var i = 0; i < documents.length; i++) { 

	    		  		if(documents[i]._source.description==''){

	    		  			var description = '';
	    		  		}else{
	    		  			var description = documents[i]._source.description;
	    		  		}

	    		  		var url_thumbnail 	= documents[i]._source.thumbnail;
	    		  		
	    		  		var html = '<a href="/watch?media='+documents[i]._source.hashName+'" class="collection-item waves-effect waves-light" id="'+documents[i]._id+'" >';
	    		  		html 	+='<img class="first_pic" src="assets_media/'+url_thumbnail+'">';
	    		  		html	+='<div class="title blue-text text-darken-2 truncate">'+documents[i]._source.title+'</div>';
	    		  		html	+='<span class="red-text text-darken-2 truncate description">'+description+'</span>';
	    		  		html	+=' <div><span class="new badge blue" data-badge-caption="'+window.convertTime(documents[i]._source.duration)+'"></span></div>';
	    		  		html	+='<div class="black-text text-darken-2 data_file"><span class="views"><span class="number">'+documents[i]._source.view+'</span>&nbsp;';
	    		  		html	+='<span class="view_lang">Views</span></span>&nbsp;.&nbsp;<span class="dateTime">'+moment(documents[i]._source.create_at).fromNow();+'</span></div></a>';

	    		  		$('#audio_video .collection').append(html)
	    		  	}


	    		  	if(all_results.results.total==0){ //IF there is no result

	    		  		$('.this_'+default_library+' center').html('<i class="large material-icons">sentiment_dissatisfied</i>')
	    		  	}

				break;

				case 'document':
		  			//Process displaying documents results
		  			var documents = all_results.results.hits;

	    		  	if(!is_it_scroll && all_results.results.total!=0){ 

	    		  		$('#document').html('<div class="collection"></div>')

	    		  		$('.library_document').attr('already_search','yes') //We mark that we have dispaly results in this tab yet
	    		  	}

	    		  	for (var i = 0; i < documents.length; i++) { 

	    		  		if(documents[i]._source.description==''){

	    		  			var description = documents[i]._source.short_text;
	    		  		}else{
	    		  			var description = documents[i]._source.description;
	    		  		}

	    		  		var url_thumbnail 	= documents[i]._source.thumbnail;
	    		  		
	    		  		var html = '<a href="/watch?media='+documents[i]._source.hashName+'" class="collection-item waves-effect waves-light" id="'+documents[i]._id+'" >';
	    		  		html 	+='<img class="first_pic" src="assets_media/'+url_thumbnail+'">';
	    		  		html	+='<div class="title blue-text text-darken-2 truncate">'+documents[i]._source.title+'</div>';
	    		  		html	+='<span class="red-text text-darken-2 truncate description">'+description+'</span>';
	    		  		html	+=' <div><span class="new badge blue" data-badge-caption="'+documents[i]._source.pages+' Pages"></span></div>';
	    		  		html	+='<div class="black-text text-darken-2 data_file"><span class="views"><span class="number">'+documents[i]._source.view+'</span>&nbsp;';
	    		  		html	+='<span class="view_lang">Views</span></span>&nbsp;.&nbsp;<span class="dateTime">'+moment(documents[i]._source.create_at).fromNow();+'</span></div></a>';

	    		  		$('#document .collection').append(html)
	    		  	}

	    		  	if(all_results.results.total==0){ //IF there is no result

	    		  		$('.this_'+default_library+' center').html('<i class="large material-icons">sentiment_dissatisfied</i>')
	    		  	}
				break;
			}
		}

	}




	function show_loader_scroll () {
		
		$('.my_loader').fadeIn()
	}

	function hide_loader_scroll () {
		
		$('.my_loader').fadeOut()
	}



	
	$('.plus').click(function  () {
		
		var all_results = $('.search_string').attr('string');

	    if($('.search_string').attr('string') && $('.search_string').attr('string').length > minimum_lenght_search_string){

	        show_loader_scroll()

	        search($('.search_string').attr('string'),true)
	    }
	})


	


	window.socket.on('search_ajax',function  (data) { 

		hide_loader_scroll()

		if(data.statu=='ok'){

			$('.library_'+default_library).attr('start',data.results.start)
			$('.library_'+default_library).attr('end',data.results.end)

		  	default_library	= data.results.library;

		  	display_results(true,data.results)
		}else{

			console.log('resualtats fail')
		}
	});


	//Switching library
	$('.library').click(function  () {

		default_library = $(this).attr('href').replace('#','')

		if($('.library_'+default_library).attr('already_search')=='no'){

			if($('.search_string').attr('string') && $('.search_string').attr('string').length > minimum_lenght_search_string){

	        	search($('.search_string').attr('string'),false)
	    	}
		} 

	})



	


	

});
