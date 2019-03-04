let canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');

function clearScene(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function addDrawings(drawings){
	for (let a =0;a < drawings.length; a++){
		let base_image = new Image();
		base_image.src = "." + drawings[a].srcfile;
		base_image.onload = function(){
			context.drawImage(base_image, drawings[a].x, drawings[a].y);
		}
	}
}