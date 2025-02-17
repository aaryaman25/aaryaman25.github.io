import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Game.css";

function Game() {
  const moods = [
    { label: "💔 Hate Aaryaman?", song: "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF" }, // Sorry - Justin Bieber
    { label: "🥲 Sad Fuck?", song: "https://open.spotify.com/track/1au2UduxcvHfa0fZS3Szci" }, // Someone Like You - Adele
    { label: "💖 In Love?", song: "https://open.spotify.com/track/6ilc4vQcwMPlvAHFfsTGng?si=f79f790cbcc24610" }, // Perfect - Ed Sheeran
    { label: "🤑 Forehead kisses?", song: "https://open.spotify.com/playlist/55Iwlce9ZAVjg5RTs1TtPQ?si=4b23219e83ee430a" }, // Super Rich Kids - Frank Ocean
    { label: "😈 In the Mood?", song: "https://open.spotify.com/track/0725YWm6Z0TpZ6wrNk64Eb" } // Pony - Ginuwine
  ];

  const [selectedMood, setSelectedMood] = useState(2); // Default to 'In Love?'
  const [hasChosen, setHasChosen] = useState(false); // Track if the user has chosen a mood

  // Automatically redirect to the Spotify link when the user clicks off the slider
  const handleSliderChange = (e) => {
    setSelectedMood(Number(e.target.value));
    setHasChosen(true); // Track that the user has selected a mood
  };

  const handleSliderMouseUp = () => {
    if (hasChosen) {
      // Redirect the user to the selected mood's song after they release the slider
      window.location.href = moods[selectedMood].song;
    }
  };

  return (
    <div className="game-container">
      <h1>🎵 Pick Your Mood 🎵</h1>
      <div className="mood-slider-container">
        <input
          type="range"
          min="0"
          max={moods.length - 1}
          value={selectedMood}
          onChange={handleSliderChange}
          onMouseUp={handleSliderMouseUp} // Detect when the user stops dragging
          className="mood-slider"
        />
      </div>
      <p className="mood-label">{moods[selectedMood].label}</p>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
}

export default Game;
