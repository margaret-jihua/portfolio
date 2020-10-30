import React, {Component} from 'react'
import github from '../assets/icons8-github-48.png'
import site from '../assets/icons8-internet-48.png'

import Affirmation from '../assets/projects/Affirmation.png'
import Astronomy from '../assets/projects/Astronomy.png'
import OffTheShelf from '../assets/projects/off-the-shelf.png'
import ZeroG from '../assets/projects/Zero-G.png'

export default class Projects extends Component {
    render() {

        const getImg = (img) => {
            switch (img) {
                case 'Affirmation':
                    return Affirmation
                case 'Astronomy':
                    return Astronomy
                case 'OffTheShelf':
                    return OffTheShelf
                case 'ZeroG':
                    return ZeroG
            }
        }

        const projectList = this.props.projects.map((p,i) => {           
            return (
                p.game ? ('') : (
                <div className="col-sm-12 col-md-6" style={{padding:"20px"}}>
                    {/* <div className=""> */}
                        {/* <div className=""> */}
                        <img src={getImg(p.img)} alt={p.img} style={{height:"270px", width:"540px", objectFit:"scale-down", marginBottom:"20px"}}/> 
                        {/* </div> */}
                        <h5 className="">{p.name}</h5>
                        <div className="text-muted d-flex flex-wrap">
                            {p.tech ? (p.tech.map((t, i) => <span style={{marginRight:"10px"}}>{t}</span>)) : ('')}
                        </div>
                        <p className="">{p.description}</p>
                        <a href={p.link} className="card-link"><img src={site} /></a>
                        <a href={p.repo} className="card-link"><img src={github} /></a>
                    {/* </div> */}
                </div>
                )
            )
        })

        const games = this.props.projects.map((p,i) => {           
            return (
                p.game ? (
                <div className="d-flex flex-wrap">
                    <div className="">
                        <img className="" src={getImg(p.img)} alt={p.img} style={{height:"270px", width:"", objectFit:"scale-down", marginBottom:"20px"}}/> 
                        <h5 className="">{p.name}</h5>
                        <div className="text-muted d-flex flex-wrap">
                            {p.tech ? (p.tech.map((t, i) => <span style={{marginRight:"10px"}}>{t}</span>)) : ('')}
                        </div>
                        <p className="">{p.description}</p>
                        <a href={p.link} className=""><img src={site} /></a>
                        <a href={p.repo} className=""><img src={github} /></a>
                    </div>
                </div>
                ) : ('')
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

