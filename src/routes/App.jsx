import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import Home from '../containers/Home';
import Payment from '../containers/Payment';
import Details from '../containers/Details';

import '../static/styles/mobile.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/details/:id' component={Details} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
