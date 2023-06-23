import React from "react";
import eu from "../profile-images/eu.jpg"
import photo from "../page-icons/photo-icon.svg"
import video from "../page-icons/video-icon.svg"
import event from "../page-icons/event-icon.svg"
import article from "../page-icons/article-icon.svg"
import ewerton from "../profile-images/ewerton.jpg"
import elipses from "../page-icons/ellipses.svg"
import like from "../page-icons/like-icon.svg"
import comment from "../page-icons/comment-icon.svg"
import repost from "../page-icons/repost-icon.svg"
import send from "../page-icons/send-icon.svg"
import yuska from "../profile-images/yuska-chan.jpg"
import corrida from "../post-images/corrida.jpg"

export default function Feed(){
    return(
    <div className="feed">
        <div className="post-creator">
            <div className="post-top-section">
                <img className="post-me-icon" src={eu} alt=""/>
                <div className="post-box-div">
                    <input className="post-box" type="text" placeholder="Start a post"/>
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-post-elements-div">
                    <img className="photo-icon" src={photo} alt=""/>
                    &nbsp; 	&nbsp; Photo
                </div>
                <div className="bottom-post-elements-div">
                    <img className="video-icon" src={video} alt=""/>
                    &nbsp; 	&nbsp; Video
                </div>
                <div className="bottom-post-elements-div">
                    <img className="events-icon2" src={event} alt=""/>
                    &nbsp; 	&nbsp; Event
                </div>
                <div className="bottom-post-elements-div">
                    <img className="article-icon" src={article} alt=""/>
                    &nbsp; 	&nbsp; Write article
                </div>
            </div>
        </div>
        <div className="post">
        <div className="recomendation-option" id="post1">
          <img className="recom-pic" src={ewerton} alt=""/>
          <div className="recommendation-option-texts">
            <div className="name">Ewerton Salvador</div>
            <div className="description" id="description-profile-post">Professor at UFPB</div>
            <div className="description" id="description-profile-post">1d &#183; &#127758;</div>
          </div>
        </div>
        <div className="post-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, purus quis interdum porta, nibh lacus ullamcorper nunc, a sodales eros dui ac odio. Aenean eget enim est. Nullam massa dui, efficitur at diam venenatis, maximus euismod nunc. Curabitur condimentum blandit nisi quis ullamcorper. Pellentesque tincidunt, justo nec euismod auctor.</div>
        <img className="ellipses" src={elipses} alt=""/>

        <div className="post-stats">
          <div className="description"><span className="likes-count">1,493 likes</span></div>
          <div className="description"><span className="comments-count">162 comments</span> &#183; <span className="reposts-count">16 reposts</span></div>
          <div className="hline-post"></div>
        </div>

        <div className="bottom-section" id="bottom-section2">
          <div className="bottom-post-elements-div2">
            <img className="like-icon" src={like} alt=""/>
            &nbsp; 	&nbsp; Like
          </div>

          <div className="bottom-post-elements-div2">
            <img className="comment-icon" src={comment} alt=""/>
            &nbsp; 	&nbsp; Comment
          </div>

          <div className="bottom-post-elements-div2">
            <img className="repost-icon" src={repost} alt=""/>
            &nbsp; 	&nbsp; Repost
          </div>

          <div className="bottom-post-elements-div2">
            <img className="send-icon" src={send} alt=""/>
            &nbsp; 	&nbsp; Send
          </div>
        </div>
      </div>

      <div className="post">
        <div className="recomendation-option" id="post1">
          <img className="recom-pic" src={yuska} alt=""/>
          <div className="recommendation-option-texts">
            <div className="name">Yuska Aguiar</div>
            <div className="description" id="description-profile-post">Professor Pesquisador na Universidade Federal da Paraíba</div>
            <div className="description" id="description-profile-post">1d &#183; &#127758;</div>
          </div>
        </div>
        <div className="post-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sagittis finibus. Curabitur bibendum libero eu condimentum dignissim. Aenean ac blandit erat. Aliquam suscipit sem.</div>
        <img className="ellipses" src={elipses} alt=""/>
        
        <img className="post-image" src={corrida} alt=""/>
        <div className="post-stats">
          <div className="description"><span className="likes-count">893 likes</span></div>
          <div className="description"><span className="comments-count">1,026 comments</span> &#183; <span className="reposts-count">611 reposts</span></div>
          <div className="hline-post"></div>
        </div>

        <div className="bottom-section" id="bottom-section2">
          <div className="bottom-post-elements-div2">
            <img className="like-icon" src={like} alt=""/>
            &nbsp; 	&nbsp; Like
          </div>

          <div className="bottom-post-elements-div2">
            <img className="comment-icon" src={comment} alt=""/>
            &nbsp; 	&nbsp; Comment
          </div>

          <div className="bottom-post-elements-div2">
            <img className="repost-icon" src={repost} alt=""/>
            &nbsp; 	&nbsp; Repost
          </div>

          <div className="bottom-post-elements-div2">
            <img className="send-icon" src={send} alt=""/>
            &nbsp; 	&nbsp; Send
          </div>
        </div>
      </div>
    </div>
    )
}