import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <section className='navbar-container'>
        <nav className="navbar container">
            <Link className="navbar-brand" to="/">
                Mr.BitCoin
            </Link>

            <div className="link-list" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/">
                        <img src={`./../../imgs/home.png`}  /> 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                        <img src={`./../../imgs/team.png`}  />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/statistic">
                            <img src={`./../../imgs/statistics.png`}  />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </section>
    );
};

export default NavBar;
