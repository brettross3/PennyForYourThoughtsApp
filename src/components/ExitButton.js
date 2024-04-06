import React from 'react';
import { TouchableOpacity } from 'react-native';// Assuming you're using FontAwesome5 for icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle';


const ExitButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontAwesomeIcon icon={ faXmarkCircle } size={30} color="#222e50"/>
    </TouchableOpacity>
  );
};

export default ExitButton;