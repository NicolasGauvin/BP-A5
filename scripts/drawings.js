//HTML CANVAS
const canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	canvasLeft = canvas.offsetLeft,
	canvasTop = canvas.offsetTop,
	clickableElements = [];

//Cleaning the canvas between scenes
function clearScene(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function handleDrawings(drawings){
	for (let a =0;a < drawings.length; a++){
		addDrawing(drawings[a]);
	}
}

function addDrawing(drawing){
	let base_image = new Image();
	base_image.src = "." + drawing.srcfile;
	base_image.onload = function(){
		context.drawImage(base_image, drawing.x, drawing.y, drawing.width, drawing.height);
	};
	if (drawing.clickable === "1"){
		clickableElements.push(drawing);
	}
}

canvas.addEventListener('click', function(event) {
	const x = event.pageX - canvasLeft,
		y = event.pageY - canvasTop;
	
	let clickedElement;
	clickableElements.forEach(function(element) {
		if ((y > parseInt(element.y) && y < parseInt(element.y) + parseInt(element.height)) && (x > parseInt(element.x) && x < parseInt(element.x) + parseInt(element.width))) {
			clickedElement = element;
		}
	});
	
	if(clickedElement !== undefined){
		console.log("clicked element:");
		console.log(clickedElement);
	}
	
}, false);