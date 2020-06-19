import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var app = (
    <div>
        <App />
    </div>
)

ReactDOM.render(
    app, document.getElementById('root')
);

serviceWorker.unregister();
