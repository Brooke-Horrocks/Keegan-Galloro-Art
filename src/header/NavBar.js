import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link class="link" to="/">Home</Link>
            <Link class="link" to="/art">Art</Link>
            <Link class="link" to="/events">Events</Link>
            <Link class="link" to="/contact">Contact</Link>
        </nav>
    )
}

export default NavBar;