import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Oswald Web:300,400,500,700', 'Roboto:300,400,500,700', 'Material Icons']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
