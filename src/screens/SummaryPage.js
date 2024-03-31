import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// I NEED TO INTEGRATE WITH Gamepage 

function SummaryPage({ correctGuesses, accuracy, startOver }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You got {correctGuesses} out of 5 words.</Text>
      <Text style={styles.text}>Accuracy is: {accuracy}%</Text>
      <TouchableOpacity style={styles.button} onPress={startOver}>
        <Text style={styles.buttonText}>Return to Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'BCD8C1',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '222E50',
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
