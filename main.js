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
	for (let  i = 0; i < queue.drawingQueue[currentScene].length; i++){
		addDrawing(queue.drawingQueue[currentScene][i]);
	}
}

function setSettings(){
	settings.gender = document.getElementById("gender").value;
	settings.character = document.getElementById("character").value;
	settings.context = document.getElementById("context").value;
	setUpStoryHtml(settings.storyPath);
}