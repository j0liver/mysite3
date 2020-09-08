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
                <ProjectsCard data={p1} name='interviewQ' description='QualityHub is a web-primary app for both job seekers to polish their skills and for coaches to sell their expertise.'/>
                <ProjectsCard data={p2} name='Guidr' description='Built for a 4 day challenge and designed for explorers and travellers, Guidr allows users to see fellow members trips and create trips.'/>
                <ProjectsCard data={p3} name='Park Passport' description='Built for a 4 day challenge and designed for park lovers and travellers, Park Passport allows users to search for parks and create new posts about Parks not listed.'/>
            </section>
            
        </div>
    )
}

export default Projects