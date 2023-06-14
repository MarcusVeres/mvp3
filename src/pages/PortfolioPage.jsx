import React from "react";

import Nav from "../components/Navigation";
import Portfolio from "../components/PortfolioGrid";
import PortfolioHeader from "../components/PortfolioHeader";
import Tools from "../components/ToolsIUse";
import Footer from "../components/Footer";

const PorfolioPage = () => {
  return (
    <div className="text-white bg-black bgx-gray-900">
      <Nav></Nav>
      <PortfolioHeader></PortfolioHeader>
      <Portfolio></Portfolio>
      <Tools></Tools>
      <Footer></Footer>
    </div>
  );
};

export default PorfolioPage;
