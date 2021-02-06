import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="app-header">
            <div className="app-header-logo">
                <h1>SUSANNA HÄMÄLÄINEN</h1>
            </div>
            <div className="app-header-menu">
                <ul>
                    <li>
                        <a href="#aboutme-header">About Me</a>
                    </li>
                    <li>
                         <a href="#skills-header">Skills</a>
                    </li>
                    <li>
                        <a href="#projects-header">Projects</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;