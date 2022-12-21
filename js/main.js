'use strict';

const pianoKeys = document.querySelectorAll('.piano-keys .key');
const pianoNotes = document.querySelectorAll('.piano-keys .key span');
const keysCheckbox = document.querySelector('.keys-checkbox');
const volumeSlider = document.querySelector('#slider');

let orientantion = screen.orientantion;
let audio = new Audio('./tunes/a.wav');

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const handleKeys = () => {
	pianoNotes.forEach((el) => {
		el.classList.toggle('hide');
	});
};

const playTune = (key) => {
	audio.src = `./tunes/${key.id}.wav`;
	audio.currentTime = 0;
	audio.play();
};

pianoKeys.forEach((key) => {
	key.addEventListener('click', () => playTune(key));
});

keysCheckbox.addEventListener('click', handleKeys);
volumeSlider.addEventListener('input', handleVolume);