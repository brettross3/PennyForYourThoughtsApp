import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import '../../assets/fonts/IrishGrover-Regular.ttf'
import SettingsButton from '../components/SettingsButton';
import SettingsModal from './SettingsModal';

const MenuScreen = ({ navigation }) => {
  const [isSettingsModalVisible, setIsSettingsModalVisible]=useState(false);

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Penny For Your Thoughts</Text>
         <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PFYTgame')}>
               <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
            <SettingsButton onPress={() => setIsSettingsModalVisible(true)} />
            <SettingsModal
            visible={isSettingsModalVisible}
            onClose={() => setIsSettingsModalVisible(false)}
            />
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
 },
});

export default MenuScreen;
