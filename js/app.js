    // Arrays of words
const tittle = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher'];
const action = ['sat on', 'ate', 'danced with', 'saw', 'kissed'];
const reaction = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
const animal = ['goat', 'monkey', 'fish', 'cow', 'bug'];
const place = ['on the moon', 'on the chair', 'on the grass', 'in my shoes', 'in my soup'];
let textToSpeak = '';
const story_result = document.getElementById('story_result');

const speakStatusresult = document.getElementById('speak-status');
const resetStatus_result = document.getElementById('reset-status');

const nounValue = document.getElementById('noun-value');
const verbValue = document.getElementById('verb-value');
const adjectiveValue = document.getElementById('adjective-value');
const noun2Value = document.getElementById('noun2-value');
const placeValue = document.getElementById('place-value');

// Function to speak text
function speaking(string) {
    const utterThis = new SpeechSynthesisUtterance(string);
    speechSynthesis.speak(utterThis);
}

// Function to pick a random word from an array
function RandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to create a random story
function createRandomStory() {
    let storyy = '';

    for (let i = 0; i < 5; i++) {
        storyy += `${RandomWord(tittle)} ${RandomWord(action)} ${RandomWord(reaction)} ${RandomWord(animal)} ${RandomWord(place)}. `;
    }

    return storyy.trim();
}

// Event listeners for buttons
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
    textToSpeak += adjec + " ";
});

document.querySelector('#animal-btn').addEventListener('click', function() {
    const Animal = RandomWord(animal);
    noun2Value.textContent = Animal;
    textToSpeak += Animal + " ";
});

document.querySelector('#place-btn').addEventListener('click', function() {
    const placeWord = RandomWord(place);
    placeValue.textContent = placeWord;
    textToSpeak += placeWord + " ";
});

// Reset button functionality
document.querySelector('#reset-btn').addEventListener('click', function() {
    textToSpeak = '';
    nounValue.textContent = '';
    verbValue.textContent = '';
    adjectiveValue.textContent = '';
    noun2Value.textContent = '';
    placeValue.textContent = '';
    speakStatusresult.textContent = "";
    story_result.textContent = "";
    speechSynthesis.cancel();

    resetStatus_result.textContent = "System has reset successfully.";
});

// Speak button functionality
document.querySelector('#speak-btn').addEventListener('click', function() {
    speaking(textToSpeak);
    speakStatusresult.textContent = "Speaking🎤✨";
});

// Random story button functionality
document.querySelector('#random-story-btn').addEventListener('click', function() {
    const story = createRandomStory();
    story_result.innerHTML = story;
    speaking(story);
});

// Feedback and Rating functionality
document.getElementById('submit-feedback-btn').addEventListener('click', function() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const feedback = document.getElementById('user-feedback').value;

    if (rating) {
        const ratingValue = rating.value;
        storeFeedback(ratingValue, feedback);
        alert("Thank you for your feedback!");

        // Reset feedback form
        document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
        document.getElementById('user-feedback').value = '';

        displayFeedback();  // Update the feedback display
    } else {
        alert("Please select a rating before submitting.");
    }
});

// Store feedback in local storage
function storeFeedback(rating, feedback) {
    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push({ rating, feedback });
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
}

// Display previous feedback
function displayFeedback() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const feedbackOutput = document.getElementById('feedback-output');

    feedbackOutput.innerHTML = ''; // Clear previous feedback

    feedbackList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Rating: ${item.rating}, Feedback: ${item.feedback}`;
        feedbackOutput.appendChild(li);
    });
}

// Call this function to display feedback on page load
displayFeedback();
