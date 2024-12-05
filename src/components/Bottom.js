import React from "react";
import SongsHomepage from "./SongsHomepage";
import SideBar from "./SideBar";
function Bottom(props) {
    
  return (
    <div className="bottom">
      <SideBar />
      <div className="middle">
        <SongsHomepage {...props}/>
      </div>
    </div>
  );
}
export default Bottom;
