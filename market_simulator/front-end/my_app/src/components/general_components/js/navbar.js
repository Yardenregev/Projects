import React from "react";
import '../css/general_components.css';
import {Link} from "react-router-dom";
function Navbar(props) {
    // navbar is a component that is used to display the navbar at the top of the page.

    const loginNavbarHandler = () => {
        // make the rest of the page unclickable while the login form is open.
        document.body.style.pointerEvents = "none";
        document.getElementById("login-popup").style.display = "block";
        document.getElementById("login-popup").style.pointerEvents = "auto";
    }

    return (
        <div className="navbar horizontal-container">
            {props.navbarItems.map((item, index) => {
                if (item.name === "Log in") {
                    return (
                    <div className="navbar-item" id="login-navbar-item" key={index} onClick={loginNavbarHandler}>
                        {item.name}
                    </div>
                    );
                }
                else {

                return (
                    <Link className="navbar-item" key={index} to={item.to}>
                        {item.name} 
                    </Link>
                )
                };
            }
            )}
        </div>
    );
}

export default Navbar;