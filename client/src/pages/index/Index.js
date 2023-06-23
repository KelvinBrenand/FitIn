import React from "react";
import Top from "./components/Top.js";
import WelcomeText from "./components/WelcomeText.js";
import Bottom from "./components/Bottom.js";
import "./style.css"

export default function Index(){
    return(
        <div className="home--container">
            <Top />
            <WelcomeText />
            <Bottom />
        </div>
    )
}