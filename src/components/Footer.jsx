import React from "react";
import gitHub from "../assets/GitHub Icon.png";
import insta from "../assets/Instagram Icon.png";
import twitter from "../assets/Twitter Icon.png";
import faceBook from "../assets/Facebook Icon.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src={gitHub} alt="gitHub" />
      <img src={insta} alt="insta" />
      <img src={twitter} alt="twitter" />
      <img src={faceBook} alt="faceBook" />
    </div>
  );
}
