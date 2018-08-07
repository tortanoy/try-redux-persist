import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import Menu from './Menu';
import Hello from './Hello';
import Bye from './Bye';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename='/'>
        <Fragment>
          <Menu />
          <Switch>
            <Route exact path='/' component={Hello} />
            <Route exact path='/bye' component={Bye} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

render(<App />, document.getElementById('root'));
