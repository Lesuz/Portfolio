
import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
    return (
        <footer className="app-footer">
            <div className="app-socialmedia">
                <a href="https://github.com/Lesuz?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/susanna-h%C3%A4m%C3%A4l%C3%A4inen-81557616b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
            &copy; Copyright 2021 Susanna Hämäläinen
        </footer>
    )
}
export default Footer;