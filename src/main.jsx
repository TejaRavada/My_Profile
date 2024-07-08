// Assuming your main entry file is main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import { Provider } from 'react-redux';
import store from './app/store';

const container = document.getElementById('root'); // The container element in your HTML
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
