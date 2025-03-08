import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Oppretter en root for React-applikasjonen og knytter den til HTML-elementet med id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter> {/* Omslutter App-komponenten med BrowserRouter for å aktivere rutenavigasjon */}
      <App /> {/* Rendre hovedkomponenten App */}
    </BrowserRouter>
);
