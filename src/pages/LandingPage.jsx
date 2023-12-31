import React from "react";

import Header from "../components/LandingHeader";
import Nav from "../components/Navigation";
import Things from "../components/ThingsIDo";
import Tools from "../components/ToolsIUse";
import Jobs from "../components/WorkExperience";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="text-white bg-black bgx-gray-900">
      <Header></Header>
      <Nav></Nav>
      <Things></Things>
      <Tools></Tools>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
