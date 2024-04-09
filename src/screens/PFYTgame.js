import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
import SummaryPage from '../screens/SummaryPage';
import SettingsButton from '../components/SettingsButton';
import SettingsModal from './SettingsModal';
import { SettingsContext } from '../components/SettingsContext';
import WordsManager from '../components/WordsManager';

const PFYTgame = () => {
 const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
 const { isVibrateEnabled } = useContext(SettingsContext);

 const [targetWord, setTargetWord] = useState('');
 const [word, setWord] = useState([]);
 const [guessedLetters, setGuessedLetters] = useState([]);
 const [correctLetters, setCorrectLetters] = useState([]);
 const [incorrectLetters, setIncorrectLetters] = useState([]);
 const [money, setMoney] = useState(120);
 const [score, setScore] = useState(0);
 const [gameComplete, setGameComplete] = useState(false);
 const [guessedLettersVisibility, setGuessedLettersVisibility] = useState({});

 const wordsManager = WordsManager;

 useEffect(() => {
    const initializeGame = () => {
      const word = wordsManager.selectRandomWord();
      setWord(Array(word.length).fill('_'));
      setTargetWord(word);
      setGuessedLettersVisibility({}); // Reset visibility on new game
    };

    if (!gameComplete) {
      initializeGame();
    }
 }, [gameComplete]);

 const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      setGuessedLettersVisibility({ ...guessedLettersVisibility, [letter]: true }); // Mark letter as guessed
      const newWord = word.map((char, index) => targetWord[index] === letter ? letter : char);
      setWord(newWord);
      if (targetWord.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setIncorrectLetters([...incorrectLetters, letter]);
        setMoney(money - 10);
        if (isVibrateEnabled) {
          Vibration.vibrate(500);
        }
      }
    }
 };

 useEffect(() => {
    const checkGameCompletion = () => {
      if (word.join('') === targetWord) {
        setGameComplete(true);
      }
    };

    checkGameCompletion();
 }, [word, targetWord]);

 const resetGame = () => {
    setScore(score + money);
    setMoney(120);
    const newWord = wordsManager.selectRandomWord();
    setWord(Array(newWord.length).fill('_'));
    setTargetWord(newWord);
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setGuessedLettersVisibility({}); // Reset visibility on new game
    setGameComplete(false);
 };

 const showSummaryPage = () => {
    if (money === 0) {
      return {
        title: "Game Over",
        buttonText: "Try Again",
        onPress: resetGame,
      };
    } else if (word.join('') === targetWord) {
      return {
        title: "Next Level",
        buttonText: "Next Level",
        onPress: () => {
          resetGame();
        },
      };
    }
    return null;
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
    disabled={guessedLettersVisibility[letter]}
 >
    <View style={[
      styles.letterButton,
      incorrectLetters.includes(letter) ? styles.incorrectLetterButton : {},
      correctLetters.includes(letter) ? styles.correctLetterButton : {},
      guessedLettersVisibility[letter] ? styles.guessedLetterButton : {},
    ]}>
      <Text style={styles.letterText}>{letter}</Text>
    </View>
 </TouchableOpacity>
))}

      </View>
      <Text style={styles.word}>{word.join(' ')}</Text>
      {showSummaryPage() && (
        <SummaryPage
          title={showSummaryPage().title}
          word={targetWord}
          correctGuesses={correctLetters.length}
          incorrectGuesses={incorrectLetters.length}
          accuracy={correctLetters.length / (correctLetters.length + incorrectLetters.length)}
          buttonText={showSummaryPage().buttonText}
          onPress={showSummaryPage().onPress}
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
 guessedLetterButton: {
  opacity: 0, // Make the button invisible
},
});

export default PFYTgame;

