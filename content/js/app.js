

// var mix = window.document.getElementById.bind(document);

function extend() {
	var target = {};
	for (var i = 0; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
			}
		}
	}
	return target;
}

var hljsInit = function () {
	if (window.hljs) {
		window.hljs.initHighlighting();
		return;
	}
	setTimeout(function () {
		hljsInit();
	}, 100);
};
// Optional libraries used to extend on reveal.js
var deps = [
	{ src: 'lib/js/classList.js', condition: function () { return !window.document.body.classList; } },
	{ src: 'plugin/markdown/marked.js', condition: function () { return !!window.document.querySelector('[data-markdown]'); } },
	{ src: 'plugin/markdown/markdown.js', condition: function () { return !!window.document.querySelector('[data-markdown]'); } },
	{
		src: 'plugin/highlight/highlight.js', async: true, callback: function () {
			hljsInit();
		}
	},
	// { src: 'plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } },
	// { src: 'plugin/math/math.js', async: true }
	{ src: 'reveals/menu/menu.js' },
	// { src: 'reveals/chalkboard/chalkboard.js' },
	{ src: 'reveals/external/external.js' },
	{ src: 'reveals/reveal-svg-fragment/reveal-svg-fragment.js' },
	// { src: 'reveals/reveal-asciinema/asciinema.js' },

];


var keyboard = {
// 	// toggle notes canvas when 'c' is pressed
// 	67: function () { window.RevealChalkboard.toggleNotesCanvas(); },
// 	// toggle chalkboard when 'b' is pressed
// 	66: function () { window.RevealChalkboard.toggleChalkboard(); },
// 	// clear chalkboard when 'DEL' is pressed
// 	46: function () { window.RevealChalkboard.clear(); },
// 	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
// 	// 32: function () { window.RevealChalkboard.reset(); },
// 	// downlad recorded chalkboard drawing when 'd' is pressed
// 	// 68: function() { RevealChalkboard.download() },
	37: 'prev',
	39: 'next',
	32: 'next',
	18: function () { }, // do nothing
	35: function () { }, // end
	36: function () { }, // home
	
};


// default options to init reveal.js
var defaultOptions = {
	controls: true,
	progress: true,
	history: true,
	center: true,
	// none/fade/slide/convex/concave/zoom
	transition: 'none',
	dependencies: deps,
	overview: true,
	slideNumber: true,
	keyboard: keyboard,
	external: {
		async: true
	},
	menu: {
		delayInit: true
	},
	asciinema: {
		className: 'asciinema'
	},
	pdfSeparateFragments: false,
	width: "100%",
	height: "100%",
	margin: 0,
	minScale: 0.2,
	maxScale: 1,

};



// options from URL query string
var queryOptions = window.Reveal.getQueryHash() || {};
var options = JSON.stringify({}, null, 2);

options = extend(defaultOptions, options, queryOptions);


var controlsExists = false;
var configureControls = function (event) {
	controlsExists = (
		event &&
		event.currentSlide &&
		event.currentSlide.getAttribute('data-state') !== 'nocontrols'
	);
	if (event.type === 'menu-ready') {
		controlsExists && (window.RevealMenu.init());
		return;
	}
	window.Reveal.configure({
		controls: controlsExists
	});
	if (window.RevealMenu && typeof window.RevealMenu.isInit === 'function') {
		if (window.RevealMenu.isInit()) {
			var menuButton = window.document.querySelector('.slide-menu-button');
			menuButton && (menuButton.hidden = !controlsExists);
		} else {

			controlsExists && (window.RevealMenu.init());
		}
	}
};

window.Reveal.addKeyBinding(219, function () {
	window.Reveal.navigateTo(0);
});

window.Reveal.addKeyBinding(221, function () {
	window.Reveal.navigateTo(221);
});


// window.Reveal.addEventListener('ready', configureControls);
// window.Reveal.addEventListener('slidechanged', configureControls);
// window.Reveal.addEventListener('menu-ready', configureControls);
window.Reveal.initialize(options);


// window.onkeydown = (event) => {
// 	console.log(event.keyCode);
// }