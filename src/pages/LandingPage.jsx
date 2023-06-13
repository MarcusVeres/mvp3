import React from "react";

import Header from "../components/LandingHeader";
import Things from "../components/ThingsIDo";

const LandingPage = () => {
  return (
    <div className="text-white bg-black bgx-gray-900">
      <Header></Header>
      <Things></Things>
    </div>
  );
};

export default LandingPage;
