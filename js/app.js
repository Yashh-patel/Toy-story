// Arrays of words
const tittle = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher'];
const action = ['sat on', 'ate', 'danced with', 'saw', 'kissed'];
const reaction = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
const animal = ['goat', 'monkey', 'fish', 'cow', 'bug'];
const place = ['on the moon', 'on the chair', 'on the grass', 'in my shoes', 'in my soup'];
let textToSpeak = ''; // i have used let inorder to upadte this value.
const story_result = document.getElementById('story_result');

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
// Function to pick a random word from an array
function RandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to create a random story
function createRandomStory() {
    let storyy = ''; // Initialize the story string

    for (let i = 0; i < 5; i++) {
        // Create a simple sentence structure for each iteration
        storyy += `${RandomWord(tittle)} ${RandomWord(action)} ${RandomWord(reaction)} ${RandomWord(animal)} ${RandomWord(place)}. `;
    }

    return storyy.trim(); // Return the complete story
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
    adjectiveValue.textContent = adjec;
    textToSpeak += adjec + " ";  // Corrected to use 'adjec'
});

document.querySelector('#animal-btn').addEventListener('click', function() {
    const Animal = RandomWord(animal);
    noun2Value.textContent = Animal;
    textToSpeak += Animal + " ";  // Corrected to use 'Animal'
});

document.querySelector('#place-btn').addEventListener('click', function() {
    const placeWord = RandomWord(place);  // Changed 'noun' to 'placeWord' to avoid confusion
    placeValue.textContent = placeWord;
    textToSpeak += placeWord + " ";
});

document.querySelector('#reset-btn').addEventListener('click',function(){
    textToSpeak = '';
    nounValue.textContent = '';
    verbValue.textContent = '';
    adjectiveValue.textContent = '';
    noun2Value.textContent = '';
    placeValue.textContent = '';
    speakStatusresult.textContent = "";
    story_result.textContent="";
    speechSynthesis.cancel();

    resetStatus_result.textContent = "System has reset successfully.";
})

document.querySelector('#speak-btn').addEventListener('click', function() {
    speaking(textToSpeak);
    speakStatusresult.textContent = "Speaking🎤✨";
})

document.querySelector('#random-story-btn').addEventListener('click', function() {
    const story = createRandomStory();
    story_result.innerHTML = story;
    speaking(story);

});
