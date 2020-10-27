import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link }from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Weather from './Weather'

function App() {

  return (
    <Router>
      <div className="App">        
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/weather' render={() => <Weather /> }/>
      </div>
    </Router>
    
  );
}

export default App;
