import React from 'react';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const correctSound = new Sound('letter_guessed.mp3', Sound.MAIN_BUNDLE, (error) => {});
const incorrectSound = new Sound('coins_falling.mp3', Sound.MAIN_BUNDLE, (error) => {});
const completeSound = new Sound('word_guessed.wav', Sound.MAIN_BUNDLE, (error) => {});
const gameOverSound = new Sound('bassoon.wav', Sound.MAIN_BUNDLE, (error) => {});

const playCorrectSound = () => {
  correctSound.setVolume(1.0);
  correctSound.play();
};

const playIncorrectSound = () => {
  incorrectSound.setVolume(1.0);
  incorrectSound.play();
};

const playCompleteSound = () => {
  completeSound.setVolume(1.0);
  completeSound.play();
};

const playGamOverSound = () => {
  gameOverSound.setVolume(1.0);
  gameOverSound.play();
};

const SoundEffects = () => {
  return null;
};

export { SoundEffects, playCorrectSound, playIncorrectSound, playCompleteSound, playGamOverSound };
