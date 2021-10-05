import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area mt-5 py-3">
      <div className="container d-flex justify-content-between">
        {/* Copyright area */}
        <div>
          <p className="text-white mb-0">
            © Copyright 2021 | All Rights Reserved By Learn Agro
          </p>
        </div>
        {/* Footer social Icons */}
        <div className="text-right text-white social-icons">
          <p className="mb-0">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
