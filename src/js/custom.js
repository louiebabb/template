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

  //Sections Fade In and allign themselves
  function fadeIn(x){
    var height = $(window).scrollTop();
    if (height > x.offsetHeight ){
      $(x.section).addClass('active');
    }
  }
  function scrollAllign(x){
    var height = $(window).scrollTop();
    if (height > x.offsetHeight - 200 && height < x.offsetHeight + 500 ){
      $('body').scrollTo(x.offsetHeight + 100, 800);
    }
  }
	$(window).scroll(function() {
    function Segment(div){
      this.offsetHeight = $(div).offset().top - 100;
      this.section = $(".segment" + div);
    }
    var wr = new Segment('.wr');
    var icc = new Segment('.icc');
    var london = new Segment('.london');
    var bob = new Segment('.bob');
    var bbc = new Segment('.bbc');
    fadeIn(wr);
    fadeIn(icc);
    fadeIn(london);
    fadeIn(bob);
    fadeIn(bbc);
    if ( $(this).width() > 720 ) {
  		clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
        // do something
        scrollAllign(wr);
        scrollAllign(icc);
        scrollAllign(london);
        scrollAllign(bob);
        scrollAllign(bbc);
      }, 1000));
    }
  });

  //Scroller Home slide to section
  var wr = $(".wr").offset().top - 100;
  var icc = $(".icc").offset().top - 100;
  var london = $(".london").offset().top - 100;
  var bob = $(".bob").offset().top - 100;
  var bbc = $(".bbc").offset().top - 100;
  function ScrollToFunc(x, y){
    x.click(function(){
      $('body').scrollTo(y + 100, 1200);
    });    
  }
  ScrollToFunc($('.scroll .browser.center'), wr);
  ScrollToFunc($('.scroll .browser.left'), bbc);
  ScrollToFunc($('.scroll .browser.right'), icc);
  ScrollToFunc($('.scroll .browser.leftBack'), london);
  ScrollToFunc($('.scroll .browser.rightBack'), bob);
});
