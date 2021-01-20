import React from "react";
import { BrowserRouter } from "react-router-dom";

// import Container from "./Container";
// import Footer from "../footer/Footer";
// import Header from "../header/Header";
import Routes from "../Routes";

const App = () => (
  <BrowserRouter>
    {/* <Container>  */}
        <Routes />
    {/* </Container> */}
  </BrowserRouter>
);

export default App;
