app.audio = (function($){
	'use strict';

	var audioFiles,
	audio,
	ding,
	rand,
	playFacts;

	function init(){
		var ding = new Audio('../audio/ding.mp3');
		ding.volume = 0.2;
		ding.play();
		getAudioFilesJson(audioFiles);
		playFacts = setInterval( function() {getAudioFilesJson(audioFiles)},30000);
		pauseFacts();
	}

	var audioFiles = [];

	function playAudio(audioFile) {
		var audio = new Audio('audio/'+audioFile);
		// audio.volume = 0.8;
		audio.play();
	}


	function getAudioFiles(audioSources) {
		$.ajax({
		    url: 'audio/',
		    success: function (data) {
		       	$(data).find('a:contains("m4a")').each(function () {
		       		var filename = $(this).attr('href');
		           	audioSources.push(filename);
		       	});

			    chooseRandomAudio(audioSources);
		    }
		
		});
	}


	function getAudioFilesJson(audioSources) {
		$.getJSON( 'json/audiofiles.json', function(audioList) {
			$.each( audioList.audiofiles, function(i, audiofile){
				audioSources.push(audiofile.filename);
			});

		    chooseRandomAudio(audioSources);

		});
	}


	function chooseRandomAudio(audioSources) {
		rand = audioSources[Math.floor(Math.random() * audioSources.length)];
		playAudio(rand);
	}

	function pauseFacts() {
		$('.pausefacts').on('click',function() {
			window.clearTimeout(playFacts);
		});
	}

	/* Document ready
	/* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

	$(document).on('ready', init);

})(jQuery);
