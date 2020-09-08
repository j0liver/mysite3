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
            <h1>whywork</h1>
            <section className='projectList'>
                <ProjectsCard data={p1}/>
                <ProjectsCard data={p2}/>
                <ProjectsCard data={p3}/>
            </section>
            
        </div>
    )
}

export default Projects