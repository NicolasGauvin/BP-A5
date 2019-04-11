
	//map of the position of clickable elements in the canvas, used for click detection
	const clickableElements = [],
	//list of canvases for every image
	canvasList = [],
	canvasesHolder = document.querySelector("#canvasesHolder");

//Cleaning the canvas between scenes
function clearScene(){
	//context.clearRect(0, 0, canvas.width, canvas.height);
}

//draw all drawings from a scene
function handleDrawings(drawings){
	for (let a =0;a < drawings.length; a++){
		addDrawing(drawings[a],a);
	}
	console.log(drawings)
}

//add a drawing to the canvas
function addDrawing(drawing, index){
	let base_image = new Image();
	base_image.src = "." + drawing.srcfile;
	base_image.onload = function(){
		const canvas = document.createElement('canvas'),
			context = canvas.getContext("2d");
		canvas.width = 1000;
		canvas.height = 500;
		canvas.style.zIndex = index;
		canvasesHolder.appendChild(canvas);
		context.drawImage(base_image, drawing.x, drawing.y, drawing.width, drawing.height);
	};
	//if the drawing is set as clickable, adds it to the list
	if (drawing.clickable === "1"){
		clickableElements.push(drawing);
	}
}

//triggers event on every click on the  canvas
/*
canvas.addEventListener('click', function(event) {
	//getting position of the click on the canvas
	const clickX = event.pageX - canvasX,
		clickY = event.pageY - canvasY;
	
	//element that was clicked (we only want the closest one)
	let clickedElement;
	
	//checks if the click is within one of the drawings
	clickableElements.forEach(function(element) {
		if ((clickY > parseInt(element.y) && clickY < parseInt(element.y) + parseInt(element.height)) && (clickX > parseInt(element.x) && clickX < parseInt(element.x) + parseInt(element.width))) {
			clickedElement = element;
		}
	});
	
	if(clickedElement !== undefined){
		console.log("clicked element:");
		console.log(clickedElement);
	}
	
}, false);
*/