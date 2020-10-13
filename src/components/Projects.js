import React, {Component} from 'react'

class Projects extends Component {
    render() {
        const projectList = this.props.projects.map((p,i) => {
            console.log(p.link);
            return <li><a href={p.link}>{p.name}</a></li>
        })
        return (
            <div id="projects">
                <h1>My Projects</h1>
                <ul>
                    {projectList}
                </ul>                
            </div>
        )
    }
}

export default Projects