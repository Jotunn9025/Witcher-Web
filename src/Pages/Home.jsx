import React, { useState } from "react";
import "../index.css";
import Carousel from "../Components/Carousel";
import "./Home.css";
import characters from "../assets/Characters";
function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedCharacter =
    selectedIndex !== null ? characters[selectedIndex] : characters[0];
  return (
    <>
      <div className="spacer"></div>
      <div className={`Home ${selectedIndex === null ? "centered" : ""}`}>
        <div
          className={`carosel ${
            selectedIndex !== null ? "reduced" : "expanded"
          }`}
        >
          <Carousel
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            characters={characters}
          />
        </div>
        <CharacterDescription
          character={selectedCharacter}
          selectedIndex={selectedIndex}
          deselect={() => setSelectedIndex(null)}
        />
      </div>
    </>
  );
}
function CharacterDescription({ character, selectedIndex, deselect }) {
  return (
    <div
      className={
        selectedIndex !== null
          ? `description-container visible`
          : `description-container`
      }
    >
      <button onClick={deselect} className="close-btn">
        X
      </button>
      <h2>{selectedIndex !== null ? character.name : "Choose a character"}</h2>
      <p>
        {selectedIndex !== null
          ? character.description
          : "You can choose a character by clicking on one of the cards shown in the carousel"}
      </p>
    </div>
  );
}
export default Home;
