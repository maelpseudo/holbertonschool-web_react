import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications/Notifications';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer)
ReactDOM.render(

  <Provider store={store}>
  <div>
	<div className="root-notifications">
      <Notifications />
	</div>
    <App />
  </div>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();