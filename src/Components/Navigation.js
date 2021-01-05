import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons' ;
import {useTransition, animated} from 'react-spring';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)


    
    const maskTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 0.5, transform: 'translateX(0)' },
        leave: { opacity: 0 , transform: 'translateX(-100%)'},
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0 , transform: 'translateX(-100%)'},
    })
 


    return (
        <nav>
            <div className="app-header-navigation">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="app-navigation-menumask"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="app-navigation-menu"
                    >
                        
                        <div className="app-menu">
                            <div className="app-navigation-menu-header">
                                Menu
                            </div>
                            <ul className="app-navigation-list">
                                <li
                                    onClick={() => setShowMenu(false)}
                                >
                                    <a href="#landingpage-header">Home</a>
                                </li>
                                <li
                                    onClick={() => setShowMenu(false)}
                                >
                                    <a href="#aboutme-header">About Me</a>
                                </li>
                                <li
                                    onClick={() => setShowMenu(false)}
                                >
                                    <a href="#projects-header">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </animated.div>
                )
            }
        </nav>
    )
}
export default Navigation;