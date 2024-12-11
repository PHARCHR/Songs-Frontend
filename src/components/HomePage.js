import React, { useEffect } from "react";
import "../CSS/Homepage.css";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";
function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const searchAlbums = (value) => {
    setSearchValue(value);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);
  return (
    <div className="Homepage">
      <Top searchAlbums={searchAlbums} />
      <Bottom searchValue={searchValue} />
    </div>
  );
}

export default HomePage;
