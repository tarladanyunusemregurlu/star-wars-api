import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StarshipProvider } from './context/StarshipsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StarshipProvider>
    <App />
  </StarshipProvider>,
);
