import React from "react";
import { Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/Faq" component={Faq} />
  </>
);

export default Routes;
