import React, {Component} from 'react'

export default class About extends Component {
    render() {
        let skills = []
        function importAll(req) {            
            let images = {};
            req.keys().map((item, index) => { 
                skills[index] = {
                    url: req(item),
                    skill: item.replace('./icons8-', '').replace('-70.png', '').replace('-', ' ')
                }
                images[item.replace('./icons8-', '').replace('-70.png', '')] = req(item); 
            });
            return images;
          }
          
        const images = importAll(require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/));

        const skillList = skills.map((skill,i) => {
            return (
                <div className="col-md-2">
                    <img src={skill['url']}/>
                    <p>{skill['skill']}</p>
                </div>
            )
        })

        return (
            <div id="skills" className="smoke-dev">
                <h1 className="heading">Technical Skills</h1>
                <div className="line"></div>
                <div className="row container mx-auto">{skillList}</div>                
            </div>
        )
    }
}