import React, { useState }from "react";
import { View, Text, Switch } from 'react-native';

function VibrateSwitch() {
    const [VibrationEnabled, setVibrationEnabled] = useState(true);

    const toggleVibration = () => {
        setVibrationEnabled(previousState => !previousState);
    };

    return (
        <View>
            <Text>Vibrate</Text>
            <Switch
                value={VibrationEnabled}
                onValueChange={toggleVibration} />
        </View>
    );
}

export default VibrateSwitch;