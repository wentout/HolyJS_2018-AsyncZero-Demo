/* 
 * Copyright (C) 2016 Rob Lemley
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


// Begin custom Reveal.js integration
var AsciiNema = (function () {
var Export;

// Hack to get Google Closure to play nice in a namespace
var goog = goog || {};
this.goog = goog;
var cljs = cljs || {};
this.cljs = cljs;
var clojure = clojure || {};
this.clojure = clojure;
var schema = schema || {};
this.schema = schema;
var reagent = reagent || {};
this.reagent = reagent;
var asciinema = asciinema || {};
this.asciinema = asciinema;
var com = com || {};
com.cognitect = com.cognitect || {};
this.com = com;
var cognitect = cognitect || {};
this.cognitect = cognitect;
var ajax = ajax || {};
this.ajax = ajax;
// End customization -- More at bottom

"<!= vendor/asciinema-player.js !>";


// Continue Reveal.js integration
Export = { CreatePlayer: asciinema.player.js.CreatePlayer };
return Export;
}).call({});