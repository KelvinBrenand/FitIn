import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../profile-images/profile-background.png"
import eu from "../profile-images/eu.jpg"
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/Button";

export default function ProfileCard(){
  const { signout } = useAuth();
  const navigate = useNavigate();

    return(
    <div className="profile-card-area">
        <div className="profile-card">
          <div className="top-profile-card">
            <div><img className="profile-background" src={background} alt=""/></div>
            <div><img className="profile-pic" src={eu} alt=""/></div>
            <div className="profile-name">Kelvin Brenand</div>
            <div className="profile-card-description">
              <div className="description-lines">Student at</div>
              <div className="description-lines" >Universidade Federal da Paraíba</div>
            </div>
            <div className="Divdivlogout">
              <div className="LogoutDiv">
                <Button Text="Log out" onClick={() => [signout(), navigate("/")]}>Sair</Button>
              </div>
            </div>
          </div>
          <div className="bottom-profile-card">
            <div className="bottom-texts">
              <div>Impressions of your post</div>
              <div className="count">600</div>
            </div>
            <div className="bottom-texts">
              <div className="connections">Connections</div>
              <div className="count">125</div>
            </div>
          </div>
        </div>
      </div>
    )
}