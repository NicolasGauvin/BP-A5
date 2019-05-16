let queue;
let currentScene = 0;

//get the html from the story and puts it on the page
function setUpStoryHtml(storyPath){
	const xhr= new XMLHttpRequest();
	xhr.open('GET', storyPath, true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return;
		document.querySelector("#story").innerHTML = this.responseText;
		queue = parseStory();
		setUpScene();
	};
	xhr.send();
}

function setUpScene(){
	if(queue.drawingQueue[currentScene]){
		clearScene();
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
	//setSettings();
	setUpStoryHtml(settings.storyPath);
}

startStory();

var socket = io.connect('http://localhost');
socket.on('button_information', function (data) {
	//console.log(data);
});