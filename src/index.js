import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

//Cargar la fuente
WebFont.load({
  google: {
    families: ['Amatic SC']
  }
});

//Renderiza los componentes en el div root del html
ReactDOM.render(<Routes />, document.getElementById('root'));

//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
