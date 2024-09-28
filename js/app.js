

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


function speaking(string) {
    const utterThis = new SpeechSynthesisUtterance(string); // Create a new speech utterance
    speechSynthesis.speak(utterThis); // Speak the string
}

function RandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function RandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
	function speakNow(string) {
		// Create a new speech object, attaching the string of text to speak
		var utterThis = new SpeechSynthesisUtterance(string);
		// Actually speak the text
		synth.speak(utterThis);
	}
}

function createRandomStory() {
    let story = ''; // Initialize the story string

    for (let i = 0; i < 5; i++) {
        // Create a simple sentence structure for each iteration
        story += `${RandomWord(tittle)} ${RandomWord(action)} ${RandomWord(reaction)} ${RandomWord(animal)} ${RandomWord(place)}. `;
    }

    return story.trim(); 
}
document.querySelector('#tittle-btn').addEventListener('click', function() {
    const noun = RandomWord(tittle);
    nounValue.textContent = noun;
    textToSpeak += noun + " ";
});
document.querySelector('#action-btn').addEventListener('click', function() {
    const verb = RandomWord(action);
    verbValue.textContent = verb;
    textToSpeak += verb + " ";
});
document.querySelector('#reaction-btn').addEventListener('click', function() {
    const adjec = RandomWord(reaction);
    adjectiveValue .textContent = adjec;
    textToSpeak += adjective + " ";
});
document.querySelector('#animal-btn').addEventListener('click', function() {
    const Animal = RandomWord(animal);
    noun2Value .textContent = Animal;
    textToSpeak += animal + " ";
});

document.querySelector('#place-btn').addEventListener('click', function() {
    const noun = RandomWord(place);
    placeValue .textContent = noun;
    textToSpeak += place + " ";
});

document.querySelector('#reset-btn').addEventListener('click',function(){
	textToSpeak='';
	nounValue.textContent='';
    verbValue.textContent='';
    adjectiveValue.textContent='';
    noun2Value.textContent='';
    placeValue.textContent='';
    speakStatusresult.textContent="";

    resetStatus_result.textContent="system has reset succesfully";
})

document.querySelector('#speak-btn').addEventListener('click', function() {

   speaking(textToSpeak);
    speakStatusresult.textContent="Speaking🎤✨";

})
