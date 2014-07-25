# Debouncify
Debounces your javascript (duh).

####Installation:
```bash
npm install debouncify --save
```
\- or -

```bash
bower install Debouncify --save
```

####Example:
```javascript
	window.onscroll = function(event) {
    		console.log(event);
	}.chunk(2000, 10)
```

###Usage
```
.chunk(timeout, <batch size>)
```
