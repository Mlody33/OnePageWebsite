/*jslint browser: true*/
/*global $, jQuery, alert*/

function unfocusLogo(speed) {
    "use strict";
	var randomNumber = 100;
	$('.hero-logo > svg:nth-child(5)').delay(randomNumber).animate({opacity: 0, top: 30, left: 30}, speed);
	$('.hero-logo > svg:nth-child(1)').delay(randomNumber).animate({opacity: 0, top: -8, left: -8}, speed);
	$('.hero-logo > svg:nth-child(2)').delay(randomNumber).animate({opacity: 0, top: -11, left: 30}, speed);
	$('.hero-logo > svg:nth-child(3)').delay(randomNumber).animate({opacity: 0, top: -8, left: 68}, speed);
	$('.hero-logo > svg:nth-child(4)').delay(randomNumber).animate({opacity: 0, top: 30, left: -11}, speed);
	$('.hero-logo > svg:nth-child(6)').delay(randomNumber).animate({opacity: 0, top: 30, left: 71}, speed);
	$('.hero-logo > svg:nth-child(7)').delay(randomNumber).animate({opacity: 0, top: 68, left: -8}, speed);
	$('.hero-logo > svg:nth-child(8)').delay(randomNumber).animate({opacity: 0, top: 71, left: 30}, speed);
	$('.hero-logo > svg:nth-child(9)').delay(randomNumber).animate({opacity: 0, top: 68, left: 68}, speed);
}
function focusLogo(speed) {
    "use strict";
    var randomNumber;
	$('.hero-logo > svg:nth-child(5)').delay(100).animate({opacity: 1, top: 30, left: 30}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(1)').delay(randomNumber).animate({opacity: 1, top: 2, left: 2}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(2)').delay(randomNumber).animate({opacity: 1, top: -1, left: 30}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(3)').delay(randomNumber).animate({opacity: 1, top: 2, left: 58}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(4)').delay(randomNumber).animate({opacity: 1, top: 30, left: -1}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(6)').delay(randomNumber).animate({opacity: 1, top: 30, left: 61}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(7)').delay(randomNumber).animate({opacity: 1, top: 58, left: 2}, speed);
	randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(8)').delay(randomNumber).animate({opacity: 1, top: 61, left: 30}, speed);
    randomNumber = Math.floor((Math.random() * 1000) + 200);
	$('.hero-logo > svg:nth-child(9)').delay(randomNumber).animate({opacity: 1, top: 58, left: 58}, speed);
}
function showSkillProgress() {
    "use strict";
    if ($(window).scrollTop() + $(window).height() <= $('#referencje').offset().top) {
        $('#skill-html5 > .progress-line').removeClass('rotate-95');
		$('#skill-css3 > .progress-line').removeClass('rotate-95');
        $('#skill-js > .progress-line').removeClass('rotate-80');
        $('#skill-php > .progress-line').removeClass('rotate-75');
		$('#skill-sql > .progress-line').removeClass('rotate-90');
    }
	if (($(window).scrollTop() + $(window).height() * 0.75) >= $('#skill-css3').offset().top) {
		$('#skill-html5 > .progress-line').addClass('rotate-95');
		$('#skill-css3 > .progress-line').addClass('rotate-95');
	}
	if (($(window).scrollTop() + $(window).height() * 0.75) >= $('#skill-js').offset().top) {
		$('#skill-js > .progress-line').addClass('rotate-80');
	}
	if (($(window).scrollTop() + $(window).height() * 0.75) >= $('#skill-php').offset().top) {
		$('#skill-php > .progress-line').addClass('rotate-75');
		$('#skill-sql > .progress-line').addClass('rotate-90');
    }
}

function imagesSlider(szybkosc) {
    "use strict";
	var image_data = [1, 2, 3, 4, 5, 6],
        i = 0;

	$('section.gallery-slider > div#next').click(function () {
		$('section > div.wrap-slider > img:last-child').animate({left: '110%', opacity: 0}, 0, function () {
            if (i > image_data.length - 2) {
                i = -1;
            }
            i += 1;
            $(this).attr('src', 'assets/img/' + image_data[i] + '.jpg');
			$(this).animate({left: 0, opacity: 1}, szybkosc, function () {
				$('section > div.wrap-slider > img:first-child').attr('src', 'assets/img/' + image_data[i] + '.jpg');
				$(this).css({left: '110%'});
			});
        });
    });

	$('section.gallery-slider > div#previus').click(function () {
		$('section > div.wrap-slider > img:last-child').animate({left: '-110%', opacity: 0}, 0, function () {
            if (i <= 0) {
                i = 6;
            }
            i -= 1;
			$(this).attr('src', 'assets/img/' + image_data[i] + '.jpg');
			$(this).animate({left: 0, opacity: 1}, szybkosc, function () {
				$('section > div.wrap-slider > img:first-child').attr('src', 'assets/img/' + image_data[i] + '.jpg');
				$(this).css({left: '-110%'});
			});
        });
    });

}

function hideHeroImageContent() {
    "use strict";
    unfocusLogo(100);
    $('h1.hero-slogan').removeClass('show');
    $('h1.hero-slogan').removeClass('typing-effect');
    $('header > h2').removeClass('show');
}

function showHeroImageContent() {
    "use strict";
    unfocusLogo(0);
	setTimeout(function () {
        focusLogo(100);
    }, 500);
    setTimeout(function () {
        $('h1.hero-slogan').addClass('typing-effect');
        $('h1.hero-slogan').addClass('show');
    }, 600);
    setTimeout(function () {
        $('header > h2').addClass('show');
    }, 1000);
}

function menuController() {
    "use strict";
	if ($(window).scrollTop() >= $('.hero-image').height()) {
		$('nav').addClass('fixed');
        $('main').addClass('fixed');
	} else {
		$('nav').removeClass('fixed');
        $('main').removeClass('fixed');
	}
}

function showMobileMenu(isMenuHide) {
    "use strict";
    $('nav').addClass('show-menu');
    isMenuHide = false;
    return isMenuHide;
}

function hideMobileMenu(isMenuHide) {
    "use strict";
    $('nav').removeClass('show-menu');
    isMenuHide = true;
    return isMenuHide;
}

function mobileMenuController() {
    "use strict";
    var isMenuHide = true;
    $('.show-menu-button').click(function () {
        if (isMenuHide) {
            isMenuHide = showMobileMenu(isMenuHide);
        } else {
            isMenuHide = hideMobileMenu(isMenuHide);
        }
    });
    $('nav > ul > li:nth-child(-n+6)').click(function () {
        isMenuHide = hideMobileMenu(isMenuHide);
    });
}

function scroll_to(target) {
    "use strict";
    if(target === 'start') {
        $('html, body').animate({scrollTop: 0}, 700);
        setTimeout(function () { hideHeroImageContent(); }, 700);
        setTimeout(function () { showHeroImageContent(); }, 900);
    } else {
        $('html, body').animate({scrollTop: $('#' + target).offset().top}, 700);
    }
}

function load_preview_of_image(target) {
    "use strict";
    $('section > div.single-picture').removeClass("reduce-single-picture").removeClass("enlarge-single-picture");
    switch(target){
        case "img1":
            $('section > div.single-picture:nth-child(n+2)').addClass("reduce-single-picture");
            $('section > div.single-picture:nth-child(1)').addClass("enlarge-single-picture");
            break;
        case "img2":
            $('section > div.single-picture:nth-child(2n-1)').addClass("reduce-single-picture");
            $('section > div.single-picture:nth-child(2)').addClass("enlarge-single-picture");
            break;
        case "img3":
            $('section > div.single-picture:nth-child(-n+2)').addClass("reduce-single-picture");
            $('section > div.single-picture:nth-child(3)').addClass("enlarge-single-picture");
            break;
    }
}

function showAsideFigure() {
    "use strict";
    if ($(window).scrollTop() <= 0) {
        $('.fa-hashtag').removeClass('figure-normal');
        hideHeroImageContent();
        setTimeout(function() { showHeroImageContent(); }, 200);
    }
    if ($(window).scrollTop() + $(window).height() <= $('#oferta').offset().top) {
        $('.fa-cogs').removeClass('figure-normal');
    }
    if ($(window).scrollTop() + $(window).height() <= $('#pytania').offset().top) {
        $('.fa-comments-o').removeClass('figure-normal');
    }
    
    if (($(window).scrollTop() + $(window).height() * 0.75)  >= $('.fa-hashtag').offset().top) {
        $('.fa-hashtag').addClass('figure-normal');
    }
    if (($(window).scrollTop() + $(window).height() * 0.75) >= $('.fa-cogs').offset().top) {
        $('.fa-cogs').addClass('figure-normal');
    }
    if (($(window).scrollTop() + $(window).height() * 0.75) >= $('.fa-comments-o').offset().top) {
        $('.fa-comments-o').addClass('figure-normal');
    }
}

function showPictureOfGallery() {
    "use strict";
    if ($(window).scrollTop() + $(window).height() <= $('#projekty').offset().top) {
        $('.single-picture').removeClass('show-single-picture');
    }
    if (($(window).scrollTop() + $(window).height() * 0.75)  >= $('.gallery').offset().top) {
        $('.single-picture').addClass('show-single-picture');
    }
}

function formController(sentMessage, defaultMessage) {
    "use strict";
    $('form > input[type=submit]').addClass('sent');
    $('form > input[type=submit]').val(sentMessage);
    $('form > input[type=text], form > input[type=email], form > textarea').prop('disabled', true);
    $('form > input[type=reset]').click(function () {
        $('form > input[type=submit]').removeClass('sent');
        $('form > input[type=submit]').val(defaultMessage);
        $('form > input[type=text], form > input[type=email], form > textarea').prop('disabled', false);
    });
}

$(document).ready(function () {
    "use strict";
    showHeroImageContent();
	imagesSlider(500);
	menuController();
    mobileMenuController();
    hideMobileMenu();

    $('nav > ul > li').find('a').click( function() { 
        $('div.popup').removeClass('visible');
        scroll_to(this.hash.replace('#',''));
    });

    $('.gallery > .single-picture').find('a').mouseover( function() {
        load_preview_of_image(this.hash.replace('#',''));
    });

    $('.gallery').mouseleave( function() {
        $('section > div.single-picture').removeClass("reduce-single-picture").removeClass("enlarge-single-picture");
    });

	$(window).scroll(function () {
		menuController();
		showSkillProgress();
        showAsideFigure();
        showPictureOfGallery();
	});

	$('.hero-image').click(function () {
        hideHeroImageContent();
        setTimeout(function () { showHeroImageContent(); }, 500);
    });

	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
            url: 'assets/php/mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (data) {
                formController("Wiadomość wysłana", "Wyślij");
			}
        });
	});
  
});