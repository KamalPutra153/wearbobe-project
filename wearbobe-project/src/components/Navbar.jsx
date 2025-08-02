import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <a href="#" className="nav-item home">HOME</a>
                    <a href="#" className="nav-item koleksi">KOLEKSI TOPI</a>
                </div>
                
                <div className="logo">
                    <div className="logo-circle">
                        <span className="logo-text">WC</span>
                    </div>
                    <div className="brand-name">WEARBOBE & CO</div>
                    <div className="tagline">EST 2015</div>
                    <div className="tagline">EXPRESSING YOURSELF</div>
                </div>

                <div className="nav-right">
                    <a href="#" className="nav-item sejarah">SEJARAH</a>
                    <a href="#" className="nav-item kolaborasi">KOLABORASI</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;