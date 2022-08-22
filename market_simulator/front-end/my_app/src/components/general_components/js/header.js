import React from "react";
import NavBar from "./navbar";
import NavBarItems from "./navbar_items";
import '../css/general_components.css';
function Header(props) {
    return (
        <div className="general-header horizontal-container">
        <h1>Finance App</h1>
        <NavBar navbarItems={NavBarItems} />
        
        </div>
    );
}
export default Header;