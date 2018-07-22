
$(document).ready(function(){ 

	//To truncate text


	//Display cards at home page

	// recommended
	function all_small_card (time_page,pic,title,autor,view,since,index,div) {

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

		$('.all_card_'+div).append(html);

		if(title.length>window.maxi_character_title_card){
			$('.truncate_title_'+index).succinct({'size':window.maxi_character_title_card});
		}
	}


	//Repliacte the card
	//var init = big_card('3:50 Vilain','ras','In the previous examples, we only defined the size for small screens using "col s12". This is fine if we want a ','Stephane','50M','il y a 5 jours');
	
	var nbre = 50;

	for (var i = 0; i < nbre; i++) {

		if(i<=9){
			all_small_card('3:50','ras','In the previous examples, we only defined the size for small screens using "col s12". This is fine if we want a ','Stephane','50M','il y a 5 jours',i,'recommended')
		}

		if(i<=4){
			all_small_card('3:50','ras','In the previous examples, we only defined the size for small screens using "col s12". This is fine if we want a ','Stephane','50M','il y a 5 jours',i,'recent')
		}
		
	 	
	 	if(i==1){
	 		window.pub_home()
	 	}
	};



	var on_body_start = range_all()

	function range_all () {
		
		$('.brother').height($('.father').height()/3)
		$('.all_brother').parent().height($('.father').parent().height())
		$('.all_brother').height($('.father').parent().height()-20)

	}

	$(window).resize(function  () {
		
		range_all()
	})



	



});
