import React from 'react'

export default function Nav(props) {
    return (
        <nav className="bar d-flex flex-column">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}