
$(document).ready(function(){ 

	$('.notification_li').hover(function  () {
		
			$(this).addClass('z-depth-3')
		},function  () {
			$(this).removeClass('z-depth-3')

	})

	//ToDO Momenclature
	// Impotant pour l'adminisyartion et avertissement des administrateurs
	// Communiqué pour club, délégués et Associations
	// Rien pour les messages de suivi et consulataion de  fichier



	for (var i = 0; i < 50; i++) {


		var text = "Official twitter account of the U.S. Embassy in Burkina Faso / Compte officiel de l'Ambassade des Etats-Unis au Burkina Faso. Retweets ≠ endorsement";

		switch(i){
			case 0:
				var type_message ='<span class="new badge red" data-badge-caption="Important"></span><br>';

			break;

			case 1:
				var type_message ='<span class="new badge blue" data-badge-caption="Information"></span><br>';

			break;

			case 2:
				var type_message ='<br>';
			break;
		}
		
		notication_list ('yuna.jpg','Something you should Know',i,text,type_message,'il ya 2 jours');

	};


	function notication_list (pic,title,id_note,note,type_message,note_timestamp) {

		//If there is a media do the note varaible is empty: note=''

		
		
		var html	='<li class="notification_li collection-item avatar card-panel"><a href="'+id_note+'">';
			html 	+='<img src="img/'+pic+'" alt="" class="circle">';
			html	+=type_message;
			html	+='<span class="title truncate">'+title+'</span>';
			html	+='<p class="truncate">'+note+'</p>';
			html	+='<a href="#!" class="secondary-content"><i class="material-icons left">notifications</i><span class="date_note">'+note_timestamp+'</span></a>';
			html	+='</a></li>';
                
		 	$('.notification_list').append(html)
                  
                
	}

	window.suggestion()
	

});
