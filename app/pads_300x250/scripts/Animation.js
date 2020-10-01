var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	
	var buttonExit = document.getElementById('button-exit');
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		


		buttonExit.addEventListener('mouseover', function () {
            t.to(".cta-txt", .15, {fill: "rgb(219,58,38)"});
            t.to(".cta-bg", .25, {fill: "rgb(255,255,255)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(".cta-txt", .25, {fill: "rgb(255,255,255)"});
            t.to(".cta-bg", .25, {fill: "rgb(219,58,38)"});

        });

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {


		tl.to(frame, .5, {y:"-=65", ease:Sine.easeInOut}, "+=1")
		.to(curtain, .5, {autoAlpha:0}, "-=.5")
		.to(".txt", .15, {fill: "rgb(255,255,255)"}, "+=1")
		.to(".txt", .15, {fill: "rgb(219,58,38)"}, "+=.5");;
	
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
