const button = document.querySelector("button");

const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition; 
    /* 
    - To get the speech recognition of the browser
    - Do take into account that FireFox does not support text-to-speech/webspeech api
    - cited by: https://wiki.mozilla.org/Web_Speech_API_-_Speech_Recognition
        - "Chrome, Edge, Safari and Opera support a form of this API currently for Speech-to-text, which means sites that rely on it work in those browsers, but not in Firefox."
    */

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Speech Recognition started!");
};

recognition.onresult = function (event) {
    console.log(event);
};

button.addEventListener("click", () => { 
    recognition.start();
});
// this is a function for when someone selects on the button