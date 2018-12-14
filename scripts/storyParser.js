//transforming the HTML of the story into an exploitable queue
function parseStory() {
	//list of actions to do
	const queue = [];
	const storyHtmlList = document.querySelector("#story").children;
	//going through all elements of the story's html to find the right element to add to the queue
	for (let a = 0; a < storyHtmlList.length; a++) {
		let queueAction = {};
		let selectedElement;
		//if the element is variable find the option that correspond to the relevant value
		if (storyHtmlList[a].nodeName === "VARIABLE") {
			for (let i = 0; i < storyHtmlList[a].children.length; i++) {
				//the "criterion" in the "variable" element decides what variable we are looking for (i.e. "character")
				//we are then looking for a child element that has the same value as the global variable in its "criterion"
				if (storyHtmlList[a].children[i].getAttribute("criterion") === settings[storyHtmlList[a].getAttribute("criterion")]) {
					queueAction.type = storyHtmlList[a].children[i].nodeName;
					selectedElement = storyHtmlList[a].children[i];
				}
			}
		}
		//element that is not variable
		else {
			queueAction.type = storyHtmlList[a].nodeName;
			selectedElement = storyHtmlList[a];
		}
		//get all attributes from the relevant node (except the criterion) and push the result it to the queue
		for (let j = 0; j < selectedElement.attributes.length; j++) {
			if (selectedElement.attributes[j].name !== "criterion") {
				queueAction[selectedElement.attributes[j].name] = selectedElement.attributes[j].value;
			}
		}
		queue.push(queueAction);
	}
	return queue;
}