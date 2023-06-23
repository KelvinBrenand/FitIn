import React from "react";
import "./styles/feed.css"
import "./styles/general.css"
import "./styles/header.css"
import "./styles/profile-card.css"
import "./styles/recommendations-card.css"
import Top from "./components/Top";
import ProfileCard from "./components/ProfileCard";
import Feed from "./components/Feed";
import RecommCard from "./components/RecommCard";


export default function Home(){
    return(
        <div className="home---container">
            <Top />
            <ProfileCard />
            <Feed />
            <RecommCard/>
        </div>
    )
}