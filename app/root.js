import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import rootReducer from './reducer/index';
// import rootSaga from './sagas/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './navigation';
import RootReducer from './reducers';

// // 在非发布模式下接入 why did you update
// if (__DEV__) {
//
//   console.log(__DEV__);
//
//   /*在调用 React 前插入 set 方法 */
//   let createClass = React.createClass;
//   Object.defineProperty(React, 'createClass', {
//     set: (nextCreateClass) => {
//       createClass = nextCreateClass;
//     }
//   });
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React, { exclude: /^YellowBox/ });
//
// }

let store = createStore(RootReducer);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

