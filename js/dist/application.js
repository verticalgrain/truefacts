/*! gruntyplate - v0.1.0 - 2015-06-19
* Copyright (c) 2015 Gruntyplate;*/

var app={};app.audio=function(a){"use strict";function b(){c("ding.mp3"),d(g),i=setInterval(function(){d(g)},2e4),f()}function c(a){var b=new Audio("../../audio/"+a);b.play()}function d(b){a.getJSON("json/audiofiles.json",function(c){a.each(c.audiofiles,function(a,c){b.push(c.filename)}),e(b)})}function e(a){h=a[Math.floor(Math.random()*a.length)],c(h)}function f(){a(".pausefacts").on("click",function(){window.clearTimeout(i)})}var g,h,i,g=[];a(document).on("ready",b)}(jQuery);
//# sourceMappingURL=application.js.map