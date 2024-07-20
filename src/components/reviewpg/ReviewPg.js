import React, { useEffect, useRef } from "react";
import "./ReviewPg.css"; // Import the CSS file

const ReviewPg = () => {
  const reviewRef = useRef(null);

  useEffect(() => {
    const reviewCards = reviewRef.current.querySelectorAll(".review-card");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reviewCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      reviewCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="Testimonials-section">
      <div className="review-page" ref={reviewRef}>
        <h1 className="review-page-title">Testimonials</h1>
        <div className="reviews-container">
          <div className="review-card">
            <p className="review-text">
              Tutor4UOnline has been a game-changer for my child's education. The
              personalized attention and expert tutoring have significantly
              improved my child's understanding of complex subjects. I am truly
              impressed with the platform's dedication to nurturing young minds.
            </p>
            <h3 className="review-author">Vijitha (Parent)</h3>
          </div>
          <div className="review-card">
            <p className="review-text">
              I was struggling with math, but thanks to Tutor4UOnline, I now feel
              confident and capable. The one-on-one sessions helped me grasp
              difficult concepts, and the interactive approach made learning
              enjoyable. I can't thank my tutor enough for the support!
            </p>
            <h3 className="review-author">Naysa (Student)</h3>
          </div>
          <div className="review-card">
            <p className="review-text">
              Enrolling my daughter in Tutor4UOnline was the best decision I made
              for her education. The tutors are not only knowledgeable but also
              patient and encouraging. My daughter looks forward to her classes
              and has shown remarkable improvement in her grades.
            </p>
            <h3 className="review-author">Sawmya (Parent)</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPg;
