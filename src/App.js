import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import SearchResult from "./components/SearchResult";



const App = () => {
  // State
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);
  // Hooks
  useEffect(() => {
    onSearch("React.js")
  }, [])

  /* Handlers */
  // Hanlder search submit
  const onSearch = async (term) => {
    console.log("searching.")
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      console.log(response.data.items)
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
      setError(null);
    } catch (error) {
      setError("Oops!! error while searching vidoes try again later")
    }
  };

  // Handle selected video
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <SearchBar onSearch={onSearch} label="Search Videos" />
      {
        error? error : <SearchResult videos={videos} onVideoSelect={onVideoSelect} selectedVideo={selectedVideo} />
      }

    </div>

  );
};

export default App;
