//settings used for testing, should later be chosen in the UI
var character = "astronaute";
var gender = "m";
var context = "jungle";

//list of actions to do
var queue = [];

//transforming the HTML of the story into an exploitable queue
function parseStory(){
  var storyHtmlChildren = document.querySelector("#story").children;
  //going through all elements of the story's html to find the right element to add to the queue
  for (var a = 0 ; a < storyHtmlChildren.length ; a++){
    var action = {};
    var selectedNode;
    //if the element is variable find the option that correspond to the relevant value
    //the "criterion" in the "variable" element decides what variable we are looking for (i.e. "character")
    //we are then looking for a child element that has the same value as the global variable in its "criterion"
    if(storyHtmlChildren[a].nodeName == "VARIABLE"){
      for (var i = 0 ; i < storyHtmlChildren[a].children.length ; i++){
        if(storyHtmlChildren[a].children[i].getAttribute("criterion") == window[storyHtmlChildren[a].getAttribute("criterion")]){
          action.type = storyHtmlChildren[a].children[i].nodeName;
          selectedNode = storyHtmlChildren[a].children[i];
        }
      }
    }
    //element that is not variable
    else{
      action.type = storyHtmlChildren[a].nodeName;
      selectedNode = storyHtmlChildren[a];
    }
    //get all attributes from the relevant node (exept the criterion) and push the result it to the queue
    for (var j = 0; j < selectedNode.attributes.length; j++){
      if(selectedNode.attributes[j].name !== "criterion"){
        action[selectedNode.attributes[j].name] = selectedNode.attributes[j].value;
      }
    }
    queue.push(action);
  }
  console.log(queue)
}

//get the html from the story and puts it on the page
function setUpStoryHtml(storyPath){
  var xhr= new XMLHttpRequest();
  xhr.open('GET', storyPath, true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return;
      document.querySelector("#story").innerHTML = this.responseText;
      parseStory();
  };
  xhr.send();
}

setUpStoryHtml('./Stories/story1.html');
