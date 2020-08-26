import React from 'react';
import './ProjectsCard.css'

const ProjectsCards = (props) => {

    return(
        <section className='projectCard'>
            <div>
                 <img src={props.data} alt=""/>
            </div>
            <p>test1</p>
        </section>
    )
}

export default ProjectsCards