import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  earrings: 32,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
};

function App() {
  const [avatar, setAvatar] = useState(null);
  const [squares, setSquares] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [activeSquare, setActiveSquare] = useState(null);
  const [currentSelected, setCurrentSelected] = useState(null);

  const handleClick = (e) => {
    const newAvatar = e.target.src;
    setAvatar(newAvatar);
    setIsSelected(true);
  };

  // const handleSelect = (e) => {
  //   const selectedSquareId = e.target.id;
  //   console.log("selectedSquare", selectedSquareId);
  //   setSquares(squares === selectedSquareId ? "" : "selected");
  // };

  // const handleRemoveSelect = (squareKey) => {
  //   setSquares(squares.filter((square) => square.key !== squareKey));
  // };

  return (
    <>
      <div className="App gap-30">
        <div className="header">
          <div className="title">CHARACTER</div>
          <div className="subtitle">CUSTOMIZATION</div>
          <div className="divider"></div>
        </div>
        <div className="avatar-group">
          <Avatar total={total} avatar={avatar} squares={squares} />
          <PartList
            total={total}
            handleClick={handleClick}
            isSelected={isSelected}
          />
        </div>
      </div>
    </>
  );
}

export default App;
