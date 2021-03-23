import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';
import './Header.css';

const Header = props => {
    let {
        user,
        isAuthenticate
    } = useContext(UserContext);

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

                {
                    user.userName && <li><Link to={`./profile/${user.userName}`}>{user.userName}</Link></li>
                }

                {
                    isAuthenticate || <Link to="/signup"><li className="auth">Login</li></Link>
                }
            </ul>
        </header>
    );
};

export default Header;