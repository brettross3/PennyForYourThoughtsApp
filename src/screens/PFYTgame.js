import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SummaryPage from '../screens/SummaryPage';
import SettingsButton from '../components/SettingsButton';
import SettingsModal from './SettingsModal';
import { SettingsContext } from '../components/SettingsContext';
import WordsManager from '../components/WordsManager';
import { SoundEffects, playCorrectSound, playIncorrectSound, playCompleteSound, playGameOverSound } from '../components/SoundEffects';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PFYTgame = () => {
 const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
 const { isSoundEnabled } = useContext(SettingsContext);
  
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
      } else {
        if ( money === 0){
          playGameOverSound();
        }
      }
    };

    checkGameCompletion();
 }, [word, targetWord, money]);

 //store the user's score
 const storeScore = async (score) => {
  try {
     await AsyncStorage.setItem('lastScore', JSON.stringify(score));
  } catch (error) {
     console.error('Error storing score', error);
  }
 };

 //update the user's high score
 const updateHighScore = async (newScore) => {
  try {
     const highScore = await AsyncStorage.getItem('highScore');
     if (highScore === null || newScore > highScore) {
       await AsyncStorage.setItem('highScore', JSON.stringify(newScore));
     }
  } catch (error) {
     console.error('Error updating high score', error);
  }
 };

 const resetGame = () => {
    setScore(score + money);
    storeScore(score + money);
    updateHighScore(score + money);
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
      <View style={styles.bottomContainer}>
      <SettingsButton onPress={() => setIsSettingsModalVisible(true)} />
      <SettingsModal visible={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bcd8c1',
 },
 scoreContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
 },
 scoreText: {
    fontSize: 20,
    fontFamily: 'IrishGrover-Regular',
    color: 'black',
 },
 header: {
    fontSize: 36,
    marginBottom: 20,
    fontFamily: 'IrishGrover-Regular',
    color: 'white',
 },
 alphabet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
 },
 letterButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#222e50',
 },
 letterText: {
    fontSize: 18,
    fontFamily: 'IrishGrover-Regular',
    color: 'white',
 },
 word: {
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'IrishGrover-Regular',
    color: 'black',
    marginTop: 30,
 },
 guessedLetterButton: {
  opacity: 0,
},
bottomContainer: {
  position: 'absolute',
  paddingBottom:20,
  paddingRight: 20,
  bottom: 0,
  right: 0,
},
});

export default PFYTgame;

