
$(document).ready(function(){ 

	//Put pub in articles
	window.pub_video();

	//Insert suggestions
	window.suggestion()

	
	if(window.is_desktop()){
		$('.player').addClass('container');
	}

	//Read the audio file
	var myaudio = new Audio(window.audio_path+$('.control_audio').attr('url'));
	$('.displayer').html(myaudio);
	
	myaudio.addEventListener('loadedmetadata', function() {
    	$('.end_audio').text(covert_timer_human(myaudio.duration));

    	if(!window.is_mobile()){
			myaudio.play(); 
    	}
    	
	});

	myaudio.addEventListener('timeupdate',function(){
    	$('.current_audio').text(covert_timer_human(myaudio.currentTime));  
    	$('.audio_field .determinate').attr('style','width: '+myaudio.currentTime/myaudio.duration*100+'%')	
	},false);

	myaudio.onpause = function() {
    	$('.control_audio i').text('play_arrow');
	};


	myaudio.onplay = function() {
    	$('.control_audio i').text('pause');
	};

	myaudio.onended = function() {
    	$('.control_audio i').text('play_arrow');
    	 paused=true;
    	myaudio.currentTime=0;
	};

	var paused
	if(window.is_mobile()){
		paused=true;
		$('.control_audio i').text('play_arrow');
	}else{
		paused=false;
	}

	$('.control_audio').click(function() {
		if(paused==false){
			myaudio.pause();
			$('.control_audio i').text('play_arrow');
			paused=true;
		}else{
			myaudio.play();
			$('.control_audio i').text('pause');
			paused=false;
		}
	})

	


	function covert_timer_human (time) {

		return Math.floor(time/60)+':'+Math.floor(time % 60);
		// body...
	}

	$('.audio_field').hover(function  () {
		
		myaudio.controls = true;
		$('.timer,.end_audio,.current_audio').hide();
		},
		function  () {
		
			myaudio.controls = false;
			$('.timer,.end_audio,.current_audio').show();
	})

	

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
		'id_autor':'27789',
		'title':'This is demo'
	}
	var type_media ='audio';
	var if_wikipedia = false;
	window.infobox(infos,type_media,if_wikipedia)





	

});
