import React from 'react';
// import './style.css';

import { BrowserRouter as Router, Route, Link }from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Weather from './Weather'

function App() {

  const projects = [
    {name:'Tik Tak Toe', link:"https://margaret-jihua.github.io/tik-tak-toe/"},
    {name:'The Flag Game', link:"https://margaret-jihua.github.io/national-flag-game/"},
    {name:'The Astronomy App', link: "https://astronomy-picture-app.herokuapp.com/"},
    {name: 'Affirmation', link: "https://affirmations-client.herokuapp.com/"}
  ]

  const posts = [
    {title: 'GA Software Engineering Immersive'}
  ]

  return (
    <Router>
      <div className="App">
        <Nav />        
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={ () => <Blog posts={this.props.posts} /> }/>
        <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} />
        <Route path='/weather' render={() => <Weather /> }/>
      </div>
    </Router>
    
  );
}

export default App;
