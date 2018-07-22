
$(document).ready(function(){ 

	
	for (var i = 0; i < 50; i++) {
		var text = "Official twitter account of the U.S. Embassy in Burkina Faso / Compte officiel de l'Ambassade des Etats-Unis au Burkina Faso. Retweets ≠ endorsement";

		follow_list('yuna.jpg','Alpha Barry',i,text)
	};


	function follow_list (pic,name,id_user,description) {
		
		var html	= '<li class="collection-item avatar">';
				html	+= '<img src="img/'+pic+'" alt="" class="circle">';
				html	+= '<span class="title"><a href="'+id_user+'">'+name+'</a></span>';
				html	+= '<p class="desc_follow">'+description+'</p>';
				html	+= '<a href="#!" class="secondary-content waves-effect #e3f2fd blue lighten-5 waves-light btn"><i class="material-icons blue-text text-darken-2 left">person_add</i>&nbsp;<span class="abonne">S\'abonner</span></a></li>';

		$('.follow_list').append(html)
                  
                
	}

	window.suggestion()
	

});
