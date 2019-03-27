Run server with "http-server"
You will first need to have nod einstalled and to do "npm install-g http-server"

Syntax

"<scene></scene>"
Separates the story into scenes. The board and audio will be cleaned before any new scene is displayed. A scene can have audio, text and drawings.

"<textstory criterion="CRITERION" text="TEXT" srcfile="PATH"></textstory>"
Text of the story with audio attached.
Attributes:
- criterion: check if this is the right element to use (see <variable>)
- text: text that will be displayed
- srcfile: path the audio of the story

"<scenedrawing criterion="CRITERION" srcfile="PATH" x="X COORDINATES" y="Y COORDINATES" width="WIDTH" height="HEIGHT"></scenedrawing>"
Drawings that will be displayed in the scene.
Attributes:
- criterion: check if this is the right element to use (see <variable>)
- srcfile: path to the drawing
- x: x coordinates in the canvas (top left corner)
- y: y coordinates in the canvas (top left corner)
- height: height of the drawing
- width; width of the drawing

"<sceneaudio criterion="CRITERION" srcfile="PATH"></sceneaudio>"
Simple audio clip (no text attached). For music, ambient sound.
Attributes: 
- criterion: check if this is the right element to use (see <variable>)
- srcfile: path to the audio clip

"<variable criterion="context">...</variale>"
Marks part of the story where the scene will change according to the user's choices.
If the users has picked "pirate" as a "character"; and has a <variable> with "character" as criterion; it will look at child elements for one with "pirate" as a "criterion".
Attributes:
- criterion: determine with value will choose what child element to use
