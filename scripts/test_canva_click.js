const canvas = document.getElementById('canvas'),
	canvasLeft = canvas.offsetLeft,
	canvasTop = canvas.offsetTop,
	context = canvas.getContext('2d'),
	elements = [];

// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
	console.log("-------------");
	var x = event.pageX - canvasLeft,
		y = event.pageY - canvasTop;
	
	// Collision detection between clicked offset and element.
	elements.forEach(function(element) {
		if (y > element.top && y < element.top + element.height
		    && x > element.left && x < element.left + element.width) {
			console.log(element.name);
		}
	});
	
}, false);

// Add element.
elements.push({
	name:"cyan",
	colour: '#05EFFF',
	width: 150,
	height: 100,
	top: 20,
	left: 15
});

// Add element.
elements.push({
	name:"red",
	colour: 'red',
	width: 150,
	height: 100,
	top: 30,
	left: 5
});


// Add element.
elements.push({
	name:"vert",
	colour: 'green',
	width: 150,
	height: 100,
	top: 40,
	left: -5
});

// Render elements.
elements.forEach(function(element) {
	context.fillStyle = element.colour;
	context.fillRect(element.left, element.top, element.width, element.height);
});