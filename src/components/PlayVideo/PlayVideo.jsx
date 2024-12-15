import React from "react";
import "./PlayVideo.css";
import { ThumbUp, ThumbDown, Send } from "@mui/icons-material";

const PlayVideo = ({videoId,categoryId}) => {
                            
  return (
    <div className="video-container">
      {/* Video Player */}
      <div className="video-player">
        <iframe
          width="966"
          height="543"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}               
          title="CARRY KI SHAADI 😭 | Q&amp;A 2024 CARRYMINATI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Info */}
      <div className="video-info">
        <h1 className="video-title">Hey.. long time no see</h1>
        <p className="video-stats">10M Views • 2 days ago</p>

        {/* Channel Info */}
        <div className="channel-info">
          <img
            src="https://via.placeholder.com/50" /* Replace with channel image */
            alt="Channel Avatar"
            className="channel-avatar"
          />
          <div className="channel-details">
            <h2 className="channel-name">CoryxKenshin</h2>
            <p className="channel-subs">19M Subscribers</p>
          </div>
          <button className="subscribe-button">Subscribe</button>
        </div>

        {/* Video Description */}
        <p className="video-description">
          I've been working.. for so long... A NEW MANGA EMERGES.{" "}
          <a href="https://monsterswemake.com">https://monsterswemake.com</a>{" "}
          Animation by:{" "}
          <a href="https://www.youtube.com/@UCJXrk...">YouTube Link</a> Directed
          by: <a href="https://instagram.com/librabear/">Instagram</a>
        </p>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <div className="comment-input">
          <input
            type="text"
            placeholder="Add a comment..."
            //   value={newComment}
          />
          <button>
            <Send />
          </button>
        </div>

        <div className="comments-list">
          <div className="comment">
            <p>Hello this is my comment</p>
            <div className="comment-actions">
              <button className="action-button">
                <ThumbUp /> 6 likes
              </button>
              <button className="action-button">
                <ThumbDown /> 5 Dislikes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
