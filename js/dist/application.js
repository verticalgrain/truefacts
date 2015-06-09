/*! gruntyplate - v0.1.0 - 2015-06-08
* Copyright (c) 2015 Gruntyplate;*/

var app={};app.audio=function(a){"use strict";function b(){i=setInterval(function(){d(g)},1e4),f()}function c(a){var b=new Audio("../../audio/"+a);b.play()}function d(b){a.ajax({url:"../../audio/",success:function(c){a(c).find('a:contains("m4a")').each(function(){var c=a(this).attr("href");b.push(c)}),e(b)}})}function e(a){h=a[Math.floor(Math.random()*a.length)],c(h)}function f(){a(".pausefacts").on("click",function(){window.clearTimeout(i),console.log("facts have been paused")})}var g,h,i,g=[];a(document).on("ready",b)}(jQuery);
//# sourceMappingURL=application.js.map