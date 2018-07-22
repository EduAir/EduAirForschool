
$(document).ready(function(){ 

	$('select').material_select();

	
	$('#schooler').change(function  () {
		
		get_this_school($('#schooler').val())
	})

	function get_this_school (school) {
		
		//ToDo
		// - Prendre le niveau de profondeur de l'ecole (4 maxi)
		// - Proposer la profondeur suivante jusqu'a la filère et le niveau
		// - Seul les ecoles on les photo
		// -le tout se passe en Ajax
		// - Tout est dans une balise select
		// -Creer en admin le hastag pour chaque filière
		
	}

	

});
