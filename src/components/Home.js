import React, {Component} from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import margaret from '../assets/margaret.JPG'

export default class Home extends Component {
    
    render() {

        const projects = [
            {name:'Tik Tak Toe', link:"https://margaret-jihua.github.io/tik-tak-toe/",},
            {name:'The Flag Game', link:"https://margaret-jihua.github.io/national-flag-game/"},
            {name:'The Astronomy App', link: "https://astronomy-picture-app.herokuapp.com/"},
            {name: 'Affirmation', link: "https://affirmations-client.herokuapp.com/"},
            {name: 'Off the shelf', link: "https://offtheshelff.herokuapp.com/"},
            {name: 'Zero-G', link: "https://zero-g-frontend-25239.web.app/", repo:"https://github.com/margaret-jihua/zero-g-frontend", description:""}
        ]

        return (
            <>
            <div className="intro">
                <h5>Hi, My name is <strong style={{ fontSize:"3rem"}}>Jihua Huang</strong>, I'm also <strong style={{ fontSize:"3rem"}}>Margaret.</strong></h5>
                <h1>I build things for the web.</h1>
                <a href="mailto: margaret.jihua@gmail.com">Hire Me</a>
            </div>    
            <About />
            <Projects id="projects" projects={projects} />
            </>
        )
    }
}