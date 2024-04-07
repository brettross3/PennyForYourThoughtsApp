import React, { useEffect, useContext } from 'react';
import Sound  from 'react-native-sound';
import { SettingsContext } from './SettingsContext';

Sound.setCategory('Playback');

const MusicPlayer = () => {
    const {isMusicEnabled} = useContext(SettingsContext);

    useEffect(() =>{
        const music = new Sound('sample.mp3', Sound.MAIN_BUNDLE, (err) => {
            if(err){
                console.error('Failed to load the background music', err);
                return;
            }
            if (isMusicEnabled) {
                music.play(() => {
                    music.setNumberOfLoops(-1);
                });
            }
        });
        return () => {
            music?.release();
        };
    }, [isMusicEnabled]);
  return null; // MusicPlayer component does not render anything
};

export default MusicPlayer;