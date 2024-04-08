import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
  isMusicEnabled: true,
  setIsMusicEnabled: () => {},
  isSoundEnabled: true,
  setIsSoundEnabled: () => {},
});

const SettingsProvider = ({ children }) => {
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const toggleMusic = () => setIsMusicEnabled(!isMusicEnabled);
  const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

  return (
    <SettingsContext.Provider value={{ isMusicEnabled, toggleMusic, isSoundEnabled, toggleSound }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };