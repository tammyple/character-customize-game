import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

function App() {
  const [avatar, setAvatar] = useState(null);
  const [squares, setSquares] = useState(null);

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hats: 28,
    glasses: 17,
    earrings: 32,
    layer_1: 5,
    layer_2: 5,
    layer_3: 9,
  };

  const handleClick = (e) => {
    e.target.classList.add("selected");
    console.log("e.target", e.target);
    // const newSquare = (itemKey) => {
    //   setSquares(squares.filter((item) => item.key === itemKey));
    // };
    // setAvatar(newSquare);
  };

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
          <PartList total={total} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default App;
