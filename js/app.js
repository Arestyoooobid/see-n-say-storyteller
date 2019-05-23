// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

//Create var buttons for each of the 5 coloured buttons
//give them each their own random lines, in accordance to the see n say toy
var buttonNoun1 = document.querySelector('#buttonNouns1');
var buttonVerb = document.querySelector('#buttonVerbs');
var buttonAdjective = document.querySelector('#buttonAdjectives');
var buttonNoun2 = document.querySelector('#buttonNouns2');
var buttonNoun3 = document.querySelector('#buttonNouns3');
var buttonPlayback = document.querySelector('#buttonPlayback');
var buttonSurprise = document.querySelector('#buttonSurprise');
var buttonRepeatSurprise = document.querySelector('#buttonRepeatSurprise');
var buttonBackwards = document.querySelector('#buttonBackwards');

// Arrays for the words in each of the columns
var arrayNouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var arrayVerbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var arrayAdjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var arrayNouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var arrayNouns3 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// integers for currently selected 
var selectedNoun1 = 0;
var selectedVerb = 0;
var selectedAdjective = 0;
var selectedNoun2 = 0;
var selectedNoun3 = 0;

// pulls chosen words
var chosenNoun1 = arrayNouns1[0];
var chosenVerb = arrayVerbs[0];
var chosenAdjective = arrayAdjectives[0];
var chosenNoun2 = arrayNouns2[0];
var chosenNoun3 = arrayNouns3[0];

//used for optimization
var stringHolder = "";

// constructed chosen string, also last string to be read
var playback = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenNoun3;

/* Functions
-------------------------------------------------- */
function speak(string){
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
	console.log("String spoken: " + string)
}
//generates a number from 0 - limit
function roll(limit){
	return Math.floor(Math.random() * limit);
}

/* Event Listeners
-------------------------------------------------- */
// ButtonNoun1 is for the column noun1.
// only commenting this one because the other 5 column buttons do the same
// with different variables.
buttonNoun1.onclick = function(){
	//fetches the currently selected noun
	stringHolder = arrayNouns1[selectedNoun1];
	//speaks the noun
	speak(stringHolder);
	//goes to the next noun if possible, if none, returns to beginning
	if(selectedNoun1 == 6){
		selectedNoun1 = 0;
	} else {
		selectedNoun1++;
	}
	//sets spoken noun to variable so the next selected noun is not read aloud in sentences.
	chosenNoun1 = stringHolder;
}

buttonVerb.onclick = function(){
	stringHolder = arrayVerbs[selectedVerb];
	speak(stringHolder);
	if(selectedVerb == 5){
		selectedVerb = 0;
	} else {
		selectedVerb++;
	}
	chosenVerb = stringHolder;
}

buttonAdjective.onclick = function(){
	stringHolder = arrayAdjectives[selectedAdjective];
	speak(stringHolder);
	if(selectedAdjective == 5){
		selectedAdjective = 0;
	} else {
		selectedAdjective++;
	}
	chosenAdjective = stringHolder;
}

buttonNoun2.onclick = function(){
	stringHolder = arrayNouns2[selectedNoun2];
	speak(stringHolder);
	if(selectedNoun2 == 6){
		selectedNoun2 = 0;
	} else {
		selectedNoun2++;
	}
	chosenNoun2 = stringHolder;
}

buttonNoun3.onclick = function(){
	stringHolder = arrayNouns3[selectedNoun3];
	speak(stringHolder);
	if(selectedNoun3 == 5){
		selectedNoun3 = 0;
	} else {
		selectedNoun3++;
	}
	chosenNoun3 = stringHolder;
}

// reads out a sentence with all the currently selected words.
buttonPlayback.onclick = function(){
	//builds the sentence and assigns it as the last spoken sentence
	playback = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenNoun3;
	//speaks the created sentence.
	speak(playback);
}

// reads out a sentence with all randomly selected words.
buttonSurprise.onclick = function(){
	//builds the sentence and assigns it as the last spoken sentence.
	playback = 
		//grabs the first noun and adds a space
		arrayNouns1[roll(7)] + " " +
		//grabs the verb and adds a space
		arrayVerbs[roll(6)] + " " +
		//grabs the adjective and adds a space
		arrayAdjectives[roll(6)] + " " +
		//grabs the second noun and adds a space
		arrayNouns2[roll(7)] + " " + 
		//grabs the third noun
		arrayNouns3[roll(6)];
	//speaks the created sentence.
	speak(playback);
}

// reads out the last spoken sentence
buttonRepeatSurprise.onclick = function(){
	// ""
	speak(playback);
}

// reads out the last spoken sentence. But backwards. ;)
buttonBackwards.onclick = function(){
	//initialize var backwards, to be used in the loop
	var backwards = "";
	//takes the length of the last spoken sentence and one character at a time...
    for(var i = playback.length; i >= 0; i--){
		//...places that character in the string backwards.
        backwards += playback.substring(i - 1, i);
	}
	//speaks the created sentence.
	speak(backwards);
}