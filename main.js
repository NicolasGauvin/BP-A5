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
		console.log(queue);
		setUpScene();
	};
	xhr.send();
}

function setUpScene(){
	clearScene();
	addDrawings(queue.drawingQueue[currentScene]);
}

function setSettings(){
	settings.character = document.getElementById("character").value;
	settings.context = document.getElementById("context").value;
	setUpStoryHtml(settings.storyPath);
}