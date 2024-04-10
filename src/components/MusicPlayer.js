import React, { useEffect, useContext } from 'react';
import Sound  from 'react-native-sound';
import { SettingsContext } from './SettingsContext';

Sound.setCategory('Playback');

const MusicPlayer = () => {
    const {isMusicEnabled} = useContext(SettingsContext);

    useEffect(() =>{
        const music = new Sound('village_consort.mp3', Sound.MAIN_BUNDLE, (err) => {
            if(err){
                console.error('Failed to load the background music', err);
                return;
            }
            if (isMusicEnabled) {
                music.setVolume(0.05);
                music.setNumberOfLoops(-1);
                music.play();
            }
        });
        return () => {
            music?.release();
        };
    }, [isMusicEnabled]);
  return null;
};

export default MusicPlayer;