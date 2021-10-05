import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* Main Home */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* Main Home */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* All Courses */}
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          {/* Contact Area */}
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          {/* About Area */}
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          {/* Error 404 Handling */}
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
