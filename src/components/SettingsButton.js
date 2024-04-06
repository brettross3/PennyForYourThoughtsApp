import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

const SettingsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontAwesomeIcon icon={ faGear }  size={35} color="#222e50"/>
    </TouchableOpacity>
  );
};

export default SettingsButton;