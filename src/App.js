import React from 'react';

import GlobalStyle from "./styles/GlobalStyle";
import AppProvider from './providers/index.jsx';

import Home from './home'

export default function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Home />
    </AppProvider>
    
  );
}
