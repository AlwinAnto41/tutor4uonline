import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./youtubepage.css";

function YoutubePage() {
  return (
    <div className="youtube-page">
      <div className="youtube-head">
        <h2>Check out a few of our FREE Video Lessons</h2>
      
      <a href="https://www.youtube.com/@tutor4uonline438" className="youtube-link">
        <button>
          Subscribe
          <span>
            <FaLongArrowAltRight className="arrow" />
          </span>
        </button>
      </a>
      </div>
    </div>
  );
}

export default YoutubePage;
