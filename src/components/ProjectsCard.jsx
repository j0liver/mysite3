import React from 'react';
import './ProjectsCard.css'

const ProjectsCards = (props) => {

    return(
        <section className='projectCard'>
            <h3>{props.name}</h3>
            <div className='cardContainer'>
                 <img src={props.data} alt=""/>
            </div>
            
            <p>{props.description}</p>
            <div className='projectButton'>
                <button>View Live</button>
                <button>View Code</button>
            </div>
        </section>
    )
}

export default ProjectsCards