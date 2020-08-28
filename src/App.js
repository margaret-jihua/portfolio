import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{'  '}
          <Link to='/blog'>Blog</Link>{'  '}
          <Link to='/about'>About</Link>{'  '}
          <Link to='/projects'>Projects</Link>{'  '}
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
    
  );
}

export default App;
