import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Service/Services";
import Registration from "./pages/Authantication/RegistrationPage/Registration";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
      <CondtionalFooter />
    </>
  );
}
function CondtionalFooter() {
  const location = useLocation();
  const hiddenFooterRoutes = ["/login", "/services", "/register"];

  if (hiddenFooterRoutes.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
}
export default App;
