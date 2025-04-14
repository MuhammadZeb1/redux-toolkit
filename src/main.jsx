import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';  // Import Provider
import { store } from './app/store.js';  // Import the store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
