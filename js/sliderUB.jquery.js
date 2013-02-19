(function($) {
  $.fn.sliderUB = function() {
    return this.each(function(){
    	contenidor = $(this).find('ul');
    	

    	if(contenidor){

    		/*establim les variables*/
    		items = contenidor.children();
    		var numeroItems = contenidor.find('li').length;
    		var ampleItems = contenidor.find('li').width()+5;
    		var ampleLlista = numeroItems*ampleItems+ ampleItems*4;
    		var moviment = ampleItems;
    		var estaMoviment = false;
    		var posicio = 1;
    		var left_reset = numeroItems * ampleItems *-1;


    		/*asignem lample a la llista*/
    		contenidor.css({'width': ampleLlista});

    		/*afegirm els elements del principi al final per simular bucle*/

    		for(var i = 0; i<4; i++ ){
    		contenidor.append(items.eq(i).clone());
    		}



    		/*event handler*/

    		/*boto previ*/
		    	$('.prev').click(function(e){
		    		e.preventDefault();

		    		
		    			if(estaMoviment == false){
					    		if(posicio == 1){
					    			contenidor.css('left', left_reset);
					    			posicio = 7;
					    		}
					    		else{
					    			posicio--;
					    			
					    		}
					   		
					    		estaMoviment = true;
					    		
					    		$(contenidor).animate({left:'+='+moviment}, 300, 'swing', function(){
										estaMoviment = false;

					    		});

					    }


		    	});

		    	/*boto seguent*/

		    	$('.next').click(function(e){
		    		e.preventDefault();

				    	
		    		if(estaMoviment == false){
				    		if(posicio == 8){
				    			contenidor.css('left', '68px');
				    			posicio = 2;
				    		}
				    		else{
				    			posicio++;

				    		}
				    		
				    		estaMoviment = true;
				    		
				    		$(contenidor).animate({left:'-='+moviment}, 300, 'swing', function(){
									estaMoviment = false;

				    		});

				    }

		    	});
	    	
    	}


    })
  };

})(jQuery);