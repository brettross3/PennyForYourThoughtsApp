import React, { useState } from 'react';
import { View, Switch, Text, } from 'react-native';
import Sound from 'react-native-sound';

function MusicSwitch() {
    const [ isMuted, setIsMuted ] = useState(false);
    let sound = null;

    const toggleSwitch = () => {
        if (isMuted) {
            if (sound) {
                sound.stop();
                sound.release();
            }
        } else {
            if (!sound) {
                sound = new Sound(require('../../assets/sound/sample-9s.mp3'), Sound.MAIN_BUNDLE, (error) =>{
                    if (error) {
                        console.log('Failed to load the sound', error);
                        return;
                    }
                    sound.play();
                });
            } else {
                sound.play(() => {
                    setIsMuted(true); // Set isMuted to true after playing the sound
                });
            }
        }
        setIsMuted(!isMuted); // Toggle isMuted state
    };

    return (
        <View>
            <Switch
                value={isMuted}
                onValueChange={toggleSwitch} 
            />
        </View>
    );
}

export default MusicSwitch;