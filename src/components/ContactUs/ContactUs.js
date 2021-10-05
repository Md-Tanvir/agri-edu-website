import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      {/* Calling Menubar */}
      <MenuBar></MenuBar>
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-md-6 text-center">
            <h1>Call Us Now</h1>
            <h3>+880177723923</h3>
          </div>
          <div className="col-md-6">
            <h1 className="mb-4">Contact Us</h1>
            {/* Contact Form */}
            <div>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Enter Your Name"
              />
              <input
                type="email"
                className="form-control mb-4"
                placeholder="Enter Your Email Address"
              />
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Write Your Message"
              ></textarea>
              <button className="btn send-btn mb-5">Send</button>
            </div>
          </div>
        </div>
      </div>
      {/* Calling Footer */}
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
