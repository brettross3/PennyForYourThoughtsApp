import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import '../../assets/fonts/IrishGrover-Regular.ttf'
import SettingsButton from '../components/SettingsButton';
import SettingsModal from './SettingsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MenuScreen = ({ navigation }) => {
   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
   const [lastScore, setLastScore] = useState(0);
   const [highScore, setHighScore] = useState(0);

   //the user's score is fetched and updated instantly when the user achieves a new high score, no longer needing to reload the app
   useFocusEffect(
      useCallback(() => {
         const fetchHighScore = async () => {
            try {
               const highScore = await AsyncStorage.getItem('highScore');
               if (highScore !== null) {
                  setHighScore(JSON.parse(highScore));
               }
            } catch (error) {
               console.error('Error retrieving high score', error);
            }
         };

         fetchHighScore();
      }, [])
   );



   return (
      <View style={styles.container}>
         <Text style={styles.title}>Penny For Your Thoughts</Text>
         <Text style={styles.HighScore}>high score: {highScore}</Text>
         <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PFYTgame')}>
               <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer} >
            <SettingsButton onPress={() => setIsSettingsModalVisible(true)} />
            <SettingsModal visible={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
            </View>
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
      fontFamily: 'IrishGrover-Regular',
      fontSize: 24,
      marginBottom: 20,
      color: 'black',

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
      fontFamily: 'IrishGrover-Regular',
   },
   HighScore: {
      fontFamily: 'IrishGrover-Regular',
      fontSize: 24,
      marginBottom: 20,
      color: 'black',
      position: 'absolute',
      top: 25,
      left: 25,
      textAlign: 'left',
   },
   bottomContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    SettingsButton: {
      position: 'absolute',
      bottom: -5, // Adjusted margin (adjust as needed)
      right: -5, // Adjusted margin (adjust as needed)
      zIndex: 10, // Ensure button renders on top
    },
});

export default MenuScreen;
