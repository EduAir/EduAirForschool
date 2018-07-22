
$(document).ready(function(){ 

	///////This is for the pub
	window.pub_home = function(){

		if(window.activate_pub){
			display_pub_home ('10 000 FCFA','pub.jpg','Compensés bleu','Cynthia')
		}
	}

	function display_pub_home (price,pic,title,autor) {
		
		var width_card;

		if(window.is_mobile()){
			width_card = window.width_card_mobile;
		}else{
  			width_card = window.width_card_not_mobile;
		}

		var html = '<div class="card this_card" style="width:'+width_card+'">';
		html +=	'<div class="card-image"><img src="assets/pub/'+pic+'"><span class="card-title red">'+price+'</span></div>';
		html +=	'<div class="card-content"><div class="title blue-text text-darken-2 article_title">'+window.card_title(title)+'</div>';
		html +=	'<div class="info_file"><div class="red-text text-darken-2 data_file truncate">'+autor+'</div>';
		html +=	'<div class="black-text text-darken-2 data_file"><span class="views"><span class="number">'+sell_plateform+':</span>&nbsp;';
		html +=	'<span class="view_lang">'+sell_contact+'</span></span>&nbsp;.&nbsp;</div></div></div></div>';

		$('.all_card').append(html);

		if(title.length>window.maxi_character_title_card){
			$('.article_title').succinct({'size':window.maxi_character_title_card});
		}
	}


	window.pub_article = function  () {
		
		if(window.activate_pub){
			display_pub_article('10 000 FCFA','pub.jpg','Rame de format');
		}
	}

	function display_pub_article (price,pic,title) {
		var html 	= '<div class="card this_card left" style="width:'+window.width_card_not_mobile+'"><div class="card-image">';
		html	+='<img src="pub/'+pic+'"><span class="card-title red">'+price+'</span>';
		html	+='</div><div class="card-content"><div class="info_file"><div class="red-text text-darken-2 data_file truncate">'+title+'</div>';
		html	+='</div></div></div>';

		if($('p').length>1){

			//$('p:eq('+Math.floor((Math.random() * $('p').length) + 1)+')').before(html);
			$('p:eq(1)').before(html);
		}else{
			$('.article_airedu').append(html);
		} 	 
	}



	window.pub_video = function  () { 
		
		if(window.activate_pub){
			display_pub_video('10 000 FCFA','pub.jpg','Rame de format');
		}
	}

	function display_pub_video (price,pic,title) { 

		if(window.is_mobile()){
			var width = '100%';
		}else{
			var width = $('#video_box').width();
		}
		var html ='<div id="video_overlays" ><img src="pub/'+pic+'" class="img_pub_vid">';
		html	+='<a href="#" class="right close_pub">X</a><div class="reader_pub">';
		html	+='<p class="text_pub">'+title;
		html	+='<br><span class="new badge blue" data-badge-caption="'+price+'"></span></p>';
		html	+='</div></div>';


		$(html).prependTo($('#video_box'))

		var html2	='<img src="pub/'+pic+'" class="img_pub_vid">';
			html2	+='<a href="#" class="right close_pub_card">Close</a>';
			html2	+='<div class="reader_pub"><p class="text_pub">'+title;
			html2	+='<br><span class="new badge blue" data-badge-caption="'+price+'"></span></p></div>';

		$('.this_pub').html(html2);


		$(document).ready(function(){ 

			$('#video_overlays,.close_pub_card').unbind('click')

			$('#video_overlays').click(function  () { 
				
				$(this).fadeOut();
				$('.this_pub').fadeIn()
				return false;
			})

			$('.close_pub_card').click(function  () {
				$('.this_pub').fadeOut()
				return false;
			})

		})
	}
	

	
});
