import React from "react";
import SongsHomepage from "./SongsHomepage";
import SideBar from "./SideBar";
function Bottom() {
  return (
    <div className="bottom">
      <SideBar />
      <div className="middle">
        <SongsHomepage />
      </div>
    </div>
  );
}
export default Bottom;
