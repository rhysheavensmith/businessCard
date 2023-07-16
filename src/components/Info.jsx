import React from "react";
import "../styles/infoStyles.css";
import mailIcon from "../assets/Mail.png";
import linkedIn from "../assets/linkedIn.png";

export default function Info() {
  return (
    <div className="info-section">
      <div className="profile-img"></div>
      <h1>Elon Musk</h1>
      <h4>Inventor</h4>
      <p>Elon.SpaceEx</p>
      <div className="contact-buttons">
        <button className="email">
          <img className="email-icon" src={mailIcon} alt="mail" />
          Email
        </button>
        <button className="linkedIn">
          <img src={linkedIn} alt="linkedIn" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
