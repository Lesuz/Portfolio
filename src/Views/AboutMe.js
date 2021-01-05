import React from 'react';
import CV from '../CV.pdf';

function AboutMe() {
    return (
        <div id="aboutme-header" className="app-aboutme">
            <h1 className="app-content-header">
                Hi, I'm Susanna
            </h1>
            <div className="app-aboutme-content">
                <p> 
                    I am a third-year Business Information Technology student located in Helsinki metropolitan area. I major 
                    in web and mobile development, from designing apps to developing them.
                </p>
                <p>
                    I am a rookie front-end developer and a UI/UX enthusiast. I am currently working on expanding my skills and knowledge on web and 
                    mobile development by doing my own projects.
                </p>
                <p>
                    So far I have some basic knowledge on React, React Native, Ionic and how to use Firebase with both React Native and Ionic. 
                    I am more familiar with basic HTML, CSS and JavaScript.
                </p>
            </div>
            <div className="app-aboutme-button">
                <a href={CV} target="_blank" rel="noreferrer">
                    <button 
                    className="app-aboutme-cv-button"
                    type="button">
                        Download CV!
                    </button>
                </a>
            </div>
        </div>
    )
}
export default AboutMe;