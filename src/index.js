import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Oswald Web:300,400,500,700', 'Roboto:300,400,500,700', 'Material Icons']
  }
});

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));


registerServiceWorker();
