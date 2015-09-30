/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


$( document ).ready(function() {
	//Segment height
	var height = $( window ).height();
	$('.segment').css('height', height);

	$(window).scroll(function() {
    var height = $(window).scrollTop();
    var wr = $(".wr").offset().top - 100;
    var icc = $(".icc").offset().top - 100;
    var london = $(".london").offset().top - 100;
    var bob = $(".bob").offset().top - 100;
    var bbc = $(".bbc").offset().top - 100;

    if(height  > wr ) {
    	$(".segment.wr").addClass('active');
   	}
   	if(height  > icc ) {
   		// alert("height " + height + " ICC " + icc);
    	$(".segment.icc").addClass('active');
   	}
   	if(height  > london ) {
   		// alert("height " + height + " ICC " + icc);
    	$(".segment.london").addClass('active');
   	}
   	if(height  > bob ) {
   		// alert("height " + height + " ICC " + icc);
    	$(".segment.bob").addClass('active');
      $('.segment.bob iframe[src=""]').attr('src', 'http://louiebabb.com/bob/reveal-flip-3d-image-1.html');
   	}
   	if(height  > bbc ) {
   		// alert("height " + height + " ICC " + icc);
    	$(".segment.bbc").addClass('active');
    }
    if ( $(this).width() > 720 ) {
  		clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
          // do something
          if(height  > wr - 200 && height < wr + 500 ) {
        		$('body').scrollTo(wr + 100, 800);
  		}
  		if(height  > icc - 200 && height < icc + 500) {
        		$('body').scrollTo(icc + 100, 800);
  		}
  		if(height  > london - 200 && height < london + 500) {
        		$('body').scrollTo(london + 100, 800);
  		}
  		if(height  > bob - 200 && height < bob + 500) {
        		$('body').scrollTo(bob + 100, 800);
  		}
  		if(height  > bbc - 200) {
        		$('body').scrollTo(bbc + 100, 800);
  		}
      }, 1000));
    }
  });

  //Scroller Home slide to section
  var height = $(window).scrollTop();
  var icc = $(".icc").offset().top - 100;
  var london = $(".london").offset().top - 100;
  var bob = $(".bob").offset().top - 100;
  var bbc = $(".bbc").offset().top - 100;
  $('.scroll .browser.center').click(function(){
    var wr = $(".wr").offset().top - 100;
    $('body').scrollTo(wr + 100, 1200);
  });
  $('.scroll .browser.left').click(function(){
    $('body').scrollTo(bbc + 100, 1200);
  });
  $('.scroll .browser.right').click(function(){
    $('body').scrollTo(icc + 100, 1200);
  });
  $('.scroll .browser.leftBack').click(function(){
    $('body').scrollTo(london + 100, 1200);
  });
  $('.scroll .browser.rightBack').click(function(){
    $('body').scrollTo(bob + 100, 1200);
  });
});
