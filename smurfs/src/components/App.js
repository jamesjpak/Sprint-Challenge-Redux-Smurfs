import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SmurfList from '../components/SmurfList';
import AddForm from '../components/AddForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/"> Smurf Village </Link>
        <Link to="/form"> Add a Smurf! </Link>

        <Route exact path="/" component={SmurfList} />
        <Route path="/form" component={AddForm} />
      </div>
      </Router>
    );
  }
}

export default App;
