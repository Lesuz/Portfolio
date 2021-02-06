import React from 'react';

import CV from '../CV.pdf';

import {SiJavascript} from 'react-icons/si' 
import {FaServer, FaDatabase, FaHtml5, FaCss3} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'

function Skills() {
    return (
        <header id="skills-header" className="skills-content">
            <h2>Skills</h2>
            <div >
                <div className="skills-row">
                    <div className="skill-boxes">
                        <SiJavascript size={50}/>
                        <h3>JavaScript</h3>
                        <p>React, React Native, Node, TypeScript</p>
                    </div>
                    <div className="skill-boxes">
                        <FaDatabase size={50}/>
                        <h3>Databases</h3>
                        <p>Firebase, MySQL</p>
                    </div>
                    <div className="skill-boxes">
                        <div>
                            <FaHtml5 size={50}/>
                            <FaCss3 size={50}/>
                        </div>
                        <h3>HTML, CSS</h3>
                    </div>
                </div>
                <div className="skills-row">
                    <div className="skill-boxes">
                        <FaServer size={50}/>
                        <h3>Back-end</h3>
                        <p>Java, Python</p>
                    </div>
                    <div className="skill-boxes">
                        <MdLanguage size={50}/>
                        <h3>Languages</h3>
                        <p>Finnish, English, German</p>
                    </div>
                    <div className="skill-boxes">
                        <HiOutlineDotsCircleHorizontal size={50}/>
                        <h3>Other</h3>
                        <p>Video &amp; audio editing, photoshop, digital and traditional art</p>
                    </div>
                </div>
            </div>
            <div className="app-cv-button">
                <a href={CV} target="_blank" rel="noreferrer">
                    <button 
                    className="app-cv-button-button"
                    type="button">
                        Download CV!
                    </button>
                </a>
            </div>
        </header>
    )
}
export default Skills;