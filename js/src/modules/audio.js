app.audio = (function($){
	'use strict';

	var audioFiles,
	rand,
	playFacts;

	function init(){
		playAudio('ding.mp3');
		getAudioFilesJson(audioFiles);
		playFacts = setInterval( function() {getAudioFilesJson(audioFiles)},20000);
		pauseFacts();
	}

	var audioFiles = [];

	function playAudio(audioFile) {
		var audio = new Audio('../audio/'+audioFile);
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
