import React from "react"
import pic from "../icons/FitIn_logo.png"
import { Link } from "react-router-dom"

export default function TopSection(){
    return(
        <div className="dbc--TopSection">
            <Link className="home--link" to="/">
                <img src={pic} alt="Profile" className="fitin-logo"/>
            </Link>
        </div>
    )
}