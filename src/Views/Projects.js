import React from 'react';


import coronaintheworld from '../img/CoronaInTheWorld.PNG';
import todolist from '../img/ToDoList.PNG';
import tasklist from '../img/TaskListMobileApp.PNG';
import portfolio from '../img/portfolio.PNG';
import ladybuggallery from '../img/Ladybuggallery.PNG'

function Projects() {
    return (
        <div  id="projects-header" className="app-projects">
            <h1 className="app-content-header">
                My Projects
            </h1>
            <div className="app-projects-images">
            <div class="app-project-information">
                    <img 
                        src={portfolio} 
                        alt="Screenshot of Corona in the world app"
                    />
                    <div>
                        <h3>Portfolio website</h3>
                        <div className="usedSkills">
                            <p>React</p>
                        </div>
                        <p>This portfolio is a project in which I practiced and learned some basics of React. It was my 
                            first time using React. It is a simple one-page website with some basic information about me and some 
                            projects I have done. My CV can also be downloaded by manually saving it. <a href="https://www.susannahamalainen.com/" target="_blank" rel="noreferrer">Go to website</a></p>
                    </div>
                </div>
                <div class="app-project-information">
                    <img 
                        src={coronaintheworld} 
                        alt="Screenshot of Corona in the world app"
                    />
                    <div>
                        <h3>Corona In The World 2020</h3>
                        <div className="usedSkills">
                            <p>JavaScript, HTML, CSS, Covid19 API</p>
                        </div>
                        <p>Corona In The World is a web app which shows how many cases of covid are in total in a country and how many cases in each month there were in the year 2020.
                        This web app was done as part of a school project in fall of 2020 in which I had to use an API. The app can be found <a href="https://coronaintheworld.netlify.app/" target="_blank" rel="noreferrer">here</a>.</p>
                    </div>
                </div>
                <div class="app-project-information">
                    <img 
                        src={ladybuggallery} 
                        alt="Screenshot of ladybug gallery"
                    />
                    <div>
                        <h3>Ladybug Gallery</h3>
                        <div className="usedSkills">
                            <p>React, Gallery -component</p>
                        </div>
                        <p>
                        Ladybug Gallery is a project I did with the artist of the photos. This project was done with the artist in mind and to get me to learn more about react. There are three pages; the gallery, why the theme ladybugs and a page abotu the artist. The website can be 
                        checked out <a href="https://ladybuggallery.herokuapp.com/pages/LadyBugGallery" target="_blank" rel="noreferrer">here</a>.</p>
                    </div>
                </div>
                <div class="app-project-information">
                    <img 
                        src={tasklist} 
                        alt="Screenshot of a task list app's different screens"
                    />
                    <div>
                        <h3>Task list -app</h3>
                        <div className="usedSkills">
                            <p>React Native</p>
                        </div>
                        <p>Task List app made with React Native. Tasks can be added and deleted, and there is a bottom tab navigation with pages: settings, about, task list, manual and contact information. 
                        The app was made in the fall of 2020 and it was a part of course where I got introduced to React Native. The code can be found <a href="https://github.com/Lesuz/TaskListApp" target="_blank" rel="noreferrer">here</a>.
                        </p>
                    </div>
                </div>
                <div class="app-project-information">
                    <img 
                        src={todolist} 
                        alt="Screenshot of To do list app"
                    />

                    <div>
                        <h3>To Do -list web app</h3>
                        <div className="usedSkills">
                            <p >JavaScript, HTML, CSS</p>
                        </div>
                        <p>Simple To Do List web app where the user can input the task, when it has to be done and color code it according to how important the task is. The app only has some 
                            basic functions because it was part of a school project and the task was to get to know how to use JavaScript. The web app was made at the start of the school year in fall of 2020 and it can be 
                            tested out <a href="https://susannastodolist.netlify.app/" target="_blank" rel="noreferrer">here</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;