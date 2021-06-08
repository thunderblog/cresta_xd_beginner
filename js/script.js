"use strict";

$('.humburger-button').on('click',function(){
	$('.humburger-button').toggleClass('close');
	$('.nav-wrapper').fadeToggle('slide-in');
	$('body').toggleClass('noscroll');
  });
