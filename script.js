function convert() {
    let speech = new SpeechSynthesisUtterance();
    var text = document.forms['MyForm']['text'].value
    speech.lang = "en";
    speech.text = text
    speech.rate = 0.7
    speech.volume = 1;
    speech.pitch = 2;
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[8]
    console.log(voices)
    window.speechSynthesis.speak(speech);
}