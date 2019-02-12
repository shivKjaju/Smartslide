# [Smart_slides](smartslides.firebaseapp.com)
[Google Docs](https://docs.google.com/document/d/1bs21fHLDtebV9eg_qYTGTaE1i-qB4PhmuInXJSKpG48/edit?usp=sharing_eip&ts=5c42cc92)
Index
-----
1. [Project Overview](#overview)
2. [Requirement](#requirement)
4. [Front End](#frontend)
5. [Back End](#backend)
6. [Database](#database)

Project Overview<a name="overview"></a>
----------------
The main objective is to build a smart slide by integrating an audio into the slides. Take a scenario in which student is not understanding a topic and professor jumps into the other slides and student skips the whole lecture. This is where smart slide will help students by just uploading the slides onto the website and start recording lecture. Then system will record complete lecture as audio and slide representaion. 


Requirement<a name="requirement"></a>
------------
1. Complete basicApi template 
	* Intro page
	* Login page 
	* Auth( Temporary )
	* Handle bar( Js )
2. Upload slide onto the website
	* Google cloud storage
	* Per user storage divison
3. Convert Pptx to images
4. Fetch json for information of images
5. Make a viewer to view live presentation 
	* Image viewer slider
6. Buttons for play, pause and stop
7. Permission for system microphone 
	* Select microphone in the system
8. Just play start and store audio into the cloud
9. Stop slide and It create a json and store to cloud 
10. Algorithm decode it to present in player 
11. Merge it to presentation
12. Transcript each audio and store it json. 

Front End<a name="frontend"></a>
-----------
__Technolgy and Languages__

* Language - [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/) 
* Framework -  Bootstrap
 
* __Objective__: 
	* JS driven user interface
	*
	* JS logic and CSS Styling
	* Forms & Input Validation 
	* Backend Communication Channels 
	* UX Strategies

Back End <a name="backend"></a>
----------
__Technolgy and Languages__

* Language - [JavaScript](https://www.w3schools.com/js/)
* Framework - [Node.js](https://nodejs.org/api/)
* Library- 
* API -  [PPTX to JPEG](https://www.convertapi.com/pptx-to-jpg)

* __Objective__: 
	* Server configuration 
	* User authentication and order handling
	* Automatic notification 
	* Data validation 
	* Data storage and database access 
	* Scheduled Process

Database<a name="database"></a>
-----------
* Firebase - Json model
* Tools - [Google cloud speech recognition ](https://cloud.google.com/speech-to-text/docs/reference/libraries#client-libraries-install-nodejs)

__Task__
* Firebase setup in backend.
