import React, { useState } from "react";
function Top(props) {
  const [searched, SetSearched] = useState("");
  const { searchAlbums } = props;
  return (
    <div className="top">
      <div className="search">
        <input
          placeholder="Search"
          value={searched}
          onChange={(e) => SetSearched(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAlbums(e.target.value); 
            }
          }}
        />
        <button
          onClick={() => {
            searchAlbums(searched);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <i className="fa-regular fa-user"></i>
    </div>
  );
}

export default Top;
