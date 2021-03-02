import React from 'react';
import {Link} from 'react-router-dom';


import coronaintheworld from '../img/CoronaInTheWorld.PNG';
import tasklist from '../img/TaskListMobileApp.PNG';
import portfolio from '../img/portfolio.PNG';
import ladybuggallery from '../img/Ladybuggallery.PNG'

import {CgWebsite, CgDetailsMore} from 'react-icons/cg'
import {FaGithub} from 'react-icons/fa'

function Projects() {
    return (
        <div  id="projects-header" >
            <h2>
                My Projects
            </h2>
            <div className="project-row">
                <div className="project-row-image">
                    <img src={portfolio} alt="project portfolio"></img>
                </div>
                <div className="project-row-information">
                    <div className="project-row-information-header-and-links">
                        <div>
                            <h3>My Portfolio</h3>
                        </div>
                        <div className="project-links">
                            <a href="https://www.susannahamalainen.com/" rel="noreferrer" target="blank_">
                                <CgWebsite size={20}/>
                                <p>Website</p>
                            </a>
                            <a href="https://github.com/Lesuz/Portfolio" rel="noreferrer" target="blank_">
                                <FaGithub size={20}/>
                                <p>Github</p>
                            </a>
                            <Link to="/Projects/Mywebsite">
                                <CgDetailsMore size={20}/>
                                <p>Details</p>
                            </Link>
                        </div>
                    </div>
                    <div className="project-description">
                        <p>This web app functions as my portfolio. It has a section about me, about my skills, my best projects 
                            I have done, and links to my social media.</p>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-row-image">
                    <img src={coronaintheworld} alt="project corona in the world"></img>
                </div>
                <div className="project-row-information">
                    <div className="project-row-information-header-and-links">
                        <div>
                            <h3>Corona In The World</h3>
                        </div>
                        <div className="project-links">
                            <a href="https://coronaintheworld.netlify.app/" rel="noreferrer" target="blank_">
                                <CgWebsite size={20}/>
                                <p>Website</p>
                            </a>
                            <a href="https://github.com/Lesuz/CoronaInTheWorld" rel="noreferrer" target="blank_">
                                <FaGithub size={20}/>
                                <p>Github</p>
                            </a>
                        </div>
                    </div>
                    <div className="project-description">
                        <p>This web app allows the user to input name of a country and it will display how many 
                            covid cases there are to this date and how many cases there were for each month last year.</p>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-row-image">
                    <img src={ladybuggallery} alt="project ladybug gallery"></img>
                </div>
                <div className="project-row-information">
                    <div className="project-row-information-header-and-links">
                        <div>
                            <h3>Ladybug Gallery</h3>
                        </div>
                        <div className="project-links">
                            <a href="https://ladybuggallery.herokuapp.com/" rel="noreferrer" target="blank_">
                                <CgWebsite size={20}/>
                                <p>Website</p>
                            </a>
                            <a href="https://github.com/Lesuz/LadybugGallery" rel="noreferrer" target="blank_">
                                <FaGithub size={20}/>
                                <p>Github</p>
                            </a>
                            {/*
                            <a>
                                <CgDetailsMore size={20}/>
                                <p>Details</p>
                            </a>
                            */}
                        </div>
                    </div>
                    <div className="project-description">
                        <p>
                            A gallery filled with pictures of ladybugs made by Ronja Holopainen. It has three pages; the gallery, 
                            why the theme and information about the artist.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-row-image">
                    <img src={tasklist} alt="project task list"></img>
                </div>
                <div className="project-row-information">
                    <div className="project-row-information-header-and-links">
                        <div>
                            <h3>Task List -app</h3>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/Lesuz/TaskListApp" rel="noreferrer" target="blank_">
                                <FaGithub size={20}/>
                                <p>Github</p>
                            </a>
                            {/*
                            <a>
                                <CgDetailsMore size={20}/>
                                <p>Details</p>
                            </a>
                            */}
                        </div>
                    </div>
                    <div className="project-description">
                        <p>
                            A simple task list -app made with react native as part of the final project for a react native course. 
                            There are 5 pages; settings, user manual, task list, contact information and about the app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;