import React from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import educationimage from "../../assets/img/welcom_img/education-image.jpg";

import "./welcome.css";

export const Welcome = () => {
  const handleExploreClick = () => {
    const sectionToScroll = document.getElementById("tutoring-section");
    if (sectionToScroll) {
      window.scrollTo({
        top: sectionToScroll.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="welcome-container">
      <div className="flex-container">
        <div className="image-container">
          <img
            src={educationimage}
            alt="Education Image"
          />
        </div>
        <div className="text-container">
          <h1 className="animate__animated animate__fadeInUp">
            Welcome to
            <br /> Tutor4uOnline
          </h1>
          <p>Empowering learners worldwide with <br /> personalized online tutoring</p>
          <button className="button" onClick={handleExploreClick}>
            Explore <SiAzuredataexplorer />
          </button>
        </div>
      </div>
    </div>
  );
};
