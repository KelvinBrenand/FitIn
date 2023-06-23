import React from "react";
import { Link } from "react-router-dom"
import fitin from "../header-icons/FitIn_logo.png"
import discover from "../header-icons/discover.svg"
import people from "../header-icons/nav-network.svg"
import learning from "../header-icons/share-video.svg"
import events from "../header-icons/event-icon.svg"

export default function Top(){
    return(
        <div className="header">
        <div className="left-section">
          <Link className="home--link" to="/">
            <img className="fitin-logo" src={fitin} alt="FitIn logo"/>
          </Link>
        </div>
        <div className="right-section">
          <div className="subsection1">
            <div className="discover-div">
              <img className="discover-icon" src={discover} alt=""/>
              <p>Discover</p>
            </div>
            <div className="people-div">
              <img className="people-icon" src={people} alt=""/>
              <p>People</p>
            </div>
            <div className="learning-div">
              <img className="learning-icon" src={learning} alt=""/>
              <p>Learning</p>
            </div>
            <div className="events-div">
              <img className="events-icon" src={events} alt=""/>
              <p>Events</p>
            </div>
            <div className="vline">
            </div>
          </div>
          <div className="subsection2">
            <Link className="home--link" to="/signup">
              <button className="join-now-button">Join now</button>
            </Link>
            <Link className="home--link" to="/">
              <button className="sign-in-button">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    )
}