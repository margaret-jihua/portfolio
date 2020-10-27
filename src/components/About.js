import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="container">
                <h1 className="heading">About Me</h1>
                <div className="row">                    
                    <div className="LI-profile-badge col-sm-12 col-md-6 col-lg-4" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="margaret-jihua"><a className="LI-simple-link" href='https://www.linkedin.com/in/margaret-jihua?trk=profile-badge'>Jihua (Margaret) Huang</a></div>

                    {/* <div className="github-widget col-sm-12 col-md-6 col-lg-4" style={{height:"408px"}} data-username="margaret-jihua"></div> */}

                    <div className="col-sm-12 col-md-6 col-lg-8 about-me">
                        <h5>I’m a Junior Software Engineer. I like building awesome software. </h5>
                        <br />
                        <h5>Shortly after graduating from <strong>University of Califorina, Davis</strong> with a Computer Science Bachelor's Degree, I decided to move on with <strong>General Assembly Software Engineer Immersive Program</strong>. I met amazing people there and I learned lots of new skills in just 3 months. I built some web apps individually and collaboratively. If you are interested, I've listed my <a href="#projects">projects</a> down below.</h5>
                        <br />
                        <h5>I am currently open to opportunites. I am confident I can quickly integrate with your engineering team and make a contribution from the start. I pride myself on working hard to make sure goals are met and exceeded.</h5>
                        <br />
                        <h5>Need something built or simply want to have chat? Reach out to me on <a href="https://www.linkedin.com/in/margaret-jihua/">Linkedin</a> or send me an <a href="mailto: margaret.jihua@gmail.com">email</a>.</h5>
                    </div>
                </div>
            </div>
        )
    }
}
