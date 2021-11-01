import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import './App.css';

import { Home } from './pages/Home';

function App() {
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
