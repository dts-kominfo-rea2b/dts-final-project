import React from 'react';

export default function Navbar() {
  return (
    <div>
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

            <h1 className="logo me-auto me-lg-0"><a href="/home">PizzaFood</a></h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a href="/signin" className="book-a-table-btn scrollto d-none d-lg-flex">SignIn / SignUp</a>

            </div>
        </header>
    </div>
  )
}
