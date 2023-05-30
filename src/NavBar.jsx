import React from "react";
import "./styles.css";

const NavBar = () => {
    return(
        <nav className="nav">
            <a href="/" className="site-title">Mikkels Movies Reviews</a>
            <ul>
                <li className="active">
                    <a href="/reviews">Reviews</a>
                </li>
                <li>
                    <a href="/list">List</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;