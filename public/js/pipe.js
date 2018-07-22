
$(document).ready(function(){ 

	for (var i = 0; i <20; i++) {

		var pic_autor = 'yuna.jpg';
		var title ='Comment résoudre une équation de second dégré';
		var answer=20;
		var views=89;
		var from='il ya 2 jours';
		var tags=['C++','Orientation','Histoire','BAC','Bureau'];
		add_item_lis_questions (pic_autor,title,tags,answer,views,from);
	}

	
	function add_item_lis_questions (pic_autor,title,tags,answer,views,from) { //tags is an array

		var all_tags='';

		for (var i = 0; i < tags.length; i++) {
			all_tags +='<a href="#"> <div class="chip">'+tags[i]+'</div></a>';

			if(i==tags.length-1){

				var html 	= '<li class="collection-item avatar card-panel">';
					html	+='<img src="img/'+pic_autor+'" alt="" class="circle">';
					html	+='<span class="title blue-text text-darken-2">'+title+'</span>';
					html	+='<div class="tags_question">'+all_tags+'</div>';
					html	+='<div class="data_question"><span>'+answer+' Réponses</span>&nbsp;.&nbsp;<span>'+views+' Vues</span>';
					html	+='&nbsp;&nbsp;<span class="hide-on-med-and-up last_time"> '+from+'</span>';
					html	+='</div>';
					html	+='<a href="#!" class="hide-on-small-only secondary-content last_time"><i class="material-icons left">watch_later</i> '+from+'</a>';
					html	+='</li>';

					$('.all_questions').append(html);
			}
		};
		
		
	}


});
