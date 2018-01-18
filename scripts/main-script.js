var music = document.querySelector('.btn-music');
var musicFrame = document.querySelector('.music-frame');

var videos = document.querySelector('.btn-videos');
var videosFrame = document.querySelector('.videos-frame');

var tour = document.querySelector('.btn-tour');
var tourFrame = document.querySelector('.tour-frame');

music.addEventListener("click", function() {
		// musicFrame.classList.add("hide-me");
		musicFrame.classList.add("hide-me");
		videosFrame.classList.add("hide-me");
		tourFrame.classList.add("hide-me");

		musicFrame.classList.remove("hide-me");
	}
);

videos.addEventListener("click", function() {
		musicFrame.classList.add("hide-me");
		videosFrame.classList.add("hide-me");
		tourFrame.classList.add("hide-me");

		videosFrame.classList.remove("hide-me");
	}
);

tour.addEventListener("click", function() {
		musicFrame.classList.add("hide-me");
		videosFrame.classList.add("hide-me");
		tourFrame.classList.add("hide-me");

		tourFrame.classList.remove("hide-me");
	}
);
