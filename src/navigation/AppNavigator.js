import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';
import SummaryPage from '../screens/SummaryPage';
import PFYTgame from '../screens/PFYTgame';

const Stack = createNativeStackNavigator();

const AppNavigator = ({}) => {

 return (
    <>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen 
          name="Menu Screen" 
          component={MenuScreen}
        />
        <Stack.Screen name="SummaryPage" component={SummaryPage} />
        <Stack.Screen 
          name="PFYTgame" 
          component={PFYTgame} 
        />
      </Stack.Navigator>
    </>
 );
};

export default AppNavigator;