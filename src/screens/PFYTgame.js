import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SummaryPage from '../screens/SummaryPage';

const PFYTgame = () => {
 const targetWord = 'example';
 const [word, setWord] = useState(Array(targetWord.length).fill('_'));
 const [guessedLetters, setGuessedLetters] = useState([]);
 const [correctLetters, setCorrectLetters] = useState([]);
 const [incorrectLetters, setIncorrectLetters] = useState([]);
 const [money, setMoney] = useState(100);
 const [level, setLevel] = useState(1);


 const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      const newWord = word.map((char, index) => targetWord[index] === letter ? letter : char);
      setWord(newWord);
      if (targetWord.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setIncorrectLetters([...incorrectLetters, letter]);
        setMoney(money - 10);
      }
    }
 };
 const accuracy = correctLetters.length / (correctLetters.length + incorrectLetters.length);

 const resetGame = () => {
    setWord(Array(targetWord.length).fill('_'));
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setMoney(100);
    setLevel(1);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.header}>Level: {level}</Text>
      <Text style={styles.money}>Money: {money}</Text>
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
         {accuracy === 1 && (
        <SummaryPage
          word={targetWord}
          correctGuesses={correctLetters.length}
          incorrectGuesses={incorrectLetters.length}
          accuracy={accuracy}
          startOver={resetGame}
        />
      )}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 header: {
    fontSize: 24,
    marginBottom: 20,
 },
 money: {
    fontSize: 20,
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
