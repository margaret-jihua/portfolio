import React from 'react';
// import './style.css';
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
        {/* <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} /> */}
        <Route path='/weather' render={() => <Weather /> }/>
        <footer className="text-center" style={{marginTop: "100px"}}>Design & Build by Margaret (Jihua) Huang</footer>
      </div>
    </Router>
    
  );
}

export default App;
