import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Social Media Icons Component
const SocialMediaIcons = () => {
  return (
    <div className="wrapper">
      <a href="https://www.facebook.com/uicmmmut/" target="_blank" className="button">
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
        </div>
        <span>Facebook</span>
      </a>
      <a href="https://www.instagram.com/uicmmmut/?hl=en" target="_blank" className="button">
        <div className="icon">
          <i className="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </a>
      <a href="https://in.linkedin.com/company/uicmmmut" target="_blank" className="button">
        <div className="icon">
          <i className="fab fa-linkedin"></i>
        </div>
        <span>Linkedin</span>
      </a>
      <a href="https://www.youtube.com/@uicmmmut/videos" target="_blank" className="button">
        <div className="icon">
          <i className="fab fa-youtube"></i>
        </div>
        <span>YouTube</span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
