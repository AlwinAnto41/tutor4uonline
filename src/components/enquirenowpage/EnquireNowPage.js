import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosCheckmarkCircle } from "react-icons/io";

import "./enquirenowpage.css";

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_64q4j3k",
        "template_nqpzt0e",
        form.current,
        "9Fckb3RFwALDPTfIq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage("Message sent 👌");

          // Reset form fields after successful submission
          form.current.reset();

          // Automatically close the alert after 3 seconds
          setTimeout(() => {
            
            setAlertMessage(null);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("Error sending message. Please try again later.");

          // Automatically close the alert after 3 seconds
          setTimeout(() => {
            setAlertMessage(null);
          }, 3000);
        }
      );
  };

  return (
    <section id="enquire-section">
    <div className="main-back">
      <div className="eqHeader">
        <h1> Join Tutor4uOnline  </h1>
        <h4>Today</h4>

        <p>
          We are a team of experienced tutors<br/>
          who are passionate about helping
          students achieve their goals.
        </p>
      </div>

      <div className="StyledContactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="user_phonenumber"
            placeholder="Enter your phone number"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Please list the courses you're interested in or ask any questions you have about the courses..."
            required
          />
          <input type="submit" value="Send" />
        </form>
      </div>
      {alertMessage && (
        <div className="alert">
          <span className="icon">
            <IoIosCheckmarkCircle size={24} />
          </span>
          <span className="message">{alertMessage}</span>
        </div>
      )}
    </div>
    </section>
  );
};

export default Contact;
