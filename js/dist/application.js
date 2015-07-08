/*! gruntyplate - v0.1.0 - 2015-07-08
* Copyright (c) 2015 Gruntyplate;*/

var app={};app.audio=function(a){"use strict";function b(){var a=new Audio("audio/ding.mp3");a.volume=.2,a.play(),c(f),h=setInterval(function(){c(f)},i)}function c(b){a.getJSON("json/audiofiles.json",function(c){a.each(c.audiofiles,function(a,c){b.push(c.filename)}),d(b)})}function d(a){g=a[Math.floor(Math.random()*a.length)],e(g)}function e(b){a("body").removeClass("is-progressing"),a("body").addClass("is-progressing");var c=new Audio("audio/"+b);c.play(),a(".pausefacts").on("click",function(){a("body").toggleClass("is-paused"),c.pause()})}var f,g,h,i;i=4e4;var f=[];a(document).on("ready",b)}(jQuery);
//# sourceMappingURL=application.js.map