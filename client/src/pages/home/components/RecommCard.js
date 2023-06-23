import React from "react";
import feed from "../page-icons/feed-icon.svg"
import ufpb from "../profile-images/ufpb.jpg"
import plus from "../page-icons/plus-icon.svg"
import raoni from "../profile-images/raoni.jpg"
import camila from "../profile-images/camila.jpg"
import arrow from "../page-icons/right-icon.svg"

export default function RecommCard(){
    return(
    <div className="recommendations-card-area">
      <div className="recommendations-card">
        <div className="top-recommendations-text">Add to your feed <img className="feed-icon" src={feed} alt=""/></div>
        <div className="recomendation-option">
          <img  className="recom-pic" src={ufpb} alt=""/>
          <div className="recommendation-option-texts">
            <div className="name">Universidade Federal da Paraíba</div>
            <div className="description">Higher Education</div>
            <button className="follow-button"><div className="plus-icon-div"><img className="plus-icon" src={plus} alt=""/></div> Follow</button>
          </div>
        </div>

        <div className="recomendation-option">
          <img className="recom-pic" src={raoni} alt=""/>
          <div className="recommendation-option-texts">
            <div className="name">Raoni Kulesza</div>
            <div className="description">Professor at UFPB</div>
            <button className="follow-button"><div className="plus-icon-div"><img className="plus-icon" src={plus} alt=""/></div> Follow</button>
          </div>
        </div>

        <div className="recomendation-option">
          <img className="recom-pic" src={camila} alt=""/>
          <div className="recommendation-option-texts">
            <div className="name">Camila Gehrke</div>
            <div className="description">Researcher and Adjunct professor at UFPB</div>
            <button className="follow-button"><div className="plus-icon-div"><img className="plus-icon" src={plus} alt=""/></div> Follow</button>
          </div>
        </div>
        <button className="bottom-recommendations-text"> View all recommendations<div className="plus-icon-div"><img className="right-arrow" src={arrow} alt=""/></div></button>
      </div>
    </div>
    )
}