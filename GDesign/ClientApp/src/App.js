import React from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Design } from './components/Design';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './App.less'

  function App() {
    return (
      <Router>
    <Design>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        </Switch>
      </Design>
      </Router>
    );
  }
  export default App;
