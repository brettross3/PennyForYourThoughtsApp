import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
//TEMPORARY THIS NEEDS TO BE REPLACED WITH JERICKO'S CODE

const Settings = ({ navigation }) => {
    return (
       <View style={styles.container}>
         <Text style={styles.title}>Penny For Your Thoughts</Text>
         <View style={styles.buttonsContainer}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuScreen')}>
             <Text style={styles.buttonText}>Go back to Menu Screen</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Enable Vibration')}>
             <Text style={styles.buttonText}>Enable Vibration</Text>
           </TouchableOpacity>
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

export default Settings;