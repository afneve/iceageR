import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const darkMode = localStorage.getItem('darkMode');

if (darkMode) {
  document.body.classList.add('darkMode');
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

