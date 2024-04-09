import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function SummaryPage({ title, word, correctGuesses, incorrectGuesses, accuracy, buttonText, onPress }) {
 return (
    <View style={styles.container}>
      <Text style={styles.summary}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.text}>Word: {word}</Text>
        <Text style={styles.text}>Correct Guesses: {correctGuesses}</Text>
        <Text style={styles.text}>Incorrect Guesses: {incorrectGuesses}</Text>
        <Text style={styles.text}>Accuracy: {(accuracy * 100).toFixed(2)}%</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#BCD8C1',
 },
 summary: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 content: {
    alignItems: 'center',
 },
 text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
 },
 button: {
    backgroundColor: '#222E50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
 },
});

export default SummaryPage;