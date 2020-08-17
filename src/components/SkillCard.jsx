import React from 'react';

const SkillCard = (props) => {
    
    return(
        <section>
            <img src={props.skill} alt=""/>
            <h6>{props.skillName}</h6>
        </section>
    )
}

export default SkillCard