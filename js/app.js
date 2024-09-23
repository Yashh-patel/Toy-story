// Assignment 1 | COMP1073 Client-Side JavaScript

const tittle = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher'];
const action = ['sat on', 'ate', 'danced with', 'saw', 'kissed'];
const reaction = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
const animal = ['goat', 'monkey', 'fish', 'cow', 'bug'];
const place = ['on the moon', 'on the chair', 'on the grass', 'in my shoes', 'in my soup'];
let textToSpeak = ''; // let is used here because this value will be updated
const story_result = document.getElementById('story-output');
const speakStatusresult = document.getElementById('speak-status');
const resetStatus_result = document.getElementById('reset-status');
//const outline = document.getElementById('outline');

const nounValue = document.getElementById('noun-value');
const verbValue = document.getElementById('verb-value');
const adjectiveValue = document.getElementById('adjective-value');
const noun2Value = document.getElementById('noun2-value');
const placeValue = document.getElementById('place-value');


function speakNow(string) {
    const utterThis = new SpeechSynthesisUtterance(string); // Create a new speech utterance
    speechSynthesis.speak(utterThis); // Speak the string
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
	function speakNow(string) {
		// Create a new speech object, attaching the string of text to speak
		var utterThis = new SpeechSynthesisUtterance(string);
		// Actually speak the text
		synth.speak(utterThis);
	}
}
document.getElementById('tittle-btn').addEventListener('click', function() {
    const noun = getRandomWord(tittle);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});
document.getElementById('action-btn').addEventListener('click', function() {
    const noun = getRandomWord(action);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});document.getElementById('tittle-btn').addEventListener('click', function() {
    const noun = getRandomWord(reaction);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});document.getElementById('tittle-btn').addEventListener('click', function() {
    const noun = getRandomWord(animal);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});document.getElementById('tittle-btn').addEventListener('click', function() {
    const noun = getRandomWord(place);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});


