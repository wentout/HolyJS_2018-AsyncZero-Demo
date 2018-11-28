# moved to gitlab.com/jfx2006/reveal-asciinema 2018-06-07


# reveal-asciinema

A [Reveal.js](https://github.com/hakimel/reveal.js) plugin that allows
embedding [asciinema-player](https://github.com/asciinema/asciinema-player).

## Usage

Add to your Reveal.initialize block:

```javascript
Reveal.initialize({
	asciinema: {
		className: "asciinema"
	},
	dependencies: [
		{src: 'plugin/asciinema/asciinema.js', async: true}
	]
});
```

And the corresponding html:

```html
<section>
	<div id="player1" class="asciinema" data-jsonurl="asciinema/test.json"></div>
</section>
```

## Configuration

All the configuration options you can put in your asciinema initialize:

```javascript
asciinema: {
	// This CSS class will be used to identify divs that will be turned into
  // players
	className: "asciinema",
	// Default options to pass to asciinema.player.js.CreatePlayer. See below.
	defaults: { fontSize: "10px" },
	// Callback function to run after the players are initialized
	onLoaded: function() {
		console.log("Asciinema players ready.");
	}
}
```

How to set up your html:

```html
<!-- Give your player divs a CSS class that can be used to identify them.
     Each player must have an id attribute, since that is what is passed to
     asciinema.player.js.CreatePlayer.
     The data-jsonurl attribute is the json file for your recording. -->
<div id="player1" class="asciinema" data-jsonurl="asciinema/test.json"></div>

<!-- Within your div you can create an HTML comment that contains a JSON
     string with options to pass to that player instance. -->
<div id="player2" class="asciinema">
	<!-- { "fontSize": "12px",
					"theme": "tango" } -->
</div>
```

Player options are documented at
[asciinema-player](https://github.com/asciinema/asciinema-player#options).

## Installing

TODO

## Building

TODO

## License

GPLv3 licensed

Copyright &copy; 2016 Rob Lemley
