
$(document).ready(function(){ 

	//fixe the size of the uploader
	$('.user_background').height((window.user_backgound_height*$(window).height())/100)

	 $('select').material_select();//Moderation


	//Display card
	function small_cards (time_page,pic,title,autor,view,since,index) {

		var width_card;

		if(window.is_mobile()){
			width_card = window.width_card_mobile;
		}else{
  			width_card = window.width_card_not_mobile;
		}

		var html = '<div class="card this_card" style="width:'+width_card+'">';
		html +=	'<div class="card-image"><img src="img/image.jpg"><span class="card-title">'+time_page+'</span></div>';
		html +=	'<div class="card-content"><div class="title blue-text text-darken-2 truncate_title_'+index+'">'+window.card_title(title)+'</div>';
		html +=	'<div class="info_file"><div class="red-text text-darken-2 data_file truncate">'+autor+'</div>';
		html +=	'<div class="black-text text-darken-2 data_file"><span class="views"><span class="number">'+view+'</span>&nbsp;';
		html +=	'<span class="view_lang">Views</span></span>&nbsp;.&nbsp;<span class="dateTime">'+since+'</span></div></div></div></div>';

		$('.all_card').append(html);

		if(title.length>window.maxi_character_title_card){
			$('.truncate_title_'+index).succinct({'size':window.maxi_character_title_card});
		}
	}

	//Repliacte the card
	var nbre = 50;

	for (var i = 0; i < nbre; i++) {
		
		small_cards('3:50','ras','In the previous examples, we only defined the size for small screens using "col s12". This is fine if we want a ','Stephane','50M','il y a 5 jours',i)
	 	
	 	if(i==1){
	 		window.pub_home()
	 	}
	};


});
