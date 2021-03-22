import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
    let {active} = props;
    return (
        <header>
            <h1>Arubian Tickets</h1>

            <ul>
                
                <li className={active === 'home' ? 'active':'normal'}>
                    <Link to="/">Home</Link>
                </li>

                <li className={active === 'destination' ? 'active' : 'normal'}>
                    <Link to="/destination">Destination</Link>
                </li>

                <li className={active === 'contact' ? 'active' : 'normal'}>
                    <Link to="/contact">Contact</Link>
                </li>


                <Link to="/login">
                    <li className="auth">Login</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;