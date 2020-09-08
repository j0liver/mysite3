import React from 'react';
import './Projects.css'

//components
import ProjectsCard from './ProjectsCard'

//imgs
import p1 from '../imgs/quality.png'
import p2 from '../imgs/guidr.png'
import p3 from '../imgs/park.png'

const Projects = () => {
    
    return(
        <div className='projects'>
            <h1>Projects</h1>
            <section className='projectList'>
                <ProjectsCard data={p1} name='interviewQ'/>
                <ProjectsCard data={p2} name='Guidr'/>
                <ProjectsCard data={p3} name='Park Passport'/>
            </section>
            
        </div>
    )
}

export default Projects