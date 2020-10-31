import React, {Component} from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import margaret from '../assets/Jihua(Margaret)Huang.pdf'

export default class Home extends Component {
    
    render() {

        const projects = [
            
            {
                name: "The Astronomy App", 
                img: "Astronomy",
                link: "https://astronomy-picture-app.herokuapp.com/",
                repo: "https://github.com/margaret-jihua/Astronomy-App",
                tech: ["Node.js", "Express", "PostgresQL", "RESTful API"],
                description: "A web app displying amazing astronmy pictures of the day by NASA. Users can search pictures by date, create an account, favorite pictures, leave comments under each picture."
            },
            {
                name: "Affirmation", 
                img: "Affirmation",
                link: "https://affirmations-client.herokuapp.com/",
                repo: "https://github.com/margaret-jihua/Affirmations-App",
                tech: ["React", "MongoDB", "Node.js", "Express"],
                description: "An open API with some Affirmation quotes and supporting resources. Users can create an account, save quotes to their profile by liking, and submitting quotes of their own. Users will have access to the crisis prevention hotline and find professional help in their area, as well as have access to chat with other users for more personal advice."
            },
            {
                name: "Zero-G", 
                img: "ZeroG",
                link: "https://zero-g-frontend-25239.web.app/", 
                repo: "https://github.com/margaret-jihua/zero-g-frontend", 
                tech: ["React", "MongoDB", "Node.js", "Express"],
                description: "A fitness app for future-space-travelers. In case of muscular density decreases in space, it is crucial to maintain exercise. Our app offers timer with music while users log their daily acitiveties. It's a not fully functional site, we listed possible implementations for the future."
            },
            {
                name: "Off The Shelf", 
                img: "OffTheShelf",
                link: "https://offtheshelff.herokuapp.com/",
                repo: "https://github.com/margaret-jihua/Off-the-Shelf",
                tech: ["Django", "PostgresQL", "API"],
                description: "A mockup Goodreads app. Allows Users to create an account, search for books, and receive information on similar books, ratings, reviews, purchase links and film base of the book if any. Users can also save books to their wishlist and leave comments under each book."
            },
            {
                game: true,
                img: "BaconEgg",
                name: "Bacon & Egg Tik Tak Toe", 
                link: "https://margaret-jihua.github.io/tik-tak-toe/",
                repo: "https://github.com/margaret-jihua/tik-tak-toe",
                description: "A classic Tik-Tak-Toe game with adorable bacon & egg layout."
            },
            {
                game: true,
                img: "globe",
                name: "The National Flag Game", 
                link: "https://margaret-jihua.github.io/national-flag-game/",
                repo: "https://github.com/margaret-jihua/national-flag-game",
                description: "This is a game of identifying countries base on 4 different flags. If a player makes 5 wrong guesses, the player lose the game."
            },
        ]

        return (
            <>
            <div className="intro">
                <h5>Hi, my name is <strong style={{ fontSize:"3rem"}}>Jihua Huang</strong>, I'm also <strong style={{ fontSize:"3rem"}}>Margaret.</strong></h5>
                <h1>I build things for the web.</h1>
                <a href="mailto: margaret.jihua@gmail.com">Hire Me</a>
                <a href={margaret} download>Resume</a>
            </div>    
            <About />
            <Skills />
            <Projects id="projects" projects={projects} />
            <Contact />
            </>
        )
    }
}