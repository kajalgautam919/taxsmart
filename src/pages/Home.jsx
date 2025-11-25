import React from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable navigation arrows
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "15px" },
      },
    ],
  };

  const services = [
    {
      title: "Regular Tax Filing",
      description:
        "We offer professional tax filing services for individuals and businesses. Our experts ensure accurate and timely filing to minimize your tax liabilities.",
    },
    {
      title: "Personalized Accountant/Outsource",
      description:
        "Outsource your accounting needs to us and get personalized services tailored to your business requirements. Our dedicated accountants ensure your financial records are accurate and up-to-date.",
    },
    {
      title: "Employee Management/Payroll Solution",
      description:
        "Our comprehensive payroll solution helps you manage your employees' salaries, taxes, and benefits efficiently. Say goodbye to payroll headaches and focus on growing your business.",
    },
    {
      title: "Income Tax Filing",
      description:
        "Let us handle your income tax filing process and ensure compliance with the latest regulations. We make tax filing hassle-free and maximize your refunds.",
    },
    {
      title: "Invoice Processing",
      description:
        "Streamline your invoicing process with our efficient invoice processing services. From generating invoices to tracking payments, we've got you covered.",
    },
  ];

  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="container">
        <h3 className="welcome-title">Welcome to TaxSmart</h3>
        <p className="paragraph">
          Streamline Your Taxes and GST with Our Web Application
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* About Us Section */}
      <div className="about-us-home">
        {/* Text Content */}
        <div className="text-content">
          <h4 className="us-about">About Us</h4>
          <span className="span-para">
            Simplifying Tax and GST Management for You! Welcome to our platform,
            where we're dedicated to making tax and GST management a breeze for
            individuals and businesses alike. Our mission is to empower you with
            the tools and knowledge necessary to navigate the complexities of
            taxes effortlessly.
          </span>
          <hr className="hr-line" />
          <span className="span-para">
            At <span className="bold-text">TaxSmart</span>, we understand the
            challenges you face when it comes to understanding and complying
            with tax regulations. That's why we've developed a user-friendly web
            application designed to simplify the process, saving you time and
            minimizing stress.
          </span>
          <div>
            <button className="about-btn-home">More Details</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image-container">
          <img src="/about-image.png" alt="About Us" className="about-image" />
        </div>
      </div>
      <div className="our-services">
        <div className="slider-section">
          <div className="service-container">
            <h5>Our Services</h5>
            <h6>CheckOut Our Service may Help You</h6>
          </div>

          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="card">
                <p className="services-title-card">{service.title}</p>
                <p>{service.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
