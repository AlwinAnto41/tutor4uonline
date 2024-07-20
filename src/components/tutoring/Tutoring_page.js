import React, { useEffect, useRef } from "react";
import Tutorimg from "../../assets/img/tutoring/tutoring.jpg";
import "./tutoring_page.css";

const Tutoring_page = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.querySelectorAll("h1, p");
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    textElements.forEach(element => {
      observer.observe(element);
    });

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      textElements.forEach(element => {
        observer.unobserve(element);
      });
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <section id="tutoring-section">
      <div className="tutoring-container">
        <div className="tutoring-text" ref={textRef}>
          <h1>Personalized tutoring</h1>
          <p>
            Tutor4uOnline is a dedicated online teaching platform that offers both
            one-on-one and group online classes for students of all grades. Our
            experienced teachers provide personalized training, tailoring their
            approach to each student's capabilities. With our platform, students
            receive individualized attention and support, ensuring a comprehensive
            and effective learning experience.
          </p>
        </div>
        <div className="tutoring-image" ref={imageRef}>
          <img src={Tutorimg} alt="tutoring" />
        </div>
      </div>
    </section>
  );
};

export default Tutoring_page;
