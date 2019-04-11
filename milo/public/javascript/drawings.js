let drawingList = [];
const canvasesHolder = document.querySelector("#canvasesHolder"),
	canvasClickListener = document.querySelector("#canvasClickListener"),
	canvasX = canvasClickListener.offsetLeft,
	canvasY = canvasClickListener.offsetTop;

//Cleaning the canvas between scenes
function clearScene(){
	for (let i =0;i < drawingList.length; i++){
		clearDrawing(i);
	}
	drawingList = [];
}

function clearDrawing(index){
	drawingList[index].context.clearRect(0, 0, drawingList[index].canvas.width, drawingList[index].canvas.height);
}

//draw all drawings from a scene
function handleDrawings(drawings){
	for (let a =0;a < drawings.length; a++){
		addDrawing(drawings[a], a);
	}
}

//add a drawing to the canvas
function addDrawing(drawing, index){
	const base_image = new Image();
	base_image.src = "." + drawing.srcfile;
	const canvas = document.createElement('canvas'),
		context = canvas.getContext("2d");
	canvas.width = 1000;
	canvas.height = 500;
	canvas.style.zIndex = index;
	canvasesHolder.appendChild(canvas);
	base_image.onload = function(){
		context.drawImage(base_image, drawing.x, drawing.y, drawing.width, drawing.height);
	};
	drawingList.push({"drawing":drawing,"canvas":canvas,"context":context});
}

//triggers event on every click on the  canvas
canvasClickListener.addEventListener('click', function(event) {
	//getting position of the click on the canvas
	const clickX = event.pageX - canvasX,
		clickY = event.pageY - canvasY;
	
	//element that was clicked (we only want the closest one)
	let clickedElement;
	
	//checks if the click is within one of the drawings
	drawingList.forEach(function(element) {
		if ((clickY > parseInt(element.drawing.y) && clickY < parseInt(element.drawing.y) + parseInt(element.drawing.height)) && (clickX > parseInt(element.drawing.x) && clickX < parseInt(element.drawing.x) + parseInt(element.drawing.width))) {
			if(element.drawing.clickable === "1"){
				clickedElement = element;
			}
		}
	});
	
	if(clickedElement !== undefined){
		console.log("clicked element:");
		console.log(clickedElement.drawing);
	}
	
}, false);