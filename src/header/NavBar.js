import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/art">Art</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default NavBar;