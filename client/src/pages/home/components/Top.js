import React from "react";
import { Link } from "react-router-dom"
import fitin from "../header-icons/FitIn_logo2.png"
import magnifier from "../header-icons/search-icon.svg"
import homeIcon from "../header-icons/nav-home.svg"
import network from "../header-icons/nav-network.svg"
import event from "../header-icons/event-icon.svg"
import messaging from "../header-icons/nav-messaging.svg"
import notifications from "../header-icons/nav-notifications.svg"
import eu from "../profile-images/eu.jpg"

export default function Top(){
    return(
    <div className="home-header">
      <div className="home-left-section">
        <Link className="home-home--link" to="/home">
          <img className="home-fitin-logo" src={fitin} alt=""/>
        </Link>
      </div>
      <div className="home-middle-section">
        <input className="home-search-bar" type="text" placeholder="Search"/> 
        <img className="home-magnifier-icon" src={magnifier} alt=""/> 
      </div>
      <div className="home-right-section">
        <div className="home-search-bar-small"> <img className="home-magnifier-icon2" src={magnifier} alt=""/>
          <div className="home-header-text">Search</div>
        </div>
        <div className="home-home"> <img className="home-home-icon" src={homeIcon} alt=""/>
          <p className="home-home-text">Home</p>
          <div className="home-hline"></div>
        </div>
        
        <div className="home-my-network"> <img className="home-my-network-icon" src={network} alt=""/>
          <div className="home-header-text">My Network</div>
        </div>
        <div className="home-events"> <img className="home-events-icon" src={event} alt=""/>
          <div className="home-header-text">Events</div>
        </div>
        <div className="home-messaging"> <img className="home-messaging-icon" src={messaging} alt=""/>
          <div className="home-header-text">Messaging</div>
        </div>
        <div className="home-notifications"> <img className="home-notifications-icon" src={notifications} alt=""/>
          <div className="home-header-text">Notifications</div>
        </div>
        <div className="home-me"> <img className="home-me-icon" src={eu} alt=""/>
          <div>Me &#9660;</div>
        </div>
      </div>
    </div>
    )
}