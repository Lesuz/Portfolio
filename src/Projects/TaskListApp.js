import "./Projects.css"

import {CgWebsite} from 'react-icons/cg'
import {FaGithub, FaCube, FaNodeJs, FaReact} from 'react-icons/fa'
import {SiCsswizardry, SiMongodb} from 'react-icons/si'

import TaskListAppProcess from '../TaskListApp.pdf'

import tasklist from '../img/TaskList.PNG'
import tabnav from '../img/TaskListTabNavigation.PNG'
import schema from '../img/Schema.PNG'
import worldofdinosaurs from '../img/WorldOfDinosaurs.PNG'
import searchfilter from '../img/SearchFilter.PNG'

function TaskListApp () {
    return (
        <div>
            <div className="project-content">
                <div className="header-with-links">
                    <h2>TaskList App</h2>
                    <div className="project-links">
                        <a href="https://github.com/Lesuz/TaskListApp" rel="noreferrer" target="blank_">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                </div>
                <p>
                A simple task list -app made with react native as part of the final project for a react native course. There are 5 pages; settings, user manual, task list, contact information and about the app.
                </p>
                <h4>Used skills:</h4>
                <ul className="project-skill-list">
                    <li><FaReact size={25}/>React Native</li>
                    <li><SiCsswizardry size={25}/>CSS</li>
                </ul>
                
                <h3>The Process</h3>
                <a href={TaskListAppProcess} target="_blank" rel="noreferrer">
                    <button 
                    className="app-process-button"
                    type="button">
                        Check out the process with pictures here!
                    </button>
                </a>
                <h4>Planning the app</h4>
                <p>
                    Planning the app was easier than I thought. This app was basically a newer version of a previous task in the course. I could not get the first version to work which is why I had decided to make it again but better. I also took into consideration what kind of tutorials there were out there, because at this point I was still so knew to this, that I could not start to do my own things from scratch.
                </p>
                <p>
                    There were some requirements the app had to have, which were log in, sign up and a page to go after it logs in, and some pages so a navigation is used.
                </p>
                <p>
                    I first sketch out my ideas onto paper, and when I had all main pages sketched out, I made a prototype of it trying out different color combinations. 
                </p>
                <h4>Developing the app</h4>
                <p> 
                    I had decided to make the task list function first, because I had had problems with it before. To me it was important to get it to work before I did anything else. The login/sign up was a task on a previous practise so I knew how to do it.
                </p>
                <p>
                    
                </p>
                <div className="project-picture">
                    <img src={tasklist} alt="app design"></img>
                    <p>Task list and adding a task</p>
                </div>
                <p>
                    After the task list worked, I added different pages using a tab navigation. At this point I still did not understand how the navigation and routing works and just tried different things. I even created a tab navigation look alike but in the end I got the tab navigation to work.
                </p>
                <p>
                    First a connection must be made to the database. For this I used mongoose. With mongoose I first establish a connection using env files, which have the data needed, such as password and username, to connect to the database. 
                </p>
                <div className="project-picture">
                    <img src={tabnav} alt="app design"></img>
                    <p>Tab navigation with 5 different pages</p>
                </div>
                <p>
                   I would change the tab navigation if I had to make it again. I would use icons instead of words because they don't fit.
                </p>
                <p>
                    On the other pages is mostly just text and link like my LinkedIn and Github.
                </p>
                <h4>Login and Signup</h4>
                <p>
                    I had a lot of problems with getting the login to work. After researching the problem on the internet, I found many people had the same problem, and other people were trying to help, but they also could not figure it out. In the end, I did not include the login and signup pages in this project.
                </p>
                <p>
                    I have build a log in and sign up by email, by google or facebook before in this course, and even then there were problems and it had something to do with the database, firebase. I got it to work in the other project but something with exhanging data in between the app and firebase went constantly wrong.
                </p>
                <h4>The Future of this App</h4>
                <p>I do not think I will be doing anything with this app in particular anymore. I think at some point I will be doing a similar app again because now I understand React Native better. </p>
                <p>My problem mostly with using React Native was that most tutorials referred to how React works, and I was not familiar with it. After this course ended I decided to learn React, so that working with React Native in the future would be easier.</p>
            </div>
        </div>
    )
}

export default TaskListApp;