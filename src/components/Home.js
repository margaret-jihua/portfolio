import React, {Component} from 'react'
import About from '../components/About'
import Projects from '../components/Projects'

export default class Home extends Component {
    
    render() {

        const projects = [
            {name:'Tik Tak Toe', link:"https://margaret-jihua.github.io/tik-tak-toe/"},
            {name:'The Flag Game', link:"https://margaret-jihua.github.io/national-flag-game/"},
            {name:'The Astronomy App', link: "https://astronomy-picture-app.herokuapp.com/"},
            {name: 'Affirmation', link: "https://affirmations-client.herokuapp.com/"},
            {name: 'Off the shelf', link: "https://offtheshelff.herokuapp.com/"}
        ]

        return (
            <div className="container">
                <h1 className="text-center">Margaret's Portfolio</h1>   
                <About />
                <Projects id="projects" projects={projects} />
            </div>
        )
    }
}