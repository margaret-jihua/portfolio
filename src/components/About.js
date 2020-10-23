import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="container">
                <h1 className="heading">About Me</h1>
                <div className="row">                    
                    <div className="LI-profile-badge col-sm-12 col-md-6 col-lg-4" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="margaret-jihua"><a className="LI-simple-link" href='https://www.linkedin.com/in/margaret-jihua?trk=profile-badge'>Jihua (Margaret) Huang</a></div>

                    <div className="github-widget col-sm-12 col-md-6 col-lg-4" data-username="margaret-jihua"></div>

                    <h6 className="col-sm-12 col-md-6 col-lg-4">I’m a Junior Software Engineer with a passion to apply my professional knowledge in problem solving and team cooperating. A detail-orientated person, making things as perfect as possible motivates me to do things better and better. I’m ready to contribute my skills at high levels of complexity for a dynamic and stable workplace.</h6>
                </div>
            </div>
        )
    }
}
