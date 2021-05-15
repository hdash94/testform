import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore (
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  	<Provider store ={store}>
    	<App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
