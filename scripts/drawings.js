//HTML CANVAS
let canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');

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
		context.drawImage(base_image, drawing.x, drawing.y, drawing.height, drawing.width);
	}
}