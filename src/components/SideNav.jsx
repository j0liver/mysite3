import React from 'react';
import { Link } from 'react-router-dom'
//img 
import me from '../imgs/Facetune.jpg'

//icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const SideNav = () => {

    return(
        <nav>
            <section>
                <h3>Joseph Oliver</h3>
                <div>
                    <img src={me} alt=""/>
                </div>
                <h4>Full Stack Engineer</h4>
                <h6>Houston Tx</h6>
            </section>

            {/* <ol>
                <li>home</li>
                <li>projects</li>
                <li>Resume</li>
            </ol> */}
            
            <section className='links'>
                <Link>Home</Link>
                <Link>Projects</Link>
                <Link>Resume</Link>
            </section>

            <section className='social'>
                <a href="">
                    <FaLinkedin />
                </a>
                <a href="">
                    <FaGithub/>
                </a>
            </section>
        </nav>
    )
}
export default SideNav;