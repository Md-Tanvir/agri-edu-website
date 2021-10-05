import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Courses.css";

const Courses = () => {
  // Getting Courses Data
  const [courses, setCourses] = useState([]);
  // Setting Courses Data
  useEffect(() => {
    fetch("./courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      {/* Calling Menubar */}
      <MenuBar></MenuBar>
      {/* All course area */}
      <div className="container">
        <h2 className="text-center mb-5">Check All Our Courses</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {/* Calling All course data */}
          {courses.map((course) => (
            <Course key={course.name} course={course}></Course>
          ))}
        </div>
      </div>
      {/* Calling Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Courses;
