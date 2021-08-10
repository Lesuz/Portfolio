import "./Projects.css"

import {CgWebsite} from 'react-icons/cg'
import {FaGithub, FaCube, FaNodeJs, FaReact} from 'react-icons/fa'
import {SiCsswizardry, SiMongodb} from 'react-icons/si'

import dinocollection from '../img/DinosaurCollection.PNG'
import mongoconnect from '../img/MongooseConnection.PNG'
import schema from '../img/Schema.PNG'
import worldofdinosaurs from '../img/WorldOfDinosaurs.PNG'
import searchfilter from '../img/SearchFilter.PNG'

function WorldOfDinosaurs () {
    return (
        <div>
            <div className="project-content">
                <div className="header-with-links">
                    <h2>World of Dinosaurs</h2>
                    <div className="project-links">
                        <a href="https://worldofdinosaurs.netlify.app/" rel="noreferrer" target="blank_">
                            <CgWebsite size={20}/>
                        </a>
                        <a href="https://github.com/Lesuz/World-of-Dinosaurs" rel="noreferrer" target="blank_">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                </div>
                <p>
                This project is two parts, part one is making the API and part two is making a website to display the 
                            information available in the API. 
                </p>
                <h4>Used skills:</h4>
                <ul className="project-skill-list">
                    <li><FaReact size={25}/>React</li>
                    <li><SiMongodb size={25} />MongoDB</li>
                    <li><FaNodeJs size={25}/>Node.js</li>
                    <li><FaCube size={25} />Express</li>
                    <li><SiCsswizardry size={25}/>CSS</li>
                </ul>
                <h3>The Process</h3>
                <h4>Making the API</h4>
                <p>
                    First I needed an API.
                </p>
                <p>
                    Before this I had wondered how to make an API, and I could not find a suitable way to do it from the internet. Luckily I attended a MERN stack course, from which this 
                    project is a part of, and learned to do it in a way I had wanted to before.
                </p>
                <p>
                    I already knew what kind of an API I wanted, since I had been planning making a specific app for a friend, but could not find an API for it.
                </p>
                <p>The API in question is supposed to be having information on dinosaurs, for a start I thought about including some basic information only, but for now, it only has the name of the dinosaur, and some description a friend of mine added to it.</p>
                <p> 
                    The API is made using MongoDB, since it is a part of the MERN stack. This was my first time working with this database. Before this I have only played around with mySQL as part of another course.
                </p>
                <p>
                    First I added the data into the database using the interface MongoDB provides. I put the name of the dinosaurs and a description, into a document, and the document into a collection. The database might contain more collections if I build this project to be bigger.
                </p>
                <div className="project-picture">
                    <img src={dinocollection} alt="app design"></img>
                    <p>Collection in MongoDB</p>
                </div>
                <p>
                    After having some data to play with, I needed to start coding the server side so that the database can be used like an API.
                </p>
                <p>
                    First a connection must be made to the database. For this I used mongoose. With mongoose I first establish a connection using env files, which have the data needed, such as password and username, to connect to the database. 
                </p>
                <div className="project-picture">
                    <img src={mongoconnect} alt="app design"></img>
                    <p>Connecting to MongoDB with Mongoose</p>
                </div>
                <p>
                    Next I made a schema to represent what kind of data must and can be saved into the database. Since this was a part of a school project, and there wasn't a lot of time to do this, I only have two things that must be input, dino and info.
                </p>
                <div className="project-picture">
                    <img src={schema} alt="app design"></img>
                    <p>Database schema</p>
                </div>
                <p>
                    Next are the possible routes, or better said, different data packages that can be taken from the database.
                </p>
                <p>
                    Some basic routes are <i>getall, searchword, update, add and delete</i>.
                </p>
                <ul>
                    <li><i>getall</i>- will give all the available data in json format.</li>
                    <li><i>searchword</i>- will take whatever the user input and look for it in the database.</li>
                    <li><i>update</i>- can be used to update the information on a dinosaur, but the id is needed.</li>
                    <li><i>add</i>- to add to the database using the schema to give the name and some information of the dinosaur.</li>
                    <li><i>delete</i>- used to delete documents from the collection.</li>
                </ul>
                <h4>World of Dinosaurs</h4>
                <p>
                    This website is not done, it is still in the process of becoming the website I had planned. At the moment it is only what what required in the course.
                </p>
                <p>At the moment the website gets all the dinosaurs and their description. I plan on adding more info on them and possibly a picture too.</p>
                <div className="project-picture">
                    <img src={worldofdinosaurs} alt="app design"></img>
                    <p>Dinosaurs shown on the website</p>
                </div>
                <p>
                    The search bar can be used to search for a specific dinosaur by their name. The search bar filters the name, which helps the user if they don't remember the name fully.
                </p>
                <div className="project-picture">
                    <img src={searchfilter} alt="app design"></img>
                    <p>Dinosaurs shown on the website</p>
                </div>
                <p>
                    In the picture above, you can see that the filter looks for the searchword from the whole name of the dinosaur, not just the beginning.
                </p>
                <h3>The Future of the Website</h3>
                <p>Some future features I have planned for this website are:</p>
                <ul>
                    <li>Recommend scientific articles about the dinosaur</li>
                    <li>Informative videos about the dinosaur</li>
                    <li>Picture of dinosaur</li>
                    <li>Easy to use on mobile</li>
                </ul>
                <p>I also plan on designing the UI to something completely new. I do not have any plans on when I will be implementing these updates.</p>
            </div>
        </div>
    )
}

export default WorldOfDinosaurs;