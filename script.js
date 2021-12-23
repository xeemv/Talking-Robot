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



function computerSpeech(words){  // this is for the window/computer to talk back to the user
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US" // the speech will use US English
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    
    //speech.text = words;
    determineWords(speech,words); // function is created below

    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words) { // preset what the responses will be when we ask a question
    if(words.includes("How are you")){
        speech.text = "I'm fine, thank you!"
    }
    if(words.includes("Who am I")){
        speech.text = "You are my friend"
    }
    if(words.includes("How is the weather")){
        speech.text = "Why didn't you look outside or check the weather app?"
    }
    if(words.includes("Will you help me with my homework?")){
        speech.text = "Sure, let's get started."
    }
    if(words.includes("Please open Facebook for me")){
        speech.text = "Opening Facebook for you now!"
        window.open("https://www.facebook.com/")
    }
    if(words.includes("Please open Google for me")){
        speech.text = "Opening Google for you now!"
        window.open("https://www.google.com/")
    }
    if(words.includes("Please open LinkedIn for me")){
        speech.text = "Opening LinkedIn for you now!"
        window.open("https://www.linkedin.com/")
    }
    if(words.includes("Please open student login for me")){
        speech.text = "Opening student login for you now!"
        window.open("https://learn.promineotech.com/login/index.php")
    }
    /*  
    - to add more prompts use these:
    //if(words.includes("How are you")){
    //     speech.text = "I'm fine, thank you!"
    // }if(words.includes("How are you")){
    //     speech.text = "I'm fine, thank you!"
    // }if(words.includes("How are you")){
    //     speech.text = "I'm fine, thank you!"
    // }

    */
}




button.addEventListener("click", () => { 
    recognition.start();
});
// this is a function for when someone selects on the button