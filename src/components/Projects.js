import React, {Component} from 'react'

class Projects extends Component {
    render() {
        const projectList = this.props.projects.map((p,i) => {
            return (
                <div class="card col-sm-12 col-md-6 col-lg-4 ">
                    <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="{p.link}" class="card-link">site</a>
                        <a href="#" class="card-link">github</a>
                    </div>
                </div>
            )
        })
        return (
            <div id="projects">
                <h1>My Projects</h1>
                <div className="row">
                    {projectList}
                </div>                
            </div>
        )
    }
}

export default Projects