import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Missions  from './Components/Missions/Missions';
import LaunchPads from './Components/LaunchPads/LaunchPads';
import Payload from './Components/Payload/Payload';
import Home from './Components/Home/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/#" exact component={Home}></Route>
        <Route path="/missions" component={Missions}/>
        <Route path="/launchpads" component={LaunchPads}/>
        <Route path="/payload/:id" component={Payload}/>
        <Route path="*" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
