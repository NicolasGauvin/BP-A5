//transforming the HTML of the story into an exploitable queue
function parseStory() {
	//list of actions to do
	const drawingQueue = [];
	const audioAndTextQueue = [];
	const sceneList = document.querySelector("#story").children;
	//going through all elements of the story's html to find the right element to add to the queue
	for (let u = 0; u < sceneList.length; u++) {
		const sceneElements = sceneList[u].children;
		const sceneQueue = [];
		for (let a = 0; a < sceneElements.length; a++) {
			let queueAction = {};
			let selectedElement;
			//if the element is variable find the option that correspond to the relevant value
			if (sceneElements[a].nodeName === "VARIABLE") {
				for (let i = 0; i < sceneElements[a].children.length; i++) {
					//the "criterion" in the "variable" element decides what variable we are looking for (i.e. "character")
					//we are then looking for a child element that has the same value as the global variable in its "criterion"
					if (sceneElements[a].children[i].getAttribute("criterion") === settings[sceneElements[a].getAttribute("criterion")]) {
						queueAction.type = sceneElements[a].children[i].nodeName;
						selectedElement = sceneElements[a].children[i];
					}
				}
			}
			//element that is not variable
			else {
				queueAction.type = sceneElements[a].nodeName;
				selectedElement = sceneElements[a];
			}
			//in the case of a variable element, we check if there was a relevant element to pick
			if (selectedElement !== undefined){
				//get all attributes from the relevant node (except the criterion) and push the result it to the queue
				for (let j = 0; j < selectedElement.attributes.length; j++) {
					if (selectedElement.attributes[j].name !== "criterion") {
						queueAction[selectedElement.attributes[j].name] = selectedElement.attributes[j].value;
					}
				}
				sceneQueue.push(queueAction);
			}
		}
		let sceneDrawings = sceneQueue.filter(obj => {
			return obj.type === "SCENEDRAWING";
		});
		drawingQueue.push(sceneDrawings);
		let sceneAudioAndText = sceneQueue.filter(obj => {
			return obj.type === "TEXTSTORY";
		});
		audioAndTextQueue.push(sceneAudioAndText);
	}
	return {"drawingQueue" : drawingQueue,"audioAndTextQueue" : audioAndTextQueue};
}