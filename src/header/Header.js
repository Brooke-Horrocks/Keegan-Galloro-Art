import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Link className="home-link" to="/">
            <h1 id="header-component">
                Keegan Galloro  
            </h1>
        </Link>
    )
}

export default Header;