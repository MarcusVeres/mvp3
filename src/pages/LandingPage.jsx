import React from "react";

import Header from "../components/LandingHeader";
import Things from "../components/ThingsIDo";
import Tools from "../components/ToolsIUse";

const LandingPage = () => {
  return (
    <div className="text-white bg-black bgx-gray-900">
      <Header></Header>
      <Things></Things>
      <Tools></Tools>
    </div>
  );
};

export default LandingPage;
