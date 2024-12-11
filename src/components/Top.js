import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Top(props) {
  const [searched, SetSearched] = useState("");
  const [profileInfo, setProfileInfo] = useState(null);
  const navigate = useNavigate();
  const { searchAlbums } = props;

  // Ref to detect clicks outside the profile details container
  const profileInfoRef = useRef(null);
  const handleLogout = () => {
    localStorage.setItem("token", null);
    navigate("/");
  };

  // Get user profile info
  const getProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/v1/contacts/user",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfileInfo(response.data); // Set profile info from response
    } catch (error) {
      console.log("Problem fetching user info");
    }
  };

  // Hide the profile info if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileInfoRef.current &&
        !profileInfoRef.current.contains(event.target)
      ) {
        setProfileInfo(null); // Hide profile info if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top">
      <div className="search">
        <i class="fa-solid fa-arrow-left" onClick={handleLogout}></i>
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

      <i className="fa-regular fa-user" onClick={getProfileInfo}></i>

      {profileInfo && (
        <div ref={profileInfoRef} className="profile-info">
          <div className="profileInfo"></div>
          <i class="fa-solid fa-user-large"></i>
          <p>
            <strong>Name:</strong> {profileInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {profileInfo.email}
          </p>
          {/* Add more profile details here */}
        </div>
      )}
    </div>
  );
}

export default Top;
