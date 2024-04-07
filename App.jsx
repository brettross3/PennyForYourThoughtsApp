/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { SettingsProvider } from './src/components/SettingsContext';
import MusicPlayer from './src/components/MusicPlayer';

const App = () => {

 return (
    <>
      <NavigationContainer>
        <SettingsProvider>
          <MusicPlayer/>
          <AppNavigator/>
        </SettingsProvider>
      </NavigationContainer>
    </>
 );
};

export default App;