import React from "react";
import reactLogo from "../images/react-icon-small.png"

export const Header = _ => (
    <nav id="nav">
        <img 
            src={reactLogo}
            alt="react-logo"
            className="nav--icon"
        />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <input type="checkbox" className="checkbox" name="checkbox" id="checkbox"/>
        <label className="label" htmlFor="checkbox">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
            <div className="ball"></div>
        </label>    
    </nav>
)