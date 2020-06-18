import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var app = (
    <div>
        <App name={"Milo"} breed={"cattle dog"}/>
        <App name={"Mia"} breed={"lab"}/>
    </div>
)

ReactDOM.render(
    app, document.getElementById('root')
);

serviceWorker.unregister();
