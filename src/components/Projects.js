import React, {Component} from 'react'
import github from '../assets/icons8-github-48.png'
import site from '../assets/icons8-internet-48.png'

export default class Projects extends Component {
    render() {
        const projectList = this.props.projects.map((p,i) => {

            return (
                <div className="card col-sm-12 col-md-6 col-lg-4">
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <div className="card-subtitle text-muted d-flex flex-wrap">
                            {p.tech ? (p.tech.map((t, i) => <span style={{marginRight:"10px"}}>{t}</span>)) : ('')}
                            {/* {p.tech} */}
                        </div>
                        <p className="card-text">{p.description}</p>
                        <a href={p.link} className="card-link"><img src={site} /></a>
                        <a href={p.repo} className="card-link"><img src={github} /></a>
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

