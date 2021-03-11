import "./Projects.css"

import coronaintheworld from '../img/CoronaInTheWorld.PNG'

import {CgWebsite} from 'react-icons/cg'
import {FaGithub, FaHtml5} from 'react-icons/fa'
import {SiCsswizardry, SiJavascript} from 'react-icons/si'

function CoronaInTheWorld () {
    return (
        <div>
            <div className="project-content">
                <div className="header-with-links">
                    <h2>Corona In The World</h2>
                    <div className="project-links">
                        <a href="https://coronaintheworld.netlify.app/" rel="noreferrer" target="blank_">
                            <CgWebsite size={20}/>
                        </a>
                        <a href="https://github.com/Lesuz/CoronaInTheWorld" rel="noreferrer" target="blank_">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                </div>
                <p>
                This web app allows the user to input name of a country and it will display how many 
                            covid cases there are to this date and how many cases there were for each month last year.
                </p>
                <h4>Used skills:</h4>
                <ul className="project-skill-list">
                    <li><SiJavascript size={25}/>JavaScript</li>
                    <li><FaHtml5 size={25}/>HTML</li>
                    <li><SiCsswizardry size={25}/>CSS</li>
                </ul>
                <h3>The Process</h3>
                <h4>Layout</h4>
                <p>
                    First I thought about what kind of information I want and what I could get from the COVID 19 API used in this project. And then I sketched 
                    some ideas onto paper. I don't remember if it was a requirement to use a table but I found it to be the best way to display 
                    the case amount for each month. The web app only shows the covid cases from the year 2020 because I wasn't designing the app to be run on the web, but 
                    it came out better than expected. While I was playing around with the UI, I used dummy data to figure out placements and sizes of different elements.
                </p>
                <div className="project-picture">
                    <img src={coronaintheworld} alt="app design"></img>
                    <p>App design in the end</p>
                </div>
                <p>
                    The end design does not match what I designed at first. This project was 
                    much easier than expected which meant I had more time to work on UI, and not just the 
                    needed functions. Of course there is still a lot thatn can be done to this web app to make 
                    it better. For example I still need to add a feature, where it makes sure that the wanted country 
                    exists and there is data about it.
                </p>
                <h4>The Content</h4>
                <p>
                    This was my first time using an API. I had some small problems at first, but got over them quite quickly. 
                    My first goal was to display the searched country and then its cases in total. I simply just saved the input value 
                    and displayed displayed it, forcing the first letter to be a capital one. Next I put the case amount in total under the name 
                    of the country. This was quite easy because the API I was using had the total amount of cases already calculated.
                </p>
                <p>
                    After getting the total amount of cases, I had to figure out how to display data from each month. The API didn't have the case amount for each 
                    month so I had to do the calculations myself. I used the substring() function to get the data from the last day of a month and then deduct it from the next month. 

                </p>
            </div>
        </div>
    )
}

export default CoronaInTheWorld;