import "./Projects.css"

import {CgWebsite} from 'react-icons/cg'
import {FaGithub, FaCube, FaNodeJs} from 'react-icons/fa'
import {SiCsswizardry} from 'react-icons/si'

import guestbook from '../img/Guestbook.PNG'
import guestbookmessages from '../img/Guestbookmessages.PNG'
import guestbooknewmessage from '../img/Guestbooknewmessage.PNG'

function Guestbook () {
    return (
        <div>
            <div className="project-content">
                <div className="header-with-links">
                    <h2>Guestbook</h2>
                    <div className="project-links">
                        <a href="http://guestbookbysusanna.herokuapp.com/" rel="noreferrer" target="blank_">
                            <CgWebsite size={20}/>
                        </a>
                        <a href="https://github.com/Lesuz/Guestbook" rel="noreferrer" target="blank_">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                </div>
                <p>
                    The guestbook displays messages which are saved on a local json file. It will display the message, 
                    and the username and country of the one who left the message. A new message can be added 
                    filling in the form on the New Message -page, which can be found in the navigation on top of this page.  
                </p>
                <h4>Used skills:</h4>
                <ul className="project-skill-list">
                    <li><FaNodeJs size={25}/>Node.js</li>
                    <li><FaCube size={25} />Express</li>
                    <li><SiCsswizardry size={25}/>CSS</li>
                </ul>
                <h3>The Process</h3>
                <h4>The Layout</h4>
                <p>
                    I started with sketching out my idea of what the app should look like. Since this was part of a 
                    school project, I first filled different pages with the requirements and after that added my own styling and content ideas. 
                </p>
                <p>
                    I knew what I wanted on the homepage, so I quickly put the right content on to the page, no <em>lorem ipsum</em> needed. 
                </p>
                <div className="project-picture">
                    <img src={guestbook} alt="app design"></img>
                    <p>Homepage</p>
                </div>
                <p>
                    The homepage is quite simple. It shows the requirements for the project and has a simple navigation which is easy to use. 
                </p>
                <div className="project-picture">
                    <img src={guestbookmessages} alt="app design"></img>
                    <p>Messages -page</p>
                </div>
                <p>
                    The messages -pages loads a local json file and displayes it nicely. The data cannot be delete, unless the original local file is edited. 
                    After the user adds their own message on the "new message" -page, they are redirected onto this page and the new message can be seen. After some 
                    time the new message will dissapear(when page is fully reloaded) since it is reading the data from a local file, but not really updating it.
                </p>
                <div className="project-picture">
                    <img src={guestbooknewmessage} alt="app design"></img>
                    <p>Add a new message -page</p>
                </div>
                <p>
                    When adding a new message, three fields must be filled; username, country and message. When trying to submit 
                    the message while a field is empty, it will give an error message, it will not filter what is input.
                </p>
                <p>
                    The fourth page, AJAX message has the same point as the new message -page. It was required for this project and shows a different way to 
                    add data onto a local file. 
                </p>
            </div>
        </div>
    )
}

export default Guestbook;