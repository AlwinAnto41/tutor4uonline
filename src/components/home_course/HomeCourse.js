import React, { useEffect, useRef } from "react";
import "./homecourse.css";
import Chess from "../../assets/img/courses/chess.png";

const HomeCourse = () => {
  const courseListRef = useRef(null);

  useEffect(() => {
    const courseItems = courseListRef.current.querySelectorAll(".course-item");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    courseItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      courseItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const courses = [
    { id: 1, title: "Chess", imgSrc: Chess },
    { id: 2, title: "Chess", imgSrc: Chess },
    { id: 3, title: "Chess", imgSrc: Chess }
  ];

  return (
    <div className="home-course-container">
      <div className="home-course-header">
        <h5>READY TO LEARN?</h5>
        <div className="home-course-title">
          <h1>Featured Courses</h1>
          <div className="course-list" ref={courseListRef}>
            {courses.map(course => (
              <div key={course.id} className="course-item">
                <img className="course-image" src={course.imgSrc} alt={`Course ${course.id}`} />
                <h2 className="course-title">{course.title}</h2>
              </div>
            ))}
          </div>
          <div className="view-courses">
            <a href="/courses">View courses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
