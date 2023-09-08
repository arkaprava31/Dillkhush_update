import React from "react";

function Nav_1() {
    return (
        <header>
        <nav>
            <div className="container">
                <div className="logo">
                    <img src="images/logo.png" alt="logo"/>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className="but">
                    <button>Get Started</button>
                </div>
            </div>
        </nav>
    </header>
    );
  }
  
  export default Nav_1;