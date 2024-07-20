import React, { useEffect, useRef } from "react";
import "./featuresPage.css"; // Import your CSS file for styling
import LiveClass from "../../assets/img/feg/liveclass.png";
import one_one from "../../assets/img/feg/one_one.png";
import groupclase from "../../assets/img/feg/groupclase.png";
import Screen from "../../assets/img/feg/screen.png";
import Parent from "../../assets/img/feg/parents.png";
import LearningPlans from "../../assets/img/feg/LearningPlans.png";

function FeaturesPage() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const features = featuresRef.current.querySelectorAll(".feature");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    features.forEach(feature => {
      observer.observe(feature);
    });

    return () => {
      features.forEach(feature => {
        observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <div className="features-page" ref={featuresRef}>
      <div className="feature">
        <img src={LiveClass} alt="Interactive Live Classes" />
        <h2>01</h2>
        <div>
          <h3>Interactive Live Classes</h3>
          <div className="features-pgf">
            <p>
              Conduct real-time interactive classes with video, audio, and chat
              capabilities for effective communication between teachers and
              students.
            </p>
          </div>
        </div>
      </div>
      <div className="feature">
        <img src={one_one} alt="One-on-One Tutoring" />
        <h2>02</h2>
        <div className="features-pgf">
          <div>
            <h3>One-on-One Tutoring</h3>
            <p>
              Offer personalized one-on-one tutoring sessions where students can
              get individual attention and tailored learning experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="feature">
        <img src={groupclase} alt="Group Classes" />
        <h2>03</h2>
        <div>
          <h3>Group Classes</h3>
          <div className="features-pgf">
            <p>
              Organize group classes where multiple students can participate in
              the same session, promoting collaborative learning and group
              discussions.
            </p>
          </div>
        </div>
      </div>
      <div className="feature">
        <img src={Screen} alt="Screen Sharing and Whiteboards" />
        <h2>04</h2>
        <div>
          <h3>Screen Sharing and Whiteboards</h3>
          <div className="features-pgf">
            <p>
              Enable screen sharing and digital whiteboards to facilitate visual
              learning, allowing teachers to explain concepts using diagrams,
              illustrations, and multimedia resources.
            </p>
          </div>
        </div>
      </div>
      <div className="feature">
        <img src={Parent} alt="Parent-Teacher Communication" />
        <h2>05</h2>
        <div>
          <h3>Parent-Teacher Communication</h3>
          <div className="features-pgf">
            <p>
              Facilitate communication between parents and teachers, allowing
              parents to track their child's progress and discuss their academic
              performance.
            </p>
          </div>
        </div>
      </div>
      <div className="feature">
        <img src={LearningPlans} alt="Customized Learning Plans" />
        <h2>06</h2>
        <div>
          <h3>Customized Learning Plans</h3>
          <div className="features-pgf">
            <p>
              Create personalized learning plans based on students' strengths,
              weaknesses, and learning goals, tailoring the curriculum to
              individual needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
