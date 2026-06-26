import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;