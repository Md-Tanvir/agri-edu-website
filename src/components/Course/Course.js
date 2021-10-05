import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  // Getting Courses
  const course = props.course;

  return (
    <div>
      {/* Single Course Structure */}
      <div className="col">
        <div className="card h-100">
          <img src={course.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title mb-3">{course.name}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>
                  Rating: {course.rating} <i className="fas fa-star"></i>
                </p>
                <p>Level: {course.level}</p>
              </div>
              <div>
                <p>Student: {course.student}</p>
                <p>
                  <i className="far fa-clock"></i> {course.time} Weeks
                </p>
              </div>
            </div>
            {/* Join Now Btn */}
            <Link to='/contactus'>
            <button className="btn get-btn">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
