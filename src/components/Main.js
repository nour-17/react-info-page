import React from "react";

export const Main = props =>(
    <main className={props.darkMode?"darkMode":""}>
        <h1 className="main--title">Fun facts about <span>React</span></h1>
        <ul className="main--list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
