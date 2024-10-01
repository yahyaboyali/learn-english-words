import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Redux Provider'ı import ediyoruz
import store from './app/store'; // Store'u import ediyoruz

createRoot(document.getElementById('root')!).render(
  <Provider store={store}> {/* Store'u Provider ile sarmalıyoruz */}
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
