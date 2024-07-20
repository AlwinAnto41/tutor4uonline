import React from "react";
import "./About.css";

import AboutImg from "../../assets/img/aboutimg/aboutimg.jpg";

const About = () => {
  return (
    <div className="aboutfullpage">
      <div className="about-container">
        <h2 className="about-title">About Tutor4UOnline</h2>
        <div className="about-section">
          <h3 className="section-title">Who We Are</h3>
          <p className="section-content">
            At Tutor4UOnline, we are more than just tutors; we are mentors
            igniting the spark of curiosity in young minds. Our online platform
            is a vibrant ecosystem of learning, where personalized education
            meets cutting-edge technology.
          </p>
        </div>
        <div className="about-section">
          <h3 className="section-title">Our Mission</h3>
          <p className="section-content">
            We believe in nurturing individual talents, fostering confidence,
            and unlocking the full potential of every student. Our mission is to
            redefine the learning experience, providing students with the tools
            and support they need to excel academically and beyond.
          </p>
        </div>
        <div className="about-section">
          <h3 className="section-title">Our Approach</h3>
          <p className="section-content">
            With a team of passionate educators, state-of-the-art resources, and
            a commitment to excellence, Tutor4UOnline is not just a tuition
            platform; it's a transformative educational journey. We utilize the
            latest in educational technology to create engaging, interactive,
            and personalized learning experiences that cater to the unique needs
            of each student.
          </p>
        </div>
        <div className="about-section">
          <img src={AboutImg} alt="imgabout" />
        </div>
        <div className="about-section">
          <h3 className="section-title">Why Choose Us</h3>
          <ul className="section-list">
            <li>
              Expert Educators: Our tutors are not only knowledgeable in their
              subject areas but are also dedicated mentors who inspire and
              motivate students.
            </li>
            <li>
              Personalized Learning: We tailor our teaching methods to fit each
              student's learning style, ensuring they get the most out of every
              session.
            </li>
            <li>
              Innovative Resources: Our platform offers a range of tools and
              materials designed to make learning both effective and enjoyable.
            </li>
            <li>
              Holistic Development: We focus on more than just academics,
              helping students develop critical thinking skills, creativity, and
              a lifelong love for learning.
            </li>
          </ul>
        </div>
        <div className="about-section">
          <h3 className="section-title">Join Us</h3>
          <p className="section-content">
            Experience education like never before – welcome to Tutor4UOnline,
            where knowledge knows no limits. Join us in redefining learning,
            where inspiration meets innovation and where every question opens a
            door to endless possibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
