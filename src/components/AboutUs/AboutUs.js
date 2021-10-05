import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import college from "../../images/college.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      {/* Calling Menubar */}
      <MenuBar></MenuBar>
      <div className="container">
        <div className="row gx-5 align-items-center">
          {/* Campus image */}
          <div className="col-md-6">
            <img src={college} className="img-fluid" alt="" />
          </div>
          {/* Campus data */}
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              Since 2018, Learn-Agro has provided unique, hands-on learning
              opportunities for students as the South’s premier destination for
              Agricultural studies. Our offerings have grown a great deal since
              our founding, now including a wide range of more traditional
              4-year degrees and paths to success including a highly sought
              after nursing program, innovative arts and science tracks, and an
              ever-growing list of learning opportunities and majors for our
              students. A member of the 26- member University System of Georgia,
              ABAC is proud to support enrollment of over 4,000 students from
              155 of Georgia’s 159 counties, 18 states, and 24 countries. Our
              home is in Tifton, Georgia, a tight-knit and thriving town nestled
              among the lush pines of South Georgia. ABAC takes pride in our
              community involvement and the breadth of opportunities our city
              provides to get involved in hands-on learning from healthcare to
              business experience. Our college is a genuine member of the
              community at large. The ABAC campus offers apartment-style housing
              for 1,400 students and a wealth of resources and opportunities for
              students to get involved, learn, and grow in our academic
              community. Chances to practically apply what is learned in the
              classroom in the real world begin on day one. ABAC’s sprawling
              campus is equipped with a multitude of resources such as the J.G.
              Woodroof Farm, Forest Lakes Golf Course, and the Georgia Museum of
              Agriculture and Historic Village. We also offer chances to get
              involved outside of Tifton at our instructional site in
              Bainbridge.
            </p>
          </div>
        </div>
      </div>
      {/* Calling Footer */}
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
