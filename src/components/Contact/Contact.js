import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import "../../styles/Contact/Contact.scss";

const Contact = () => {
  // State to manage form data
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); 
    const formData = new FormData(event.target);

    formData.append("access_key", "a131b018-1117-4b71-97f3-777034393d8e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset(); 
      } else {
        setResult("Error: " + data.message);
      }
      setTimeout(() => setResult(""), 3000);
    } catch (error) {
      setResult("An unexpected error occurred. Please try again later.");

      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__header">
          <h1>
            {/* Animated Contact Title */}
            {["C", "O", "N", "T", "A", "C", "T", "."].map((letter, index) => (
              <span
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 200}
                data-aos-offset="200"
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="contact__container">
          <div className="contact__details">
            <div className="contact__form" data-aos="fade-up">
              <form
                onSubmit={onSubmit}
              >
                <p className="contact__form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Enter name"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="message">Concern: </label>
                  <textarea
                    name="message"
                    id="contact__message"
                    cols="20"
                    rows="5"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </p>
                <button type="submit" className="contact__send-btn">
                  Send
                </button>
              </form>
               {result && (
        <div className="bg-white text-black text-center p-4 fixed bottom-0 w-full shadow-lg">
          {result}
        </div>
      )}
            </div>
          </div>
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Connect</h3>
            <div className="contact__info-details">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                  <p>
                    <span>Address:&nbsp;&nbsp;</span>Rajkot-360020, Gujarat,
                    India
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <p>
                    <span>Phone:</span>&nbsp;&nbsp;(+91) 9313587219
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>
                    <span>Email:&nbsp;&nbsp;</span>ajaysinha2222@gmail.com
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} size="2x" />
                  <span>Company: <a href="https://www.sharepointempower.com/" rel="noopener noreferrer" target="_blank"> SharepointEmpower Pvt. Ltd.</a></span>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <p className="contact__linkedin">
                <a
                  href="https://www.linkedin.com/in/ajay-kumar-sinha-a5097624b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </p>
              <p className="contact__github">
                <a
                  href="https://github.com/aksinha214"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </p>
              <p className="contact__github">
                <a
                  href="https://www.instagram.com/azaysinha?igsh=MXFvam56aDZ4cGhiOQ=="
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </p>
              <p className="contact__youtube">
                <a
                  href="https://x.com/ajaysinha2222?t=bdPBqVxLsATZeQT-qE3hXg&s=09"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
