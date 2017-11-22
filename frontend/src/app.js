import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/layout';
import {Provider} from 'react-redux';
import store from './store';
import './css/app.css';
const rendercomponent = () => {

  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
    <Layout />
    </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

rendercomponent()

if (module.hot) {
  module.hot.accept('./components/layout.js', function() {
    console.log('Accepting the updated module!');
    rendercomponent();
  })
}