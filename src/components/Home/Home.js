import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import farmer from "../../images/farmer.png";
import "./Home.css";
import Course from "../Course/Course";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  // Getting Course data
  const [courses, setCourses] = useState([]);
  // Setting Course data
  useEffect(() => {
    fetch("./courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {/* Calling Menubar */}
      <MenuBar></MenuBar>
      {/* Hero area */}
      <div className="hero-area container">
        <div className="row align-items-center">
          {/* Hero text */}
          <div className="col-md-6 hero-area-text">
            <h1>
              Learn <span>Agriculture</span> <br />
              Anytime In Most <br />
              Proper Way
            </h1>
            <Link to="/courses">
              <button className="btn hero-btn mt-2">GET STARTED</button>
            </Link>
          </div>
          {/* Hero Image */}
          <div className="col-md-6 text-center">
            <img src={farmer} className="hero-img" alt="" />
          </div>
        </div>
      </div>
      {/* Home page Course area */}
      <div className="course-area container">
        <h1 className="text-center my-5 fw-semibold">Check Our Courses</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {/* Getting only 4 course */}
          {courses.slice(0, 4).map((course) => (
            <Course key={course.name} course={course}></Course>
          ))}
        </div>
      </div>
      {/* Calling Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
