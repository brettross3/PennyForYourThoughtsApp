import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';
import SettingsModal from '../screens/SettingsModal';
import SummaryPage from '../screens/SummaryPage';
import PFYTgame from '../screens/PFYTgame';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () =>{
    setSettingsVisible(!settingsVisible);
  };

 return (
    <>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen 
          name="MenuScreen" 
          component={MenuScreen} 
          initialParams={{ toggleSettings }} 
        />
        <Stack.Screen name="SummaryPage" component={SummaryPage} />
        <Stack.Screen 
          name="PFYTgame" 
          component={PFYTgame} 
          initialParams={{ toggleSettings }} 
        />
      </Stack.Navigator>
      <SettingsModal visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
    </>
 );
};

//add the actual game and settings components here

export default AppNavigator;