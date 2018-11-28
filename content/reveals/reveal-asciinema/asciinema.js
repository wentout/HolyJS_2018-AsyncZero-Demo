/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global head */
/* global AsciiNema */
/* global Reveal, XPathResult */

(function(){
	var dependencies = [ "asciinema-player.css", "asciinema-player.js" ];
	var basePath = document.currentScript.src.match( /.*\// )[0];
	var config = Reveal.getConfig().asciinema;

	var defaultPlayer = [
		'data:application/json;base64,eyJ0aXRsZSI6ICJBc2NpaW5lbWEgUGxheWVyIiwgI', 
		'nN0ZG91dCI6IFtbMC41NDI5NTcsICJcdTAwMWJbMzZsIl0sIFswLjAwMDEsICJcdTAwMWI',
		'+Il0sIFswLjAxMzI2OCwgIlt1c2VyQG1hY2hpbmUgfl0kICJdLCBbMC43NjAxODEsICJlI',
		'l0sIFswLjE5OTk1NywgImMiXSwgWzAuMDU1OTMzLCAiaCJdLCBbMC4wNjM3MTUsICJvIl0',
		'sIFswLjE5MjE4NiwgIiAiXSwgWzAuMjA3OTUzLCAiSCJdLCBbMC4xNTIwNzMsICJlIl0sI',
		'FswLjQzMjA2NywgImwiXSwgWzAuMTUxOTgsICJsIl0sIFswLjE2ODA2NCwgIm8iXSwgWzA',
		'uMTc1ODkyLCAiICJdLCBbMC4xODQwNzEsICJXIl0sIFswLjExOTk0NSwgIm8iXSwgWzAuM',
		'DgwMjQ1LCAiciJdLCBbMC4yMzIwNzIsICJsIl0sIFswLjA1NTgzNiwgImQiXSwgWzAuMjY',
		'zODkxLCAiISJdLCBbMC4yNDg1MTIsICJcclxuSGVsbG8gV29ybGQhXHJcbiJdLCBbMC4wM',
		'DQzMTksICJbdXNlckBtYWNoaW5lIH5dJCAiXV0sICJoZWlnaHQiOiAyNCwgIndpZHRoIjo',
		'gODAsICJ2ZXJzaW9uIjogMSwgImNvbW1hbmQiOiAiL2Jpbi9iYXNoIiwgImVudiI6IHsiV',
		'EVSTSI6ICJ4dGVybSIsICJTSEVMTCI6ICIvYmluL2Jhc2gifSwgImR1cmF0aW9uIjogNS4',
		'zNjMxOTJ9'].join("");
	
	function loadDepends(callback) {
		var depsPath = dependencies.map(function(x){
			return basePath + x;
		});
		
		head.load(depsPath, callback);
	}
	
	function getElemOptions(element) {
		var elemOptions = {};
		var node;
		var commentIterator = document.evaluate(".//comment()", element, null,
			XPathResult.ANY_TYPE, null);
		node = commentIterator.iterateNext();
		while (node) {
			var nodeOptions = JSON.parse(node.data);
			if (nodeOptions) {
				Object.assign(elemOptions, nodeOptions);
			}
			node = commentIterator.iterateNext();
		}

		return elemOptions;
	}
	
	function asciinemaLoaded() {
		var elements = document.getElementsByClassName(config.className);
		var playerCallback = config.playerCallback;
		var onLoaded = config.onLoaded;
		
		for (var i=0; i<elements.length; i++) {
			var currentElement = elements[i];
			var jsonURL = currentElement.dataset.jsonurl || defaultPlayer;
			var elemOptions = getElemOptions(currentElement);
			var options = Object.assign({}, config.defaults, elemOptions);
			AsciiNema.CreatePlayer(currentElement.id, jsonURL, options);
			if (typeof playerCallback === "function") {
				playerCallback(currentElement);
			}
		}
		if (typeof onLoaded === "function") {
			onLoaded();
		}
	}
	
	function initialize() {
		loadDepends(asciinemaLoaded);
	}
	
	initialize();
})();