
$(document).ready(function(){ 


	window.minimum_lenght_search_string = 2;

	
	var trying =  rotate_the_logo(360,true)


	function rotate_the_logo (degree,statu) {

		$('.air').animate({  transform: degree }, {
		    	step: function(now,fx) {
			        $(this).css({
			            '-webkit-transform':'rotate('+now+'deg)', 
			            '-moz-transform':'rotate('+now+'deg)',
			            'transform':'rotate('+now+'deg)'
			        });
		    	}
	    });

		if(statu==true){

			
	    	setTimeout(function  () {
	    	
	    		rotate_the_logo(-degree,false)
	    	},1000)
		}
	}



	//Rotate the logo as a loader
	function loader_logo () {

		rotate_the_logo(360,true)
		
		setInterval(function  () {
			
			rotate_the_logo(360,true)
		},1000)
	}







// my_submit
	$('#search-box').submit(function  (e) { 
		
		e.preventDefault(e);

		var search_term = $('#search-text').val();

		if(search_term!='' && search_term.length > minimum_lenght_search_string){

			location.href = '/results?search='+search_term;

			loader_logo()
		}	
	})


});
