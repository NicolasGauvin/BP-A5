Run server with "nodemon start" in the "milo" folder

Syntax

"&lt;scene&gt;&lt;/scene&gt;"
Separates the story into scenes. The board and audio will be cleaned before any new scene is displayed. A scene can have audio, text and drawings.

"&lt;textstory criterion=&quot;CRITERION&quot; text=&quot;TEXT&quot; srcfile=&quot;PATH&quot;&gt;&lt;/textstory&gt;"
Text of the story with audio attached.
Attributes:
- criterion: check if this is the right element to use (see <variable>)
- text: text that will be displayed
- srcfile: path the audio of the story

"&lt;scenedrawing criterion=&quot;CRITERION&quot; srcfile=&quot;PATH&quot; x=&quot;X COORDINATES&quot; y=&quot;Y COORDINATES&quot; width=&quot;WIDTH&quot; height=&quot;HEIGHT&quot;&gt;&lt;/scenedrawing&gt;"
Drawings that will be displayed in the scene.
Attributes:
- criterion: check if this is the right element to use (see <variable>)
- srcfile: path to the drawing
- x: x coordinates in the canvas (top left corner)
- y: y coordinates in the canvas (top left corner)
- height: height of the drawing
- width; width of the drawing
- clickable : is the image interactive or not (0/1)

"&lt;sceneaudio criterion=&quot;CRITERION&quot; srcfile=&quot;PATH&quot;&gt;&lt;/sceneaudio&gt;"
Simple audio clip (no text attached). For music, ambient sound.
Attributes: 
- criterion: check if this is the right element to use (see <variable>)
- srcfile: path to the audio clip

"&lt;variable criterion=&quot;context&quot;&gt;...&lt;/variable&gt;"
Marks part of the story where the scene will change according to the user's choices.
If the users has picked "pirate" as a "character"; and has a <variable> with "character" as criterion; it will look at child elements for one with "pirate" as a "criterion".
Attributes:
- criterion: determine with value will choose what child element to use
