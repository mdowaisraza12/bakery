$(document).ready(function(){

	$(window).scroll(function(){
		var x = $(document).scrollTop();
		if(x >400){
			$('.arrow').show();
		}
			else{
				$('.arrow').hide();
			}

	});
	$('.arrow').click(function(){
		$(window).scrollTop(0)
	});
		
  });


