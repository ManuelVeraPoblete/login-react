import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCog, faLifeRing, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './NavigationMenu.css';

const NavigationMenu = ({ user }) => {
    console.log(user);
    return (
        <nav className="navigation-menu">
            {/* Sección de información del usuario */}
            <div className="user-info">
                {user ? (
                    <>
                        <img src={user.picture} alt="User" className="user-photo" />
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-email">{user.email}</p>
                    </>
                ) : (
                    <p>Cargando usuario...</p>
                )}
            </div>

            {/* Menú de navegación */}
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
