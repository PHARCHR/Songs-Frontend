import React from "react";
import "../CSS/Homepage.css";
import axios from "axios";

import Top from "./Top";
import Bottom from "./Bottom";
function HomePage() {
  return (
    <div className="Homepage">
      <Top></Top>
      <Bottom></Bottom>
    
    </div>
  );
}

export default HomePage;
