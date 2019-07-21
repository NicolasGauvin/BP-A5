let drawingList = [];
const canvasesHolder = document.querySelector("#canvasesHolder");
let soundIndex = 0;
let sceneTextAudioList;
let currentTextAudio;
const textDiv = document.querySelector("#text");

//Cleaning the canvas between scenes
function clearScene(){
	document.getElementById("canvasesHolder").innerHTML = "";
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
	canvas.width = 800;
	canvas.height = 480;
	canvas.style.zIndex = index;
	canvasesHolder.appendChild(canvas);
	base_image.onload = function(){
		context.drawImage(base_image, drawing.x, drawing.y, drawing.width, drawing.height);
	};
	drawingList.push({"drawing":drawing,"canvas":canvas,"context":context});
}

function handleText(textList){
	let text = "";
	textList.forEach(function(textElement) {
		text += textElement.text;
	});
	textDiv.innerHTML = text;
}

function playTextAudio(){
	if(sceneTextAudioList[soundIndex]){
		
		if(currentTextAudio !== null && currentTextAudio !== undefined){
			currentTextAudio.stop();
		}
		
		const sound = new Howl({
			src: sceneTextAudioList[soundIndex].srcfile,
			onend: function() {
				soundIndex++;
				playTextAudio();
				currentTextAudio = null;
			}
		});
		currentTextAudio = sound;
		sound.play();
	}
}

function handleTextAudio(textAudioList){
	sceneTextAudioList = textAudioList;
	soundIndex = 0;
	if(currentTextAudio != null){
		currentTextAudio.stop();
	}
	playTextAudio();
}