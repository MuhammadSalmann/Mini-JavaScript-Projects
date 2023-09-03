let speech = new SpeechSynthesisUtterance();
let voiceChoices = document.querySelector('select');
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => voiceChoices.options[i] = new Option(voice.name, i));
}

voiceChoices.addEventListener('change', () => speech.voice = voices[voiceChoices.value]);

document.querySelector('button').addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})