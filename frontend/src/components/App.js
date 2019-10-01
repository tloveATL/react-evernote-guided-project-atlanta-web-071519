import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Landing from './Landing'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path='/' render={() =>  <Landing />} />
        <Route exact path='/notes' render={() => 
        <div>
        <Header />
        <NoteContainer /> 
        </div>
        } />
      </Switch>
      </div>
    );
  }
}

export default App;
