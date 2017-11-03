import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

import Root from './containers/Root';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store = { store }>
    <Root />
  </Provider>, document.getElementById('root'));
  
registerServiceWorker();
