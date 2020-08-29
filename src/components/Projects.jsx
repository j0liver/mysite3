import React from 'react';
import './Projects.css'

//components
import ProjectsCard from './ProjectsCard'

//imgs
import p1 from '../imgs/quality.png'


const Projects = () => {
    
    return(
        <div className='projects'>
            <h1>whywork</h1>
            <p>please work</p>
            <ProjectsCard data={p1}/>
        </div>
    )
}

export default Projects