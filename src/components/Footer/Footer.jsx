import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdOutlineAddHomeWork } from "react-icons/md";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="about-footer">About Us</p>
        <span className="about-tax">
          At Taxsmart Company, our journey began in a small garage, where our
          founders, Jane and John Smith, shared a passion for creating
          innovative solutions to everyday problems. Fueled by their
          entrepreneurial spirit, they set out to revolutionize the way people
          interact with technology.
        </span>
      </div>
      <div className="footer-services">
        <div className="heading-service">Services</div>
        <p>Regular Tax Filing</p>
        <p>Accounting and Bookkeeping Services</p>
        <p>Employ Management/PayRoll Solution</p>
        <p>Income Tax Filing</p>
      </div>

      <div className="social-media">
        <div>
          <p>Social Media</p>
        </div>
        <div className="social-icon">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="#1877F2" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="#1DA1F2" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="#E1306C" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#0077B5" />
          </a>
        </div>
      </div>

      <div className="Contact-footer">
        <p>Contact</p>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail /> rajat111@gmail.com
        </a>
        <div>
          <LiaPhoneSolid /> +91-6264531002
        </div>
        <div>
          <MdOutlineAddHomeWork />
          504,503 robort squre Indore
        </div>
      </div>
    </div>
  );
}

export default Footer;
