import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="Header">
            <div className="header-container d-flex justify-content-between">
                <div className="d-flex justify-content-between pt-2">
                    <div>
                        <button onClick={showNavbar} className="nav-btn pt-2">
                            <FaBars />
                        </button>
                    </div>
                    <div>
                        <img src={logo} alt="logo" className="logo pt-3"/>
                    </div>
                    <nav ref={navRef} className="ms-5 pt-1">
                        <a href="/#">Collections</a>
                        <a href="/#">Men</a>
                        <a href="/#">Women</a>
                        <a href="/#">About</a>
                        <a href="/#">Contact</a>
                        <button onClick={showNavbar} className="nav-btn nav-close-btn">
                            <FaTimes />
                        </button>
                    </nav>
                </div>
                <div className="cart-avatar d-flex justify-content-between pt-4 me-lg-4">
                    <div>
                        <img src={cart} alt="cart" />
                    </div>
                    <div>
                        <img src={avatar} alt="avatar" className="avatar ms-3"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;