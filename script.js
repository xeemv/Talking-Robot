const button = document.querySelector("button");

const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition; // to recognize speech

const recognition = new SpeechRecognition();

recognition.onStart = function() {
    console.log("Speech Recognition started!");
};

recognition.onResult = function (event) {
    console.log(event);
};

button.addEventListener("click", () => { // this for when someone selects on the button
    recognition.start();
});