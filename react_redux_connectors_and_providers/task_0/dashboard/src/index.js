import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../task_1/dashboard/src/App/App';
import reportWebVitals from '../../../task_1/dashboard/src/reportWebVitals';
import Notifications from '../../../task_1/dashboard/src/Notifications/Notifications';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import uiReducer from '../../../task_1/dashboard/src/reducers/uiReducer';

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