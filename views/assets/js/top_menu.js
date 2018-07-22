
$(document).ready(function(){ 

	
	var trying =  rotate(360,true)


	function rotate (degree,statu) {

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
	    	
	    		rotate(-degree,false)
	    	},1000)
		}
	}



	



});
