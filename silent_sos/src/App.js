import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AlertButton from './components/AlertButton';
import SecondScreen from './components/SecondScreen';
import ControlBoard from './components/ControlBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <AlertButton />
            </Route>
            <Route path="/sos">
              <SenderStatus />
            </Route>
            <Route path="/control">
              <ControlBoard />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <header className="App-header">
       <AlertButton/>
      </header> */}
    </div>
  );
}
export default App;
