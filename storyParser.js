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

var queueTreatmentFunctions = {
  "SCENEAUDIO" : function (el){


      if(el.getAttribute("variable") == "1"){

        for (var i = 0 ; i < el.children.length ; i++){

          var children = el.children[i];
          if(children.getAttribute("criterion") == window[el.getAttribute("criterion")]){

            return {"type":"sceneaudio","srcfile":children.getAttribute("srcfile")}

          }

        }

      }else{

        return {"type":"sceneaudio","srcfile":el.getAttribute("srcfile")}

      }
  },
  "SCENEDRAWING" : function (el){

    if(el.getAttribute("variable") == "1"){

      for (var i = 0 ; i < el.children.length ; i++){

        var children = el.children[i];
        if(children.getAttribute("criterion") == window[el.getAttribute("criterion")]){

          return {"type":"drawing","x":children.getAttribute("x"),"y":children.getAttribute("y"),"srcfile":children.getAttribute("srcfile")}

        }

      }

    }else{

      return {"type":"drawing","x":el.getAttribute("x"),"y":el.getAttribute("y"),"srcfile":el.getAttribute("srcfile")}

    }
  },
  "TEXTSTORY" : function (el){

    if(el.getAttribute("variable") == "1"){

      for (var i = 0 ; i < el.children.length ; i++){

        var children = el.children[i];
        if(children.getAttribute("criterion") == window[el.getAttribute("criterion")]){

          return {"type":"textstory","srcfile":children.getAttribute("srcfile"),"text":children.innerHTML}

        }

      }

    }else{

      return {"type":"textstory","srcfile":el.getAttribute("srcfile"), "text":el.innerHTML}

    }
  },
  "PAUSE" : function (el){
    return {"type":"pause"}
  },
  "CLEARDRAWINGS" : function (el){
    return {"type":"cleardrawings"}
  },
  "CLEARAUDIO" : function (el){
    return {"type":"clearaudio"}
  }
}

function parseStory(){
  var storyHtmlChildren = document.querySelector("#story").children;
  console.log(storyHtmlChildren);
  for (var a = 0 ; a < storyHtmlChildren.length ; a++){
    console.log(queueTreatmentFunctions[storyHtmlChildren[a].nodeName](storyHtmlChildren[a]));
    console.log("--------------------")
  }
}

setUpStoryHtml('./Stories/story1.html');
