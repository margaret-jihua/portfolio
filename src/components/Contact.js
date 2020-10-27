import React, {Component} from 'react'
import lucas from '../assets/lucas.png'
import lily from '../assets/lily.png'
import instagram from '../assets/instagram.png'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="container text-center">
                <h1 className="heading">Let's get in touch</h1>
                <div className="line"></div>

                <h4>✨😺come check out my cats😸✨</h4>
                <img src={lucas} height="48" />
                <img src={lily} alt="Lily" height="48" />
                <a href="https://www.instagram.com/walklikeacat"><img src={instagram} height="62" /></a>
            </div>
        )
    }
}