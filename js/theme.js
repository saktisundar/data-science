;(function($) {
    "use strict";    
        
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header-section').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 95) {
                    $(".header-section").addClass("navbar_fixed");
                } else {
                    $(".header-section").removeClass("navbar_fixed");
                }
            });
        };
    };  
    
    //* counter--up.js
    function counterUp() {
        if ($('.counterup-section').length) { 
            $('.counter').counterUp({
                delay: 10,
                time: 3000, 
            });
        };
    };


       // magnificPopup 
       function magnifiPopup (){
        if ($('.popup-youtube').length){
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }

    
    // owlCarousel 
    function owlCarousel (){
        if ($('.programmes-section').length){
            $('.programmes-slider').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                dots:false,
                item: 4,
                autoplay:true,
                autoplayTimeout:2000,
                smartSpeed:2000,
                stagePadding: 100,
                MouseEvent:true,
                autoplayHoverPause:true,
                navigation: true,
                navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
                responsive:{
                    0:{
                        items:1,
                        stagePadding: 10
                    },
                    575:{
                        items:1,
                        stagePadding: 10
                    },
                    768:{
                        items:2,
                        stagePadding: 20
                    },
                    1000:{
                        items:3
                    }
                }
            })
        }
    }

    $('.open-nav').click( function (){
                  
		$('body').addClass('nav_activee');  	  
	});
    
	$('.nav_close, .overlaly').click( function (){
		  
		$('body').removeClass('nav_activee');  
    });


     // search modal js 
     $('.search_btn').click( function (){
                  
		$('body').addClass('search-activee');  
	});

	$('.search_close, .search_overlay').click( function (){
		  
		$('body').removeClass('search-activee'); 
    });






    	//* Isotope js
        function protfolioIsotope(){
            if ( $('.what-news-section').length ){ 
                // Activate isotope in container
                $(".massanary_item").imagesLoaded( function() {
                    $(".massanary_item").isotope({
                        layoutMode: 'masonry',  
                    }); 
                });  
                
                // Add isotope click function 
                $(".news_filter li").on('click',function(){
                    $(".news_filter li").removeClass("active");
                    $(this).addClass("active"); 
                    var selector = $(this).attr("data-filter");
                    $(".massanary_item").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 450,
                            easing: "linear",
                            queue: false,
                        }
                    });
                    return false;
                });  
            };
        };


        
            //*  Simple LightBox js 
     function LightBox(){
        if( $('.light').length){
           $('.light').simpleLightbox()
        }
    }

    $(document).ready(function(){
        $("#scroll-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#scroll-section").offset().top
            }, 1000);
        });
    });


    /*Function Calls*/ 
    new WOW().init(); 
    navbarFixed ();
    counterUp();  
    magnifiPopup ();
    owlCarousel ();
    protfolioIsotope();
    LightBox();
})(jQuery); 
