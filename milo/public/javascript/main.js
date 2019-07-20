let queue;
let currentScene = 0;
let currentMenuAudio = false;
let isMenuInteractive = true;

//get the html from the story and puts it on the page
function setUpStoryHtml(storyPath){
	queue = parseStory();
	setUpScene();
	document.getElementById("startTransition").classList = "fade-out";
	setTimeout(function () {
		document.getElementById("startTransition").style.display = "none";
	}, 2000);
}

function setUpScene(){
	if(queue.drawingQueue[currentScene]){
		document.getElementById("sceneTransition").classList = "fade-in-out";
		setTimeout(function () {
			clearScene();
			if(queue.drawingQueue.length === currentScene){
				document.getElementById("endStory").style.display = "block";
			}else{
				handleDrawings(queue.drawingQueue[currentScene]);
				handleText(queue.audioAndTextQueue[currentScene]);
				handleTextAudio(queue.audioAndTextQueue[currentScene]);
				currentScene++;
				document.getElementById("sceneTransition").classList = "";
			}
		}, 1000);
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

//startStory();

function playSound(audio) {
	
	if(currentMenuAudio !== false){
		currentMenuAudio.stop();
	}
	
	const sound = new Howl({
		src: audio,
	});
	sound.play();
	currentMenuAudio = sound;
}

function splashscreen(){
	if(isMenuInteractive){
		console.log("splash");
		isMenuInteractive = false;
		setTimeout(function () {
			document.getElementById("splashscreen").classList = "fade-out";
		}, 200);
		setTimeout(function () {
			document.getElementById("splashscreen").style.display = "none";
			playSound("audio/menus/heros/01_heros.mp3");
			isMenuInteractive = true;
		}, 2000);
	}
}

function step1(){
	if(isMenuInteractive){
		console.log("1");
		isMenuInteractive = false;
		document.getElementById("container").classList = "step1Animation";
		setTimeout(function () {
			isMenuInteractive = true;
			playSound("audio/menus/heros/01_heros.mp3");
		}, 500);
	}
}

function step2(choice, audio){
	if(isMenuInteractive){
		console.log("2");
		isMenuInteractive = false;
		if(choice){
			settings.character = choice;
			playSound(audio);
			setTimeout(function () {
				document.getElementById("container").classList = "step2Animation";
				setTimeout(function () {
					playSound("audio/menus/lieu/01_lieu.mp3");
					isMenuInteractive = true;
				}, 1000);
			}, 2000);
		}else{
			setTimeout(function () {
				document.getElementById("container").classList = "step2Animation";
				setTimeout(function () {
					playSound("audio/menus/lieu/01_lieu.mp3");
					isMenuInteractive = true;
				}, 1000);
			}, 2000);
		}
	}
}

function step3(choice, audio){
	if(isMenuInteractive){
		console.log("3");
		isMenuInteractive = false;
		settings.context = choice;
		playSound(audio);
		setTimeout(function () {
			document.getElementById("container").classList = "step3Animation";
			setTimeout(function () {
				playSound("audio/menus/aventure/01_aventure.mp3");
				isMenuInteractive = true;
			}, 1000);
		}, 2000);
	}
}

function step4(){
	if(isMenuInteractive){
		console.log("4");
		isMenuInteractive = false;
		playSound("audio/menus/aventure/C_02_missfrom.mp3");
		setTimeout(function () {
			document.getElementById("container").classList = "step4Animation";
			setTimeout(function () {
				startStory();
			}, 1000);
		}, 2000);
	}
}

/*
const socket = io.connect('http://localhost');
socket.on('button_information', function (data) {
	//console.log(data);
});
	*/