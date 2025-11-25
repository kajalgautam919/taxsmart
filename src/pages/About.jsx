import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <div className="contain-about"></div>
      <div>
        <p className="second-about">About Us</p>
      </div>
      <div className="hmv">
        <div className="out-history">
          <p className="oh">Our History</p>
          <span className="about-text">
            At Taxsmart Company, our journey began in a small garage, where our
            founders, Jane and John Smith, shared a passion for creating
            innovative solutions to everyday problems. Fueled by their
            entrepreneurial spirit, they set out to revolutionize the way people
            interact with technology.
          </span>
        </div>
        <div className="our-mission">
          <p className="oh">Our Mission </p>
          <span className="about-text">
            Our mission is to develop and deliver intuitive, user-centric
            solutions that address the evolving needs of our customers. We are
            committed to fostering innovation, upholding the highest standards
            of integrity, and making a positive impact on society through our
            products and services.
          </span>
        </div>
        <div className="our-vision">
          <p className="oh">Our Vision</p>
          <span className="about-text">
            Our vision at Taxsmart Company is to empower individuals and
            businesses worldwide through cutting-edge technology that enhances
            productivity, connectivity, and overall quality of life. We envision
            a future where technology seamlessly integrates into every aspect of
            daily life, making tasks simpler, communication smoother, and
            opportunities limitless.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
