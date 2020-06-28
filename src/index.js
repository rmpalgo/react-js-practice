import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';


let app = (
    <div>
        <App title={"Title React App"}/>
    </div>
)

ReactDOM.render(
    app, document.getElementById('root')
);

serviceWorker.unregister();
