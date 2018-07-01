$(function () {
  'use strict';
  // Adjust Slider Height
  var winh   =$(window).height(),
      upperh =$('.upper-bar').innerHeight(),
      navh   =$('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winh -(upperh+navh));
  // .Featured-Work shuflle
  $('.Featured-Work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
    	$('.shuffle-images .col-md').css('opacity', 1);}
    else{
    	$('.shuffle-images .col-md').css('opacity', 1);
    	$($(this).data('class')).parent().css('opacity', '.08');
    } 
  });
/*times*/
setTimeout(start, 100);

var i = 1;
var num = document.getElementById('counter');

function start() {
  setInterval(increase, 100);
}

function increase() {
    if (i < 15000) {
      i++;
      num.innerText = i;
    }
}

});

/*$('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });*/