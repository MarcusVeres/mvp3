import React from "react";

import Nav from "../components/Navigation";
import Portfolio from "../components/PortfolioGrid";
import Tools from "../components/ToolsIUse";
import Footer from "../components/Footer";

const PorfolioPage = () => {
  return (
    <div className="text-white bg-black bgx-gray-900">
      <Nav></Nav>
      <Tools></Tools>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
};

export default PorfolioPage;
