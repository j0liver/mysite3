import React from 'react';
import './Home.css'

//components
import SkillCard from './SkillCard'

const Home = () => {

    return(
        <section className='HomeTextContainer'>
            <section className='text'>
                <h5>Hello my name is Joseph Oliver </h5>
                <p>Im a person that likes to learn new languages, frameworks and new challenges. I orignally started coding when myspace was the go to social platform and you could customize your own page, from there i my love for code grew! <br/>
                
                    </p>
            </section>
            <SkillCard />
            
        </section>
    )
}

export default Home
