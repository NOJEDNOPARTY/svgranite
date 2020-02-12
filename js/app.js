var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){
        
        $(".fancybox-thumb").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            helpers	: {
                title	: {
                    type: 'outside'
                },
                thumbs	: {
                    width	: 50,
                    height	: 50
                }
            }
		});
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
			$('header').removeClass('open');
		});

		$('.callback-btn').click(function(event){
			event.preventDefault();
			$('#callbackPopup').addClass('active');
			$('header').removeClass('open');
		})
		$('.btn-price').click(function(event){
			event.preventDefault();
			$('#pricePopup').addClass('active');
			$('header').removeClass('open');
		})

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		})

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
		})

		$('.btn-country').click(function(event){
			event.preventDefault();
			var country = '.' +  $(this).attr('data-country');
			$('.btn-country').removeClass('active');
			$('.country-blk').removeClass('active');
			$(country).addClass('active');
			$(this).addClass('active');
		})
	},
	owl: function() {
		$('.reviews').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				325:{
					items:1
				},
				768: {
					items:1
				}
			}
		});
		var owlDes = $('.decision-carousel').owlCarousel({
			nav:true,
			dots: true,
			loop: false,
			smartSpeed: 1000,
			autoHeight:true,
			dotsContainer: '#decisionCarouselDots',
			responsive:{
				0:{
					items:1,
				},
				325:{
					items:1
				},
				768: {
					items:1
				}
			}
		});

		$('#decisionCarouselDots').owlCarousel({
			nav: false,
			dots: false,
			loop: false,
			smartSpeed: 1000,
			margin: 10,
			responsive:{
				0:{
					items:1,
				},
				325:{
					items:1
				},
				768: {
					items:3
				}
			}
		});
		
		$('#decisionCarouselDots').on('click', '.owl-dot', function(e) {
			owlDes.trigger('to.owl.carousel', [$(this).parent().index(), 300]);
		});
  	},
};

(function() {
	common.init();
}());
