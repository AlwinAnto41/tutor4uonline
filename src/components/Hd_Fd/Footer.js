import React from "react";
import "./Fd.css";

import fb from "../../assets/img/footer/facebook.png";
import whatsapp from "../../assets/img/footer/whatsapp.png";
import yt from "../../assets/img/footer/youtube.png";

const Footer = () => {

  const handleExploreClick = () => {
    const sectionToScroll = document.getElementById("features-section");
    if (sectionToScroll) {
      window.scrollTo({
        top: sectionToScroll.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const HandleExploreTestimonials = () => {
    const sectionToScroll = document.getElementById("Testimonials-section");
    if (sectionToScroll) {
      window.scrollTo({
        top: sectionToScroll.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resources center</p>
            </a>
            <a href="/resource">
              <p> testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/resource">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>EXPLORE</h4>


            <a  onClick={handleExploreClick}>
              <p>Features</p>
            </a>

            
            <a href="/courses">
              <p> Courses</p>
            </a>
            <a onClick={HandleExploreTestimonials}>
              <p> Testimonials</p>
            </a>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>SOCIAL MEDIA</h4>
            <div className="socialmedia">
              <p>
                <a href="https://www.facebook.com/tutor4uonlinecom">
                  <img src={fb} alt="" />
                </a>
              </p>
              <p>
                <a href="https://api.whatsapp.com/send/?phone=6588190608&text&type=phone_number&app_absent=0">
                  <img src={whatsapp} alt="" />
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/@tutor4uonline438">
                  <img src={yt} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              ©{new Date().getFullYear()} Tutor4uOnline . All Rights Reserved
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
