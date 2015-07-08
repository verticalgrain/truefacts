app.audio = (function($){
	'use strict';

	var audioFiles,
	audio,
	ding,
	rand,
	playFacts,
	playTime;

	playTime = 40000;


	function init(){
		var ding = new Audio('audio/ding.mp3');
		ding.volume = 0.2;
		// Play ding sound
		ding.play();
		// Play first fact
		// setTimeout( function() { getAudioFilesJson(audioFiles)},2000);
		// Start playing facts
		getAudioFilesJson(audioFiles);
		playFacts = setInterval( function() {getAudioFilesJson(audioFiles)},playTime);
	}

	var audioFiles = [];

	// Get the json source of audio files
	function getAudioFilesJson(audioSources) {
		$.getJSON( 'json/audiofiles.json', function(audioList) {
			$.each( audioList.audiofiles, function(i, audiofile){
				audioSources.push(audiofile.filename);
			});

		    chooseRandomAudio(audioSources);

		});
	}


	// Play a random audio file
	function chooseRandomAudio(audioSources) {
		rand = audioSources[Math.floor(Math.random() * audioSources.length)];
		playAudio(rand);
	}


	//Play the audio files
	function playAudio(audioFile) {
		$('body').removeClass('is-progressing');

		$('body').addClass('is-progressing');

		var audio = new Audio('audio/'+audioFile);
		// audio.volume = 0.8;
		audio.play();

		$('.pausefacts').on('click',function() {
			
			$('body').toggleClass('is-paused');

			// window.clearTimeout(playFacts);

			audio.pause();
		});
	}


	// Scan directory to get all audio files (deprecated)
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



	/* Document ready
	/* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

	$(document).on('ready', init);

})(jQuery);
