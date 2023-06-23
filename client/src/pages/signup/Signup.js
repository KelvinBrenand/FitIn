import React from "react";
import TopSection from "./components/TopSection.js"
import BottomSection from "./components/BottomSection.js"
import Footer from "./components/Footer.js"
import "./style.css"

export default function Signup(){
    return(
        <div className="dbc--main-div">
            <div className="dbc--container">
                <TopSection />
                <BottomSection />
                <Footer />
            </div>
        </div>
    )
}