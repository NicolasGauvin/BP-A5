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

var character = "astronaute";
var gender = "m";
var context = "jungle";

function parseStory(){
  var storyHtmlChildren = document.querySelector("#story").children;
  for (var a = 0 ; a < storyHtmlChildren.length ; a++){
    var action = {};
    var selectedNode;
    if(storyHtmlChildren[a].nodeName == "VARIABLE"){
      for (var i = 0 ; i < storyHtmlChildren[a].children.length ; i++){
        if(storyHtmlChildren[a].children[i].getAttribute("criterion") == window[storyHtmlChildren[a].getAttribute("criterion")]){
          action.type = storyHtmlChildren[a].children[i].nodeName;
          selectedNode = storyHtmlChildren[a].children[i];
        }
      }
    }else{
      action.type = storyHtmlChildren[a].nodeName;
      selectedNode = storyHtmlChildren[a];
    }
    for (var j = 0; j < selectedNode.attributes.length; j++){
      if(selectedNode.attributes[j].name !== "criterion"){
        action[selectedNode.attributes[j].name] = selectedNode.attributes[j].value;
      }
    }
    console.log(action);
    console.log("--------------------")
  }
}

setUpStoryHtml('./Stories/story1.html');
