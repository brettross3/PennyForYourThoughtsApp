import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';
import Settings from '../screens/SettingsModal';
import SummaryPage from '../screens/SummaryPage';
import PFYTgame from '../screens/PFYTgame';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 return (
    <Stack.Navigator initialRouteName="MenuScreen">
      <Stack.Screen name="Main Menu" component={MenuScreen} />
      <Stack.Screen name="Summary Page" component={SummaryPage} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PFYTgame" component={PFYTgame} />
    </Stack.Navigator>
 );
};

//add the actual game and settings components here

export default AppNavigator;