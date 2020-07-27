import React from 'react';

//img 
import me from '../imgs/Facetune.jpg'

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

            {/* <ul>
                <li>home</li>
                <li>projects</li>
                <li>Resume</li>
            </ul> */}

            <section>
                <a href="">
                    <img src="" alt=""/>
                </a>
                <a href="">
                    <img src="" alt=""/>
                </a>
            </section>
        </nav>
    )
}
export default SideNav;