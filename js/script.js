"use strict";

$('.humburger-button').on('click',function(){
	$('.humburger-button').toggleClass('close');
	$('.nav-wrapper').fadeToggle('slide-in');
	$('.nav-list').toggleClass('humburger-on');
	$('.header__menu').toggleClass('menu-open');
	$('body').toggleClass('noscroll');
  });
