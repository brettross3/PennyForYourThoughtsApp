import React from "react";
import { Modal, View, Text, StyleSheet } from 'react-native';
import MusicSwitch from "../components/MusicSwitch";
import VibrateSwitch from "../components/VibrateSwitch";
import ExitButton from "../components/ExitButton";

const SettingsModal = ({ visible, onClose }) => {

   const modalContent =(
     <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
             <Text style={styles.modalTitle}>Settings</Text>    
             <View style={styles.modalOptions}>
               <MusicSwitch />
               <VibrateSwitch />
             </View>
             <ExitButton onPress={onClose}/>
           </View>
         </View>
   );

   return (
       <Modal
         animationType="slide"
         transparent={true}
         visible={visible}
         onRequestClose={onClose}
         style={{ justifyContent: 'center', alignItems: 'center'}}
       >
             {modalContent}
       </Modal>
     );
}

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

export default SettingsModal;