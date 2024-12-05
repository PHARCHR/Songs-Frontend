import React from "react";

function SideBar() {
  return (
    <div className="left">
      <button>
        <i className="fa-solid fa-house"></i>
      </button>
      <button>Playlists</button>
      <button>Albums</button>
      <button>Artists</button>
      <i className="fa-solid fa-music"></i>
      <i className="fa-solid fa-headphones-simple"></i>
      <i className="fa-solid fa-guitar"></i>
    </div>
  );
}

export default SideBar;
