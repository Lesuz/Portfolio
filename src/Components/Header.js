import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="app-header">
            <div className="app-header-logo">
                <p>SUSANNA <br />
                HÄMÄLÄINEN</p>
            </div>
            <Navigation />
        </header>
    )
}
export default Header;