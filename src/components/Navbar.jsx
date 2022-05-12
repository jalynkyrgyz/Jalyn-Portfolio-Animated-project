import React, {useState} from 'react';
import Button from './Button';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import "../styles/components/Navbar.scss";
import BrandName from './BrandName';

function Navbar() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const navbarToggler = () => {
        setToggleNavbar(!toggleNavbar);
    }
  return (
    <div className={`navbar ${toggleNavbar===true ? "active": ""}`}>
        <div className="col">
            <BrandName/>
            <div className="collapsable-button">
                {!toggleNavbar ? ( <GiHamburgerMenu onClick={navbarToggler}/>):(<MdClose onClick={navbarToggler} />)}
            </div>
        </div>
        <nav>
            <div className="links">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonial</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                    <li>
                        <Button content="Contact" />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar