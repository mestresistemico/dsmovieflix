import React, { useEffect, useState } from 'react';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import { Link, useLocation } from 'react-router-dom';
import menu from 'core/assets/images/menu.svg';
import './styles.scss';

const Navbar = () => {
    const [drawerActive, setDrawerActive] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);


    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="nav-logo-text">
                <h4>
                    MovieFlix
                </h4>
            </Link>
            <button
                className="menu-mobile-btn"
                type='button'
                onClick={() => setDrawerActive(!drawerActive)}>
                <img src={menu} alt="Mobile Menu" />
            </button>
            <div className={drawerActive ? "menu-mobile-container" : "menu-container"}>
                <ul className="main-menu">
                    {drawerActive && (
                        <li>
                            <a href='#logout'
                                className='nav-link active d-inline'
                                onClick={(e) => {
                                    setDrawerActive(false);
                                    handleLogout(e);
                                }}>
                                SAIR
                                </a>
                        </li>

                    )}
                </ul>
            </div>
            <div className='user-info-dnone text-right'>
                {currentUser &&
                    <button
                        type="button"
                        className="btn btn-outline-dark button-logout"
                        onClick={(e) => {
                            setDrawerActive(false);
                            handleLogout(e);
                        }}>
                        SAIR
                        </button>
                }
            </div>
        </nav>
    )
}

export default Navbar;