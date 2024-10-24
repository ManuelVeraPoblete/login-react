import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCog, faLifeRing, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faChartBar} className="menu-icon" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} className="menu-icon" />
                        Settings
                    </Link>
                </li>
                <li>
                    <Link to="/help">
                        <FontAwesomeIcon icon={faLifeRing} className="menu-icon" />
                        Help
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
