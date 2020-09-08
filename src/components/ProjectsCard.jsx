import React from 'react';
import './ProjectsCard.css'

const ProjectsCards = (props) => {

    return(
        <section className='projectCard'>
            <h3>test1</h3>
            <div>
                 <img src={props.data} alt=""/>
            </div>
            
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div>
                <button>View Live</button>
                <button>Code</button>
            </div>
        </section>
    )
}

export default ProjectsCards