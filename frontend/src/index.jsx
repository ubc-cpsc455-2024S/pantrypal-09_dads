import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/AuthContext.jsx'
import store from './context/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
)
