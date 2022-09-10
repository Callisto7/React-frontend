import React from 'react';
import createRoot from 'react-dom';
import './bootstrap/css/bootstrap.css'
import './index.css';
import App from './App';
import { AppProvider } from './components/AppContext';


createRoot.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);