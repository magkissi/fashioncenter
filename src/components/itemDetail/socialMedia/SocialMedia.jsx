import React from "react";
import styles from "./socialMedia.module.css";

function SocialMedia({ mediaImage, mediaName }) {
  return (
    <div className={styles.social_media_logo}>
      <img src={mediaImage} alt={mediaName} />
    </div>
  );
}

export default SocialMedia;
