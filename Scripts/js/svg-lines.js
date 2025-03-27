$(document).ready(function() {
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
	
		/* Check the location of each desired element */
		$('.hide3').each( function(){
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 5;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if( ( bottom_of_window ) > ( bottom_of_object)  ) {
				
				$(this).addClass("show3");
					
			}
			
			   if( ( bottom_of_window ) < ( bottom_of_object ) ) {
				
				$(this).removeClass("show3");
					
			}
			
		}); 
	
	});
	
});




