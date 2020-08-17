import React from 'react';
import './SkillCard.css'
//icons 
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa';

const SkillCard = () => {
    
    return(
        <section className='skills'>
        <h5>Skills</h5>
        <section>
            <FaHtml5 />
            <h6>Html5</h6>
        </section>   
        <section>
            <FaCss3 />
            <h6>Css3</h6>
        </section>
        <section>
            <FaJs />
            <h6>JavaScript</h6>
        </section>
        <section>
            <FaReact />
            <h6>React</h6>
        </section>
        <section>
            <FaNode />
            <h6>Node</h6>
        </section>
    </section>
    )
}

export default SkillCard