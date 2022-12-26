import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import character from "./";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const hangleClick = (element) => {
  element.classList.add("selected");
  console.log("click");
};

function App() {
  const [character, setCharacter] = useState(null);
  const [accessories, setAccessories] = useState(null);

  return (
    <>
      <div className="App gap-30">
        <div className="header">
          <div className="title">CHARACTER</div>
          <div className="subtitle">CUSTOMIZATION</div>
          <div className="divider"></div>
        </div>
        <div className="avatar-group">
          <Avatar total={total} />
          <PartList total={total} />
        </div>
      </div>
    </>
  );
}

export default App;
