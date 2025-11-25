import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./services.css";
import { data } from "../Service/ServiceData";

function Services() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showThankyou, setShowThankyou] = useState(false);

  const handlePopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const handleClose = () => setShowThankyou(false);
  const handleOpen = () => setShowThankyou(true);

  const auth = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email"); // Assuming you store email in localStorage
  console.log("object", email);

  const serviceData = data.find(
    (item) => item.id === parseInt(selectedService)
  );

  const sendEmail = (e) => {
    e.preventDefault();

    if (!selectedService || !selectedPlan) {
      alert("Please select a service and plan.");
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      service_name: serviceData?.heading,
      plan_name: serviceData?.service.find(
        (p) => p.id === parseInt(selectedPlan)
      )?.plan,
      price: serviceData?.service.find((p) => p.id === parseInt(selectedPlan))
        ?.price,
    };

    emailjs
      .send(
        "service_bqj4hue", // Replace with your EmailJS Service ID
        "template_dv52brp", // Replace with your EmailJS Template ID
        templateParams,
        "i-JlH7Aww7tEhJKJ3" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setShowThankyou(true);
        },
        (error) => {
          console.error("Email failed to send:", error);
        }
      );
  };

  return (
    <div className="main-services-container">
      <div className="emoji">
        <h2 className="welcome">{auth ? `Welcome ✌️, ${name}` : null}</h2>
        <p className="victory">
          Choose Your Package and We Will Provide Better Service!
        </p>
      </div>
      <h2 className="service-heading">Our Services</h2>
      <ul className="service-list">
        {data.map((item) => (
          <li key={item.id}>
            <h1>{item.heading}</h1>
            <p>{item.para}</p>
            <div className="hover-effect">
              <ul className="services" onClick={handlePopup}>
                {item.service.map((item2) => (
                  <li key={item2.id}>
                    <p>{item2.plan}</p>
                    <p className="clickable">{item2.price}/-</p>
                    <div className="basic-fasilities">
                      {item2.fasilities?.map((item3, index) => (
                        <p key={index}>{item3}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {auth ? (
              <>
                <div className="select-package">
                  <p style={{ fontSize: "20px" }}>Please, Select Package!</p>
                  <div className="service-dropdown">
                    <div className="first-dropdown">
                      <select
                        onChange={(e) => setSelectedService(e.target.value)}
                        value={selectedService}
                      >
                        <option value="">Select a Service</option>
                        {data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.heading}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="second-dropdown">
                      <select
                        disabled={!selectedService}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        value={selectedPlan}
                      >
                        <option value="">Select a Plan</option>
                        {serviceData?.service.map((plan) => (
                          <option key={plan.id} value={plan.id}>
                            {plan.plan} - ₹{plan.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <button onClick={sendEmail} className="close-popup">
                      Send Details
                    </button>
                    <button onClick={closePopup} className="close-popup">
                      Close
                    </button>
                  </div>
                  {showThankyou && (
                    <div className="popup-overlay">
                      <div className="popup-content">
                        <h1 className="text-3xl font-bold text-green-600">
                          Thank You!
                        </h1>
                        <p className="text-gray-600 mt-2">
                          We appreciate your support.
                        </p>
                        <button onClick={handleClose} className="close-popup">
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <p style={{ fontSize: "20px" }}>Please, Login first!</p>
                <button onClick={() => (window.location.href = "/login")}>
                  Login
                </button>
                <button onClick={closePopup} className="close-popup">
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
