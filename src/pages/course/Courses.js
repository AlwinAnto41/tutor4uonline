import React, { useRef } from "react";
import "./courses.css";
import Header from "../../components/Hd_Fd/Header";
import EnquireNowPage from "../../components/enquirenowpage/EnquireNowPage";
import Footer from "../../components/Hd_Fd/Footer";
import Chess from "../../assets/img/courses/chess.png";

const Courses = () => {
  const enquireNowRef = useRef(null);

  const scrollToEnquireNow = () => {
    enquireNowRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const courseData = [
    { category: "Subject", courses: [Chess, Chess, Chess, Chess] },
    { category: "Sport", courses: [Chess, Chess, Chess, Chess] },
    { category: "Musicals", courses: [Chess, Chess, Chess, Chess] }
  ];

  return (
    <div>
      <Header />
      <div className="courses-page">
        <h1>COURSES</h1>
        {courseData.map((section, index) => (
          <div key={index} className="subject-container">
            <h2>{section.category}</h2>
            <div className="course-category">
              {section.courses.map((course, i) => (
                <div key={i} className="course-box">
                  <img src={course} alt={`Course ${i + 1}`} />
                  <h2>Chess</h2>
                  <button onClick={scrollToEnquireNow}>ENQUIRE NOW</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div ref={enquireNowRef}>
        <EnquireNowPage />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
