import React, {Component} from 'react'
import lucas from '../assets/lucas.png'
import lily from '../assets/lily.png'
import instagram from '../assets/icons8-instagram-60.png'
import github from '../assets/icons8-github-60.png'
import linkedin from '../assets/icons8-linkedin-60.png'
import gmail from '../assets/icons8-gmail-60.png'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="smoke-dev">
                <h1 className="heading">Let's get in touch</h1>
                <div className="line"></div>
                <div className="flex-dev container">
                    <div>
                        <h6>You can find my work on <a href="https://github.com/margaret-jihua">Github</a></h6>
                        <a href="https://github.com/margaret-jihua"><img src={github} alt="github" /></a>
                    </div>
                    <div>
                        <h6>Connect with me on <a href="https://www.linkedin.com/in/margaret-jihua/">LinkedIn</a></h6>
                        <a href="https://www.linkedin.com/in/margaret-jihua/"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div>
                        <h6>Feel free to say <a href="mailto:margaret.jihua@gmail.com">Hi</a></h6>
                        <a href="mailto:margaret.jihua@gmail.com"><img src={gmail} alt="gmail" /></a>
                    </div>
                </div>
                <h4>🐈 I'm also a cat lover 🐈</h4>
                <h4>✨😺 come check out my cats 😸✨</h4>
                <img src={lucas} alt="lucas" height="48" />
                <img src={lily} alt="Lily" height="48" />
                <a href="https://www.instagram.com/walklikeacat"><img src={instagram} height="62" /></a>
                <footer className="text-center" style={{marginTop: "50px"}}>Design & Build by Margaret (Jihua) Huang</footer>
            </div>
        )
    }
}