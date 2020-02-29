import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UnknownPath from './components/Errors/UnknownPath';
import Main from './components/Main/Main';

function App() {
  return (
    <Router  >
      <Switch>
        <Route exact path={process.env.PUBLIC_URL+"/"}>
        <Main />
        </Route>
        <Route  path={process.env.PUBLIC_URL+"/*"}>
        <UnknownPath />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
