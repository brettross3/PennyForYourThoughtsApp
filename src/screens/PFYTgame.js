import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SummaryPage from '../screens/SummaryPage';
import SettingsButton from '../components/SettingsButton';
import SettingsModal from './SettingsModal';
import { SettingsContext } from '../components/SettingsContext';
import WordsManager from '../components/WordsManager';
import { SoundEffects, playCorrectSound, playIncorrectSound, playCompleteSound, playGamOverSound } from '../components/SoundEffects';

const PFYTgame = () => {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const { isSoundEnabled } = useContext(SettingsContext);
  
  const [targetWord, setTargetWord] = useState('');
  const [word, setWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [money, setMoney] = useState(10); // Initialized with 10 as in the second version
  const [score, setScore] = useState(0); // Added score state from the second version
  const [gameComplete, setGameComplete] = useState(false); // Added gameComplete state from the second version

  const wordsManager = WordsManager;

  useEffect(() => {
    const initializeGame = () => {
      const word = wordsManager.selectRandomWord();
      setWord(Array(word.length).fill('_'));
      setTargetWord(word);
    };

    if (!gameComplete) {
      initializeGame();
    }
  }, [gameComplete]);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      const newWord = word.map((char, index) => targetWord[index] === letter ? letter : char);
      setWord(newWord);
      if (targetWord.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
        if (isSoundEnabled) {
          playCorrectSound();
        }
      } else {
        setIncorrectLetters([...incorrectLetters, letter]);
        setMoney(money - 10);
        if (isSoundEnabled) {
          playIncorrectSound();
        }
      }
    }
  };

  useEffect(() => {
    const checkGameCompletion = () => {
      if (word.join('') === targetWord) {
        setGameComplete(true);
        if (isSoundEnabled) {
          playCompleteSound();
        }
      }
    };

    checkGameCompletion();
  }, [word, targetWord]);

  // sound effect to play when game is over
  // if (isSoundEnabled) {
  //   playGameOverSound();
  // }
  const resetGame = () => {
    setScore(score + money); // Update the score with the left-over money
    setMoney(150);
    const newWord = wordsManager.selectRandomWord();
    setWord(Array(newWord.length).fill('_'));
    setTargetWord(newWord);
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setGameComplete(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
      <Text style={styles.header}>Money: {money}</Text>
      <View style={styles.alphabet}>
        {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
          <TouchableOpacity
            key={letter}
            onPress={() => handleGuess(letter)}
            style={[
              styles.letterButton,
              incorrectLetters.includes(letter) ? styles.incorrectLetterButton : {},
              correctLetters.includes(letter) ? styles.correctLetterButton : {},
            ]}
            disabled={guessedLetters.includes(letter)}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.word}>{word.join(' ')}</Text>
      {(money === 0 || word.join('') === targetWord) && (
        <SummaryPage
          word={targetWord}
          correctGuesses={correctLetters.length}
          incorrectGuesses={incorrectLetters.length}
          accuracy={correctLetters.length / (correctLetters.length + incorrectLetters.length)}
          startOver={resetGame}
        />
      )}
      <SettingsButton onPress={() => setIsSettingsModalVisible(true)} />
      <SettingsModal visible={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  scoreText: {
    fontSize: 20,
    color: 'black',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  alphabet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  letterButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#ccc',
  },
  letterText: {
    fontSize: 18,
  },
  word: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default PFYTgame;
