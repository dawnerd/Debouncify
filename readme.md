(c)2012 Troy Whiteley
http://troywhiteley.com

Debounces your javascript events.

Usage:
	window.onscroll = function(event) {
    		console.log(event);
	}.chunk(2000, 10)

First parameter is timeout in ms. Second parameter is how many events to chunk together.
