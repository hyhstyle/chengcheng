/*
 * @Author: your name
 * @Date: 2020-07-23 09:20:52
 * @LastEditTime: 2020-07-23 10:00:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \OneMapV2.0e:\学习\githurb\foryou\renxi\functions.js
 */ 
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();
$(window).resize(function() {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this),
				str = $ele.html(),
				progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	 var date1= '2020/07/23 00:00:00';  //开始时间  
    // var date2 = new Date();    //结束时间  
	var current =new Date();
	
	// var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var seconds = (current.getTime()- new Date(date1).getTime()) / 1000;

	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = Math.floor(seconds % 60);
	if (seconds < 10) {
		seconds = "0" +Math.floor(seconds) ;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours +
		"</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
	$("#clock").html(result);
}
