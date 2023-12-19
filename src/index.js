import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FavoritesContextProvider} from './components/layout/store/FavoritesContext'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <FavoritesContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </FavoritesContextProvider>,
);


