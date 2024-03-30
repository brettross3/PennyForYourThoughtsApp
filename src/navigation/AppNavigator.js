import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 return (
    <Stack.Navigator initialRouteName="MenuScreen">
      <Stack.Screen name="Main Menu" component={MenuScreen} />
      
    </Stack.Navigator>
 );
};

//add the actual game and settings components here

export default AppNavigator;