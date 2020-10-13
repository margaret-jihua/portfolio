import React from 'react';
// import './style.css';

import { BrowserRouter as Router, Route, Link }from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Blog from './components/Blog'
import Weather from './Weather'

function App() {

  const posts = [
    {title: 'GA Software Engineering Immersive'}
  ]

  return (
    <Router>
      <div className="App">        
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={ () => <Blog posts={this.props.posts} /> }/>
        {/* <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} /> */}
        <Route path='/weather' render={() => <Weather /> }/>
      </div>
    </Router>
    
  );
}

export default App;
