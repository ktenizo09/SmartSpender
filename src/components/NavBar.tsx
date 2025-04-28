import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp, faCircleUser, faHome, faCalculator, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navigation-bar">
                <Link to="/" className="navbar-logo">
                    SmartSpender <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </Link>

                {/* <div className="menu-icon" onClick={handleClick}>
                        <i>{click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</i>
                    </div> */}
                <ul className='list'>
                    <li>
                        <Link to="/sign-in" className="nav-links" >
                            <FontAwesomeIcon icon={faCircleUser} /> Sign in</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links" >
                            <FontAwesomeIcon icon={faHome} /> Home</Link>
                    </li>
                    <li>
                        <Link to="/budget-calculator" className="nav-links" >
                            <FontAwesomeIcon icon={faCalculator} /> Budget Calculator</Link>
                    </li>
                    <li>
                        <Link to="/job-portal" className="nav-links">
                            <FontAwesomeIcon icon={faLinkedin} /> Job Portal</Link>
                    </li>
                    <li>
                        <Link to="/forum" className="nav-links">
                            <FontAwesomeIcon icon={faCalculator} /> Forum</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-links" >
                            <FontAwesomeIcon icon={faCircleInfo} /> About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-links" >
                            <FontAwesomeIcon icon={faPhone} /> Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
