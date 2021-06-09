import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context';
import './style/globals.css'

ReactDOM.render(
  <ChakraProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ChakraProvider>,
  document.getElementById('root')
);