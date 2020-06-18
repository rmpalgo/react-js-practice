import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App name={"Milo"} breed={"cattle dog"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <App name={"Mia"} breed={"Lab"}/>
    </React.StrictMode>,
    document.getElementById('root2')
);
serviceWorker.unregister();
