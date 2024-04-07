import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
  isMusicEnabled: true,
  setIsMusicEnabled: () => {},
  isVibrateEnabled: true,
  setIsVibrateEnabled: () => {},
});

const SettingsProvider = ({ children }) => {
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isVibrateEnabled, setIsVibrateEnabled] = useState(true);

  const toggleMusic = () => setIsMusicEnabled(!isMusicEnabled);
  const toggleVibrate = () => setIsVibrateEnabled(!isVibrateEnabled);

  return (
    <SettingsContext.Provider value={{ isMusicEnabled, toggleMusic, isVibrateEnabled, toggleVibrate }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };