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
/*  
- in his example, he has it as "recognition.onstart"
- onStart() = is called when the activity is becoming visible to the user.
*/


recognition.onresult = function (event) {
    console.log(event);
    // line 27 was added after testing that speech recognition was captured

    const spokenwords = event.results[0][0].transcript;
    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords); // this is the arguement for the function computerSpeech
};
/*  
- in his example, he has it as "recognition.onresult"
- line 27 and 28 will print out as "spoken words are..."
    - my test recorded word were, "I'm practicing today"
    - printed to the console was = "spoke words are I'm practicing today"
*/


function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US" // the speech will use US English
    speech.pitch = 0.9;
    speech.volume = 1;
}

button.addEventListener("click", () => { 
    recognition.start();
});
// this is a function for when someone selects on the button