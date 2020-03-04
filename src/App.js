import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UnknownPath from './components/Errors/UnknownPath';
import Main from './components/Main/Main';

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
        <Main />
        </Route>
        <Route  path={"/*"}>
        <UnknownPath />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
