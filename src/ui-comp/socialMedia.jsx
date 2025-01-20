import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Social Media Icons Component
const SocialMediaIcons = () => {
  return (
    <div className="wrapper">
      <a href="#" className="button">
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
        </div>
        <span>Facebook</span>
      </a>
      <a href="#" className="button">
        <div className="icon">
          <i className="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </a>
      <a href="#" className="button">
        <div className="icon">
          <i className="fab fa-linkedin"></i>
        </div>
        <span>Linkedin</span>
      </a>
      <a href="#" className="button">
        <div className="icon">
          <i className="fab fa-youtube"></i>
        </div>
        <span>YouTube</span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
