let queue;
let currentScene = 0;

//get the html from the story and puts it on the page
function setUpStoryHtml(storyPath){
	queue = parseStory();
	setUpScene();
}

function setUpScene(){
	if(queue.drawingQueue[currentScene]){
		clearScene();
		console.log(queue.drawingQueue[currentScene]);
		handleDrawings(queue.drawingQueue[currentScene]);
		handleText(queue.audioAndTextQueue[currentScene]);
		handleTextAudio(queue.audioAndTextQueue[currentScene]);
		currentScene++;
	}
}

function setSettings(){
	settings.character = document.getElementById("character").value;
	settings.context = document.getElementById("context").value;
}

function startStory(){
	currentScene = 0;
	setUpStoryHtml(settings.storyPath);
}

startStory();

const socket = io.connect('http://localhost');
socket.on('button_information', function (data) {
	//console.log(data);
});