import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/SongsHomePage.css";
function SongsHomepage(props) {
  const { searchValue } = props;
  let query = searchValue || "let her go passenger";
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Fetch the token

    const getToken = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials&client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&client_secret=" +
            process.env.REACT_APP_CLIENT_SECRET,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(process.env.CLIENT_ID);

        const accessToken = tokenResponse.data.access_token;
        console.log("Access Token:", accessToken);

        // Set the token in state
        setToken(accessToken);
      } catch (error) {
        console.error(
          "Error fetching token:",
          error.response ? error.response.data : error.message
        );
      }
    };

    getToken();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    // Fetch albums only when the token is available
    const getAlbum = async () => {
      if (!token) return; // Prevent making the request without a token
      try {
        console.log("Token:", token);

        const response = await axios.get(
          "https://api.spotify.com/v1/search?q=" + query + "&type=album",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const response2 = await axios.get(
          "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Albums:", response.data, "Artists", response2.data);
        // You can set songs or handle the response here
        setSongs(response.data.albums.items);
        setArtists(response2.data.artists);
      } catch (error) {
        console.error(
          "Error fetching albums:",
          error.response ? error.response.data : error.message
        );
      }
    };

    getAlbum();
  }, [searchValue, token]); // Run whenever the token changes

  return (
    <div>
      {songs.length > 0 ? (
        <div className="ultimateContainer">
          <div className="cardsContainer">
            {songs.map((song, index) => (
              <div className="cards">
                <img src={song.images[0].url} id={index} className="image" />
                <label for={index}>{song.name}</label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cards2">
          <i class="fa-solid fa-spinner"> </i>
          <h2>Loading</h2>
        </div>
      )}
    </div>
  );
}

export default SongsHomepage;
