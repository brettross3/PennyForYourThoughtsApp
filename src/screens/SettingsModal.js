import React, { useContext, useState } from "react";
import { Modal, View, Text, StyleSheet, Switch } from 'react-native';
import ExitButton from "../components/ExitButton";
import '../../assets/fonts/IrishGrover-Regular.ttf'
import { SettingsContext } from "../components/SettingsContext";

const SettingsModal = ({ visible, onClose, }) => {
  const { isMusicEnabled, toggleMusic } = useContext(SettingsContext);
  const { isVibrateEnabled, toggleVibrate} = useContext(SettingsContext);

  const modalContent = (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.modalTitle}>Settings</Text>
          <ExitButton onPress={onClose} />
        </View>
        <View style={styles.modalOptions}>
          <View style={styles.option}>
            <Text style={[styles.optionText, {flex: 1 }]}>Music</Text>
            <Switch value={isMusicEnabled} onValueChange={toggleMusic} />
          </View>
          <View style={styles.option}>
            <Text style={[styles.optionText, { flex: 1 }]}>Vibrate</Text>
            <Switch value={isVibrateEnabled} onValueChange={toggleVibrate} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      {modalContent}
    </Modal>
  );
}

export default SettingsModal;

const styles = StyleSheet.create({
   modalContainer: {
     flex: 1,
     backgroundColor: 'rgba(0,0,0,0.5)',
     alignItems: 'center',
     justifyContent: 'center',
   },
   modalContent: {
     backgroundColor: '#bcd8c1',
     borderRadius: 10,
     padding: 20,
     width: '70%',
     maxWidth: 400,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 5,
   },
   header: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: 10,
   },
   modalTitle: {
      fontFamily: 'IrishGrover-Regular',
     fontSize: 30,
     color: 'white',
   },
   modalOptions: {
      paddingVertical: 10,
   },
   option: {
      flexDirection: 'row',
      alignItems: 'center',
     marginVertical: 10,
     paddingHorizontal: '10%',
   },
   optionText: {
      flex: 1,
      fontFamily: 'IrishGrover-Regular',
     fontSize: 28,
     color: 'white',
   },
});