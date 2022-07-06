import React from "react";
import "./itemDetail.css";

function SocialMedia({ mediaImage, mediaName }) {
  return (
    <div className="social_media_logo">
      <img src={mediaImage} alt={mediaName} />
    </div>
  );
}

export default SocialMedia;
