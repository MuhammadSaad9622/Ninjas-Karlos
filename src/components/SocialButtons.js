import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// Import your OpenSea icon here if you have it
import "./socialButtons.css";
const SocialButtons = () => {
  return (
    <div className="button-container">
      <a href="https://twitter.com/fGreenLabs">
        <button className="twitter-button">
          <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "5px" }} />
          Twitter
        </button>
      </a>
      <button className="opensea-button">
        {/* Add your OpenSea icon here */}
        <img
          src="https://static.wixstatic.com/media/d7e659_57d1f0ec5d3d4bd59bdc0436b42dbe19~mv2.png/v1/fill/w_88,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7e659_57d1f0ec5d3d4bd59bdc0436b42dbe19~mv2.png"
          alt="OpenSea Icon"
          style={{ width: "90px", height: "24px", marginRight: "5px" }}
        />
      </button>
    </div>
  );
};

export default SocialButtons;
