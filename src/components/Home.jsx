import React from 'react';
import './Home.css'

//icons 
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa';

//components
import SkillCard from './SkillCard'

const Home = () => {

    const skillData = [{"Html5": FaHtml5}, {"Css3": FaCss3}]
    return(
        <section className='HomeTextContainer'>
            <section>
                <h5>Hello my name is Joseph Oliver </h5>
                <p>Im a person that likes to learn new languages, frameworks and new challenges. Im always consuming  <br/>
                    </p>
            </section>
                {/* <p>
                    talk about why i like tech etc adfkajdksafsa daf sa sda
                </p>
                links here to message? */}
            <section>
                <h6>bleh</h6>
                {skillData.forEach((skills) => {
                    <SkillCard skill={skills.value} skillName={skill.key}/>
                })}
            </section>
        </section>
    )
}

export default Home
