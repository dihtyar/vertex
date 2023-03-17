$(function() {

//	effect main page

	// Anime ===
var speed = 10;
var step = 2;
var $svg_cont;
var $svg_cont2;
var $svg_cont3;
    $(function() {
        svg_reload();
        // $(window).resize(function(){
        //     svg_reload();
        //     svg_start();
        // });
        // $(window).load(function(){
        //     svg_reload();
        //     svg_start();
        // });
        $svg_cont = $('.circle');
        $(document).scroll(function(){
            var top = $svg_cont.offset().top || 0;
            var ready = $svg_cont.data('ready') || false;
            if (!ready) {
                if ($(document).scrollTop() >= top - 20) {
                    svg_start();
                    $svg_cont.data('ready', 1);
                }
            } else {
                 if ($(document).scrollTop() < top - 20) {
                     $svg_cont.data('ready', 0);
                 }
            }
        });
        $svg_cont2 = $('.circle2');
        $(document).scroll(function(){
            var top = $svg_cont2.offset().top || 0;
            var ready = $svg_cont2.data('ready') || false;
            if (!ready) {
                if ($(document).scrollTop() >= top - 20) {
                    svg_start();
                    $svg_cont2.data('ready', 1);
                }
            } else {
                 if ($(document).scrollTop() < top - 20) {
                     $svg_cont2.data('ready', 0);
                 }
            }
        });

        $svg_cont3 = $('.circle3');
        $(document).scroll(function(){
            var top = $svg_cont3.offset().top || 0;
            var ready = $svg_cont3.data('ready') || false;
            if (!ready) {
                if ($(document).scrollTop() >= top - 20) {
                    svg_start();
                    $svg_cont3.data('ready', 1);
                }
            } else {
                 if ($(document).scrollTop() < top - 20) {
                     $svg_cont3.data('ready', 0);
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

// counter


        $('.circle_text-1').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 3800}, {
            duration: 2000,
            step: function (num){
                this.innerHTML = (num ).toFixed(0)
                }
        });


        $('.circle_text-2').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 1200}, {
            duration: 2000,
            step: function (num){
                this.innerHTML = (num).toFixed(0)
            }
        });

        $('.circle_text-3').animate({num: 0}, {duration: 0, step: function (num){this.innerHTML=(num).toFixed(0)}}).animate({ num: 7200}, {
            duration: 2000,
            step: function (num){
                this.innerHTML = (num).toFixed(0)
            }
        });


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