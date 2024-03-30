import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Penny For Your Thoughts</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameScreen')}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};

//High Score fetch will be added here
//top of menu screen will be modified to match figma

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bcd8c1',
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    // font family for 'Irish Grover' needs to get linked 
 },
 buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20, // Add some space above the buttons
    alignItems: 'center',
 },
 button: {
    width: '70%', 
    padding: 10,
    backgroundColor: '#222e50',
    borderRadius: 5,
    marginBottom: 40, // Add space between buttons
 },
 buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
 },
});

export default MenuScreen;