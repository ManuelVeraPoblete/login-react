import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
