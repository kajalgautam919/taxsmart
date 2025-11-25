import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./registration.css";
export default function Registration() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    phone_number: "",
  };

  const [data, setData] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", data);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        data
      );
      if (response.status === 200) {
        setSuccessMessage("Register successfully. Redirecting...");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
    setData({
      name: "",
      email: "",
      password: "",
      dob: "",
      country: "",
      state: "",
      city: "",
      phone_number: "",
    });
    navigate("/login");
  };
  return (
    <div className="register-container">
      <h1>Welcome To TaxSmart</h1>
      <p className="package-explore">Explore your Packages!</p>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="div1">
          <input
            placeholder="Enter your name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            name="password"
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Enter your date of birth"
            value={data.dob}
            name="dob"
            onChange={handleChange}
          />
        </div>

        <div className="div2">
          <input
            placeholder="Enter your country"
            value={data.country}
            name="country"
            onChange={handleChange}
          />
          <input
            placeholder="Enter your state"
            value={data.state}
            name="state"
            onChange={handleChange}
          />
          <input
            placeholder="Enter your city"
            value={data.city}
            name="city"
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={data.phone_number}
            name="phone_number"
            onChange={handleChange}
          />
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>

      <div className="already-account">
        <NavLink to={"/login"}>Already have an Account? Login here!</NavLink>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}
