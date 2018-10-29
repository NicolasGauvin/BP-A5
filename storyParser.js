function setUpStoryHtml(storyPath){
  var xhr= new XMLHttpRequest();
  xhr.open('GET', storyPath, true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return;
      document.querySelector("#story").innerHTML = this.responseText;
  };
  xhr.send();
}

setUpStoryHtml('./Stories/story1.html');
