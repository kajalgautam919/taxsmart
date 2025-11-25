import React, { useContext, useState } from "react";
import axios from "axios";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const loginIntialValue = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(loginIntialValue);
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
        "http://localhost:5001/api/users/login",
        data
      );
      const isLogin = response.data.token;
      localStorage.setItem("token", isLogin);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("email", response.data.user.email);

      if (response.status === 200) {
        setSuccessMessage("Login successfully. Redirecting...");
      }
      setData({
        email: "",
        password: "",
      });
      navigate("/services");
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome To TaxSmart</h1>
        <div className="packages">
          <span>Explore your Packages!</span>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-field">
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
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>

      <div className="register-here">
        <NavLink to={"/register"}>Dont have an Account? Ragister here!</NavLink>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}
export default Login;
