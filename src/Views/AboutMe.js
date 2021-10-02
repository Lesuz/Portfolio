import React from 'react';

import {FaGithub, FaLinkedin} from 'react-icons/fa'

import profilepic from '../img/profilepic.jpg'

function AboutMe() {
    return (
        <div id="aboutme-header" className="app-aboutme">
                <div>
                    <div className="app-aboutme-content">
                        <img src={profilepic} alt="profile"></img>
                        <div className="app-aboutme-content-text">
                            <p>
                                I am a fourth-year Business Information Technology Student from Finland, Helsinki metropolitan area. 
                                I am majoring in web- and mobile development. So far I have done both design apps 
                                and made them with the skills I have.

                            </p>
                            <p>
                                I am keen on learning different frameworks and libraries to make the best apps possible, 
                                but I am still at the start of my journey. At the moment I am focusing on developing apps with React, since it is such 
                                a widely used framework.
                            </p>
                            <p>
                                I am more focused on the front-end side of developing, but I also find it important to somewhat know 
                                what is happening at the back-end, which is why I am interested to learn at least the basics of fullstack. 
                                I am currently working on my thesis in which I am developing a website with the MERN-stack.
                            </p>
                        </div>
                    </div>
                    <div className="app-aboutme-socialmedia">
                        <div>
                            <a href="https://github.com/Lesuz?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/susanna-h%C3%A4m%C3%A4l%C3%A4inen-81557616b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default AboutMe;