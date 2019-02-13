import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import facebookIcon from "../assets/img/facebook.png";
import instaIcon from "../assets/img/insta.png";
import emailIcon from "../assets/img/email.png";

function NavBar() {
    return (
        <nav className="whole-navbar">
            <div className="social-media-navbar">
                <Button target="_blank" href="https://www.facebook.com/blynnnz">
                    <img className="social-media-icon" src={facebookIcon} alt=""/>
                </Button>
                <Button target="_blank" href="https://www.instagram.com/blynnnz/">
                    <img className="social-media-icon" src={instaIcon} alt=""/>
                </Button>
                <Button href="mailto:keegangalloro@gmail.com?subject=About Your Art">
                    <img className="social-media-icon" src={emailIcon} alt=""/>
                </Button>
            </div>
            <div className="page-navbar">
                <Link className="link" to="/art">PORTFOLIO</Link>
                <Link className="link" to="/bio">BIO</Link>
                <Link className="link" to="/contact">CONTACT</Link>
            </div>
        </nav>
    )
}

export default NavBar;