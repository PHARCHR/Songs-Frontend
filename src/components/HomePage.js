import React from "react";
import "../CSS/Homepage.css";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";
function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const searchAlbums = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="Homepage">
      <Top searchAlbums={searchAlbums} />
      <Bottom searchValue={searchValue} />
    </div>
  );
}

export default HomePage;
