import React, { useState } from "react";
import "./styles.css";

// Data stored as key-value pair
const musicGenre = {
  Bollywood: [
    {
      name: "Dil ke badle sanam",
      by: "Alka Yagnik & Udit Narayan",
      ratings: "9/10"
    },
    { name: "Saude Bazi", by: " Anupam Amod, Javed Ali", ratings: "9/10" },
    {
      name: "Bin tere",
      by: "Amanat Ali, Sunidhi Chauhan & Vishal Shekhar",
      ratings: "8/10"
    },
    {
      name: "I hate Luv Storys",
      by: "Vishal-shekhar & Vishal-Dadlani",
      ratings: "7/10"
    }
  ],
  Ollywood: [
    {
      name: "Tuma oda Akhi",
      by: "Kuldeep pattnaik & Aseema Panda",
      ratings: "10/10"
    },
    {
      name: "Sefali",
      by: "Kuldeep Pattnaik & Arpita Choudhury",
      ratings: "8/10"
    },
    { name: "To akhi Mo Aina", by: "MK Mukesh & Pamela Jain", ratings: "7/10" },
    { name: "Feel my love", by: "Mk Mukesh", ratings: "8/10" }
  ],
  Hollywood: [
    { name: "Blinding Lights", by: "The Weeknd", ratings: "9/10" },
    { name: "On the floor", by: "Jennifer Lopez", ratings: "8/10" },
    { name: "keep on moving ", by: "Jordiz", ratings: "8/10" },
    { name: "Paro-speed up", by: "Nej", ratings: "6/10" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Bollywood");

  //Genre selector
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        Good musics<span role="img">🎵</span>
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Check out my favourite music from each genre.
      </p>

      <div>
        {/* Setting up genre keys */}
        {Object.keys(musicGenre).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "cyan",
              borderRadius: "0.5rem",
              padding: "0.2rem  1rem",
              border: "1px solid black",
              margin: "0.2rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        {/* Unordered list for setting up music  */}
        <ul>
          {musicGenre[selectedGenre].map((music) => (
            <li
              // key={music.name}
              style={{
                listStyle: "none",
                padding: "3rem",
                border: "1px solid black",
                width: "50%",
                margin: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "lightcyan",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> By {music.by} </div>
              <div style={{ fontSize: "smaller" }}> {music.ratings} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
