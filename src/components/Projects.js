import React, {Component} from 'react'
import github from '../assets/icons8-github-48.png'
import site from '../assets/icons8-internet-48.png'

export default class Projects extends Component {
    render() {
        const projectList = this.props.projects.map((p,i) => {
            return (
                <div class="card col-sm-12 col-md-6 col-lg-4">
                    <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={p.link} class="card-link"><img src={site} /></a>
                        <a href="#" class="card-link"><img src={github} /></a>
                    </div>
                </div>
            )
        })
        return (
            <div id="projects" className="container">
                <h1 className="heading">My Projects</h1>
                <div className="line"></div>
                <div className="row">
                    {projectList}
                </div>                
            </div>
        )
    }
}

