import React from 'react';

export default function Navbar() {
  return (
    <div>
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

            <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>
            
            {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                <li><a className="nav-link scrollto" href="#events">Events</a></li>
                <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                <li className="dropdown"><a href="/#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="/#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="/#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="/#">Deep Drop Down 1</a></li>
                        <li><a href="/#">Deep Drop Down 2</a></li>
                        <li><a href="/#">Deep Drop Down 3</a></li>
                        <li><a href="/#">Deep Drop Down 4</a></li>
                        <li><a href="/#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Drop Down 2</a></li>
                    <li><a href="/#">Drop Down 3</a></li>
                    <li><a href="/#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

            </div>
        </header>
    </div>
  )
}
