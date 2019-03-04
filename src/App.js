import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Missions  from './Components/Missions/Missions';
import LaunchPads from './Components/LaunchPads/LaunchPads';
import Payload from './Components/Payload/Payload';
import Home from './Components/Home/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/missions" component={Missions}/>
        <Route path="/launchpads" component={LaunchPads}/>
        <Route path="/payload/:id" component={Payload}/>
        </div>
      </Router>
    );
  }
}

export default App;
