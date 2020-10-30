$('.header__search a').click(function(e) {
	e.preventDefault();
	$('.header__search input').show();
	$('.header__search input').focus();
	$('.header__search input').animate({
			width: '200'}, 600);
	$(this).hide();
});

$('.header__search input').blur(function(e) {
	$('.header__search input').animate({width: '0'}, 300, function() {
		$(this).hide();
		$('.header__search a').show();
	});
});

$('.header__burger').click(function(e) {
	$(this).toggleClass('active');
	if($(this).hasClass('active')) {
		let autoHeight = $('.header__menu').css('height', 'auto').height();
		$('.header__menu').height(0).animate({height: `${autoHeight}px`}, 300);
	}
	else {	
		$('.header__menu').animate({height: '0'}, 300);
	}
});


var isAnimate = false;
$(window).scroll(function(event) {
	if($(window).scrollTop() > 200) {
		if(!isAnimate && $('.header__top').height() > 0) {
			isAnimate = true;
			$('.header__top').css({'min-height': '0'});
			$('.header__top').animate({'height': '0'}, 600, function() {
				isAnimate = false;
			});
		}
	}
	else {
		if(!isAnimate && $('.header__top').height() == 0) {
			isAnimate = true;
			let autoHeight = $('.header__top').css('height', 'auto').height();
			$('.header__top').height(0)
			.animate({'min-height': '50px', 'height': `${autoHeight}px`}, 600, function() {
				isAnimate = false;
			});
		}
	}
});

$(window).resize(function(event) {
	if(window.matchMedia("(min-width: 610px)").matches) {
		$('.header__top').css({'min-height': '50px', 'height': 'auto'});
	}
});

let arrows = {
	prevArrow: '<div class="slick-prev"><img src="img/intro/arrow-left.svg"></div>',
  	nextArrow: '<div class="slick-next"><img src="img/intro/arrow-right.svg"></div>'
}

$('.intro__slider').slick({
	...arrows,
  	dots: false 
});

$('.action__slider').slick({
	...arrows,
 	dots: false,
 	responsive: [
  	{
      breakpoint: 426,
      settings: {
        dots: true
      }
    }
  ]
});

$('.reviews__slider').slick({
	...arrows,
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,
	responsive: [
  	{
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
		slidesToScroll: 1,
      }
    }
  ]
});

$('.clients__slider').slick({
	...arrows,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
  	variableWidth: true,
	responsive: [
  	{
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        centerMode: true,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        centerMode: true
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    },
  ]
});