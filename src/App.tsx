import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import './App.css';
import theme from './themes/theme';

import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
