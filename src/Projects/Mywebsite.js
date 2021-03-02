import "./Projects.css"

import tabnav from '../img/Tabnavigation.PNG'
import oldtabnav from '../img/Oldtabnav.PNG'
import aboutmever from '../img/AboutmeVertical.PNG'
import aboutmehor from '../img/AboutmeHorizontal.PNG'
import skills from '../img/Skills.PNG'
import projects from '../img/Projects.PNG'

import {CgWebsite} from 'react-icons/cg'
import {FaGithub, FaReact} from 'react-icons/fa'
import {SiCsswizardry} from 'react-icons/si'

function Mywebsite () {
    return (
        <div>
            <div className="project-content">
                <div className="header-with-links">
                    <h2>My Portfolio</h2>
                    <div className="project-links">
                        <a href="https://www.susannahamalainen.com/" rel="noreferrer" target="blank_">
                            <CgWebsite size={20}/>
                        </a>
                        <a href="https://github.com/Lesuz/Portfolio" rel="noreferrer" target="blank_">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                </div>
                <p>
                    A website to introduce myself, show my skills and the projects I have worked on. 
                    This website is my third version of my website. The website gets updated whenever 
                    my skills allow it.  
                </p>
                <h4>Used skills:</h4>
                <ul className="project-skill-list">
                    <li><FaReact size={25}/>React</li>
                    <li><SiCsswizardry size={25}/>CSS</li>
                </ul>
                <h3>The Process</h3>
                <h4>The Menu/The Header</h4>
                <p>
                    I started with the menu because it is a component which is going to be visible at all 
                    times. The previous menu of this website was one made for mobile devices. 
                </p>
                <div className="project-picture">
                    <img src={oldtabnav} alt="old navigation"></img>
                    <p>Old navigation on mobile</p>
                </div>
                <p>
                    This time I decided to make one which resembles a tab navigation. I have always liked them if I 
                    only have a few main pages on the website. 
                </p>
                <p>
                    Since the website won’t have a lot of  information for each part, (about me, 
                    skills, projects),  I used anchor links instead of routing. I feel like this 
                    makes the website look more finished.  
                </p>
                <div className="project-picture">
                    <img src={tabnav} alt="new navigation"></img>
                    <p>New navigation on mobile</p>
                </div>
                <h4>The Content</h4>
                <h5>About me</h5>
                <div className="project-picture">
                    <img src={aboutmever} alt="about me section vertical"></img>
                    <p>About me -section on mobile.</p>
                </div>
                <p>
                    Mobile has a vertical picture, with a profile picture on top, and on the bottom some information about me. 
                </p>
                <div className="project-picture">
                    <img src={aboutmehor} alt="about me section in horizontal"></img>
                    <p>About me -section on a wider screen.</p>
                </div>
                <p>
                    Computer, or a wider screen, has horizontal picture , with a profile picturer on the left side, and information 
                    about me on the right. Both have social media icons under the information, which are clickable links.
                </p>
                <h5>My Skills</h5>
                <div className="project-picture">
                    <img src={skills} alt="my skills section"></img>
                    <p>Skills -section on wider screen.</p>
                </div>
                <p>
                    I browsed multiple portfolios made by front end developers and found this way to 
                    be one of the cleanest and easier ways to display ones skills so I decided to use 
                    it as well. It is compact and uses pictures/icons to help the reader to find specific 
                    skills. 
                </p>
                <p>
                    I added a button, which opens my CV into a new tab so it can be easily checked out or downlaoded.
                </p>
                <h5>Projects</h5>
                <p>
                    I have tried multiple ways to display my projects. I have not liked most of them but they got 
                    the job done. After decided to update my website, I also went on multiple frontend developers 
                    portfolio to get some inspiration. 
                </p>
                <p>
                    I had to figure out how to show what the projects end result looked like, what kind of description to give it and 
                    how to redirect the reader to go test it out themselves, to link the projects github if possible and to link 
                    to this kind of page which has more information about the project. 
                </p>
                <div className="project-picture">
                    <img src={projects} alt="projects section"></img>
                    <p>Projects -section on wider screen.</p>
                </div>
                <p>
                    The way I decided to display these links has been done by others. I found a couple other 
                    frontend developers who had done it this way and I liked it. It is very similar to how links 
                    are displayed on other websites, which makes it easier for the reader to know, how to use these 
                    links, and that they even are links. The only drawback displaying the links this way is that if 
                    the title of the project is long, the links won’t fit next to the title. 
                </p>
            </div>
        </div>
    )
}

export default Mywebsite;