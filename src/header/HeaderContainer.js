import React from "react";

import Header from './Header';
import NavBar from './NavBar';

function HeaderContainer() {
    return (
        <div className="header-container">
            <Header />
            <NavBar />
        </div>
    )
}

export default HeaderContainer;