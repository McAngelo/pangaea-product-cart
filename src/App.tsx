import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";
import Greeting from "./Greeting";
import { Switch, Route} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route exact={true} path="/another" component={AnotherScreen}></Route>
          <Route exact={true} path="/greetings" component={Greeting} ></Route>
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;


