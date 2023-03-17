jQuery(document).ready(function($){
	var animating = false;
	//update arrows visibility and detect which section is visible in the viewport
	setSlider();
	$(window).on('scroll resize', function(){
		(!window.requestAnimationFrame) ? setSlider() : window.requestAnimationFrame(setSlider);
	});

	//move to next/previous section clicking on arrows
    $('.cd-vertical-nav .cd-prev').on('click', function(){
    	prevSection();
    });
    $('.cd-vertical-nav .cd-next').on('click', function(){
    	nextSection();
    });

    //move to next/previous using the keyboards
    $(document).keydown(function(event){
		if( event.which=='38' ) {
			prevSection();
			event.preventDefault();
		} else if( event.which=='40' ) {
			nextSection();
			event.preventDefault();
		}
	});

	//go to next section
	function nextSection() {
		if (!animating) {
			if ($('.is-visible[data-type="slider-item"]').next().length > 0) smoothScroll($('.is-visible[data-type="slider-item"]').next());
		}
	}

	//go to previous section
	function prevSection() {
		if (!animating) {
			var prevSection = $('.is-visible[data-type="slider-item"]');
			if(prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
				smoothScroll(prevSection);
			} else if(prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
				smoothScroll(prevSection.prev('[data-type="slider-item"]'));
			}
		}
	}

	function setSlider() {
		checkNavigation();
		checkVisibleSection();
	}

	//update the visibility of the navigation arrows
	function checkNavigation() {
		( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
		( $(window).scrollTop() > $(document).height() - 3*$(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
	}

	//detect which section is visible in the viewport
	function checkVisibleSection() {
		var scrollTop = $(window).scrollTop(),
			windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function(){
			var actualBlock = $(this),
				offset = scrollTop - actualBlock.offset().top;
			//add/remove .is-visible class if the section is in the viewport - it is used to navigate through the sections
			( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	}

	function smoothScroll(target) {
		animating = true;
        $('body,html').animate({'scrollTop': target.offset().top}, 500, function(){ animating = false; });
	}
	
	/* vertical nav */
	
	var contentSections = $('.section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	500
        );
	}
	
	/* vertical nav */



//	effect main page

	// Anime ===
var speed = 10;
var step = 2;
var $svg_cont;
var $svg_cont2;
    $(function() {
        svg_reload();
        // $(window).resize(function(){
        //     svg_reload();
        //     svg_start();
        // });
        // // $(window).load(function(){
        //     svg_reload();
        //     svg_start();
        // });
        $svg_cont = $('.circle');
        $(document).scroll(function(){
            var top = $svg_cont.offset().top || 0;
            var ready = $svg_cont.data('ready') || false;
            if (!ready) {
                if ($(document).scrollTop() >= top - 50) {
                    svg_start();
                    $svg_cont.data('ready', 1);
                }
            } else {
                 if ($(document).scrollTop() < top - 50) {
                     $svg_cont.data('ready', 0);
                 }
            }
        });
        
        $svg_cont2 = $('.circle2');
        $(document).scroll(function(){
            var top = $svg_cont2.offset().top || 0;
            var ready = $svg_cont2.data('ready') || false;
            if (!ready) {
                if ($(document).scrollTop() >= top - 50) {
                    svg_start();
                    $svg_cont2.data('ready', 1);
                }
            } else {
                 if ($(document).scrollTop() < top - 50) {
                     $svg_cont2.data('ready', 0);
                 }
            }
        });
    });
    function svg_reload() {
        $('.js-svg-circle').each( function() {
            var $svg = $(this);
            (function($s){svg_init($s);})($svg);
        });
    }
    function svg_start() {

        $('.js-svg-circle').removeData();
        $('.js-svg-circle').each( function() {
            var $svg = $(this);
            (function($s){
                var i = setInterval( function() {
                    svg_animate($svg);
                }, speed);
                $svg.data('i',i);
            })($svg);
        });

         $('.circle_text-1').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 3800}, {
        duration: 2000,
        step: function (num){
            this.innerHTML = (num ).toFixed(0)
            }
        });

// counter
        $('.circle_text-2').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 1200}, {
            duration: 2000,
            step: function (num){
                this.innerHTML = (num).toFixed(0)
            }
        });
//
//         $('.circle_text-3').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 8}, {
//             duration: 3000,
//             step: function (num){
//                 this.innerHTML = (num ).toFixed(0)
//             }
//         });
//
//         $('.circle_text-4').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 65}, {
//             duration: 3000,
//             step: function (num){
//                 this.innerHTML = (num ).toFixed(0)
//             }
//         });

    // counter


    }
    function svg_init($svg) {
        var c = $svg.width()/2;
        $svg.html('<circle class="fon-circle"></circle>' +
            '<circle stroke-dasharray="0,20000" class="progress-circle"></circle>' +
            '<circle r="8" class="point-circle"></circle>');
        svg_posit($svg);
    }
    function svg_posit($svg) {
        var c = $svg.width()/2;
        var b = parseInt($svg.find('.fon-circle').css('stroke-width'));
        var pr = parseInt($svg.find('.point-circle').attr('r'));
        var r =  ($svg.width() - 2*b)/2-2*pr;
        $svg.css( 'height', $svg.width() + 'px' );
        $svg.find('.fon-circle,.progress-circle').attr({cx:c, cy:c, r:r, transform: 'rotate(-90,' + c + ',' + c + ')'});
        $svg.find('.point-circle').attr({cx:c, cy:b+2*pr});
        if( typeof $svg.data('stg') == 'object' ) {
            // svg_animate($svg);
        }
    }
    function svg_animate($svg) {
        var stg = $svg.data('stg') || {curr_angle: 0};
        var max_angle = $svg.data('angle') || 90;

        if (stg.curr_angle > max_angle -1) {
            clearInterval($svg.data('i'));
        } else {
            stg.curr_angle += step;
            $svg.data('stg', stg);
        }

        // progress
        var c = $svg.width()/2;
        var r = parseInt($svg.find('.fon-circle').attr('r'));
        var l = 2*Math.PI*r;
        var k = l/360;
        var curr_l = k*stg.curr_angle;
        var px = (Math.cos((stg.curr_angle-90)/(1/k*r))*r)+c;
        var py = (Math.sin((stg.curr_angle-90)/(1/k*r))*r)+c;

        $svg.find('.progress-circle').attr('stroke-dasharray', curr_l+',20000');
        $svg.find('.point-circle').attr({'cx':px,'cy':py});

    }


// Anime ===







//	effect main page






	
});



