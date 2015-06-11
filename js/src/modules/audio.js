app.audio = (function($){
	'use strict';

	var audioFiles,
	rand,
	playFacts;

	function init(){
		playFacts = setInterval( function() {getAudioFiles(audioFiles)},10000);
		pauseFacts();
	}

	var audioFiles = [];

	function playAudio(audioFile) {
		var audio = new Audio('../audio/'+audioFile);
		audio.play();
	}

	function getAudioFiles(audioSources) {
		$.ajax({
		    url: '../../audio/',
		    success: function (data) {
		       	$(data).find('a:contains("m4a")').each(function () {
		       		var filename = $(this).attr('href');
		           	audioSources.push(filename);
		       	});

			    chooseRandomAudio(audioSources);
		    }
		
		});		
	}

	function chooseRandomAudio(audioSources) {
		rand = audioSources[Math.floor(Math.random() * audioSources.length)];
		playAudio(rand);
	}

	function pauseFacts() {
		$('.pausefacts').on('click',function() {
			window.clearTimeout(playFacts);
			console.log('facts have been paused');
		});
	}

	/* Document ready
	/* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

	$(document).on('ready', init);

})(jQuery);
